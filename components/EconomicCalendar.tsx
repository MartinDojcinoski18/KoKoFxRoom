import React, { useEffect, useRef } from 'react';
import { Calendar, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const EconomicCalendar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent duplicate script injection
    if (containerRef.current && containerRef.current.childElementCount === 0) {
      const script = document.createElement('script');
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "colorTheme": "dark",
        "isTransparent": true,
        "width": "100%",
        "height": "600",
        "locale": "en",
        "importanceFilter": "-1,0,1",
        "currencyFilter": "USD,EUR,GBP,JPY,AUD,CAD,CHF",
        "text": "#E0E6ED"
      });
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section id="calendar" className="py-24 bg-[#0B0E11] relative border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-trading-accent/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-trading-accent mb-4 bg-trading-accent/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    <Globe size={14} />
                    <span>Fundamental Data</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Economic <span className="text-trading-accent">Calendar</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Real-time data feeds. Don't get caught on the wrong side of NFP or CPI.
                </p>
            </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto bg-[#151A21] border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl relative overflow-hidden">
            {/* Custom Header to mask standard widget feel */}
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4 px-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Feed Connection</span>
            </div>

            {/* TradingView Widget Container */}
            <div className="tradingview-widget-container" ref={containerRef}>
                <div className="tradingview-widget-container__widget"></div>
            </div>
            
            {/* Overlay to hide branding if necessary (optional) */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-[#151A21] pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default EconomicCalendar;