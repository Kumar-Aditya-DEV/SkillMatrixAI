import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const candidates = [
  { initials: 'EJ', name: 'Elena Jenkins', applied: 'Applied 2h ago', role: 'Senior Cloud Architect', score: 98, color: 'text-primary' },
  { initials: 'MK', name: 'Marcus Kaine', applied: 'Applied 5h ago', role: 'Staff Data Engineer', score: 84, color: 'text-secondary' },
  { initials: 'SR', name: 'Sarah Ross', applied: 'Applied yesterday', role: 'VP of Engineering', score: 72, color: 'text-tertiary' },
  { initials: 'AL', name: 'Alex Lowery', applied: 'Applied yesterday', role: 'Full Stack Developer', score: 92, color: 'text-primary-fixed-dim' },
];

function TrainerDashboard() {
  const navigate = useNavigate();
  const [showSuggestion, setShowSuggestion] = useState(true);

  return (
    <div className="bg-background text-on-surface min-h-screen antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 z-50 bg-[#131b2e] flex flex-col py-8">
        <div className="px-6 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
          </div>
          <div>
            <h1 className="text-lg font-black text-white leading-tight">The Kinetic Path</h1>
            <p className="text-[10px] uppercase tracking-[0.1em] text-slate-500">AI Orchestrator</p>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          <a className="relative flex items-center gap-4 px-6 py-3 text-[#c0c1ff] font-semibold before:content-[''] before:absolute before:left-0 before:w-1 before:h-6 before:bg-[#c0c1ff] before:rounded-r-full transition-all duration-200" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span>Dashboard</span>
          </a>
          {[
            { icon: 'route', label: 'Roadmaps' },
            { icon: 'group', label: 'Candidates' },
            { icon: 'menu_book', label: 'Curriculum' },
            { icon: 'leaderboard', label: 'Analytics' },
          ].map((item) => (
            <a key={item.label} className="text-slate-500 hover:text-slate-300 flex items-center gap-4 px-6 py-3 transition-colors duration-200 hover:bg-[#2d3449] rounded-xl group" href="#">
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="px-6 mt-auto space-y-4">
          <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-sm shadow-lg active:scale-95 transition-all">
            New Workflow
          </button>
          <div className="pt-6 border-t border-outline-variant/10">
            <a className="text-slate-500 hover:text-slate-300 flex items-center gap-4 px-4 py-2 text-sm transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">help_outline</span>
              Help Center
            </a>
            <a className="text-slate-500 hover:text-slate-300 flex items-center gap-4 px-4 py-2 text-sm transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">logout</span>
              Log Out
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar */}
        <header className="flex justify-between items-center w-full px-8 h-16 fixed top-0 left-64 right-0 z-40 bg-[#0b1326]/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(7,0,108,0.15)]">
          <div className="flex items-center gap-8">
            <div className="relative group">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <span className="material-symbols-outlined text-sm">search</span>
              </span>
              <input
                className="bg-[#2d3449]/50 border-none rounded-full py-1.5 pl-10 pr-4 text-sm text-on-surface focus:ring-1 focus:ring-primary w-64 transition-all outline-none"
                placeholder="Search workspaces..."
                type="text"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-slate-400 hover:text-slate-200 transition-colors text-sm font-medium" href="#">Workspaces</a>
              <a className="text-slate-400 hover:text-slate-200 transition-colors text-sm font-medium" href="#">Insights</a>
              <a className="text-slate-400 hover:text-slate-200 transition-colors text-sm font-medium" href="#">Archive</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/upload-resumes')}
              className="bg-primary-container/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold hover:bg-primary-container/30 transition-all active:scale-95"
            >
              Upload Resumes
            </button>
            <button className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 overflow-hidden">
              <img
                alt="HR Manager Profile"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyqkOZwJkcyAKaMTjqdlnlAvPc_C7m7eeS3_S06UvSpro1x24TWm9R_UbZR_14rYy8JW2WKeVPr1x-P36Q_gVi37qXPWrO5D7jMLdrnkfP51fDYpGJyBnrYdJb-koE3CjReRU5txxxm4cheJRJeeUa_RrtPKL_Ihglz44t2rGMII4lsIiVRtcvONhKE7Mt4SSUz8tp3tCbNgpZJONsyb8_8jxYfQPh2yVglYu8XMdwE2rSSCYLlzpMEIkCfHei6WAuRUIdJZ1uAw"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <section className="pt-24 px-10 pb-12">
          {/* Hero Title */}
          <div className="mb-10">
            <p className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2">Systems Overview</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Trainer Dashboard</h2>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Orchestrating candidate transitions with automated AI skill mapping and predictive roadmap generation.
            </p>
          </div>

          {/* Summary Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: 'group', label: 'Total Candidates', value: '1,284', sub: '↑ 12%', subColor: 'text-emerald-400', barWidth: 'w-3/4', barColor: 'bg-primary' },
              { icon: 'pending_actions', label: 'Pending Roadmaps', value: '42', sub: 'Needs Review', subColor: 'text-secondary animate-pulse', barWidth: 'w-1/3', barColor: 'bg-secondary shadow-[0_0_8px_rgba(221,183,255,0.5)]' },
              { icon: 'verified', label: 'Approved', value: '892', sub: 'Last 30 days', subColor: 'text-slate-500', barWidth: 'w-5/6', barColor: 'bg-primary-container' },
              { icon: 'block', label: 'Rejected', value: '16', sub: '-4% from avg', subColor: 'text-error', barWidth: 'w-1/6', barColor: 'bg-error-container/40' },
            ].map((card) => (
              <div key={card.label} className="bg-surface-container-low p-6 rounded-2xl relative overflow-hidden group hover:bg-surface-container transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">{card.icon}</span>
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{card.label}</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-white">{card.value}</span>
                  <span className={`text-[10px] font-bold mb-1.5 ${card.subColor}`}>{card.sub}</span>
                </div>
                <div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${card.barWidth} ${card.barColor}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Pending Roadmaps Table */}
          <div className="bg-surface-container-low rounded-3xl overflow-hidden">
            <div className="px-8 py-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/50">
              <div>
                <h3 className="text-xl font-bold text-white">Pending Roadmaps</h3>
                <p className="text-sm text-slate-500">AI-generated curricula awaiting trainer verification</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-[#2d3449] hover:bg-[#31394d] text-on-surface px-4 py-1.5 rounded-lg text-xs font-medium transition-colors border border-outline-variant/10">Filter</button>
                <button className="bg-[#2d3449] hover:bg-[#31394d] text-on-surface px-4 py-1.5 rounded-lg text-xs font-medium transition-colors border border-outline-variant/10">Export</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] uppercase tracking-[0.15em] text-slate-500 bg-surface-container-lowest/30">
                    <th className="px-8 py-4 font-bold">Candidate Name</th>
                    <th className="px-8 py-4 font-bold">Role</th>
                    <th className="px-8 py-4 font-bold">AI Confidence Score</th>
                    <th className="px-8 py-4 font-bold">Status</th>
                    <th className="px-8 py-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {candidates.map((c) => (
                    <tr key={c.name} onClick={() => navigate('/roadmap-review')} className="hover:bg-[#2d3449]/30 transition-all cursor-pointer group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-xs ${c.color}`}>
                            {c.initials}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{c.name}</p>
                            <p className="text-[10px] text-slate-500">{c.applied}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className="text-xs font-medium text-slate-300">{c.role}</span>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-black text-primary">{c.score}%</span>
                          <div className="w-24 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-primary rounded-full ${c.score >= 90 ? 'shadow-[0_0_8px_rgba(192,193,255,0.4)]' : ''}`}
                              style={{ width: `${c.score}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold border border-secondary/20 uppercase tracking-tighter">
                          <span className="w-1 h-1 rounded-full bg-secondary"></span>
                          Pending
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">chevron_right</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-8 py-4 bg-surface-container-lowest/50 flex justify-center border-t border-outline-variant/10">
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2">
                View all pending roadmaps
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Floating AI Suggestion */}
      {showSuggestion && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-secondary-container/80 to-primary-container/80 backdrop-blur-xl p-0.5 rounded-2xl shadow-[0_20px_50px_rgba(7,0,108,0.3)]">
            <div className="bg-surface-container-lowest/90 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-on-secondary-fixed text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white">AI Suggestion</p>
                <p className="text-[10px] text-slate-400">Elena Jenkins' roadmap is ready for instant approval.</p>
              </div>
              <button className="ml-4 bg-secondary text-on-secondary px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tighter hover:brightness-110 active:scale-95 transition-all whitespace-nowrap">
                Auto-Approve
              </button>
              <button
                onClick={() => setShowSuggestion(false)}
                className="text-slate-500 hover:text-white transition-colors ml-1"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrainerDashboard;
