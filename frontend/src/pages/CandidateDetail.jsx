import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const roadmapSteps = [
  { id: 1, icon: 'done', label: 'System Architectures', sub: 'Completed · Oct 12', state: 'done' },
  { id: 2, icon: 'play_arrow', label: 'Advanced React Systems', sub: 'Ongoing · 65% Complete', state: 'active', progress: 65 },
  { id: 3, icon: 'lock', label: 'Vector Data & Search', sub: 'Pending', state: 'locked' },
  { id: 4, icon: 'lock', label: 'AI Orchestration Deployment', sub: 'Pending', state: 'locked' },
];

const insights = [
  { id: 1, name: 'Marcus Thorne', time: '2 Days Ago', text: "Excellent performance on the technical screen. Her architectural logic is sound, but we should push her towards more complex data state management in the next sprint.", avatar: null },
  { id: 2, name: 'Sarah Jenkins', time: '5 Days Ago', text: "Candidate demonstrated strong leadership during the group whiteboard session. Soft skills are a major plus here.", avatar: null },
];

function CandidateDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [feedback, setFeedback] = useState('');

  return (
    <div className="p-10 space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] uppercase tracking-[0.2em] font-black text-primary">
              Active Candidate
            </span>
            <span className="text-slate-500 font-bold text-xs">ID: SP-99201</span>
          </div>
          <h1 className="text-white font-black tracking-tight leading-none mb-4" style={{ fontSize: '4.5rem' }}>
            Elena Rostova
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">
            Senior Frontend Engineer transitioning into Full-Stack AI Orchestration. Currently in{' '}
            <span className="text-primary italic">Advanced React Systems</span> module.
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0">
          <button className="px-8 py-4 rounded-2xl bg-[#1a2236] text-white font-bold hover:bg-[#2d3449] transition-all active:scale-95 text-sm border border-white/5">
            Download CV
          </button>
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-black shadow-2xl shadow-primary/20 hover:brightness-110 transition-all active:scale-95 text-sm">
            Schedule Review
          </button>
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Profile Summary */}
        <section className="lg:col-span-8 bg-[#1a2236] border border-white/5 rounded-[2.5rem] p-10 space-y-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-3">
                <span className="material-symbols-outlined text-xs">analytics</span>
                Resume Highlights
              </h3>
              <ul className="space-y-4">
                {[
                  '6+ years experience in large-scale React architectures.',
                  'Led the modernization of legacy financial dashboards.',
                  'Consistent top 5% performance in technical assessments.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed font-medium">
                    <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">verified</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-3">
                <span className="material-symbols-outlined text-xs">psychology</span>
                Top Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'React / Next.js', 'Node.js', 'GraphQL'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-xl bg-[#0b1326] border border-white/5 text-xs font-bold text-slate-400">
                    {skill}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-xs font-bold text-primary animate-pulse flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  LLM Integration
                </span>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-xs">insights</span>
              AI Gap Analysis
            </h3>
            <div className="p-8 rounded-3xl bg-[#0b1326]/50 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <span className="material-symbols-outlined text-7xl text-white">neurology</span>
              </div>
              <p className="text-slate-200 text-lg leading-relaxed italic mb-6 font-medium relative z-10">
                "Elena shows high technical proficiency in core engineering but requires exposure to vector databases and prompt engineering for full Full-Stack AI readiness."
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#1a2236] flex items-center justify-center text-[10px] font-bold text-slate-500">M{i}</div>
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">Suggested by 2 Senior Trainers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Roadmap */}
        <section className="lg:col-span-4 bg-[#1a2236] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-10 flex items-center gap-3">
            <span className="material-symbols-outlined text-xs">route</span>
            Learning Roadmap
          </h3>
          <div className="relative space-y-10">
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-white/5"></div>
            {roadmapSteps.map((step) => (
              <div key={step.id} className="relative flex gap-6">
                <div
                  className={`z-10 w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 border ${
                    step.state === 'done'
                      ? 'bg-primary text-on-primary border-primary shadow-[0_0_20px_rgba(128,131,255,0.3)]'
                      : step.state === 'active'
                      ? 'bg-[#0b1326] border-primary text-primary shadow-[0_0_20px_rgba(128,131,255,0.1)]'
                      : 'bg-[#0b1326] border-white/5 text-slate-600'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">{step.icon}</span>
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${step.state === 'active' ? 'text-primary' : step.state === 'done' ? 'text-white' : 'text-slate-500'}`}>
                    {step.label}
                  </h4>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${step.state === 'active' ? 'text-slate-400' : 'text-slate-600'}`}>{step.sub}</p>
                  {step.progress && (
                    <div className="mt-4 w-full max-w-[120px] h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: `${step.progress}%` }}></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-12 py-4 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white hover:bg-white/[0.02] transition-all">
            View Full Curriculum
          </button>
        </section>

        {/* Feedback Section */}
        <section className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a2236] border border-white/5 rounded-3xl p-8 flex flex-col">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">Add Trainer Insight</h3>
            <textarea
              className="w-full bg-[#0b1326] border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/20 text-white text-sm p-6 placeholder-slate-600 transition-all outline-none resize-none flex-grow"
              placeholder="What's your assessment of Elena's progress?"
              rows={5}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button className="w-full mt-6 py-4 bg-primary/10 border border-primary/20 text-primary rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary/20 transition-all active:scale-95">
              Submit Assessment
            </button>
          </div>

          <div className="bg-[#1a2236] border border-white/5 rounded-3xl p-8 lg:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8">Recent History</h3>
            <div className="space-y-6">
              {insights.map((insight) => (
                <div key={insight.id} className="flex gap-6 p-6 bg-[#0b1326]/50 rounded-2xl border border-white/5 group hover:border-white/10 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#1a2236] flex items-center justify-center text-primary font-bold shadow-lg">
                    {insight.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white text-sm font-bold">{insight.name}</h4>
                      <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{insight.time}</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{insight.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CandidateDetail;
