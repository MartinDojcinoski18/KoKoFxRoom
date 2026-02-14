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
    <div className="w-full bg-trading-accent text-black overflow-hidden border-y border-trading-accent py-3 relative z-20 select-none">
      <div className="flex whitespace-nowrap animate-ticker">
        {/* Render the list twice to create a seamless infinite loop */}
        {[...mantras, ...mantras, ...mantras].map((text, index) => (
          <div key={index} className="flex items-center mx-8 font-black italic tracking-tighter text-sm md:text-base">
            <span className="mr-4">{text}</span>
            <Zap size={14} className="fill-black" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MentalTicker;