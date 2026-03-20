import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function AnalysisResults() {
  const navigate = useNavigate();

  return (
    <div className="antialiased min-h-screen bg-surface">
      <Sidebar />
      <main className="ml-64 min-h-screen relative flex flex-col">
        {/* Header content ... */}
        <header className="px-12 pt-12 pb-12 flex justify-between items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-2 block">Curation Intelligence</span>
            <h1 className="text-5xl font-black tracking-tight text-on-surface">Analysis <span className="text-primary">Results</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Generated On</p>
              <p className="text-sm text-on-surface-variant">October 24, 2024</p>
            </div>
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlHkQFUIaCiylnGuWHJQriYPgIqaP4-sakSOxVqOLoRnjUd0k0aQvrGAdkUAP2J107afc4rLUdpHnn_bX3mHGCNNI4CJ-JNzydFgRoeGL9ydhzmDsQGk1VCJ5Ahav2yaVeEqmYMyNmdNU1eWNCK-qU_1xVssHxNbTbzyrTvdWLzR76Sk1DsxVbllsi9PEpkwoiLgrXtTmT4csvqvY6Bs2804njFyep5zLWvFEDFlxIKu3lVKcen8nIiDpD-E1wvV56oTG9qviseQ" />
            </div>
          </div>
        </header>

        {/* Bento Grid Layout ... */}
        <div className="px-12 pb-12 grid grid-cols-12 gap-6 flex-grow">
          {/* Skill Gap Score Card ... */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_20px_50px_rgba(7,0,108,0.1)] border border-outline-variant/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full -ml-12 -mb-12 blur-2xl"></div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-8">Role Compatibility</h3>
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
                <circle className="text-primary drop-shadow-[0_0_8px_rgba(192,193,255,0.4)]" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="553" strokeDashoffset="193" strokeLinecap="round" strokeWidth="10"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-black tracking-tighter text-on-surface">65<span className="text-2xl text-primary">%</span></span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Match</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-[200px]">
                You are <span className="text-primary font-bold">35%</span> away from the ideal Senior Fullstack profile.
              </p>
            </div>
          </div>

          {/* Extracted Skills ... */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-2xl p-8 shadow-sm border border-outline-variant/5">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-on-surface">Extracted Skills</h2>
                  <p className="text-xs text-slate-500">Identified from your Resume.pdf</p>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">12 Skills Found</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Python', 'React', 'SQL', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Git', 'Agile', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full border border-outline-variant/15 text-xs font-medium text-on-surface-variant hover:border-primary/50 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Required Skills ... */}
          <div className="col-span-12 lg:col-span-6 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">work</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-on-surface">Required Skills</h2>
                <p className="text-xs text-slate-500">Target Role: Senior Fullstack Engineer</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Python', 'React', 'SQL', 'AWS'].map((skill) => (
                <div key={skill} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest border border-primary/20">
                  <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-xs font-medium text-on-surface">{skill}</span>
                </div>
              ))}
              {['Kubernetes', 'Redis'].map((skill) => (
                <div key={skill} className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/15">
                  <span className="material-symbols-outlined text-xs text-slate-600">radio_button_unchecked</span>
                  <span className="text-xs font-medium text-on-surface-variant">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Gaps ... */}
          <div className="col-span-12 lg:col-span-6 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-error-container/20 flex items-center justify-center text-error">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-on-surface">Critical Skill Gaps</h2>
                <p className="text-xs text-slate-500">Missing from your current profile</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Kubernetes', impact: 'High Impact' },
                { name: 'Redis / Caching', impact: 'Medium Impact' },
                { name: 'System Design (Scale)', impact: 'Critical' }
              ].map((gap) => (
                <div key={gap.name} className="flex items-center justify-between p-4 bg-error-container/10 rounded-xl group hover:bg-error-container/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-error font-bold text-sm">{gap.name}</span>
                    <span className="text-[10px] uppercase font-black text-error/60 tracking-widest bg-error/10 px-2 py-0.5 rounded">{gap.impact}</span>
                  </div>
                  <span className="material-symbols-outlined text-error opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight Section with navigate ... */}
          <div className="col-span-12 bg-surface-container-high rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
            <div className="relative w-full md:w-1/3">
              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/10 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">AI Curator Insight</span>
                </div>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  "Based on your <strong>Python</strong> expertise, you could bridge the <strong>Kubernetes</strong> gap by focusing on containerized microservices deployment. I've curated a 4-week roadmap to get you to 85% compatibility."
                </p>
              </div>
            </div>
            <div className="relative flex-1">
              <h3 className="text-xl font-bold mb-4">Recommended Next Steps</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-highest transition-colors cursor-pointer">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">1</div>
                  <div>
                    <h4 className="text-sm font-bold">Complete CKA Certification Prep</h4>
                    <p className="text-xs text-slate-500 mt-1">Foundational for the Senior Cloud role.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-highest transition-colors cursor-pointer">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">2</div>
                  <div>
                    <h4 className="text-sm font-bold">Optimizing Redis for Python Apps</h4>
                    <p className="text-xs text-slate-500 mt-1">Technical deep-dive into caching.</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigate('/roadmap')}
                className="mt-6 px-8 py-3 bg-secondary text-on-secondary font-bold rounded-xl text-sm hover:scale-[1.02] transition-transform active:scale-95"
              >
                Start Curated Roadmap
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-12 px-12 mt-auto border-t border-[#424754]/15 bg-[#0b1326] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500">© 2024 SkillPath AI. Orchestrating the future of onboarding.</p>
          <div className="flex gap-8">
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Terms of Service</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Cookie Settings</a>
            <a className="font-['Inter'] text-xs uppercase tracking-widest text-slate-500 hover:text-[#c0c1ff] transition-colors" href="#">Contact Us</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default AnalysisResults;
