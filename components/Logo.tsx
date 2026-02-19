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
                src="https://image2url.com/r2/default/images/1771515112218-1c7f1515-2a6e-4f3e-ba94-b9ac0dcd8fef.png" 
                alt="KoKo Market Journal Logo" 
                className="w-full h-full object-cover"
            />
        </div>
      </div>

      {/* Brand Text */}
      {!iconOnly && (
        <div className="flex flex-col justify-center">
            <h1 className="text-lg md:text-xl font-black tracking-tighter text-white leading-none uppercase drop-shadow-md group-hover:text-gray-100 transition-colors">
                KoKo
            </h1>
            <span className="text-[0.6rem] md:text-[0.65rem] font-bold text-trading-accent tracking-widest uppercase leading-none mt-0.5">
                Market Journal
            </span>
        </div>
      )}
    </div>
  );
};

export default Logo;