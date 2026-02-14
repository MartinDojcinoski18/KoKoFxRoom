import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const consent = localStorage.getItem('kokofx-cookie-consent');
    if (!consent) {
      // Show after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kokofx-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[100] animate-fade-in-up">
      <div className="bg-[#151A21]/95 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl relative">
        <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 rounded-xl text-trading-accent shrink-0">
                <Cookie size={24} />
            </div>
            <div>
                <h4 className="text-white font-bold mb-2 text-sm">Privacy & Cookies</h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    We use cookies to analyze traffic and improve the experience. We do not sell your data to brokers. By continuing, you agree to our privacy policy.
                </p>
                <div className="flex gap-3">
                    <button 
                        onClick={handleAccept}
                        className="px-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Accept All
                    </button>
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="px-4 py-2 bg-transparent text-gray-400 text-xs font-bold rounded-lg hover:text-white transition-colors"
                    >
                        Decline
                    </button>
                </div>
            </div>
            <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
                <X size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;