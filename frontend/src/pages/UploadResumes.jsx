import React from 'react';
import { useNavigate } from 'react-router-dom';

function UploadResumes() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-primary selection:text-on-primary flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* TopNavBar */}
      <header className="bg-[#0b1326]/60 backdrop-blur-xl flex justify-between items-center w-full px-8 h-16 fixed top-0 left-0 z-40 shadow-[0_20px_50px_rgba(7,0,108,0.15)]">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tight text-[#c0c1ff]">SkillPath AI</span>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-slate-400 hover:text-slate-200 transition-colors text-sm" href="#">Workspaces</a>
            <a className="text-slate-400 hover:text-slate-200 transition-colors text-sm" href="#">Insights</a>
            <a className="text-slate-400 hover:text-slate-200 transition-colors text-sm" href="#">Archive</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:bg-[#2d3449]/50 transition-all duration-300 ease-in-out rounded-lg active:scale-95">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-slate-400 hover:bg-[#2d3449]/50 transition-all duration-300 ease-in-out rounded-lg active:scale-95">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/15">
            <img
              className="w-full h-full object-cover"
              alt="HR Manager Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyqkOZwJkcyAKaMTjqdlnlAvPc_C7m7eeS3_S06UvSpro1x24TWm9R_UbZR_14rYy8JW2WKeVPr1x-P36Q_gVi37qXPWrO5D7jMLdrnkfP51fDYpGJyBnrYdJb-koE3CjReRU5txxxm4cheJRJeeUa_RrtPKL_Ihglz44t2rGMII4lsIiVRtcvONhKE7Mt4SSUz8tp3tCbNgpZJONsyb8_8jxYfQPh2yVglYu8XMdwE2rSSCYLlzpMEIkCfHei6WAuRUIdJZ1uAw"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center w-full flex-grow">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-2xl">
          <h1 className="text-5xl font-black tracking-tight mb-4 text-on-surface leading-tight">
            Fuel your talent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ecosystem</span>.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Upload candidate resumes and let our AI Curator extract multi-dimensional skill signatures to build personalized learning paths.
          </p>
        </div>

        {/* Central Upload Hub */}
        <div className="w-full max-w-3xl grid grid-cols-1 gap-8">
          {/* Drag & Drop Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-surface-container-low rounded-2xl p-12 border border-outline-variant/10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all duration-500">
              <div className="mb-6 h-20 w-20 bg-surface-container-highest rounded-full flex items-center justify-center border border-outline-variant/15 shadow-2xl">
                <span className="material-symbols-outlined text-4xl text-primary">upload_file</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-2">Drop resumes here</h3>
              <p className="text-on-surface-variant mb-8 max-w-xs">PDF, DOCX, or JSON formats supported. Max 50 files per batch.</p>
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(192,193,255,0.4)] transition-all duration-300 active:scale-95">
                Browse Files
              </button>
            </div>
          </div>

          {/* Status Indicator Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Uploading */}
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold tracking-widest text-outline uppercase">Uploading</span>
                <span className="text-xs font-medium text-primary">12 / 24</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-primary rounded-full shadow-[0_0_8px_rgba(192,193,255,0.8)]"></div>
              </div>
            </div>
            {/* Processing */}
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold tracking-widest text-outline uppercase">Processing</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-secondary">AI Analyzing</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-secondary rounded-full"></div>
              </div>
            </div>
            {/* Completed */}
            <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold tracking-widest text-outline uppercase">Completed</span>
                <span className="material-symbols-outlined text-sm text-green-400">check_circle</span>
              </div>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container-highest overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Candidate Avatar 1"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyqkOZwJkcyAKaMTjqdlnlAvPc_C7m7eeS3_S06UvSpro1x24TWm9R_UbZR_14rYy8JW2WKeVPr1x-P36Q_gVi37qXPWrO5D7jMLdrnkfP51fDYpGJyBnrYdJb-koE3CjReRU5txxxm4cheJRJeeUa_RrtPKL_Ihglz44t2rGMII4lsIiVRtcvONhKE7Mt4SSUz8tp3tCbNgpZJONsyb8_8jxYfQPh2yVglYu8XMdwE2rSSCYLlzpMEIkCfHei6WAuRUIdJZ1uAw"
                  />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container-highest overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Candidate Avatar 2"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCATwGO1qCrKLb-bfVloNMvy0J0wJFDIEuvgjSF9g0aqXDk4N6sKXGBdITsOz1D0QcRKUosYHzrYprpUAbNB2gXsdiOlBwIXFuTkebIWyz4ZhQts3_rPdXn3CbbmRAHP8NVzoOvok_JomvtAj2MfuLPOoupN5qp0s-7jH8yH7AmhZn84CGUgPc2NIEkaqQdHxSQXaS_rmbu9kinRslebkpzvzpYx2vWg65CDIPulrAjm_DgbVQSO7UKplHEBQMpagAKhu_3nT-GPg"
                  />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                  +4
                </div>
              </div>
            </div>
          </div>

          {/* Bento Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">psychology</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                AI Skill Extraction
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Our proprietary NLP engine parses implicit skills, seniority levels, and cultural markers from unstructured text to map candidates against your tech stack in seconds.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">timeline</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">hub</span>
                Semantic Clustering
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Beyond keywords. We analyze project impact and career trajectories to identify 'hidden' high-potentials who might have non-traditional backgrounds.
              </p>
            </div>
          </div>

          {/* Primary Action */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <button
              onClick={() => navigate('/hr-dashboard')}
              className="group relative px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed text-lg font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 flex items-center gap-3"
            >
              Generate Learning Roadmap
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <p className="text-xs font-bold tracking-widest text-outline uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">lock</span>
              Secure AI Processing Enabled
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-outline-variant/5 bg-surface-container-lowest/30 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-500">The Kinetic Path</span>
            <span className="text-slate-700">/</span>
            <span className="text-xs text-slate-600 tracking-tight">AI Orchestrator v2.4</span>
          </div>
          <div className="flex gap-8">
            <a className="text-xs font-bold tracking-widest text-outline hover:text-primary transition-colors uppercase" href="#">Documentation</a>
            <a className="text-xs font-bold tracking-widest text-outline hover:text-primary transition-colors uppercase" href="#">Privacy Protocol</a>
            <a className="text-xs font-bold tracking-widest text-outline hover:text-primary transition-colors uppercase" href="#">Support Hub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UploadResumes;
