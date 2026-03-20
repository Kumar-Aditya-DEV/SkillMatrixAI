import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const HRLayout = () => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="antialiased min-h-screen bg-background flex selection:bg-primary-container selection:text-on-primary-container text-on-surface">
      {/* SideNavBar (HR Specific) */}
      <aside className="h-screen w-64 fixed left-0 top-0 z-50 bg-[#131b2e] flex flex-col py-8">
        <div className="px-6 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
          </div>
          <div>
            <h1 className="text-lg font-black text-white leading-tight">SkillPath AI</h1>
            <p className="text-[10px] uppercase tracking-[0.1em] text-slate-500">HR Portal</p>
          </div>
        </div>
        
        <nav className="flex-1 px-3 space-y-1">
          <NavLink 
            to="/hr/upload" 
            className={({ isActive }) => `relative flex items-center gap-4 px-6 py-3 transition-all duration-200 rounded-xl group ${isActive ? 'text-[#c0c1ff] font-semibold bg-[#2d3449]/30 before:content-[\'\'] before:absolute before:left-0 before:w-1 before:h-6 before:bg-[#c0c1ff] before:rounded-r-full' : 'text-slate-500 hover:text-slate-300 hover:bg-[#2d3449]'}`}
          >
            <span className="material-symbols-outlined">upload_file</span>
            <span>Upload</span>
          </NavLink>
          <NavLink 
            to="/hr/status" 
            className={({ isActive }) => `relative flex items-center gap-4 px-6 py-3 transition-all duration-200 rounded-xl group ${isActive ? 'text-[#c0c1ff] font-semibold bg-[#2d3449]/30 before:content-[\'\'] before:absolute before:left-0 before:w-1 before:h-6 before:bg-[#c0c1ff] before:rounded-r-full' : 'text-slate-500 hover:text-slate-300 hover:bg-[#2d3449]'}`}
          >
            <span className="material-symbols-outlined">analytics</span>
            <span>Status</span>
          </NavLink>
        </nav>

        <div className="px-6 mt-auto">
          <button 
            onClick={() => setShowLogoutConfirm(true)}
            className="w-full text-slate-500 hover:text-slate-300 flex items-center gap-4 px-4 py-3 text-sm transition-colors rounded-xl hover:bg-[#2d3449]"
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen flex-grow relative bg-[#0b1326]">
        <Outlet />
      </main>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#1a2236] border border-white/10 rounded-3xl p-8 max-w-sm w-full shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Confirm Logout</h3>
            <p className="text-slate-400 mb-8">Are you sure you want to log out of SkillPath AI?</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-3 px-6 rounded-xl bg-surface-container-highest text-white font-bold hover:bg-surface-variant transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Cancel
              </button>
              <button 
                onClick={handleLogout}
                className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold hover:brightness-110 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HRLayout;
