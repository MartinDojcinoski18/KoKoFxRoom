import React from 'react';
import { Book, Search, CornerDownRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const terms = [
  {
    term: "Liquidity Sweep",
    def: "When price aggressively moves above a high or below a low to trigger Stop Losses, fueling a move in the opposite direction. Banks use this to fill their large orders.",
    tag: "Entry Model"
  },
  {
    term: "B.O.S (Break of Structure)",
    def: "A continuation signal where price breaks a key high (in an uptrend) or low (in a downtrend) and closes beyond it, confirming the trend is healthy.",
    tag: "Trend"
  },
  {
    term: "FVG (Fair Value Gap)",
    def: "An imbalance left in the market after an aggressive move. Price often returns to this 'gap' to rebalance before continuing.",
    tag: "Confluence"
  },
  {
    term: "Order Block",
    def: "The last opposing candle before a strong impulsive move that breaks structure. This area acts as a high-probability zone for entry upon retest.",
    tag: "POI"
  },
  {
    term: "Inducement",
    def: "A trap created by the market to lure early buyers or sellers into a trade before the real move happens. We wait for inducement to be taken.",
    tag: "Trap"
  },
  {
    term: "Risk Reward (RR)",
    def: "The ratio of potential profit to potential loss. We never take trades with less than 1:2 RR. One winner should cover two losers.",
    tag: "Math"
  }
];

const Glossary: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1318]">
      <div className="container mx-auto px-6">
        
        <ScrollReveal>
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-white mb-4 bg-white/5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                    <Book size={14} />
                    <span>The Language of Price</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Glossary</span></h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    To trade like a professional, you must speak the language. 
                    These are the concepts we use every day in the Room.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {terms.map((item, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                    <div className="group h-full bg-[#151A21] border border-white/5 hover:border-trading-accent/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-trading-accent transition-colors">
                                {item.term}
                            </h3>
                            <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono uppercase text-gray-500 group-hover:text-white transition-colors">
                                {item.tag}
                            </span>
                        </div>
                        
                        <div className="flex gap-3">
                            <CornerDownRight size={16} className="text-trading-muted shrink-0 mt-1" />
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.def}
                            </p>
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