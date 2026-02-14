import React from 'react';
import { Target, Zap, Users, Lock, BarChart2, BookOpen, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    title: "Educational Analysis",
    description: "I share personal ideas and setups to teach you 'why' a position is taken. Not blind following, but market understanding."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Real-Time Updates",
    description: "Instant market intelligence. When volatility strikes, we are the first to react and adapt."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Active Community",
    description: "A hub for high-level discussion. We are here to help each other grow. Your environment shapes your future."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-pink-400" />,
    title: "Free Education",
    description: "PDFs, guides, and tips that helped me become profitable—available to all members at no cost."
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-green-400" />,
    title: "Weekly Outlooks",
    description: "My game plan for the week ahead. Preparation is 50% of the work. While others sleep, we plan."
  },
  {
    icon: <Lock className="w-8 h-8 text-trading-accent" />,
    title: "Risk Management",
    description: "The most vital lesson. How to preserve capital. We learn to lose small so we can win big."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#0F1318]">
      <div className="container mx-auto px-6">
        <ScrollReveal>
            <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Join?</h2>
            <p className="text-trading-muted text-lg">Hover over the cards for details.</p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
                <div className="group h-[280px] perspective-1000 cursor-pointer">
                    <div className="flip-card-inner">
                        
                        {/* FRONT SIDE */}
                        <div className="flip-card-front glass-panel rounded-2xl border border-white/5 flex flex-col items-center justify-center p-6 hover:border-trading-accent/30 transition-colors">
                            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white text-center">{feature.title}</h3>
                            <div className="mt-6 flex items-center gap-2 text-xs text-trading-muted uppercase tracking-widest opacity-60">
                                <span>Info</span> <ArrowRight size={12} />
                            </div>
                        </div>

                        {/* BACK SIDE */}
                        <div className="flip-card-back bg-[#151A21] rounded-2xl border border-trading-accent/20 p-8 flex items-center justify-center text-center bg-gradient-to-br from-[#1A2129] to-[#0B0E11]">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-3 border-b border-white/10 pb-2 inline-block">{feature.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
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

export default Features;