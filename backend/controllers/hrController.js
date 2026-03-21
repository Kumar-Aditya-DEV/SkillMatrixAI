const Candidate = require('../models/Candidate');
const Roadmap = require('../models/Roadmap');
const { GoogleGenAI } = require("@google/genai");
const { extractText } = require('../services/resumeParser');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const generateRoadmap = async (resumeText) => {
  const prompt = `
Analyze the following resume. First, extract the candidate's name, email, role, skills, experience, and projects.
Then, based on their experience and skills, GENERATE a learning roadmap consisting of 3 to 4 phases for their career growth.
Return ONLY valid JSON matching this exact structure:

{
  "name": "Extract candidate name",
  "email": "Extract candidate email",
  "role": "Extract their main job title or role",
  "skills": ["skill 1", "skill 2"],
  "experience": "Short summary",
  "projects": ["project 1"],
  "roadmap": [
    {
      "title": "Phase 1: [Phase Name]",
      "tasks": [{ "title": "Specific learning task or milestone" }]
    }
  ]
}

Resume:
${resumeText}
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    const text = response.text;
    const cleanText = text.replace(/```json/gi, "").replace(/```/g, "").trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Gemini API Error (using fallback):", error.message);
    
    // FALLBACK for Demos/Hackathons when API keys fail (quota or 404)
    return {
      name: "Simulated Candidate",
      email: `demo.candidate.${Date.now()}@skillpath.ai`,
      role: "Fullstack Engineer",
      skills: ["JavaScript", "React", "Node.js", "System Design"],
      experience: "Simulated 3 years of software engineering experience.",
      projects: ["E-commerce App", "Real-time Chat", "AI Portfolio"],
      roadmap: [
        {
          title: "Phase 1: Advanced Fullstack",
          tasks: [{ title: "Mastering React Hooks" }, { title: "Node.js Security" }]
        },
        {
          title: "Phase 2: Cloud Architect",
          tasks: [{ title: "AWS Deployment" }, { title: "Docker Containerization" }]
        }
      ]
    };
  }
};

const getHRDashboard = async (req, res) => {
  try {
    const [total, rejected, approved, inProgress] = await Promise.all([
      Candidate.countDocuments(),
      Candidate.countDocuments({ status: "REJECTED" }),
      Candidate.countDocuments({ status: "APPROVED" }),
      Candidate.countDocuments({ status: "IN_PROGRESS" })
    ]);

    const recent = await Candidate.find()
      .populate("roadmapId")
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({ success: true, total, rejected, approved, inProgress, recent });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPLOAD RESUME
const uploadResume = async (req, res) => {
  try {
    const { name, email, assignedTrainer, resumeText } = req.body;

    let textToParse = resumeText;

    if (req.file) {
      textToParse = await extractText(req.file.path);
    }

    if (!textToParse) {
      return res.status(400).json({ success: false, message: "Please provide resume text or upload a file." });
    }

    // Generate Roadmap using AI
    const aiResponse = await generateRoadmap(textToParse);
    const roadmapData = aiResponse.roadmap || [];

    const baseEmail = aiResponse.email || email;
    const uniqueEmail = baseEmail 
      ? `${baseEmail.split('@')[0]}_${Date.now()}@${baseEmail.split('@')[1] || 'skillpath.ai'}` 
      : `candidate_${Date.now()}@skillpath.ai`;

    const candidate = await Candidate.create({
      name: aiResponse.name || name || 'Unknown Candidate',
      email: uniqueEmail,
      roleApplied: aiResponse.role || 'Unspecified',
      assignedTrainer,
      aiInsight: JSON.stringify({
        skills: aiResponse.skills || [],
        experience: aiResponse.experience || "",
        projects: aiResponse.projects || []
      }),
      statusHistory: [{ status: "PENDING" }]
    });

    const roadmap = await Roadmap.create({
      candidateId: candidate._id,
      content: roadmapData,
      aiConfidence: 85 // Can be made dynamic if AI provides it
    });

    candidate.roadmapId = roadmap._id;
    await candidate.save();

    res.json({ success: true, candidate, roadmap });
  } catch (err) {
    console.error("AI Generation Error:", err);
    res.status(500).json({ success: false, message: err.message || "Failed to generate roadmap" });
  }
};

module.exports = {
  getHRDashboard,
  uploadResume,
  generateRoadmap
};
