import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {/* Left Section: Branding */}
      <section className="hidden md:flex flex-1 relative overflow-hidden bg-gradient-brand items-center justify-center p-12">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary-container rounded-full blur-[150px]"></div>
        </div>
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <h1 className="text-display-lg text-white font-black tracking-tighter leading-none mb-6 text-glow" style={{ fontSize: '3.5rem', letterSpacing: '-0.02em' }}>
            SkillPath AI
          </h1>
          <p className="text-xl text-primary-fixed opacity-90 font-light max-w-md leading-relaxed mb-12">
            Intelligent Workforce Onboarding Platform for the future of digital skills.
          </p>
          {/* Abstract Illustration */}
          <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 group">
            <div className="absolute inset-0 bg-surface-container-highest/20 rounded-2xl backdrop-blur-sm border border-white/10 rotate-3 transition-transform group-hover:rotate-0 duration-700"></div>
            <img 
              alt="Abstract neural network visualization" 
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl transition-transform group-hover:-translate-y-2 duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDKJTK3_3mOBSBlWCcgRhQXZvUMHk5p3IRgoTwTxbxIo461QTzq7XIQJlVKRhzHQ8eQeEgNZpApFNrrTRUiYgIKhY3UxJJJx05z2TlbFxLa-KuqPGZpyu5ltzft2ciIjgngLsrYWkuuTBnPO89zjRLk16_LaSd1UDLKwdsYAOfb6584pZdVNatWSdM-nPyY1WbjtTFTmMj1q6D9tk0fms-O7u7xWznUhCCuEaBK8TdVmxYDmxtz-l3jjnr170To1pGisd4za4B5A" 
            />
          </div>
        </div>
      </section>

      {/* Right Section: Login Form */}
      <section className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-surface">
        <div className="w-full max-w-[480px] space-y-8">
          {/* Login Card */}
          <div className="glass-panel p-8 sm:p-10 rounded-2xl shadow-2xl border border-outline-variant/15">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-2">Welcome Back</h2>
              <p className="text-on-surface-variant font-medium">Access your curated learning journey.</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Role Selection */}
              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-[0.05em] font-bold text-primary">Access Role</label>
                <div className="relative group">
                  <select className="w-full appearance-none bg-surface-container-low border-none rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary-container transition-all cursor-pointer">
                    <option>Senior Developer</option>
                    <option>HR Manager</option>
                    <option>Technical Trainer</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>
                </div>
              </div>
              {/* Email */}
              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-[0.05em] font-bold text-primary">Email Address</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary-container transition-all" 
                  placeholder="name@company.com" 
                  type="email" 
                />
              </div>
              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-[11px] uppercase tracking-[0.05em] font-bold text-primary">Password</label>
                  <a className="text-[11px] uppercase tracking-[0.05em] font-bold text-on-surface-variant hover:text-primary transition-colors" href="#">Forgot Password?</a>
                </div>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary-container transition-all" 
                    placeholder="••••••••" 
                    type="password" 
                  />
                  <button className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface" data-icon="visibility" type="button">
                    visibility
                  </button>
                </div>
              </div>
              {/* Remember Me */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="w-5 h-5 rounded border-none bg-surface-container-low text-primary-container focus:ring-offset-0 focus:ring-primary-container" type="checkbox" />
                <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Remember this device</span>
              </label>
              {/* Login Button */}
              <button 
                className="w-full py-4 rounded-xl font-bold text-on-primary bg-gradient-to-r from-primary to-primary-container hover:shadow-[0_0_20px_rgba(128,131,255,0.4)] transition-all active:scale-[0.98] duration-200" 
                type="submit"
                onClick={() => navigate('/hr-dashboard')}
              >
                Login to Dashboard
              </button>
            </form>
            {/* Divider */}
            <div className="my-10 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-outline-variant opacity-20"></div>
              <span className="text-[10px] uppercase tracking-[0.1em] text-outline font-bold">Or continue with</span>
              <div className="h-[1px] flex-1 bg-outline-variant opacity-20"></div>
            </div>
            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors border border-outline-variant/10">
                <img alt="Google Logo" className="w-5 h-5 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4qcG2CDf7hpT7RQRSzYiVEtRlq6sbalM7s05Vicx0xHEexBP_7p3fw6ApIEremNaOBVKdKYNwQpi47NnZrdSXnlhQGV98LE7Y_nWnGJti8Gj-PDSSqTw2bWhZmHJEAyGOFtQzyLJZ8oPdMKoaCN4C0gAqDdbNZSptzry2cCGEXTJ7azWUXTb4UhLPg14Mgpy1QZCk0Oe3Kqhi96IByXTRNvZJ1Y8kN7sTUNKPy8K4SuXDccPzWN4cSzq6v91-K5e5yT-ypbz1IQ" />
                <span className="text-sm font-semibold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors border border-outline-variant/10">
                <span className="material-symbols-outlined text-[20px]" data-icon="terminal" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                <span className="text-sm font-semibold">GitHub</span>
              </button>
            </div>
            {/* Demo Access */}
            <div className="mt-8 p-4 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/10">
              <p className="text-[10px] uppercase tracking-[0.05em] font-bold text-on-surface-variant mb-3 text-center">Quick Demo Access</p>
              <div className="flex flex-wrap justify-center gap-2">
                <button className="px-3 py-1.5 rounded-full bg-surface-container-highest text-[10px] font-bold text-primary-fixed-dim hover:bg-primary-container hover:text-on-primary-container transition-all">HR</button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container-highest text-[10px] font-bold text-primary-fixed-dim hover:bg-primary-container hover:text-on-primary-container transition-all">Reviewer</button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container-highest text-[10px] font-bold text-primary-fixed-dim hover:bg-primary-container hover:text-on-primary-container transition-all">Trainer</button>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-on-surface-variant text-sm font-medium">
                Don't have an account? 
                <button type="button" onClick={() => navigate('/register')} className="text-primary font-bold hover:underline underline-offset-4 ml-1">Sign up</button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
