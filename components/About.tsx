import React from 'react';
import { User, BookOpen, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0F1318] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 text-trading-accent mb-6 bg-trading-accent/10 px-3 py-1 rounded-full w-fit">
                    <User size={14} />
                    <span className="uppercase tracking-widest text-xs font-bold">About Me</span>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                    Dedicated to the <br />
                    <span className="text-trading-accent">Process of Trading.</span>
                </h2>
            </ScrollReveal>

            <div className="prose prose-invert max-w-none mb-12">
                <ScrollReveal delay={200}>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I am the <strong>Head Trader</strong> behind KoKoFx. I have been navigating the Forex markets for over 4 years. 
                        My journey wasn't easy—it was built on trial, error, and eventual consistency.
                    </p>
                </ScrollReveal>
                
                <ScrollReveal delay={300}>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I specialize in <strong>Price Action</strong> and <strong>Market Structure</strong>, primarily focusing on the London Session.
                        I don't believe in magic indicators or "get rich quick" schemes. I believe in discipline, patience, and strict risk management.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        KoKoFx Room is my personal community where I share my analysis, my wins, and my losses transparently. 
                        My goal is to help other traders shorten their learning curve by showing them the reality of the markets.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollReveal delay={500}>
                    <div className="bg-[#151A21] p-6 rounded-xl border border-white/5">
                        <BookOpen className="w-8 h-8 text-trading-accent mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Education First</h4>
                        <p className="text-sm text-gray-400">
                            I provide educational resources and breakdowns of every trade I take, explaining the "Why" behind the move.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                    <div className="bg-[#151A21] p-6 rounded-xl border border-white/5">
                        <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Consistency</h4>
                        <p className="text-sm text-gray-400">
                            Focusing on long-term growth rather than short-term gambling. We treat trading as a serious business.
                        </p>
                    </div>
                </ScrollReveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;