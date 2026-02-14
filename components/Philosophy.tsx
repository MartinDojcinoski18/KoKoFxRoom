import React from 'react';
import { Brain, Shield, CandlestickChart, CheckCircle2 } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-[#0B0E11]">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-trading-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-trading-accent text-xs font-bold tracking-widest uppercase mb-4">
            <CheckCircle2 size={12} />
            Our Mindset
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Core <span className="text-trading-accent">Principles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trading is not about guessing. It is about following a strict set of rules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1 */}
            <div className="bg-[#151A21] border border-white/5 rounded-3xl p-8 hover:border-trading-accent/30 transition-all group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-trading-accent group-hover:scale-110 transition-transform">
                     <CandlestickChart size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Price Action</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                    We don't use lagging indicators. We read the raw price data and market structure. We trade what we see, not what we think.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#151A21] border border-white/5 rounded-3xl p-8 hover:border-trading-accent/30 transition-all group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-trading-accent group-hover:scale-110 transition-transform">
                     <Shield size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Risk Management</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                    Preserving capital is our #1 priority. We never risk more than 1% per trade. Longevity in the market comes from surviving the bad days.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#151A21] border border-white/5 rounded-3xl p-8 hover:border-trading-accent/30 transition-all group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-trading-accent group-hover:scale-110 transition-transform">
                     <Brain size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Psychology</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                    80% of trading is mindset. We focus on discipline, patience, and removing emotions from the decision-making process.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;