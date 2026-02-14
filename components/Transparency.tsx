import React from 'react';
import { Quote, Sparkles, AlertOctagon, Wallet, Users } from 'lucide-react';

const Transparency: React.FC = () => {
  return (
    <section className="py-32 bg-[#0B0E11] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-trading-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex justify-center items-center">
        
        {/* Main Card */}
        <div className="relative w-full max-w-5xl bg-[#151A21]/90 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden hover:border-trading-accent/30 transition-colors duration-500">
            
            {/* Grid Pattern inside card */}
            <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                
                {/* LEFT SIDE */}
                <div className="md:w-1/3 text-center md:text-left">
                    <div className="relative inline-flex items-center justify-center mb-8">
                            <div className="absolute inset-0 bg-trading-accent/20 blur-xl rounded-full"></div>
                            <div className="w-24 h-24 bg-gradient-to-br from-[#2a2f38] to-[#0B0E11] rounded-2xl border border-trading-accent/30 flex items-center justify-center shadow-2xl relative z-10">
                            <AlertOctagon size={48} className="text-trading-accent" />
                            <div className="absolute -top-2 -right-2">
                                <Sparkles size={20} className="text-white animate-pulse" />
                            </div>
                            </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-black text-white mb-2 leading-tight">
                            Broken <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Industry.</span>
                        </h2>
                        <p className="text-trading-muted text-sm font-medium tracking-wide uppercase mt-2">
                            We do things differently.
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE: Content */}
                <div className="md:w-2/3 space-y-8">
                    
                    {/* Intro Text */}
                    <p className="text-xl text-gray-200 leading-relaxed font-light border-l-4 border-red-500 pl-6 bg-white/5 py-4 rounded-r-xl">
                        <strong className="text-white">Why are you skeptical?</strong> 
                        Because you've seen 100 "gurus" selling courses. They charge you because they can't trade.
                    </p>
                    
                    <div className="space-y-6">
                        
                        {/* Feature 1 */}
                        <div className="flex gap-5 group/item">
                            <div className="mt-1 shrink-0 w-12 h-12 rounded-full bg-trading-accent/10 flex items-center justify-center border border-trading-accent/20 group-hover/item:scale-110 transition-transform shadow-sm">
                                <Wallet className="w-6 h-6 text-trading-accent" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg group-hover/item:text-trading-accent transition-colors">I Don't Need Your Money</h4>
                                <p className="text-sm text-trading-muted mt-1 leading-relaxed">
                                    I trade for a living. I don't need a $50 subscription from you. That is why this is free. The only cost is your <strong>Attention</strong> and <strong>Discipline</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-5 group/item">
                            <div className="mt-1 shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover/item:scale-110 transition-transform shadow-sm">
                                <Users className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg group-hover/item:text-blue-400 transition-colors">No "Get Rich Quick"</h4>
                                <p className="text-sm text-trading-muted mt-1 leading-relaxed">
                                    If you are looking for easy money, <strong className="text-red-400">LEAVE NOW</strong>. This is for serious individuals who want to treat trading as a business.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quote Box */}
                    <div className="pt-6 border-t border-white/10 relative">
                        <Quote className="absolute top-2 left-0 w-8 h-8 text-white/5 -scale-x-100" />
                        <p className="text-md text-gray-400 italic pl-8 font-serif">
                            "The only honest place in a dishonest industry is the one that doesn't ask for your credit card."
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;