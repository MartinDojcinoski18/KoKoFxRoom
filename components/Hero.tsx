import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';
import { soundService } from '../services/soundService';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-[#0B0E11]">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-trading-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-trading-accent text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-trading-accent"></span>
            KoKoFx Room
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-tight mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Master the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-trading-accent to-yellow-200">London Session.</span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Join the community of disciplined traders. 
          <br />
          Built on 4+ years of Price Action experience and strict Risk Management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <a 
                href="https://t.me/kokofxroom"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundService.playClick()}
                className="flex-1 px-8 py-4 bg-trading-accent text-black font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-[#ffe16b] transition-all flex items-center justify-center gap-3 shadow-lg shadow-trading-accent/20"
            >
                <span>Join The Room</span>
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
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
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
    </div>
  );
};

export default Hero;