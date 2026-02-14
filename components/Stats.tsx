import React from 'react';
import { Percent, Scale, ShieldAlert, Calculator, Wallet } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-[#0F1318]/80 backdrop-blur-sm border-y border-white/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Math on a <span className="text-trading-accent">10k Account</span>
                </h2>
                <p className="text-trading-muted max-w-xl">
                    Trading is a game of probabilities. These are the real numbers I work with on my personal €10,000 capital. Transparency above all.
                </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <Wallet size={16} />
                <span>Active Capital: €10,000</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat Card 1: Win Rate */}
            <div className="group bg-[#151A21] p-8 rounded-2xl border border-white/5 hover:border-trading-accent/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-green-500/20"></div>
                
                <div className="flex items-center gap-3 mb-4 text-green-400">
                    <Percent size={24} />
                    <span className="font-bold tracking-widest text-xs uppercase">Win Rate</span>
                </div>
                
                <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-105 transition-transform origin-left">
                    66<span className="text-2xl text-trading-muted">%</span>
                </div>
                
                <p className="text-trading-muted text-sm leading-relaxed mt-4 border-t border-white/5 pt-4">
                    With a 66% win rate, the math works in my favor. Losses are part of the game, but at the end of the month, the account grows.
                </p>
            </div>

            {/* Stat Card 2: Risk:Reward */}
            <div className="group bg-[#151A21] p-8 rounded-2xl border border-trading-accent/20 shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-trading-accent/10 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-trading-accent/20"></div>
                
                <div className="flex items-center gap-3 mb-4 text-trading-accent">
                    <Scale size={24} />
                    <span className="font-bold tracking-widest text-xs uppercase">Risk : Reward</span>
                </div>
                
                <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-105 transition-transform origin-left">
                    1:3<span className="text-xl text-trading-muted align-top">+</span>
                </div>
                
                <p className="text-trading-muted text-sm leading-relaxed mt-4 border-t border-white/5 pt-4">
                    The Holy Grail. For every <span className="text-white font-bold">100€</span> I risk (1%), I aim to make <span className="text-trading-accent font-bold">300€</span>. One good trade covers 3 losses.
                </p>
            </div>

            {/* Stat Card 3: Risk Per Trade */}
            <div className="group bg-[#151A21] p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-red-500/20"></div>
                
                <div className="flex items-center gap-3 mb-4 text-red-400">
                    <ShieldAlert size={24} />
                    <span className="font-bold tracking-widest text-xs uppercase">Strict Risk</span>
                </div>
                
                <div className="text-5xl md:text-6xl font-black text-white mb-2 group-hover:scale-105 transition-transform origin-left">
                    1<span className="text-2xl text-trading-muted">%</span>
                </div>
                
                <p className="text-trading-muted text-sm leading-relaxed mt-4 border-t border-white/5 pt-4">
                    Max risk of 100€ per trade. The <span className="text-white font-bold">10,000€</span> capital is my "tool" and I must protect it at all costs.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;