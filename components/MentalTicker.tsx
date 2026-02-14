import React from 'react';
import { Zap } from 'lucide-react';

const mantras = [
  "PROTECT CAPITAL AT ALL COSTS",
  "NO SETUP /// NO TRADE",
  "PATIENCE PAYS THE BILLS",
  "EXECUTION OVER ANALYSIS",
  "THE MARKET OWES YOU NOTHING",
  "LOSE SMALL /// WIN BIG",
  "DISCIPLINE IS FREEDOM",
  "WAIT FOR THE CANDLE CLOSE",
  "DONT CHASE THE PUMP",
  "PLAN THE TRADE /// TRADE THE PLAN",
  "EMOTIONS ARE EXPENSIVE"
];

const MentalTicker: React.FC = () => {
  return (
    <div className="relative z-20 transform -skew-y-1 my-8">
        <div className="w-full bg-[#151A21] border-y-2 border-trading-accent shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden py-4 relative perspective-1000">
            
            {/* Glossy Overlay for 3D effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10"></div>
            
            <div className="flex whitespace-nowrap animate-ticker relative z-0">
                {/* Render the list multiple times for seamless loop */}
                {[...mantras, ...mantras, ...mantras, ...mantras].map((text, index) => (
                <div key={index} className="flex items-center mx-8">
                    <span className="font-black italic tracking-tighter text-lg md:text-xl text-white mr-4 shadow-sm" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                        {text}
                    </span>
                    <div className="flex items-center gap-1 px-3 py-1 bg-trading-accent text-black font-bold text-xs rounded uppercase tracking-widest transform -skew-x-12">
                        <Zap size={12} className="fill-black" />
                        KoKoFx
                    </div>
                </div>
                ))}
            </div>
        </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
        }
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default MentalTicker;