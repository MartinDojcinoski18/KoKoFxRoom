import React from 'react';
import { Crosshair, Loader2, Lock } from 'lucide-react';

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
                 <a href="https://discord.gg/4znatm94Fv" className="text-sm font-bold text-white border-b border-trading-accent pb-1 hover:text-trading-accent transition-colors">
                    View Live in Discord &rarr;
                 </a>
            </div>
        </div>

        {/* Placeholder Container - Replacing the Charts Grid */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#0E1217] border border-white/5 rounded-2xl p-16 text-center relative overflow-hidden group hover:border-white/10 transition-colors">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500">
                    <Lock size={32} className="text-gray-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Awaiting Live Data</h3>
                
                <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed mb-8">
                    The public trade journal is currently being prepared for the new season. 
                    Verified breakdowns and chart analysis will be uploaded here as soon as the next high-probability setup occurs.
                </p>

                <div className="flex items-center gap-3 px-5 py-2 bg-trading-accent/5 border border-trading-accent/20 rounded-full">
                    <Loader2 size={14} className="text-trading-accent animate-spin" />
                    <span className="text-xs font-bold text-trading-accent uppercase tracking-widest">System Ready</span>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;