import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kokofx-cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kokofx-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] max-w-[300px] w-full animate-fade-in-up">
      <div className="bg-[#151A21] border border-trading-accent/20 p-4 rounded-xl shadow-2xl">
        <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2 text-trading-accent">
                <Cookie size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Privacy</span>
            </div>
            <button 
                onClick={() => setIsVisible(false)} 
                className="text-gray-500 hover:text-white"
            >
                <X size={14} />
            </button>
        </div>
        
        <p className="text-gray-400 text-[10px] leading-relaxed mb-3">
            We use cookies to ensure you get the best experience. By continuing, you accept our privacy policy.
        </p>
        
        <button 
            onClick={handleAccept}
            className="w-full py-2 bg-white/10 hover:bg-trading-accent hover:text-black text-white text-xs font-bold rounded transition-colors"
        >
            Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;