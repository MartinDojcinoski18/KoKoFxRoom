import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, HelpCircle, Send, ShieldCheck } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0 bg-[#151A21]/50 rounded-lg mb-2 overflow-hidden">
      <button 
        className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-white/5 transition-all group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-sm md:text-base font-bold transition-colors pr-4 ${isOpen ? 'text-trading-accent' : 'text-gray-200 group-hover:text-white'}`}>
            {question}
        </span>
        {isOpen ? (
            <div className="w-6 h-6 rounded-full bg-trading-accent/20 flex items-center justify-center text-trading-accent shrink-0 ml-4">
                <Minus size={14} />
            </div>
        ) : (
            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-gray-500 shrink-0 ml-4 group-hover:bg-white/10">
                <Plus size={14} />
            </div>
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
            {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  // Column 1: The Hard Truths (Addressing Skepticism)
  const col1 = [
    {
      question: "Why is this free? What is the catch?",
      answer: <>
        <span className="text-white font-bold block mb-2">Let's be brutally honest.</span>
        In the US and EU, you are taught that "Value = Price". But in the trading industry, <span className="text-trading-accent">paid groups exist because the mentors cannot trade.</span> They need your $50/month to pay their rent.
        <br/><br/>
        I profit from the charts. I don't need your subscription fee to survive. The "catch" is that <strong>I demand discipline</strong>. I am building a network of elite traders for a future fund. If you are lazy or ask for "signals", you will be removed.
      </>
    },
    {
      question: "Is this a 'Get Rich Quick' scheme?",
      answer: "If you are looking to get rich quickly, please close this website immediately. You are in the wrong place. Trading is a boring, slow, and difficult profession. If you want excitement, go to a casino. If you want a career, stay here."
    },
    {
      question: "Who are you and why anonymity?",
      answer: "I am a trader, not an Instagram influencer. Fame is a liability in this business. My results and my analysis speak for themselves. You don't need to see my face to see that my setups respect market structure. I trade the London Session, I take my profit, and I leave."
    },
    {
      question: "Do you sell a course?",
      answer: "Currently, NO. Everything I know is available in the Discord for free. I might offer advanced 1-on-1 coaching in the future for those who want to accelerate their curve, but the core education will always remain accessible."
    }
  ];

  // Column 2: Technical & Process
  const col2 = [
    {
      question: "I have $0. Can I join?",
      answer: "Yes. In fact, I prefer members who start with $0 and trade on Demo/Paper accounts first. Do not deposit real money until you have proven—to yourself—that you can be profitable for 3 months in a row. We respect the process here."
    },
    {
      question: "Is this a Signals Group?",
      answer: <>
        <strong className="text-red-400">Absolutely NOT.</strong> A signal service makes you dependent. I teach you how to fish. I share my setups with full analysis (Entry, SL, TP, and Reasoning). If you blindly copy without understanding "Why", you will eventually fail.
      </>
    },
    {
      question: "What capital do I need to start?",
      answer: "Start with a Demo account. Once you are consistent, you can apply for a Prop Firm challenge (FTMO, etc.) for as little as €100 to get access to €10,000 funded capital. We teach you how to pass these challenges."
    },
    {
      question: "What assets do we trade?",
      answer: "Focus is key. We primarily trade EUR/USD, GBP/USD, and occasionally Gold (XAU/USD). We do not trade 50 pairs. We master a few."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0B0E11] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-trading-accent mb-4 bg-trading-accent/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    <HelpCircle size={14} />
                    <span>No Bullsh*t Zone</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Skeptical? <br />
                    <span className="text-trading-muted">Good. You should be.</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    The industry is full of scams. Here is exactly why this is different.
                </p>
            </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-20">
            {/* Left Column */}
            <div className="space-y-2">
                <h3 className="text-white font-bold mb-6 ml-2 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-trading-accent" />
                    The Philosophy
                </h3>
                {col1.map((faq, index) => (
                    <FAQItem key={`col1-${index}`} question={faq.question} answer={faq.answer} />
                ))}
            </div>

            {/* Right Column */}
            <div className="space-y-2">
                <h3 className="text-white font-bold mb-6 ml-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    The Process
                </h3>
                {col2.map((faq, index) => (
                    <FAQItem key={`col2-${index}`} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>

        {/* Contact / Ask Me Anything Box */}
        <div className="relative bg-[#151A21] rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden text-center md:text-left">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-trading-accent/5 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="md:w-2/3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Still think it's too good to be true?
                    </h3>
                    <p className="text-trading-muted text-lg mb-6">
                        Come inside. Watch the charts. If I lose, I post the loss. If I win, I post the win. Transparency is the only way to kill skepticism.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Verified Analysis
                        </div>
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center md:justify-end">
                    <a 
                        href="https://discord.gg/4znatm94Fv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-trading-accent text-black font-bold text-lg rounded-xl transition-all hover:bg-[#c4a030] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <span>See for Yourself</span>
                        <Send className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </a>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;