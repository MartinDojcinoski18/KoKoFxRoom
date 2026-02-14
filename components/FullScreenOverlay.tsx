import React, { useState } from 'react';
import { Maximize, Zap, ShieldCheck } from 'lucide-react';
import { soundService } from '../services/soundService';

const FullScreenOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEnter = async () => {
    soundService.playClick();
    
    // Start Animation
    setIsAnimating(true);

    // Trigger Full Screen
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        await (document.documentElement as any).webkitRequestFullscreen();
      } else if ((document.documentElement as any).msRequestFullscreen) {
        await (document.documentElement as any).msRequestFullscreen();
      }
    } catch (err) {
      console.log("Full screen info: ", err);
    }

    // Wait for the aggressive animation to finish before unmounting
    setTimeout(() => {
        setIsVisible(false);
    }, 800);
  };

  if (!isVisible) return null;

  return (
    <div 
        // Forced cursor: auto to ensure mouse is visible here
        // Aggressive Zoom Out Transition
        className={`fixed inset-0 z-[99999] bg-[#050709] flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
            isAnimating 
                ? 'opacity-0 scale-[5] pointer-events-none filter blur-2xl bg-[#0B0E11]' 
                : 'opacity-100 scale-100'
        }`}
        style={{ cursor: 'auto' }} 
    >
      {/* Background Grid - Explodes towards user */}
      <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      
      {/* Flash Effect on Trigger */}
      <div className={`absolute inset-0 bg-white/10 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* Content Container - Implodes (Shrinks) while background Explodes */}
      <div className={`relative z-10 max-w-lg w-full transition-all duration-500 ease-in ${
          isAnimating ? 'scale-0 opacity-0 rotate-12 translate-z-[-100px]' : 'scale-100 opacity-100 rotate-0'
      }`}>
        
        <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-trading-accent/10 rounded-3xl border border-trading-accent/30 flex items-center justify-center animate-pulse shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-trading-accent/20 to-transparent translate-y-full group-hover:translate-y-[-200%] transition-transform duration-1000"></div>
                <Zap size={48} className="text-trading-accent" fill="currentColor" />
            </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase drop-shadow-2xl">
            KoKo<span className="text-trading-accent">Fx</span>
        </h1>
        
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-8"></div>

        <div className="space-y-6">
            <button 
                onClick={handleEnter}
                className="group relative w-full py-6 bg-white text-black font-black text-xl uppercase tracking-[0.2em] rounded-xl hover:bg-trading-accent transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] hover:scale-[1.02] flex items-center justify-center gap-4 active:scale-95 overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                <Maximize size={24} />
                <span>Initialize System</span>
            </button>
            
            <div className="flex justify-center gap-8 text-[11px] text-gray-500 uppercase tracking-widest font-bold mt-10">
                <span className="flex items-center gap-2"><ShieldCheck size={12} className="text-green-500" /> Secure</span>
                <span className="flex items-center gap-2"><Zap size={12} className="text-yellow-500" /> Real-Time</span>
                <span className="flex items-center gap-2 border border-gray-700 px-2 py-0.5 rounded text-gray-400">F11 Mode</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenOverlay;