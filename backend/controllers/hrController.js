const Candidate = require('../models/Candidate');
const Roadmap = require('../models/Roadmap');

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
    const { name, email, assignedTrainer } = req.body;

    const roadmapData = [
      {
        title: "Phase 1",
        tasks: [{ title: "Learn Basics" }, { title: "Practice" }]
      }
    ];

    const candidate = await Candidate.create({
      name,
      email,
      assignedTrainer,
      statusHistory: [{ status: "PENDING" }]
    });

    const roadmap = await Roadmap.create({
      candidateId: candidate._id,
      content: roadmapData,
      aiConfidence: 90
    });

    candidate.roadmapId = roadmap._id;
    await candidate.save();

    res.json({ success: true, candidate });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  getHRDashboard,
  uploadResume
};
