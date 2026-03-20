import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const ALL_CANDIDATES = [
  { id: 1, initials: 'RS', name: 'Rahul Sharma', applied: 'Applied 2h ago', role: 'Frontend Developer', score: 98, status: 'Pending', color: 'text-primary' },
  { id: 2, initials: 'AP', name: 'Ananya Patel', applied: 'Applied 5h ago', role: 'Backend Dev', score: 84, status: 'Approved', color: 'text-secondary' },
  { id: 3, initials: 'VK', name: 'Vikram Kumar', applied: 'Applied yesterday', role: 'Data Analyst', score: 72, status: 'Pending', color: 'text-tertiary' },
  { id: 4, initials: 'SM', name: 'Sanya Malhotra', applied: 'Applied yesterday', role: 'Fullstack Dev', score: 92, status: 'Approved', color: 'text-primary' },
  { id: 5, initials: 'AJ', name: 'Arjun Johar', applied: 'Applied 3d ago', role: 'DevOps Engineer', score: 88, status: 'Pending', color: 'text-secondary' },
  { id: 6, initials: 'ND', name: 'Neha Dixit', applied: 'Applied 4d ago', role: 'UI/UX Designer', score: 95, status: 'Approved', color: 'text-primary' },
  { id: 7, initials: 'RK', name: 'Rohan Kapoor', applied: 'Applied 5d ago', role: 'QA Engineer', score: 76, status: 'Pending', color: 'text-tertiary' },
  { id: 8, initials: 'PS', name: 'Priya Singh', applied: 'Applied 1w ago', role: 'Product Manager', score: 91, status: 'Approved', color: 'text-secondary' },
];

function TrainerDashboard() {
  const navigate = useNavigate();
  const [showSuggestion, setShowSuggestion] = useState(true);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Filter State
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCandidates = useMemo(() => {
    return ALL_CANDIDATES.filter(c => statusFilter === 'All' || c.status === statusFilter);
  }, [statusFilter]);

  const totalPages = Math.ceil(filteredCandidates.length / rowsPerPage);
  const currentData = filteredCandidates.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-10 space-y-10">
      {/* Hero Title */}
      <div>
        <p className="text-secondary font-bold tracking-widest text-[10px] uppercase mb-2">Systems Overview</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Trainer Dashboard</h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          Orchestrating candidate transitions with automated AI skill mapping and predictive roadmap generation.
        </p>
      </div>

      {/* Summary Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: 'group', label: 'Total Candidates', value: '1,284', sub: '↑ 12%', subColor: 'text-emerald-400', barWidth: 'w-3/4', barColor: 'bg-primary' },
          { icon: 'pending_actions', label: 'Pending Roadmaps', value: '42', sub: 'Needs Review', subColor: 'text-secondary animate-pulse', barWidth: 'w-1/3', barColor: 'bg-secondary' },
          { icon: 'verified', label: 'Approved', value: '892', sub: 'Last 30 days', subColor: 'text-slate-500', barWidth: 'w-5/6', barColor: 'bg-primary-container' },
          { icon: 'block', label: 'Rejected', value: '16', sub: '-4% from avg', subColor: 'text-error', barWidth: 'w-1/6', barColor: 'bg-error-container/40' },
        ].map((card) => (
          <div key={card.label} className="bg-[#1a2236] p-6 rounded-2xl relative overflow-hidden group hover:bg-[#2d3449]/50 transition-all duration-300 border border-white/5">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
              <span className="material-symbols-outlined text-6xl">{card.icon}</span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{card.label}</p>
            <div className="flex items-end gap-2 text-white">
              <span className="text-3xl font-black">{card.value}</span>
              <span className={`text-[10px] font-bold mb-1.5 ${card.subColor}`}>{card.sub}</span>
            </div>
            <div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${card.barWidth} ${card.barColor}`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pending Roadmaps Table */}
      <div className="bg-[#1a2236] rounded-3xl overflow-hidden border border-white/5">
        <div className="px-8 py-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">Pending Roadmaps</h3>
            <p className="text-sm text-slate-500">AI-generated curricula awaiting trainer verification</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#0b1326] px-4 py-2 rounded-xl border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-500">Status:</span>
              <select 
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                className="bg-transparent text-sm text-white font-semibold border-none outline-none cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
              </select>
            </div>
            <button className="bg-[#2d3449] hover:bg-[#31394d] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/10 active:scale-95">
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.15em] text-slate-500 bg-[#0b1326]/30">
                <th className="px-8 py-4 font-bold">Candidate Name</th>
                <th className="px-8 py-4 font-bold">Role</th>
                <th className="px-8 py-4 font-bold">AI Confidence Score</th>
                <th className="px-8 py-4 font-bold">Status</th>
                <th className="px-8 py-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {currentData.map((c) => (
                <tr 
                  key={c.id} 
                  onClick={() => {
                    if (c.status === 'Pending') {
                      navigate(`/trainer/review/${c.id}`);
                    } else {
                      navigate(`/trainer/candidate/${c.id}`);
                    }
                  }} 
                  className="hover:bg-white/[0.02] transition-all cursor-pointer group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-[#0b1326] flex items-center justify-center font-bold text-xs ${c.color} border border-white/10`}>
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
                          className={`h-full bg-primary rounded-full shadow-[0_0_8px_rgba(192,193,255,0.4)]`}
                          style={{ width: `${c.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${c.status === 'Approved' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' : 'bg-secondary/10 text-secondary border-secondary/20'} text-[10px] font-bold border uppercase tracking-tighter`}>
                      <span className={`w-1 h-1 rounded-full ${c.status === 'Approved' ? 'bg-emerald-400' : 'bg-secondary'}`}></span>
                      {c.status}
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

        {/* Pagination UI */}
        <div className="px-8 py-6 bg-[#0b1326]/30 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5">
          <p className="text-xs text-slate-500">
            Showing <span className="text-white font-bold">{currentData.length > 0 ? (currentPage - 1) * rowsPerPage + 1 : 0}</span> to <span className="text-white font-bold">{Math.min(currentPage * rowsPerPage, filteredCandidates.length)}</span> of <span className="text-white font-bold">{filteredCandidates.length}</span> candidates
          </p>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-xl bg-[#1a2236] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border ${currentPage === i + 1 ? 'bg-primary border-primary text-on-primary' : 'bg-[#1a2236] border-white/10 text-slate-400 hover:border-white/20'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-xl bg-[#1a2236] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating AI Suggestion */}
      {showSuggestion && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-secondary/50 to-primary/50 backdrop-blur-xl p-0.5 rounded-3xl shadow-[0_20px_50px_rgba(7,0,108,0.3)]">
            <div className="bg-[#1a2236] rounded-3xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <div className="flex-1 min-w-[200px]">
                <p className="text-xs font-bold text-white mb-0.5">AI Suggestion</p>
                <p className="text-[10px] text-slate-400 leading-tight">Elena Jenkins' roadmap is ready for instant approval based on 98% match.</p>
              </div>
              <button className="bg-secondary text-on-secondary px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-tighter hover:brightness-110 active:scale-95 transition-all whitespace-nowrap shadow-lg shadow-secondary/10">
                Auto-Approve
              </button>
              <button
                onClick={() => setShowSuggestion(false)}
                className="text-slate-600 hover:text-white transition-colors p-1"
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
