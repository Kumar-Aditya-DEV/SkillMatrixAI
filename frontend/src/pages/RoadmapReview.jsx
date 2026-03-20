import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const roadmapSteps = [
  {
    icon: 'architecture',
    iconColor: 'text-primary',
    iconFill: true,
    title: 'Architectural Patterns',
    badge: 'Priority 1',
    badgeClass: 'bg-[#0b1326] text-primary border border-primary/20',
    description: 'Focus on CQRS and Event Sourcing patterns within Go environments. Deep dive into DDD (Domain Driven Design).',
    meta: [
      { icon: 'schedule', text: '2 Weeks' },
      { icon: 'menu_book', text: '4 Modules' },
    ],
    mentors: null,
  },
  {
    icon: 'database',
    iconColor: 'text-secondary',
    iconFill: false,
    title: 'Distributed State',
    badge: 'AI Suggested',
    badgeClass: 'bg-secondary/10 text-secondary border border-secondary/20',
    description: 'Mastering Redis cache invalidation strategies and Consistency levels in NoSQL distributed environments.',
    meta: null,
    mentors: true,
  },
  {
    icon: 'cloud_done',
    iconColor: 'text-primary',
    iconFill: false,
    title: 'Platform Engineering',
    badge: 'Optional',
    badgeClass: 'bg-white/5 text-slate-500 border border-white/10',
    description: 'Infrastructure as Code (Terraform) and Kubernetes operator development for automated scaling.',
    meta: null,
    mentors: null,
  },
];

function RoadmapReview() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [notes, setNotes] = useState('');

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-0px)]">
      {/* Left Panel — Candidate Summary */}
      <section className="w-full lg:w-[40%] p-10 bg-[#131b2e] border-r border-white/5 overflow-y-auto">
        <header className="mb-12">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary font-black text-2xl shadow-2xl">
              AR
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tight leading-tight">Alex Rivers</h1>
              <p className="text-primary font-bold text-sm uppercase tracking-widest">Senior Backend Path</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2.5xl bg-[#1a2236] border border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Experience</p>
              <p className="text-xl font-bold text-white">6.5 Years</p>
            </div>
            <div className="p-5 rounded-2.5xl bg-[#1a2236] border border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Current Role</p>
              <p className="text-xl font-bold text-white">Mid-Level Dev</p>
            </div>
          </div>
        </header>

        <div className="space-y-10">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-5">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {['System Design', 'Distributed Systems', 'Go / Rust', 'Kafka', 'GraphQL'].map((skill) => (
                <span key={skill} className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                  {skill}
                </span>
              ))}
              <div className="px-3.5 py-2 rounded-xl bg-secondary/10 border border-secondary/20 text-xs font-bold text-secondary flex items-center gap-2 animate-pulse">
                <span className="material-symbols-outlined text-xs">auto_awesome</span>
                Vector Databases
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-5">Work Experience</h3>
            <div className="space-y-8">
              {[
                { company: 'FinTech Innovations', role: 'Mid Software Engineer • 2021—Present', desc: 'Led the migration of legacy payment gateways to a microservices architecture using Go.', active: true },
                { company: 'DataStream Systems', role: 'Junior Developer • 2018—2021', desc: 'Implemented real-time data processing pipelines for Fortune 500 clients.', active: false },
              ].map((exp) => (
                <div key={exp.company} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-0 before:w-px before:bg-white/10">
                  <div className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full ${exp.active ? 'bg-primary shadow-[0_0_10px_rgba(128,131,255,0.8)]' : 'bg-white/20'}`}></div>
                  <p className="text-sm font-bold text-white mb-1">{exp.company}</p>
                  <p className="text-[11px] font-bold text-slate-500 mb-3 uppercase tracking-wider">{exp.role}</p>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
             <div className="flex items-center gap-3 mb-3">
               <span className="material-symbols-outlined text-primary">terminal</span>
               <h4 className="text-sm font-bold text-white">Open Source Impact</h4>
             </div>
             <p className="text-xs text-slate-400 leading-relaxed font-medium">
               High-performance async request orchestrator with 2.5k+ GitHub stars. Significant contribution to NexusEngine.
             </p>
          </div>
        </div>
      </section>

      {/* Right Panel — Generated Roadmap */}
      <section className="w-full lg:w-[60%] p-10 lg:p-16 flex flex-col bg-[#0b1326] overflow-y-auto">
        <div className="max-w-3xl mx-auto w-full">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-3">Curated AI Pathway</p>
              <h2 className="text-5xl font-black text-white tracking-tight">Backend Excellence</h2>
            </div>
            <div className="text-right">
              <span className="text-5xl font-black text-white/10 italic">03</span>
              <span className="text-[10px] text-slate-500 font-black ml-2 uppercase tracking-widest">Phases</span>
            </div>
          </div>

          <div className="space-y-12 relative mb-20">
            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-white/5"></div>
            {roadmapSteps.map((step) => (
              <div key={step.title} className="relative pl-20">
                <div className="absolute left-0 top-0 w-14 h-14 rounded-2.5xl bg-[#1a2236] border border-white/10 flex items-center justify-center z-10 shadow-2xl">
                  <span className={`material-symbols-outlined ${step.iconColor} text-2xl`} style={step.iconFill ? { fontVariationSettings: "'FILL' 1" } : {}}>
                    {step.icon}
                  </span>
                </div>

                <div className="p-8 rounded-[2rem] bg-[#1a2236] hover:bg-[#2d3449]/40 border border-white/5 transition-all group shadow-xl">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{step.title}</h4>
                    <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest ${step.badgeClass}`}>
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">{step.description}</p>
                  
                  {step.meta && (
                    <div className="flex gap-6">
                      {step.meta.map((m) => (
                        <div key={m.text} className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          <span className="material-symbols-outlined text-sm">{m.icon}</span>
                          {m.text}
                        </div>
                      ))}
                    </div>
                  )}

                  {step.mentors && (
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-6">
                      <div className="flex -space-x-2">
                        {[1, 2].map((i) => (
                          <div key={i} className="w-7 h-7 rounded-full bg-slate-800 border-2 border-[#1a2236] flex items-center justify-center text-[8px] font-bold text-slate-400 uppercase">
                             M{i}
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Recommended by 4 Senior Mentors</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <section className="pt-12 border-t border-white/5">
            <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-4 ml-1">
              Trainer Notes & Adjustments
            </label>
            <textarea
              className="w-full bg-[#1a2236] border border-white/10 rounded-[2rem] focus:ring-2 focus:ring-primary/20 text-white text-sm p-6 placeholder-slate-600 transition-all mb-10 outline-none resize-none"
              placeholder="Add specific instructions for the candidate..."
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="flex items-center justify-end gap-4">
              <button className="px-8 py-4 rounded-2xl text-slate-400 font-bold text-sm bg-white/5 hover:bg-white/10 transition-all active:scale-95">
                Reject & Redesign
              </button>
              <button
                onClick={() => navigate('/trainer/dashboard')}
                className="px-12 py-4 rounded-2xl text-on-primary font-bold text-sm bg-gradient-to-r from-primary to-primary-container shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95"
              >
                Approve Roadmap
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default RoadmapReview;
