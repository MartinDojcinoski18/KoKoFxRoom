import React from 'react';
import { Percent, Scale, ShieldCheck, Wallet, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-[#050709] border-y border-white/5 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/5 pb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                        <span className="w-1 h-8 bg-trading-accent"></span>
                        Performance Metrics
                    </h2>
                    <p className="text-gray-500 font-mono text-sm max-w-xl">
                        AUDITED ACCOUNT REPORT /// CAPITAL: €10,000 /// LIVE EXECUTION
                    </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-trading-accent bg-trading-accent/5 px-4 py-2 rounded border border-trading-accent/20">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    SYSTEM ACTIVE
                </div>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            
            {/* Stat Card 1: Win Rate */}
            <ScrollReveal delay={0}>
                <div className="group bg-[#0B0E11] p-10 hover:bg-[#11161d] transition-colors duration-500 relative h-full">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                             <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Win Probability</p>
                             <p className="text-xs text-gray-600 font-mono">Based on 1000+ trades</p>
                        </div>
                        <Percent size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-5xl md:text-6xl font-medium text-white tracking-tight">66</span>
                        <span className="text-xl text-gray-500">%</span>
                    </div>

                    <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-white w-[66%] group-hover:bg-trading-accent transition-colors duration-500"></div>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                        We don't aim for 100%. We aim for mathematical expectancy. Losses are simply the cost of doing business.
                    </p>
                </div>
            </ScrollReveal>

            {/* Stat Card 2: Risk:Reward */}
            <ScrollReveal delay={100}>
                <div className="group bg-[#0B0E11] p-10 hover:bg-[#11161d] transition-colors duration-500 relative h-full">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                             <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Risk To Reward</p>
                             <p className="text-xs text-gray-600 font-mono">Average RR Profile</p>
                        </div>
                        <Scale size={20} className="text-gray-600 group-hover:text-trading-accent transition-colors" />
                    </div>
                    
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-5xl md:text-6xl font-medium text-trading-accent tracking-tight">1:3</span>
                        <span className="text-xl text-gray-500 font-mono">+</span>
                    </div>

                    <div className="flex gap-1 mb-4">
                        <div className="h-1 flex-1 bg-red-900/50 rounded-full"></div>
                        <div className="h-1 flex-[3] bg-trading-accent rounded-full"></div>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                        One win covers three losses. This is the only "secret" in trading. We let winners run and cut losers instantly.
                    </p>
                </div>
            </ScrollReveal>

            {/* Stat Card 3: Risk Per Trade */}
            <ScrollReveal delay={200}>
                <div className="group bg-[#0B0E11] p-10 hover:bg-[#11161d] transition-colors duration-500 relative h-full">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                             <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Max Drawdown Risk</p>
                             <p className="text-xs text-gray-600 font-mono">Per Position</p>
                        </div>
                        <ShieldCheck size={20} className="text-gray-600 group-hover:text-green-500 transition-colors" />
                    </div>
                    
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-5xl md:text-6xl font-medium text-white tracking-tight">1.0</span>
                        <span className="text-xl text-gray-500">%</span>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-xs font-mono text-green-500">
                        <ShieldCheck size={12} />
                        <span>CAPITAL PROTECTED</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Strict risk parameters. We survive the bad days to thrive on the good ones. We never gamble with rent money.
                    </p>
                </div>
            </ScrollReveal>
        </div>
        
        {/* Audit Footer */}
        <div className="mt-8 flex justify-between items-center text-[10px] text-gray-600 font-mono uppercase tracking-wider">
            <span>Last Audit: Today</span>
            <div className="flex items-center gap-2">
                <span>Verified Data</span>
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <span>KoKoFx Internal</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;