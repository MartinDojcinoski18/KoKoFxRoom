import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-[#0B0E11]">
      {/* Subtle Dot Grid Pattern - cleaner and less intrusive */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
        }}
      ></div>

      {/* Ambient Glows - Slow moving, elegant gradients (Aurora effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-trading-accent/5 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-purple-600/5 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      
      {/* Inline styles for the slow organic movement */}
      <style>{`
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
            animation: blob 20s infinite ease-in-out;
        }
        .animation-delay-2000 {
            animation-delay: 4s;
        }
        .animation-delay-4000 {
            animation-delay: 8s;
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;