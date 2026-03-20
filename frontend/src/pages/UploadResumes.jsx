import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadResumes() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setSelectedFiles(files);
      startProcessing();
    }
  };

  const startProcessing = () => {
    setIsProcessing(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // After simulation, stay in "Processing" state until manually navigating or showing success
    setTimeout(() => {
      // We could navigate automatically, but let's show a success state first
    }, 2500);
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-10 flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-16 max-w-2xl">
        <p className="text-primary font-bold tracking-widest text-[10px] uppercase mb-3">AI Orchestration</p>
        <h1 className="text-5xl font-black tracking-tight mb-6 text-white leading-tight">
          Fuel your talent{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ecosystem</span>.
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Upload candidate resumes and let SkillPath AI extract multi-dimensional skill signatures to build personalized learning paths.
        </p>
      </div>

      <div className="w-full max-w-3xl space-y-8">
        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileSelect} 
          multiple 
          accept=".pdf,.doc,.docx" 
          className="hidden" 
        />

        {/* Drag & Drop / Upload Card */}
        <div 
          onClick={handleBrowseClick}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative bg-[#1a2236] rounded-3xl p-16 border border-white/5 flex flex-col items-center justify-center text-center hover:bg-[#2d3449]/50 transition-all duration-500 overflow-hidden">
            
            {isProcessing ? (
              <div className="w-full space-y-8 animate-fade-in">
                <div className="relative h-24 w-24 mx-auto">
                   <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                   <div className="relative h-24 w-24 bg-surface-container-highest rounded-full flex items-center justify-center border border-primary/30 shadow-2xl">
                     <span className="material-symbols-outlined text-4xl text-primary animate-spin">neurology</span>
                   </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Analyzing Resumes</h3>
                  <p className="text-slate-400">SkillPath AI is extracting skill signatures...</p>
                </div>

                <div className="w-full max-w-md mx-auto space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <span>Progress</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                </div>
                
                {uploadProgress === 100 && (
                   <div className="pt-4 animate-bounce">
                     <span className="px-4 py-2 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 text-xs font-bold uppercase tracking-widest">
                       Analysis Complete
                     </span>
                   </div>
                )}
              </div>
            ) : (
              <>
                <div className="mb-8 h-20 w-20 bg-[#0b1326] rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>upload_file</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Drop resumes here</h3>
                <p className="text-slate-500 mb-10 max-w-xs leading-relaxed">PDF or DOCX formats supported. Our AI Curator will handle the rest.</p>
                <button className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(128,131,255,0.4)] transition-all duration-300 active:scale-95">
                  Browse Files
                </button>
              </>
            )}
          </div>
        </div>

        {/* Selected Files Preview (If any) */}
        {!isProcessing && selectedFiles.length > 0 && (
          <div className="bg-[#1a2236] rounded-2xl p-6 border border-white/5 animate-fade-in">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Selected Files ({selectedFiles.length})</h4>
            <div className="space-y-3">
              {selectedFiles.map((file, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-[#0b1326]/50 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <span className="text-sm text-slate-300 font-medium">{file.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-600 font-bold uppercase">{(file.size / 1024).toFixed(1)} KB</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <button
            onClick={() => navigate('/hr/status')}
            disabled={!selectedFiles.length && !isProcessing}
            className={`group relative px-14 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary text-lg font-black rounded-2xl shadow-2xl transition-all duration-300 ${(!selectedFiles.length && !isProcessing) ? 'opacity-30 grayscale cursor-not-allowed' : 'hover:shadow-primary/40 hover:-translate-y-1 active:scale-95'}`}
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined font-black group-hover:rotate-12 transition-transform">auto_awesome</span>
              Generate AI Learning Roadmap
              <span className="material-symbols-outlined font-black group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </div>
          </button>
          <div className="flex items-center gap-3 text-slate-600">
            <span className="material-symbols-outlined text-sm">enhanced_encryption</span>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Enterprise-Grade AI Privacy Protocol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadResumes;
