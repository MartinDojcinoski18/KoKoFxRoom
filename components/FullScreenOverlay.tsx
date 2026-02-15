import React, { useState, useEffect } from 'react';
import { Maximize, Lock, Wifi } from 'lucide-react';
import { soundService } from '../services/soundService';

const FullScreenOverlay: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'hidden'>('idle');

  // LOCK SCROLL EFFECT
  useEffect(() => {
    // When the component mounts (overlay is visible), lock scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh'; // Fix for some mobile browsers
    document.body.style.touchAction = 'none'; // Disable touch scrolling

    return () => {
        // Cleanup just in case
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.touchAction = '';
    };
  }, []);

  const handleEnter = async () => {
    soundService.playClick();
    
    // Trigger Full Screen (Optional/Best Effort)
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        await (document.documentElement as any).webkitRequestFullscreen();
      }
    } catch (err) {
      console.log("Full screen info: ", err);
    }

    // Unlock scrolling immediately before animation starts
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.body.style.touchAction = '';

    // Start fade-out animation
    setStatus('success');
    
    // Wait for animation to finish before removing from DOM
    setTimeout(() => {
        setStatus('hidden');
    }, 1000);
  };

  if (status === 'hidden') return null;

  return (
    <div 
        className={`fixed inset-0 z-[99999] bg-[#050709] flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${
            status === 'success'
                ? 'opacity-0 scale-[1.5] pointer-events-none filter blur-xl' 
                : 'opacity-100 scale-100'
        }`}
        style={{ cursor: 'auto' }} 
        // Prevent scrolling events from bubbling up
        onTouchMove={(e) => e.preventDefault()}
        onWheel={(e) => e.preventDefault()}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      
      {/* Content - Visible during idle and fades out on success */}
      <div className="relative z-10 max-w-lg w-full animate-fade-in-up">
            <div className="mb-10 flex justify-center">
                <div className="w-24 h-24 bg-[#0B0E11] rounded-3xl border border-white/10 flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-trading-accent/5 rounded-3xl blur-xl group-hover:bg-trading-accent/20 transition-all duration-500"></div>
                    
                    {/* Custom Logo Image */}
                    <img 
                        src="https://i.postimg.cc/hv0LGvMv/Chat-GPT-Image-Feb-15-2026-02-17-14-PM.png"
                        alt="System Core"
                        className="w-full h-full object-cover relative z-10 opacity-90 group-hover:opacity-100 transition-opacity p-1"
                    />
                    
                    {/* Rotating Ring */}
                    <div className="absolute inset-0 border border-white/5 rounded-3xl animate-[spin_10s_linear_infinite] z-20 pointer-events-none"></div>
                </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter uppercase">
                KoKo<span className="text-trading-accent">Fx</span>
            </h1>
            <p className="text-gray-500 tracking-[0.5em] text-xs font-bold uppercase mb-12">System Access Required</p>
            
            <button 
                onClick={handleEnter}
                className="group relative w-full py-6 bg-white text-black font-black text-lg uppercase tracking-[0.15em] rounded-xl hover:bg-trading-accent transition-all shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] hover:scale-[1.02] flex items-center justify-center gap-4 active:scale-95 overflow-hidden border border-transparent hover:border-white/20"
            >
                <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <Maximize size={20} />
                <span>Initialize System</span>
            </button>
            
            <div className="mt-8 flex justify-center gap-6 text-[10px] text-gray-600 font-mono uppercase">
                <span className="flex items-center gap-1.5"><Lock size={10} /> Secure Connection</span>
                <span className="flex items-center gap-1.5"><Wifi size={10} /> Live Data Feed</span>
            </div>
        </div>

    </div>
  );
};

export default FullScreenOverlay;