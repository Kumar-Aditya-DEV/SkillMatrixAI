import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function UploadAnalysis() {
  const navigate = useNavigate();

  return (
    <div className="antialiased overflow-hidden min-h-screen bg-surface-dim">
      <Sidebar />
      <main className="ml-64 min-h-screen relative overflow-y-auto">
        {/* TopNavBar equivalent integrated into content */}
        <header className="h-20 px-12 flex justify-between items-center sticky top-0 z-40 bg-[#0b1326]/60 backdrop-blur-xl">
          <h2 className="text-2xl font-black tracking-[-0.02em] text-[#c0c1ff]">Upload Assets</h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 px-4 py-2 bg-surface-container-low rounded-full">
              <span className="material-symbols-outlined text-slate-400 text-lg">notifications</span>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZBkfUi58uelmhtSEvnrbV_j6nMXJyy2jyZS73q6uI1oxxeh5ZwSKm2ZOcfrvNBToCFUavrR_sGofFOJiMf22gLf2azOlhi3OAr1uTD8XuCqLFrzot4cIcex3Oagi2qf3fUq-x7ZW5dUFHeB3r3806VtEgmAiH450MS-8pIQjjAoLLwCKwgejXk1lCIyKXuSYRNLXLrUkOXBjI_BRs8etmgKjroMx8d5KjkxQUZ_InvN0AoPQ1WjsH7CJdjuSL_L0mspmFYeDESw" />
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-12 py-12">
          {/* Editorial Header */}
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Step 01 / Data Ingestion</span>
            <h3 className="text-5xl font-extrabold text-on-surface mt-4 tracking-tight leading-tight max-w-2xl">
              Bridge the gap between <span className="text-primary">your skills</span> and their <span className="text-secondary">expectations.</span>
            </h3>
            <p className="text-on-surface-variant text-lg mt-6 leading-relaxed max-w-xl">
              Upload your latest CV and the target job description. Our AI Digital Curator will orchestrate a personalized roadmap for your career pivot.
            </p>
          </div>

          {/* Bento Grid Upload Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Resume Upload Card */}
            <div className="group relative bg-surface-container-low rounded-2xl p-8 transition-all duration-300 hover:bg-surface-container overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">description</span>
                  </div>
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Required</span>
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-2">Upload Resume (PDF/DOC)</h4>
                <p className="text-sm text-on-surface-variant mb-8">Let SkillPath AI parse your experience, certifications, and technical stack.</p>
                
                {/* Dropzone Area */}
                <div className="flex-grow border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center p-12 transition-all hover:border-primary/50 bg-surface-container-lowest/50 group-hover:bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-4xl text-outline mb-4 group-hover:scale-110 transition-transform">upload_file</span>
                  <p className="text-sm text-on-surface font-medium">Drag and drop file here</p>
                  <p className="text-xs text-outline mt-2">or <span className="text-primary cursor-pointer hover:underline">browse files</span></p>
                </div>
                
                {/* Preview Element (Mock) */}
                <div className="mt-6 flex items-center gap-4 p-4 rounded-xl bg-surface-container-highest/40 border border-outline-variant/10">
                  <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">picture_as_pdf</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-on-surface">Alex_Chen_CV_2024.pdf</p>
                    <p className="text-[10px] text-outline uppercase">2.4 MB • Ready to analyze</p>
                  </div>
                  <span className="material-symbols-outlined text-error text-sm cursor-pointer hover:text-error">close</span>
                </div>
              </div>
            </div>

            {/* Job Description Upload Card */}
            <div className="group relative bg-surface-container-low rounded-2xl p-8 transition-all duration-300 hover:bg-surface-container overflow-hidden">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all"></div>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-3xl">work</span>
                  </div>
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Required</span>
                </div>
                <h4 className="text-xl font-bold text-on-surface mb-2">Upload Job Description</h4>
                <p className="text-sm text-on-surface-variant mb-8">Paste the text or upload the PDF of the role you're targeting.</p>
                
                {/* Dropzone Area */}
                <div className="flex-grow border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center p-12 transition-all hover:border-secondary/50 bg-surface-container-lowest/50 group-hover:bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-4xl text-outline mb-4 group-hover:scale-110 transition-transform">post_add</span>
                  <p className="text-sm text-on-surface font-medium">Click to paste or upload</p>
                  <p className="text-xs text-outline mt-2">Maximum 5,000 characters</p>
                </div>
                
                {/* Empty State Placeholder */}
                <div className="mt-6 flex items-center justify-center py-4 rounded-xl border border-outline-variant/10 border-dashed">
                  <p className="text-[10px] text-outline uppercase tracking-widest italic">Waiting for input...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="mt-12 flex flex-col items-center">
            <button 
              onClick={() => navigate('/analysis')}
              className="px-12 py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black text-lg tracking-tight shadow-[0_0_40px_rgba(192,193,255,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
            >
              Analyze Now
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </button>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border border-background bg-slate-700"></div>
                <div className="w-6 h-6 rounded-full border border-background bg-slate-600"></div>
                <div className="w-6 h-6 rounded-full border border-background bg-slate-500"></div>
              </div>
              <p className="text-[11px] text-outline font-medium uppercase tracking-tighter">Trusted by 12,000+ career shifters this month</p>
            </div>
          </div>

          {/* Skill Tags Section */}
          <div className="mt-20 border-t border-outline-variant/10 pt-12">
            <h5 className="text-xs font-bold text-outline uppercase tracking-widest mb-6 text-center">AI Predicted Skill Nodes</h5>
            <div className="flex flex-wrap justify-center gap-3">
              {['Cloud Architecture', 'System Design', 'Neural Networks', 'Strategic Leadership', 'Data Orchestration'].map((skill) => (
                <div key={skill} className="px-4 py-2 rounded-full border border-outline-variant/15 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider hover:border-primary transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Component */}
        <footer className="w-full py-12 px-12 mt-auto border-t border-[#424754]/15 bg-[#0b1326] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500">
            © 2024 SkillPath AI. Orchestrating the future of onboarding.
          </p>
          <div className="flex gap-8">
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Terms of Service</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Cookie Settings</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Contact Us</a>
          </div>
        </footer>
      </main>

      {/* Background Decorative Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
    </div>
  );
}

export default UploadAnalysis;
