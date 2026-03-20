import React from 'react';
/*
import { useNavigate } from 'react-router-dom';

function AnalysisResults() {
  const navigate = useNavigate();

  return (
    <div className="p-10 space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-black mb-3 block">Curation Intelligence</span>
          <h1 className="text-6xl font-black tracking-tight text-white leading-none">
            Analysis <span className="text-primary">Results</span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg font-medium max-w-2xl leading-relaxed">
            AI-driven multi-dimensional skill gap analysis and role compatibility mapping for active workspaces.
          </p>
        </div>
        <div className="flex items-center gap-6 bg-[#1a2236] p-4 rounded-3xl border border-white/5">
          <div className="text-right">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-1">Generated On</p>
            <p className="text-xs text-white font-bold tracking-tight">October 24, 2024</p>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold shadow-lg">
             AI
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 bg-[#1a2236] rounded-[2.5rem] p-10 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl border border-white/5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -ml-16 -mb-16 blur-3xl group-hover:bg-secondary/10 transition-colors"></div>
          
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-10">Compatibility Score</h3>
          
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-white/5" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-primary drop-shadow-[0_0_15px_rgba(128,131,255,0.4)]" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="553" strokeDashoffset="193" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-7xl font-black tracking-tighter text-white">65<span className="text-3xl text-primary">%</span></span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Match</span>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm leading-relaxed max-w-[220px] font-medium">
              This candidate is <span className="text-primary font-black">35%</span> away from the ideal Senior Fullstack profile.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 bg-[#1a2236] rounded-[2.5rem] p-10 shadow-2xl border border-white/5">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0b1326] flex items-center justify-center text-primary shadow-inner border border-white/5">
                <span className="material-symbols-outlined text-2xl">description</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">Extracted Skills</h2>
                <p className="text-xs text-slate-500 font-medium">Identified from candidate artifacts</p>
              </div>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest border border-white/10">12 Skills Found</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Python', 'React', 'SQL', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Git', 'Agile', 'Tailwind CSS', 'Redux', 'MongoDB'].map((skill) => (
              <span key={skill} className="px-5 py-3 rounded-2xl bg-[#0b1326]/50 border border-white/5 text-sm font-bold text-slate-300 hover:border-primary/40 hover:text-primary transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 bg-[#1a2236] rounded-[2.5rem] p-10 border border-white/5 shadow-2xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
              <span className="material-symbols-outlined text-2xl">work</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Required Profile</h2>
              <p className="text-xs text-slate-500 font-medium">Target: Senior Fullstack Engineer</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Python', 'React', 'SQL', 'AWS'].map((skill) => (
              <div key={skill} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-primary/10 border border-primary/20">
                <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">{skill}</span>
              </div>
            ))}
            {['Kubernetes', 'Redis', 'System Design'].map((skill) => (
              <div key={skill} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10">
                <span className="material-symbols-outlined text-sm text-slate-600">radio_button_unchecked</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 bg-[#1a2236] rounded-[2.5rem] p-10 border border-white/5 shadow-2xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center text-error border border-error/20">
              <span className="material-symbols-outlined text-2xl">warning</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Critical Skill Gaps</h2>
              <p className="text-xs text-slate-500 font-medium">Identified missing competencies</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Kubernetes Orchestration', impact: 'High Impact' },
              { name: 'Distributed Caching (Redis)', impact: 'Medium Impact' },
              { name: 'Scalable System Design', impact: 'Critical' }
            ].map((gap) => (
              <div key={gap.name} className="flex items-center justify-between p-5 bg-[#0b1326]/50 rounded-2xl border border-white/5 group hover:border-error/30 transition-all">
                <div className="flex items-center gap-4">
                  <span className="text-white font-bold text-sm tracking-tight">{gap.name}</span>
                  <span className="text-[9px] uppercase font-black text-error border border-error/20 px-2 py-0.5 rounded-lg bg-error/5 tracking-[0.1em]">{gap.impact}</span>
                </div>
                <span className="material-symbols-outlined text-error opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-0">trending_up</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[3rem] p-1 bg-[#1a2236]">
          <div className="bg-[#1a2236] rounded-[2.9rem] p-10 flex flex-col lg:flex-row items-center gap-12 border border-white/5">
            <div className="w-full lg:w-1/3">
              <div className="p-8 rounded-[2rem] bg-[#0b1326]/50 border border-white/10 shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">auto_awesome</span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">AI Curator Insight</span>
                </div>
                <p className="text-md leading-relaxed text-slate-300 font-medium">
                  "Candidate shows exceptional <strong>Frontend</strong> depth. Based on their trajectory, they can bridge the <strong>Kubernetes</strong> gap by focusing on containerized microservices. Transition feasibility: 85%."
                </p>
              </div>
            </div>
            <div className="flex-1 w-full text-center lg:text-left">
              <h3 className="text-3xl font-black text-white tracking-tight mb-8">Ready to Bridge the Gap?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-xs">01</div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">CKA Certification Prep</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Foundational training for the Senior Cloud Engineer role.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all text-left">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-black text-xs">02</div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Distributed Caching Deep-dive</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Optimizing Redis for high-scale Python applications.</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigate('/trainer/review/99201')}
                className="px-12 py-5 bg-gradient-to-r from-secondary to-secondary-container text-on-secondary font-black rounded-2.5xl text-lg shadow-2xl shadow-secondary/20 hover:shadow-secondary/40 transition-all active:scale-95"
              >
                Start AI Roadmap Generation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/

function AnalysisResults() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold text-slate-500">Enterprise Analysis is currently disabled.</h2>
    </div>
  );
}

export default AnalysisResults;
