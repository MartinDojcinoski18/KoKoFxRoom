import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Brand Image Container */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
        
        {/* Back/Base Layer */}
        <div className="absolute inset-0 bg-[#151A21] rounded-xl border border-white/10 shadow-lg overflow-hidden group-hover:border-trading-accent/30 transition-colors">
            <img 
                src="https://i.postimg.cc/hv0LGvMv/Chat-GPT-Image-Feb-15-2026-02-17-14-PM.png" 
                alt="KoKoFx Logo" 
                className="w-full h-full object-cover"
            />
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