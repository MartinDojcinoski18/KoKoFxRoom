import React from 'react';
import { Quote, Fingerprint } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-trading-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-trading-accent/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Content Container */}
        <div className="max-w-4xl mx-auto">
          
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 text-trading-accent mb-6">
                    <span className="w-12 h-0.5 bg-trading-accent"></span>
                    <span className="uppercase tracking-widest text-sm font-bold">The Operator</span>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                From <span className="text-trading-loss decoration-through decoration-trading-loss/50">Noise</span> to <br />
                <span className="text-white">Silence.</span>
                </h2>
            </ScrollReveal>

            <div className="prose prose-invert max-w-none mb-12">
                <ScrollReveal delay={200}>
                    <p className="text-trading-muted text-lg leading-relaxed">
                    I started back in <strong>2017</strong>, just a kid with a hunger for success. Like many, I was lost in the noise of "Get Rich Quick" schemes. DropShipping, Marketing, Crypto pumps... I tried it all.
                    </p>
                </ScrollReveal>
                
                <ScrollReveal delay={300}>
                    <div className="my-8 p-6 border-l-4 border-trading-accent bg-white/5 rounded-r-xl italic text-gray-300 relative">
                        <Quote className="absolute top-4 right-4 text-trading-accent/20 w-8 h-8" />
                        "I realized that fame is a liability. The best traders are ghosts. They enter, they profit, they vanish. I chose to be the Ghost."
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <p className="text-trading-muted text-lg leading-relaxed">
                    Eventually, I stripped everything away. No cameras, no rented Lamborghinis, no fake lifestyle. Just me, the charts, and <strong>Forex</strong>. Today, I trade the London Session exclusively. My face doesn't matter. My P&L does.
                    </p>
                </ScrollReveal>
            </div>

            {/* Timeline */}
            <div className="space-y-8 pl-4 border-l border-white/10 relative">
                {/* Item 1 */}
                <ScrollReveal direction="right" delay={500}>
                    <div className="relative pl-8">
                        <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-[#0B0E11] border border-white/10 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-trading-muted/50"></div>
                        </div>
                        <span className="text-sm font-mono text-trading-muted block mb-1">2017 - 2022</span>
                        <h4 className="text-xl font-bold text-white mb-2">The Learning Curve</h4>
                        <p className="text-gray-400">
                            Years of trial and error. Burning accounts. Watching fake gurus on YouTube. This was my tuition. I learned what NOT to do.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Item 2 */}
                <ScrollReveal direction="right" delay={600}>
                    <div className="relative pl-8">
                        <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-[#0B0E11] border border-trading-accent/30 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-trading-accent/50 animate-pulse"></div>
                        </div>
                        <span className="text-sm font-mono text-trading-accent block mb-1">2023 - Present</span>
                        <h4 className="text-xl font-bold text-white mb-2">The "Ghost" Era</h4>
                        <p className="text-gray-400">
                            I found consistency in anonymity. I trade one session, one or two pairs. I don't need validation from the internet. I created KoKoFx Room to share this disciplined path with a select few.
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Signature Block */}
            <ScrollReveal delay={700}>
                <div className="mt-12 flex items-center gap-4 opacity-50">
                    <Fingerprint size={48} className="text-white/20" />
                    <div>
                        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">Identity: Protected</p>
                        <p className="text-xs text-gray-600">Focus: Charts Only</p>
                    </div>
                </div>
            </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default About;