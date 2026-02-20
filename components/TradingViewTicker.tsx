import React, { useEffect, useRef, memo } from 'react';

const TradingViewTicker: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = container.current;
    if (!currentContainer) return;

    // Clear any existing content to prevent duplicates
    currentContainer.innerHTML = '';

    let script: HTMLScriptElement | null = null;
    let rafId: number | null = null;

    // Use requestAnimationFrame to ensure the DOM is stable before injecting
    rafId = requestAnimationFrame(() => {
      if (!currentContainer) return;
      
      script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR/USD"
          },
          {
            "proName": "FX_IDC:GBPUSD",
            "title": "GBP/USD"
          },
          {
            "proName": "FX_IDC:XAUUSD",
            "title": "Gold"
          },
          {
            "proName": "FOREXCOM:SPX500",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "dark",
        "isTransparent": true,
        "displayMode": "adaptive",
        "locale": "en"
      });
      currentContainer.appendChild(script);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-[72px]" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default memo(TradingViewTicker);
