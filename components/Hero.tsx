import React from 'react';
import { ArrowRight, Activity, ShieldCheck, TrendingUp } from 'lucide-react';
import { soundService } from '../services/soundService';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-10">
      
      {/* Dynamic Background Spotlight - Static Blur instead of Animation for Performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-trading-accent/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 text-xs font-medium mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="tracking-wide uppercase">Breaking the Cycle</span>
        </div>

        {/* CLEAN TYPOGRAPHY HERO */}
        <div className="mb-12 select-none">
            <h1 className="text-7xl md:text-[140px] font-black leading-none tracking-tighter text-white drop-shadow-2xl">
                KOKO<span className="text-transparent bg-clip-text bg-gradient-to-br from-trading-accent to-[#8a7018]">FX</span>
            </h1>
            <div className="h-2 w-32 bg-trading-accent mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          The industry wants you to fail so they can sell you a solution. <br className="hidden md:block"/>
          <span className="text-white font-medium">I'm here to show you the truth for free.</span>
        </p>

        {/* CTA Buttons - Clean & Fast */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
            <a 
                href="https://t.me/kokofxroom"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundService.playClick()}
                className="group relative px-8 py-4 bg-white text-black font-black text-lg rounded-xl hover:bg-gray-200 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-3"
            >
                ENTER THE ROOM
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button 
                onClick={() => {
                    soundService.playClick();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-[#151A21] text-white font-bold text-lg rounded-xl border border-white/10 hover:bg-[#1f2630] transition-all hover:-translate-y-1"
            >
                THE MISSION
            </button>
        </div>

        {/* Trust Indicators / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 max-w-5xl mx-auto border-t border-white/10 pt-10">
          <div className="text-center group cursor-default">
            <div className="flex justify-center mb-2 text-trading-muted group-hover:text-white transition-colors"><Activity size={24}/></div>
            <p className="text-2xl font-bold text-white tracking-tight">No</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Hidden Fees</p>
          </div>
          <div className="text-center group cursor-default">
             <div className="flex justify-center mb-2 text-trading-muted group-hover:text-white transition-colors"><ShieldCheck size={24}/></div>
            <p className="text-2xl font-bold text-white tracking-tight">100%</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Honesty</p>
          </div>
           <div className="text-center group cursor-default">
             <div className="flex justify-center mb-2 text-trading-muted group-hover:text-white transition-colors"><TrendingUp size={24}/></div>
            <p className="text-2xl font-bold text-white tracking-tight">Real</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Market Logic</p>
          </div>
           <div className="text-center group cursor-default">
             <div className="flex justify-center mb-2 text-trading-muted group-hover:text-white transition-colors"><span className="text-xl font-serif italic">i</span></div>
            <p className="text-2xl font-bold text-white tracking-tight">Est.</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">2017 Journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;