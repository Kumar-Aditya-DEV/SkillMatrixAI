import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="bg-[#0b1326] overflow-x-hidden min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl border-b border-white/5 flex justify-between items-center h-20 px-12">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-on-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
             </div>
             <span className="text-2xl font-black tracking-tight text-white">SkillPath AI</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-white border-b-2 border-primary pb-1 font-bold text-sm tracking-wide" href="#">Product</a>
            <a className="text-slate-400 hover:text-white transition-opacity font-bold text-sm tracking-wide" href="#">Enteprise</a>
            <a className="text-slate-400 hover:text-white transition-opacity font-bold text-sm tracking-wide" href="#">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-slate-300 hover:text-white font-bold text-sm px-4">Sign In</Link>
          <Link to="/login" className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-8 py-3 rounded-2xl hover:shadow-[0_0_20px_rgba(128,131,255,0.4)] active:scale-95 transition-all">
            Get Started Free
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center px-12 max-w-[1440px] mx-auto overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-20 items-center w-full relative z-10">
            <div className="space-y-10 max-w-2xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mr-3">v2.4 Online</span>
                <span className="text-xs text-slate-300 font-bold">New AI Skill Mapping Engine Now Live</span>
              </div>
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white leading-[1] mb-6">
                Adaptive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Workforce</span> Onboarding.
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">
                The intelligent platform for HR and Trainers to map, curate, and scale digital talent with AI precision.
              </p>
              <div className="flex items-center gap-6">
                <Link to="/login" className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-black text-lg px-10 py-5 rounded-2.5xl hover:shadow-[0_20px_40px_rgba(128,131,255,0.2)] transition-all flex items-center gap-3 active:scale-95">
                  Get Started
                  <span className="material-symbols-outlined font-black">arrow_forward</span>
                </Link>
                <button className="bg-white/5 border border-white/10 text-white font-bold text-lg px-10 py-5 rounded-2.5xl hover:bg-white/10 transition-all active:scale-95">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              {/* Animated UI Preview */}
              <div className="relative w-full aspect-[4/3] bg-[#1a2236] rounded-[2.5rem] p-10 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <header className="flex justify-between items-center bg-[#0b1326]/50 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
                     <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm">hub</span>
                     </div>
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                     </div>
                  </header>

                  <div className="space-y-6">
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_15px_rgba(128,131,255,0.4)]"></div>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Processing Signature</span>
                        <span className="text-sm font-black text-white">82% Match Confidence</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-5 rounded-2xl bg-[#0b1326] border border-white/10">
                        <p className="text-[8px] uppercase tracking-widest font-black text-primary mb-2">Recommended</p>
                        <p className="text-sm font-bold text-white">Advanced React</p>
                     </div>
                     <div className="p-5 rounded-2xl bg-[#0b1326] border border-white/10">
                        <p className="text-[8px] uppercase tracking-widest font-black text-secondary mb-2">Outcome</p>
                        <p className="text-sm font-bold text-white">Senior Frontend</p>
                     </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-4 bg-primary/20 p-4 rounded-2xl backdrop-blur-xl border border-primary/30 animate-bounce">
                   <span className="material-symbols-outlined text-white">auto_awesome</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop Section */}
        <section className="py-40 px-12 max-w-[1440px] mx-auto border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: 'upload_file', title: 'Smart Upload', color: 'text-primary', desc: 'Batch upload resumes. Our AI extracts multi-dimensional skill signatures in seconds.' },
              { icon: 'psychology', title: 'Gap Intelligence', color: 'text-secondary', desc: 'Go beyond keywords. AI maps implicit skills to your specific tech stack requirements.' },
              { icon: 'auto_mode', title: 'Auto-Roadmaps', color: 'text-primary', desc: 'Instantly generate personalized learning paths validated by top technical trainers.' }
            ].map((step, i) => (
              <div key={i} className="group p-10 rounded-[2rem] bg-[#1a2236] border border-white/5 hover:border-primary/20 transition-all duration-500">
                <div className={`mb-10 w-16 h-16 rounded-2xl bg-[#0b1326] flex items-center justify-center ${step.color} shadow-inner group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Final Footer */}
      <footer className="w-full py-20 px-12 border-t border-white/5 bg-[#0b1326]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <span className="text-3xl font-black text-white">SkillPath AI</span>
            <p className="text-slate-500 text-sm font-medium">Orchestrating the transition to the future of digital skills.</p>
          </div>
          <div className="flex gap-12 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
