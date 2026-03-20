import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const ALL_CANDIDATES = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul.s@skillpath.ai', role: 'Frontend Developer', status: 'Approved', statusClass: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20', progress: 82, avatar: null },
  { id: 2, name: 'Ananya Patel', email: 'ananya.p@skillpath.ai', role: 'Staff Backend Dev', status: 'Ready', statusClass: 'bg-primary/10 text-primary border-primary/20', progress: 100, avatar: null },
  { id: 3, name: 'Vikram Kumar', email: 'vikram.k@skillpath.ai', role: 'Data Analyst', status: 'In Training', statusClass: 'bg-secondary/10 text-secondary border-secondary/20', progress: 68, avatar: null },
  { id: 4, name: 'Sanya Malhotra', email: 'sanya.m@skillpath.ai', role: 'Fullstack Dev', status: 'Stuck', statusClass: 'bg-error/10 text-error border-error/20', progress: 12, avatar: null },
  { id: 5, name: 'Arjun Johar', email: 'arjun.j@skillpath.ai', role: 'DevOps Engineer', status: 'Review', statusClass: 'bg-surface-container-highest text-outline border-outline-variant/20', progress: 89, avatar: null },
  { id: 6, name: 'Neha Dixit', email: 'neha.d@skillpath.ai', role: 'UI/UX Designer', status: 'Approved', statusClass: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20', progress: 45, avatar: null },
  { id: 7, name: 'Rohan Kapoor', email: 'rohan.k@skillpath.ai', role: 'QA Engineer', status: 'Pending', statusClass: 'bg-surface-container-highest text-outline border-outline-variant/20', progress: 5, avatar: null },
  { id: 8, name: 'Priya Singh', email: 'priya.s@skillpath.ai', role: 'Product Manager', status: 'In Training', statusClass: 'bg-secondary/10 text-secondary border-secondary/20', progress: 30, avatar: null },
];

function Candidates() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Filter State
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCandidates = useMemo(() => {
    return ALL_CANDIDATES.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.role.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const totalPages = Math.ceil(filteredCandidates.length / rowsPerPage);
  const currentData = filteredCandidates.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-10 space-y-10">
      {/* Page Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-5xl font-black tracking-tight leading-none mb-4 text-white">Candidates</h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Manage your talent pool and track training progress across active workspaces.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
            <input
              className="bg-[#1a2236] border border-white/10 rounded-2xl pl-12 pr-6 py-3 w-80 focus:ring-2 focus:ring-primary/50 text-white placeholder-slate-600 transition-all outline-none text-sm"
              placeholder="Search by name or role..."
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            />
          </div>
          <div className="flex items-center gap-2 bg-[#1a2236] px-4 py-3 rounded-2xl border border-white/10">
             <span className="text-[10px] uppercase font-bold text-slate-500">Status:</span>
             <select 
               value={statusFilter}
               onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
               className="bg-transparent text-sm text-white font-semibold border-none outline-none cursor-pointer"
             >
               <option value="All">All</option>
               <option value="Approved">Approved</option>
               <option value="Ready">Ready</option>
               <option value="In Training">In Training</option>
               <option value="Stuck">Stuck</option>
               <option value="Review">Review</option>
             </select>
          </div>
        </div>
      </header>

      {/* Bento Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-8 rounded-3xl bg-[#1a2236] border border-white/5 flex flex-col justify-between h-40 group hover:border-primary/30 transition-all">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Total Talent</span>
          <span className="text-4xl font-black text-white">1,284</span>
        </div>
        <div className="p-8 rounded-3xl bg-[#1a2236] border border-white/5 flex flex-col justify-between h-40 group hover:border-secondary/30 transition-all">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase">In Training</span>
          <span className="text-4xl font-black text-white">412</span>
        </div>
        <div className="col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[#1a2236] to-[#0b1326] border border-white/5 flex items-center gap-8 h-40">
          <div className="flex-1">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-1">Approval Velocity</span>
            <p className="text-sm text-slate-500 mb-4">Your AI agent processed 42 profiles today.</p>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4 shadow-[0_0_10px_rgba(128,131,255,0.4)]"></div>
            </div>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
          </div>
        </div>
      </section>

      {/* Directory Table */}
      <div className="bg-[#1a2236] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#0b1326]/30">
              {['Candidate', 'Assigned Role', 'Status', 'Skill Growth', 'Action'].map((col) => (
                <th key={col} className="px-8 py-6 text-[11px] font-black tracking-[0.1em] text-slate-500 uppercase">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {currentData.map((c) => (
              <tr key={c.id} onClick={() => navigate(`/trainer/candidate/${c.id}`)} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0b1326] border border-white/10 flex items-center justify-center text-primary font-bold">
                       {c.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{c.name}</p>
                      <p className="text-xs text-slate-500">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 text-slate-300 text-sm font-medium">{c.role}</td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${c.statusClass}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(128,131,255,0.3)]" style={{ width: `${c.progress}%` }}></div>
                    </div>
                    <span className="text-xs font-black text-primary w-8">{c.progress}%</span>
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">more_horiz</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination UI */}
        <div className="px-8 py-6 bg-[#0b1326]/30 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            Showing <span className="text-white font-bold">{currentData.length > 0 ? (currentPage - 1) * rowsPerPage + 1 : 0}</span> to <span className="text-white font-bold">{Math.min(currentPage * rowsPerPage, filteredCandidates.length)}</span> of <span className="text-white font-bold">{filteredCandidates.length.toLocaleString()}</span> candidates
          </p>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-xl bg-[#1a2236] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <div className="flex gap-1">
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
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Candidates;
