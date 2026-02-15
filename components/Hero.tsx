import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';
import { soundService } from '../services/soundService';

interface HeroProps {
    isReady?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isReady = true }) => {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    // iOS check to prevent blank hero section
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (isIOS) {
        setForceShow(true);
    }
  }, []);

  // If system is ready OR we are on iOS (forceShow), animate in.
  const shouldShow = isReady || forceShow;
  // 'hero-animate-mobile' allows CSS to override opacity on mobile
  const animClass = shouldShow ? 'animate-fade-in-up' : 'opacity-0 hero-animate-mobile';

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-[#0B0E11]">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-trading-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* 3D BOARD HERO ELEMENT */}
        <div className={`perspective-1000 mb-16 ${animClass}`} style={{animationDelay: '0s'}}>
            <div className="relative transform transition-transform duration-500 hover:scale-105 hover:rotate-1 cursor-default group">
                
                {/* Glow behind */}
                <div className="absolute inset-0 bg-trading-accent/20 blur-3xl rounded-2xl group-hover:bg-trading-accent/30 transition-all duration-700"></div>
                
                {/* The 3D Board Itself */}
                <div className="relative bg-[#151A21] border border-white/10 px-12 py-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-5 bg-gradient-to-b from-[#1a2029] to-[#0B0E11] overflow-hidden">
                    
                    {/* Top Highlight (Glass edge) */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    
                    {/* Metallic Shine Animation */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>

                    {/* Indicator Light */}
                    <div className="relative">
                        <div className="w-3 h-3 bg-trading-accent rounded-full shadow-[0_0_15px_#D4AF37] animate-pulse"></div>
                        <div className="absolute inset-0 bg-trading-accent rounded-full animate-ping opacity-20"></div>
                    </div>

                    {/* Text 3D Effect */}
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-[0.2em] uppercase drop-shadow-2xl" style={{textShadow: '0 4px 10px rgba(0,0,0,0.8)'}}>
                        KoKo<span className="text-trading-accent">Fx</span>
                    </h1>
                </div>
                
                {/* 3D Depth/Shadow Layer */}
                <div className="absolute top-3 left-3 w-full h-full bg-black/60 rounded-2xl -z-10 blur-sm"></div>
            </div>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight mb-8 ${animClass}`} style={{animationDelay: '0.1s'}}>
            Master the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trading-accent to-yellow-200">London Session.</span>
        </h1>
        
        <p className={`text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed ${animClass}`} style={{animationDelay: '0.2s'}}>
          Join the community of disciplined traders. 
          <br />
          Built on 4+ years of Price Action experience and strict Risk Management.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto ${animClass}`} style={{animationDelay: '0.3s'}}>
            <a 
                href="https://discord.gg/4znatm94Fv"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundService.playClick()}
                className="flex-1 px-8 py-4 bg-trading-accent text-black font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-[#ffe16b] transition-all flex items-center justify-center gap-3 shadow-lg shadow-trading-accent/20"
            >
                <span>Join Discord</span>
                <ArrowRight size={16} />
            </a>

            <button 
                onClick={() => {
                    soundService.playClick();
                    document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3 rounded-xl"
            >
                <BarChart2 size={16} />
                <span>View Results</span>
            </button>
        </div>

        {/* Stats Strip */}
        <div className={`mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-8 ${animClass}`} style={{animationDelay: '0.4s'}}>
            <div className="text-center">
                <p className="text-3xl font-bold text-white">4+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Years Experience</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Free Education</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-white">GBP/USD</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Primary Pair</p>
            </div>
        </div>

      </div>
      
      <style>{`
        @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;