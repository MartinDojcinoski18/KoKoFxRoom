import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Static Icon Container */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
        
        {/* Back/Base Layer */}
        <div className="absolute inset-0 bg-[#151A21] rounded-xl border border-white/10 shadow-lg overflow-hidden group-hover:border-trading-accent/30 transition-colors">
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-trading-accent/5"></div>
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 flex items-center justify-center text-trading-accent drop-shadow-md">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9L13 14L9 10L6 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="9" r="2.5" fill="currentColor" />
            </svg>
        </div>
      </div>

      {/* Brand Text */}
      {!iconOnly && (
        <div className="flex flex-col justify-center">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none uppercase drop-shadow-md group-hover:text-gray-100 transition-colors">
                KoKo<span className="text-trading-accent">Fx</span>
            </h1>
            <span className="text-[0.6rem] md:text-[0.7rem] font-bold text-trading-muted tracking-[0.3em] uppercase leading-none mt-1 ml-0.5">
                Room
            </span>
        </div>
      )}
    </div>
  );
};

export default Logo;