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

    // Remove component after animation finishes (1s duration)
    setTimeout(() => {
        setIsVisible(false);
    }, 800);
  };

  if (!isVisible) return null;

  return (
    <div 
        // Forced cursor: auto to ensure mouse is visible here
        // Transition classes for the Zoom Out effect
        className={`fixed inset-0 z-[99999] bg-[#050709] flex flex-col items-center justify-center p-6 text-center transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
            isAnimating ? 'opacity-0 scale-[2] pointer-events-none filter blur-sm' : 'opacity-100 scale-100'
        }`}
        style={{ cursor: 'auto' }} 
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      
      <div className={`relative z-10 max-w-lg w-full transition-all duration-500 ${isAnimating ? 'scale-50 opacity-0' : 'scale-100'}`}>
        <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-trading-accent/10 rounded-2xl border border-trading-accent/30 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <Zap size={40} className="text-trading-accent" />
            </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter uppercase">
            KoKo<span className="text-trading-accent">Fx</span> Room
        </h1>
        <p className="text-gray-500 text-sm font-mono tracking-widest uppercase mb-12">
            Secure Trading Terminal
        </p>

        <div className="space-y-4">
            <button 
                onClick={handleEnter}
                className="group relative w-full py-5 bg-white text-black font-black text-lg uppercase tracking-widest rounded-xl hover:bg-trading-accent transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:scale-[1.02] flex items-center justify-center gap-3 active:scale-95"
            >
                <Maximize size={20} />
                <span>Initialize System</span>
            </button>
            
            <div className="flex justify-center gap-6 text-[10px] text-gray-600 uppercase tracking-wider font-bold mt-8">
                <span className="flex items-center gap-1"><ShieldCheck size={10} /> Encrypted</span>
                <span className="flex items-center gap-1"><Zap size={10} /> Fast Data</span>
                <span className="flex items-center gap-1">F11 Immersive</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenOverlay;