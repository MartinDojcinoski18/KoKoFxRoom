import React from 'react';
import { Crosshair, BarChart2, ArrowUpRight, TrendingDown } from 'lucide-react';

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 bg-[#0B0E11] overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-trading-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
         <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-trading-accent text-xs font-bold tracking-widest uppercase mb-6 hover:bg-white/10 transition-colors cursor-default">
            <Crosshair size={14} />
            Proof of Concept
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
            Precision in <span className="text-transparent bg-clip-text bg-gradient-to-r from-trading-accent to-yellow-200">Action</span>
          </h2>
          <p className="text-trading-muted text-lg max-w-2xl mx-auto leading-relaxed">
            I don't just talk. These are <span className="text-white font-bold">MY REAL EXECUTIONS</span>.
            Clean Price Action. Clear Structure. Sniper Entries.
          </p>
        </div>

        {/* Flat Grid Container */}
        <div className="relative max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 items-center">
            
            {/* Chart 1: EUR/USD (Short/Breakdown) */}
            <div className="group relative transition-all duration-300 hover:-translate-y-2">
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#151A21] shadow-2xl group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)] transition-all">
                
                {/* Header Strip */}
                <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center justify-between px-6 pt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-xs font-mono text-gray-300">LIVE EXECUTION</span>
                    </div>
                    <div className="text-xs font-bold text-white bg-blue-500/20 px-2 py-1 rounded border border-blue-500/30">M5 FRAME</div>
                </div>

                {/* Info Badge */}
                <div className="absolute top-6 left-6 z-30">
                     <div className="px-4 py-3 rounded-xl flex items-center gap-3 border border-white/10 bg-black/60 backdrop-blur-md">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30">
                            €
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">EUR/USD</p>
                            <p className="text-blue-400 text-[10px] font-mono uppercase">Clean Breakdown</p>
                        </div>
                     </div>
                </div>

                {/* Image */}
                <div className="aspect-[16/9] relative overflow-hidden bg-[#0B0E11]">
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10"></div>
                     <img 
                        src="https://i.postimg.cc/SNW5YqJH/trade1-png.png" 
                        alt="EURUSD Chart Analysis" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop";
                            e.currentTarget.onerror = null;
                        }}
                    />
                </div>

                {/* Bottom Stats */}
                <div className="bg-[#0B0E11] p-6 border-t border-white/5 flex justify-between items-center relative z-20">
                     <div>
                        <p className="text-trading-muted text-xs uppercase tracking-wider mb-1">Structure</p>
                        <div className="flex items-center gap-2 text-white font-bold">
                            <TrendingDown size={16} className="text-red-400" />
                            <span>Bearish Flow</span>
                        </div>
                     </div>
                     <div className="h-8 w-px bg-white/10"></div>
                     <div>
                        <p className="text-trading-muted text-xs uppercase tracking-wider mb-1">Result</p>
                        <p className="text-green-400 font-bold">Full Take Profit</p>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                        <ArrowUpRight size={18} />
                     </div>
                </div>
              </div>
            </div>

            {/* Chart 2: GBP/USD (Long/Sniper) */}
            <div className="group relative transition-all duration-300 hover:-translate-y-2 lg:translate-y-12">
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#151A21] shadow-2xl group-hover:shadow-[0_20px_60px_rgba(212,175,55,0.1)] transition-all">
                
                {/* Header Strip */}
                <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center justify-between px-6 pt-2">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-mono text-gray-300">A+ SETUP</span>
                    </div>
                    <div className="text-xs font-bold text-white bg-trading-accent/20 px-2 py-1 rounded border border-trading-accent/30 text-trading-accent">M3 FRAME</div>
                </div>

                 {/* Info Badge */}
                 <div className="absolute top-6 right-6 z-30">
                     <div className="px-4 py-3 rounded-xl flex items-center gap-3 border border-white/10 bg-black/60 backdrop-blur-md">
                        <div className="text-right">
                            <p className="text-white font-bold text-sm">GBP/USD</p>
                            <p className="text-trading-accent text-[10px] font-mono uppercase">Sniper Entry</p>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-trading-accent/20 flex items-center justify-center text-trading-accent font-bold border border-trading-accent/30">
                            £
                        </div>
                     </div>
                </div>

                {/* Image */}
                <div className="aspect-[16/9] relative overflow-hidden bg-[#0B0E11]">
                    <div className="absolute inset-0 bg-yellow-900/10 mix-blend-overlay z-10"></div>
                     <img 
                        src="https://i.postimg.cc/Y0QXFfqc/trade2-png.png" 
                        alt="GBPUSD Chart Analysis" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        onError={(e) => {
                             e.currentTarget.src = "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1200&auto=format&fit=crop";
                             e.currentTarget.onerror = null;
                        }}
                    />
                </div>

                {/* Bottom Stats */}
                <div className="bg-[#0B0E11] p-6 border-t border-white/5 flex justify-between items-center relative z-20">
                     <div>
                        <p className="text-trading-muted text-xs uppercase tracking-wider mb-1">Structure</p>
                        <div className="flex items-center gap-2 text-white font-bold">
                            <BarChart2 size={16} className="text-trading-accent" />
                            <span>Continuation</span>
                        </div>
                     </div>
                     <div className="h-8 w-px bg-white/10"></div>
                     <div>
                        <p className="text-trading-muted text-xs uppercase tracking-wider mb-1">Ratio</p>
                        <p className="text-white font-bold">1:5 RR Secured</p>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                        <ArrowUpRight size={18} />
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