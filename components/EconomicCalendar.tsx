import React, { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const EconomicCalendar: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = widgetContainerRef.current;
    if (!currentContainer) return;

    // Clean up previous instances to prevent React strict mode duplication
    currentContainer.innerHTML = '';

    let rafId: number | null = null;

    rafId = requestAnimationFrame(() => {
        if (!currentContainer) return;

        const container = document.createElement('div');
        container.className = 'tradingview-widget-container';
        container.style.width = '100%';
        container.style.height = '100%';
        
        const widget = document.createElement('div');
        widget.className = 'tradingview-widget-container__widget';
        container.appendChild(widget);

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = JSON.stringify({
          "colorTheme": "dark",
          "isTransparent": true,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "importanceFilter": "0,1", // Shows Medium and High impact events
          "currencyFilter": "USD,EUR,GBP,JPY,CAD,AUD,CHF", // Major pairs only
          "text": "#E0E6ED"
        });

        container.appendChild(script);
        currentContainer.appendChild(container);
    });

    return () => {
        if (rafId) cancelAnimationFrame(rafId);
        if (currentContainer) {
            currentContainer.innerHTML = '';
        }
    };
  }, []);

  return (
    <section id="calendar" className="py-24 bg-[#0B0E11] relative border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-trading-accent/50 to-transparent"></div>
      
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

        <div className="max-w-5xl mx-auto bg-[#151A21] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Custom Header to mask standard widget feel */}
            <div className="flex items-center gap-3 border-b border-white/5 p-4 bg-[#1A2029]">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Connection Established</span>
            </div>

            {/* TradingView Widget Wrapper with fixed height to prevent collapse */}
            <div 
                ref={widgetContainerRef} 
                className="w-full h-[600px] bg-[#151A21]"
                style={{ minHeight: '600px' }}
            >
                {/* Script will be injected here */}
            </div>
            
            {/* Bottom bar masking */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-[#151A21] pointer-events-none z-20"></div>
        </div>

      </div>
    </section>
  );
};

export default EconomicCalendar;