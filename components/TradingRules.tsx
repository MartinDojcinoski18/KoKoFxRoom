import React from 'react';
import { AlertTriangle, Crosshair, Zap } from 'lucide-react';

const TradingRules: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1318] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-trading-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
            My 3 <span className="text-transparent bg-clip-text bg-gradient-to-r from-trading-accent to-yellow-200">Iron Rules</span>
          </h2>
          <p className="text-trading-muted text-lg max-w-2xl mx-auto leading-relaxed">
            These aren't just textbook tips. These are the pillars of my profitable system.
            Break them, and the market will punish you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rule 1: Risk - Red Theme */}
            <div className="group relative bg-[#151A21] p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-500">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative h-full bg-[#0B0E11] p-8 rounded-xl border border-white/5 overflow-hidden">
                    {/* Watermark Number */}
                    <div className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.02] group-hover:text-red-500/[0.05] transition-colors select-none">1</div>
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                            <AlertTriangle size={28} strokeWidth={2.5} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">Capital Preservation</h3>
                        
                        <p className="text-gray-400 leading-relaxed text-sm">
                            My first job is not to make money, but to not lose it. 
                            <span className="text-white font-medium block mt-2">No setup? No trade.</span> 
                            Better to miss an opportunity than to lose cash.
                        </p>
                    </div>
                </div>
            </div>

            {/* Rule 2: Quality - Gold Theme */}
            <div className="group relative bg-[#151A21] p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-500">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-b from-trading-accent/20 to-transparent rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative h-full bg-[#0B0E11] p-8 rounded-xl border border-white/5 overflow-hidden">
                    {/* Watermark Number */}
                    <div className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.02] group-hover:text-trading-accent/[0.05] transition-colors select-none">2</div>
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-trading-accent/10 flex items-center justify-center text-trading-accent mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                            <Crosshair size={28} strokeWidth={2.5} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-trading-accent transition-colors">Quality Over Quantity</h3>
                        
                        <p className="text-gray-400 leading-relaxed text-sm">
                            I trade only the <strong className="text-white">London Session</strong>. One or two trades a day.
                            <span className="text-white font-medium block mt-2">I am not a gambler.</span>
                            I don't sit 24/7 in front of a screen. I wait for the market to come to me.
                        </p>
                    </div>
                </div>
            </div>

            {/* Rule 3: Execution - Blue Theme */}
            <div className="group relative bg-[#151A21] p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-500">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative h-full bg-[#0B0E11] p-8 rounded-xl border border-white/5 overflow-hidden">
                    {/* Watermark Number */}
                    <div className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.02] group-hover:text-blue-500/[0.05] transition-colors select-none">3</div>
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                            <Zap size={28} strokeWidth={2.5} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Execution &gt; Strategy</h3>
                        
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Strategy is 10%, execution is 90%. 
                            <span className="text-white font-medium block mt-2">No fear on entry. No greed on exit.</span>
                            A robotic mindset is the key to consistency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TradingRules;