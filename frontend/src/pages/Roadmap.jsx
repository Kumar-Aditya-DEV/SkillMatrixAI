import React from 'react';
import Sidebar from '../components/Sidebar';

function Roadmap() {
  return (
    <div className="antialiased selection:bg-primary selection:text-on-primary-container min-h-screen bg-surface flex flex-col">
      <Sidebar />
      <main className="ml-64 flex-grow flex flex-col lg:flex-row bg-surface">
        {/* Center Roadmap View */}
        <div className="flex-1 p-12 max-w-4xl mx-auto">
          <header className="mb-16">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest rounded-full border border-primary/20">Active Path</span>
              <span className="text-on-surface-variant text-sm">• Updated 2 mins ago</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight text-on-surface mb-6">Backend Architect <span className="text-primary">Mastery</span></h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              Your personalized AI-curated journey to bridge the gap between your current skills and Senior Software Engineer requirements at top-tier tech firms.
            </p>
          </header>

          {/* Roadmap Timeline UI */}
          <div className="relative pl-12 space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-1 timeline-gradient rounded-full">
            </div>

            {/* Step 1: Completed */}
            <div className="relative">
              {/* Dot */}
              <div className="absolute -left-[37px] top-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center ring-8 ring-surface shadow-[0_0_20px_rgba(192,193,255,0.4)]">
                <span className="material-symbols-outlined text-on-primary text-xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 700" }}>check</span>
              </div>
              {/* Card */}
              <div className="bg-surface-container-low p-8 rounded-2xl transition-all duration-300 group cursor-default">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-on-surface/50 line-through">Core Programming Logic</h3>
                    <div className="flex gap-4 mt-2">
                      <span className="text-xs uppercase tracking-widest font-bold text-outline">Beginner</span>
                      <span className="text-xs uppercase tracking-widest font-bold text-outline">12 Hours</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] uppercase font-bold tracking-widest rounded-md">Completed</span>
                </div>
              </div>
            </div>

            {/* Step 2: Current (Highlighted) */}
            <div className="relative">
              {/* Dot */}
              <div className="absolute -left-[37px] top-4 w-10 h-10 rounded-full bg-primary-container flex items-center justify-center ring-8 ring-surface animate-pulse">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              {/* Card */}
              <div className="bg-surface-container-high p-8 rounded-2xl shadow-2xl ring-1 ring-primary/20 transition-all duration-300 hover:scale-[1.01]">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Advanced DSA & Complexity</h3>
                    <div className="flex gap-4 mt-2">
                      <span className="text-xs uppercase tracking-widest font-bold text-secondary">Intermediate</span>
                      <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">25 Hours</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary text-on-primary-container text-[10px] uppercase font-bold tracking-widest rounded-md">Current</span>
                </div>
                {/* Topics List */}
                <div className="space-y-4">
                  {[
                    { id: '01', title: 'Graph Theory & BFS/DFS', icon: 'play_circle' },
                    { id: '02', title: 'Dynamic Programming Patterns', icon: 'lock_open' }
                  ].map((topic) => (
                    <div key={topic.id} className="p-4 bg-surface-container-lowest rounded-xl flex items-center justify-between group cursor-pointer hover:bg-surface-container-highest transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-primary font-mono text-sm">{topic.id}</span>
                        <span className="text-on-surface font-medium">{topic.title}</span>
                      </div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary">{topic.icon}</span>
                    </div>
                  ))}
                  <div className="p-4 border border-outline-variant/15 rounded-xl flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-4">
                      <span className="text-outline font-mono text-sm">03</span>
                      <span className="text-on-surface font-medium">Heaps & Priority Queues</span>
                    </div>
                    <span className="material-symbols-outlined text-outline">lock</span>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(128,131,255,0.3)] active:scale-[0.98]">
                    Resume Learning
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Locked */}
            <div className="relative">
              {/* Dot */}
              <div className="absolute -left-[37px] top-4 w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center ring-8 ring-surface">
                <span className="material-symbols-outlined text-outline text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              </div>
              {/* Card */}
              <div className="bg-surface-container-low/40 p-8 rounded-2xl border border-outline-variant/5 transition-all duration-300 grayscale opacity-60">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-on-surface">System Design & Scalability</h3>
                    <div className="flex gap-4 mt-2">
                      <span className="text-xs uppercase tracking-widest font-bold text-outline">Advanced</span>
                      <span className="text-xs uppercase tracking-widest font-bold text-outline">40 Hours</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-surface-container-highest text-outline text-[10px] uppercase font-bold tracking-widest rounded-md">Locked</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasoning Panel (Right) */}
        <aside className="w-full lg:w-[400px] glass-panel border-l border-outline-variant/15 p-10 overflow-y-auto">
          <div className="sticky top-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface">AI Reasoning Panel</h3>
            </div>
            <div className="space-y-8">
              <section>
                <h4 className="text-xs uppercase tracking-widest font-bold text-secondary mb-4">Why this roadmap?</h4>
                <div className="p-6 bg-surface-container-lowest rounded-2xl border border-secondary/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 blur-3xl rounded-full"></div>
                  <p className="text-sm leading-relaxed text-on-surface-variant relative z-10">
                    <strong className="text-on-surface">DSA recommended</strong> because it was identified as a critical gap in your resume relative to the 14 Senior Backend roles you expressed interest in. 92% of your target companies prioritize Algorithmic efficiency in their first-round technical screens.
                  </p>
                </div>
              </section>
              <section>
                <h4 className="text-xs uppercase tracking-widest font-bold text-primary mb-4">Gap Analysis</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                    <span className="text-sm text-on-surface-variant">Resume Depth</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-1 bg-primary rounded-full"></div>
                      <div className="w-4 h-1 bg-primary rounded-full"></div>
                      <div className="w-4 h-1 bg-surface-container-highest rounded-full"></div>
                      <div className="w-4 h-1 bg-surface-container-highest rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                    <span className="text-sm text-on-surface-variant">Market Demand</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-1 bg-secondary rounded-full"></div>
                      <div className="w-4 h-1 bg-secondary rounded-full"></div>
                      <div className="w-4 h-1 bg-secondary rounded-full"></div>
                      <div className="w-4 h-1 bg-secondary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h4 className="text-xs uppercase tracking-widest font-bold text-outline mb-4">Market Insight</h4>
                <div className="p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-tertiary text-sm">trending_up</span>
                    <span className="text-sm font-semibold text-tertiary">Growth Opportunity</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">
                    Professionals mastering <span className="text-on-surface font-medium">Distributed Systems</span> (Phase 3) see a 40% higher salary ceiling in the current NYC/SF tech markets.
                  </p>
                </div>
              </section>
            </div>
            <div className="mt-12">
              <button className="w-full flex items-center justify-center gap-3 py-4 border border-outline-variant/20 text-on-surface-variant text-sm font-semibold rounded-xl hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-500">refresh</span>
                Re-generate Roadmap
              </button>
            </div>
          </div>
        </aside>
      </main>

      {/* Global Footer */}
      <footer className="ml-64 bg-[#0b1326] w-auto py-12 px-12 mt-auto border-t border-[#424754]/15 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-xs uppercase tracking-widest">
          © 2024 SkillPath AI. Orchestrating the future of onboarding.
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 text-xs uppercase tracking-widest hover:text-[#c0c1ff] transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-500 text-xs uppercase tracking-widest hover:text-[#c0c1ff] transition-colors" href="#">Terms of Service</a>
          <a className="text-slate-500 text-xs uppercase tracking-widest hover:text-[#c0c1ff] transition-colors" href="#">Cookie Settings</a>
          <a className="text-slate-500 text-xs uppercase tracking-widest hover:text-[#c0c1ff] transition-colors" href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default Roadmap;
