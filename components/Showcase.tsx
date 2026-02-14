import React from 'react';
import { Crosshair } from 'lucide-react';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 bg-[#050709] overflow-hidden relative border-t border-white/5">
      {/* Subtle Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
         <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-trading-accent/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/10 bg-white/5 text-gray-400 text-[10px] font-mono tracking-widest uppercase mb-6">
                    <Crosshair size={12} />
                    Trade Journal Log
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                    Execution <span className="text-trading-accent">Log.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Real setups. Real timestamps. No hindsight. <br/>
                    We document the process, not just the profit.
                </p>
            </div>
            <div className="hidden md:block">
                 <a href="https://t.me/kokofxroom" className="text-sm font-bold text-white border-b border-trading-accent pb-1 hover:text-trading-accent transition-colors">
                    View Live in Telegram &rarr;
                 </a>
            </div>
        </div>

        {/* Flat Grid Container */}
        <div className="relative max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Chart 1: EUR/USD - Technical Journal Entry */}
            <div className="group relative">
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0E1217] hover:border-white/20 transition-all duration-300">
                
                {/* Technical Header */}
                <div className="bg-[#151A21] px-6 py-4 border-b border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-xs border border-blue-500/20">EU</div>
                             <div>
                                <h4 className="text-white font-bold text-sm">EUR/USD</h4>
                                <p className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">Short Position</p>
                             </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-2 py-1 bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold rounded uppercase">Sell</span>
                        <span className="px-2 py-1 bg-white/5 text-gray-400 border border-white/10 text-[10px] font-bold rounded uppercase">M5</span>
                    </div>
                </div>

                {/* Image Area */}
                <div className="aspect-[16/10] relative overflow-hidden bg-[#000] group-hover:opacity-90 transition-opacity">
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                    
                     <img 
                        src="https://i.postimg.cc/SNW5YqJH/trade1-png.png" 
                        alt="EURUSD Chart Analysis" 
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop";
                            e.currentTarget.onerror = null;
                        }}
                    />
                </div>

                {/* Journal Data */}
                <div className="p-6 grid grid-cols-2 gap-6 bg-[#0E1217]">
                     <div>
                        <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Technical Confluence</p>
                        <p className="text-gray-300 text-xs leading-relaxed">
                            Liquidity Sweep of Asian Highs + Break of Structure (BOS) on M5 timeframe. Entry on retest.
                        </p>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between text-xs border-b border-white/5 pb-1">
                            <span className="text-gray-500">Risk</span>
                            <span className="text-white font-mono">0.5%</span>
                        </div>
                        <div className="flex justify-between text-xs border-b border-white/5 pb-1">
                            <span className="text-gray-500">Reward</span>
                            <span className="text-green-400 font-mono">+1.5%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Session</span>
                            <span className="text-blue-400 font-mono">London</span>
                        </div>
                     </div>
                </div>
              </div>
            </div>

            {/* Chart 2: GBP/USD - Technical Journal Entry */}
            <div className="group relative">
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0E1217] hover:border-trading-accent/20 transition-all duration-300">
                
                {/* Technical Header */}
                <div className="bg-[#151A21] px-6 py-4 border-b border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded bg-trading-accent/10 flex items-center justify-center text-trading-accent font-bold text-xs border border-trading-accent/20">GU</div>
                             <div>
                                <h4 className="text-white font-bold text-sm">GBP/USD</h4>
                                <p className="text-gray-500 text-[10px] uppercase font-mono tracking-wider">Long Position</p>
                             </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold rounded uppercase">Buy</span>
                        <span className="px-2 py-1 bg-white/5 text-gray-400 border border-white/10 text-[10px] font-bold rounded uppercase">M15</span>
                    </div>
                </div>

                {/* Image Area */}
                <div className="aspect-[16/10] relative overflow-hidden bg-[#000] group-hover:opacity-90 transition-opacity">
                    {/* Grid Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                    
                     <img 
                        src="https://i.postimg.cc/SNW5YqJH/trade2-png.png" 
                        alt="GBPUSD Chart Analysis" 
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1200&auto=format&fit=crop";
                            e.currentTarget.onerror = null;
                        }}
                    />
                </div>

                {/* Journal Data */}
                <div className="p-6 grid grid-cols-2 gap-6 bg-[#0E1217]">
                     <div>
                        <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Technical Confluence</p>
                        <p className="text-gray-300 text-xs leading-relaxed">
                            Reaction from 4H Order Block + Shift in Market Structure on 15m.
                        </p>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between text-xs border-b border-white/5 pb-1">
                            <span className="text-gray-500">Risk</span>
                            <span className="text-white font-mono">1.0%</span>
                        </div>
                        <div className="flex justify-between text-xs border-b border-white/5 pb-1">
                            <span className="text-gray-500">Reward</span>
                            <span className="text-green-400 font-mono">+3.0%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-500">Session</span>
                            <span className="text-blue-400 font-mono">NY</span>
                        </div>
                     </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;