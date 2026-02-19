import React from 'react';
import { User, BookOpen, TrendingUp, Monitor } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0F1318] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-6xl mx-auto">
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 text-trading-accent mb-6 bg-trading-accent/10 px-3 py-1 rounded-full w-fit">
                    <User size={14} />
                    <span className="uppercase tracking-widest text-xs font-bold">About Me</span>
                </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <ScrollReveal delay={100}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                            Dedicated to the <br />
                            <span className="text-trading-accent">Process of Trading.</span>
                        </h2>
                    </ScrollReveal>

                    <div className="prose prose-invert max-w-none">
                        <ScrollReveal delay={200}>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I am <strong className="text-white">Martin Dojcinoski</strong>, the Head Trader behind KoKo Market Journal. I have been navigating the financial markets for <strong>8 years</strong>. 
                                My journey wasn't easy—it was built on thousands of hours of chart time, trial, error, and eventual consistency.
                            </p>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={300}>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I specialize in <strong>Price Action</strong> and Market Structure. I trade a diversified portfolio using <strong>Interactive Brokers (IBKR)</strong> and <strong>Trading212</strong>, alongside traditional Forex pairs.
                                I don't believe in magic indicators. I believe in discipline, patience, and strict risk management.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={400}>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                KoKo Market Journal is my personal community where I share my analysis, my wins, and my losses transparently. 
                                My goal is to help other traders shorten their learning curve by showing them the reality of the markets.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* IMAGE COLUMN */}
                <ScrollReveal delay={200} direction="left">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-trading-accent/20 rounded-2xl blur-2xl group-hover:bg-trading-accent/30 transition-all duration-500"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#151A21]">
                            <img 
                                src="https://image2url.com/r2/default/images/1771519802057-472ff88e-c99e-4402-9a75-122cceab48f1.png" 
                                alt="Martin Dojcinoski" 
                                className="w-full h-[500px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1318] via-transparent to-transparent opacity-60"></div>
                            
                            {/* Floating Name Tag */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                                    <p className="text-white font-bold text-lg">Martin Dojcinoski</p>
                                    <p className="text-trading-accent text-xs uppercase tracking-widest font-bold">Head Trader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ScrollReveal delay={500}>
                    <div className="bg-[#151A21] p-6 rounded-xl border border-white/5 h-full hover:border-trading-accent/30 transition-colors">
                        <BookOpen className="w-8 h-8 text-trading-accent mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Education First</h4>
                        <p className="text-sm text-gray-400">
                            I provide educational resources and breakdowns of every trade I take, explaining the "Why" behind the move.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                    <div className="bg-[#151A21] p-6 rounded-xl border border-white/5 h-full hover:border-blue-500/30 transition-colors">
                        <Monitor className="w-8 h-8 text-blue-400 mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Multi-Platform</h4>
                        <p className="text-sm text-gray-400">
                            Execution on professional-grade brokers like <span className="text-white font-bold">IBKR</span> & <span className="text-white font-bold">Trading212</span> for maximum reliability.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={700}>
                    <div className="bg-[#151A21] p-6 rounded-xl border border-white/5 h-full hover:border-green-500/30 transition-colors">
                        <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
                        <h4 className="text-xl font-bold text-white mb-2">Consistency</h4>
                        <p className="text-sm text-gray-400">
                            Focusing on long-term growth. We treat trading as a serious business, not a casino.
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