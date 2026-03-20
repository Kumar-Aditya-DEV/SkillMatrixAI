import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Default to HR if no specific role selected via buttons
    navigate('/hr/upload');
  };

  return (
    <main className="flex min-h-screen flex-col md:flex-row bg-[#0b1326] font-['Inter']">
      {/* Left Section: Branding & Hero */}
      <section className="hidden md:flex flex-1 relative overflow-hidden bg-[#131b2e] items-center justify-center p-16 border-r border-white/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-secondary rounded-full blur-[180px]"></div>
        </div>
        
        <div className="relative z-10 max-w-xl w-full text-center">
          <div className="mb-12 flex justify-center">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-2xl">
                <span className="material-symbols-outlined text-on-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
             </div>
          </div>
          <h1 className="text-7xl font-black text-white tracking-tighter leading-none mb-8">
            SkillPath AI
          </h1>
          <p className="text-xl text-slate-400 font-medium leading-relaxed mb-16 max-w-lg mx-auto">
            The intelligent engine for workforce transition and adaptive skills orchestration.
          </p>
          
          <div className="relative group w-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
              alt="AI Hero" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Right Section: Login Form */}
      <section className="flex-1 flex items-center justify-center p-8 sm:p-16 bg-[#0b1326]">
        <div className="w-full max-w-[440px]">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-white tracking-tight mb-3">Portal Login</h2>
            <p className="text-lg text-slate-500 font-medium">Enter your credentials to access your dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
              <input 
                type="email" 
                placeholder="name@skillpath.ai"
                className="w-full bg-[#1a2236] border border-white/10 rounded-2xl p-5 text-white placeholder-slate-600 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#1a2236] border border-white/10 rounded-2xl p-5 text-white placeholder-slate-600 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-black rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all"
            >
              Sign In to Portal
            </button>
          </form>

          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#0b1326] px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Quick Portal Access</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/hr/upload')}
              className="flex items-center justify-center gap-3 py-4 bg-[#1a2236] border border-white/10 rounded-2xl text-slate-400 font-bold text-xs hover:border-primary/50 hover:text-white transition-all shadow-lg active:scale-95"
            >
              <span className="material-symbols-outlined text-xl">corporate_fare</span>
              HR Access
            </button>
            <button 
              onClick={() => navigate('/trainer/dashboard')}
              className="flex items-center justify-center gap-3 py-4 bg-[#1a2236] border border-white/10 rounded-2xl text-slate-400 font-bold text-xs hover:border-secondary/50 hover:text-white transition-all shadow-lg active:scale-95"
            >
              <span className="material-symbols-outlined text-xl">school</span>
              Trainer Access
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
             <div className="flex gap-6">
                <button onClick={() => navigate('/register')} className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Create Account</button>
                <button className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">Support Portal</button>
             </div>
             <p className="text-[10px] text-slate-700 font-medium">By signing in, you agree to our System Policies.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
