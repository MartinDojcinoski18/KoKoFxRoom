import React from 'react';
import { Book, Crosshair, CornerDownRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const strategySteps = [
  {
    step: "01",
    title: "Market Structure",
    desc: "First, I define the flow. Bullish = Higher Highs & Higher Lows. Bearish = Lower Highs & Lower Lows. If structure is unclear, I stand aside.",
    tag: "Direction"
  },
  {
    step: "02",
    title: "Liquidity Sweep",
    desc: "The 'Stop Hunt'. I must see price take out a key High or Low to fuel the move. No Sweep = No Entry. This is where the trap is set.",
    tag: "The Fuel"
  },
  {
    step: "03",
    title: "The Shift (Change of Character)",
    desc: "After the sweep, I wait for an aggressive impulse that breaks the previous micro-structure. This confirms the reversal is real.",
    tag: "Confirmation"
  },
  {
    step: "04",
    title: "Premium / Discount",
    desc: "I never chase the impulse. I wait for price to return to the 'Golden Zone' (Fib 61.8% - 78.6%). Sell in Premium, Buy in Discount.",
    tag: "Entry Zone"
  },
  {
    step: "05",
    title: "Confluence Checklist",
    desc: "The entry must align with a POI (Order Block, Supply/Demand) or Trendline. The more confluence, the higher the probability.",
    tag: "Validation"
  },
  {
    step: "06",
    title: "Invalidation (SL)",
    desc: "Stop Loss goes strictly above the High (Sell) or below the Low (Buy). If price goes there, the trade idea is invalid. No mental stops.",
    tag: "Protection"
  },
  {
    step: "07",
    title: "The Target (TP)",
    desc: "I aim for the next pool of liquidity (Equal Highs/Lows) or HTF Zones. Minimum 1:2 Risk-Reward, ideally 1:3+. Winners must pay for losers.",
    tag: "Objective"
  },
  {
    step: "08",
    title: "The Hunter Mindset",
    desc: "I am a hunter, not a gambler. I wait for the trap. I enter only when the odds are unfairly in my favor. Otherwise, I do nothing.",
    tag: "Psychology"
  },
  {
    step: "09",
    title: "The 'No-Go' Criteria",
    desc: "No Sweep? No Trade. Bad RR? No Trade. Emotional? No Trade. Protecting capital is more important than making profit.",
    tag: "Discipline"
  }
];

const Glossary: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-[#0F1318]">
      <div className="container mx-auto px-6">
        
        <ScrollReveal>
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-white mb-4 bg-white/5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                    <Crosshair size={14} className="text-trading-accent" />
                    <span>The Playbook</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    My Strategy: <span className="text-trading-accent">Wait for A+</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    I don't chase price. I let the market come to me. 
                    If these conditions are not met, <span className="text-white font-bold">I do nothing.</span>
                </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {strategySteps.map((item, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                    <div className="group h-full bg-[#151A21] border border-white/5 hover:border-trading-accent/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                        
                        {/* Subtle background number */}
                        <div className="absolute -right-4 -top-4 text-8xl font-black text-white/[0.02] group-hover:text-trading-accent/[0.05] transition-colors select-none">
                            {item.step}
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-trading-accent transition-colors">
                                    {item.title}
                                </h3>
                                <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono uppercase text-gray-500 group-hover:text-white transition-colors border border-white/5">
                                    {item.tag}
                                </span>
                            </div>
                            
                            <div className="flex gap-3">
                                <CornerDownRight size={16} className="text-trading-muted shrink-0 mt-1" />
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Glossary;