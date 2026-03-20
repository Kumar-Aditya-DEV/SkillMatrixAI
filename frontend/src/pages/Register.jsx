import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  return (
    <div
      className="bg-surface text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary-container"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <main className="flex min-h-screen">
        {/* Left Side: Branding & Narrative */}
        <section
          className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12"
          style={{ background: 'linear-gradient(180deg, #0b1326 0%, #131b2e 100%)' }}
        >
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <div className="mb-12">
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-primary mb-6">
                SkillMatrix AI
              </h1>
              <p className="text-xl lg:text-2xl text-on-surface-variant font-light leading-relaxed">
                Start your personalized onboarding journey with the Digital Curator.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-on-surface">AI-Driven Pathing</h3>
                  <p className="text-sm text-outline leading-snug">Curated roadmaps tailored to your career trajectory.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-on-surface">Skill Verification</h3>
                  <p className="text-sm text-outline leading-snug">Real-time evaluation of technical and soft skills.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Branding */}
          <div className="absolute bottom-8 left-12">
            <p className="text-[10px] uppercase tracking-[0.05em] text-outline" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2024 SkillMatrix AI. The Digital Curator.
            </p>
          </div>
        </section>

        {/* Right Side: Registration Form */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-surface">
          <div className="w-full max-w-xl">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-on-surface mb-2 tracking-tight">Create your account</h2>
              <p className="text-on-surface-variant">Join the next generation of talent management.</p>
            </div>

            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (selectedRole === 'HR') navigate('/hr-dashboard');
                else if (selectedRole === 'Trainer') navigate('/trainer-dashboard');
                else navigate('/'); 
              }}
            >
              {/* User Identity Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.05em] text-outline ml-1" style={{ fontFamily: 'Inter, sans-serif' }}>Full Name</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                    placeholder="Alex Rivera"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.05em] text-outline ml-1" style={{ fontFamily: 'Inter, sans-serif' }}>Email Address</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                    placeholder="alex@company.com"
                    type="email"
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.05em] text-outline ml-1" style={{ fontFamily: 'Inter, sans-serif' }}>Select your role</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                  {/* Role: HR */}
                  <button
                    onClick={() => setSelectedRole('HR')}
                    className={`group flex flex-col p-4 rounded-2xl bg-surface-container-low text-left transition-all active:scale-95 border ${
                      selectedRole === 'HR' ? 'border-primary' : 'border-outline-variant/15 hover:bg-surface-container-high hover:border-primary/40'
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary mb-3">badge</span>
                    <span className="text-sm font-semibold text-on-surface mb-1">HR</span>
                    <span className="text-[11px] text-outline leading-tight">Manage candidates &amp; hiring</span>
                  </button>
                  {/* Role: Trainer */}
                  <button
                    onClick={() => setSelectedRole('Trainer')}
                    className={`group flex flex-col p-4 rounded-2xl bg-surface-container-low text-left transition-all active:scale-95 border ${
                      selectedRole === 'Trainer' ? 'border-primary' : 'border-outline-variant/15 hover:bg-surface-container-high hover:border-primary/40'
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-primary mb-3">school</span>
                    <span className="text-sm font-semibold text-on-surface mb-1">Trainer</span>
                    <span className="text-[11px] text-outline leading-tight">Train &amp; evaluate candidates</span>
                  </button>
                </div>
              </div>

              {/* Security Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 relative">
                  <label className="text-[10px] uppercase tracking-[0.05em] text-outline ml-1" style={{ fontFamily: 'Inter, sans-serif' }}>Password</label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      defaultValue="password123"
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors focus:outline-none"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.05em] text-outline ml-1" style={{ fontFamily: 'Inter, sans-serif' }}>Confirm Password</label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      defaultValue="password123"
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors focus:outline-none"
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showConfirmPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <label className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="peer appearance-none w-5 h-5 bg-surface-container-low border-none rounded-lg checked:bg-primary transition-all cursor-pointer focus:ring-0 outline-none"
                    type="checkbox"
                  />
                  <span className={`material-symbols-outlined text-on-primary text-[16px] absolute pointer-events-none ${agreed ? 'block' : 'hidden'}`}>
                    check
                  </span>
                </div>
                <span className="text-sm text-outline group-hover:text-on-surface-variant transition-colors">I agree to Terms &amp; Conditions</span>
              </label>

              {/* CTA Section */}
              <div className="pt-4">
                <button
                  className="w-full py-4 rounded-xl font-bold text-on-primary-fixed shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
                  type="submit"
                  style={{ background: 'linear-gradient(135deg, #c0c1ff 0%, #8083ff 100%)' }}
                >
                  <span>Create Account</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <div className="mt-8 text-center">
                  <p className="text-sm text-outline">
                    Already have an account?
                    <button
                      type="button"
                      onClick={() => navigate('/login')}
                      className="text-primary font-medium hover:underline underline-offset-4 ml-1"
                    >
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Register;
