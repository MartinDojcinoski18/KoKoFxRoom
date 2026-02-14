import React from 'react';
import { Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050709]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                    NO MORE <span className="text-trading-accent">EXCUSES.</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed font-light">
                    You have seen the logic. You have seen the results. <br/>
                    The door is open, but you have to walk through it.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a 
                        href="https://t.me/kokofxroom" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative px-10 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:-translate-y-1 w-full md:w-auto flex items-center justify-center gap-4"
                    >
                        <span>ENTER THE ROOM</span>
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;