import React from 'react';
import { Brain, Shield, CandlestickChart, XCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-[#0B0E11]">
      {/* Dark/Red Ambient Background for 'Danger' vibe */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-trading-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            <AlertTriangle size={12} />
            The Red Pill
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Unlearning the <span className="text-red-500 decoration-red-500/30 underline underline-offset-8">Lies</span>
          </h2>
          <p className="text-trading-muted text-lg max-w-2xl mx-auto">
            Before you can learn how to trade, you must forget everything "they" told you.
            <span className="block mt-2 text-white/80 text-sm">(Hover the cards to see the truth)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: Indicators Lie */}
            <div className="group h-[380px] perspective-1000 cursor-pointer">
                <div className="flip-card-inner">
                    
                    {/* FRONT - THE LIE */}
                    <div className="flip-card-front bg-[#11151B] border border-red-500/20 rounded-3xl flex flex-col items-center justify-center p-8 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500 border border-red-500/20">
                            <XCircle size={40} />
                        </div>
                        <h3 className="text-sm font-bold text-red-400 tracking-widest uppercase mb-2">The Industry Lie</h3>
                        <h4 className="text-2xl font-black text-white text-center mb-4">"You Need More Indicators"</h4>
                        <p className="text-gray-500 text-center text-sm">
                            RSI, MACD, Bollinger Bands... they tell you to stack them all. A confused trader is a losing trader.
                        </p>
                    </div>

                    {/* BACK - THE TRUTH */}
                    <div className="flip-card-back bg-[#151A21] border border-trading-accent rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-trading-accent/10 to-[#0B0E11]">
                        <div className="w-16 h-16 bg-trading-accent/20 rounded-full flex items-center justify-center mb-4 text-trading-accent">
                             <CandlestickChart size={32} />
                        </div>
                        <h3 className="text-sm font-bold text-trading-accent tracking-widest uppercase mb-2">The Reality</h3>
                        <h4 className="text-xl font-bold text-white mb-4">Price is King</h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Banks don't use RSI. They hunt liquidity. We strip the charts naked. We read raw Price Action and Market Structure.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 2: Win Rate Lie */}
            <div className="group h-[380px] perspective-1000 cursor-pointer md:-mt-8">
                <div className="flip-card-inner">
                    
                    {/* FRONT - THE LIE */}
                    <div className="flip-card-front bg-[#11151B] border border-red-500/20 rounded-3xl flex flex-col items-center justify-center p-8 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500 border border-red-500/20">
                            <XCircle size={40} />
                        </div>
                        <h3 className="text-sm font-bold text-red-400 tracking-widest uppercase mb-2">The Industry Lie</h3>
                        <h4 className="text-2xl font-black text-white text-center mb-4">"99% Accuracy Strategy"</h4>
                        <p className="text-gray-500 text-center text-sm">
                            Scammers sell you the dream of never losing. They hide their losses and delete bad history.
                        </p>
                    </div>

                    {/* BACK - THE TRUTH */}
                    <div className="flip-card-back bg-[#151A21] border border-trading-accent rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-trading-accent/10 to-[#0B0E11]">
                        <div className="w-16 h-16 bg-trading-accent/20 rounded-full flex items-center justify-center mb-4 text-trading-accent">
                             <Shield size={32} />
                        </div>
                        <h3 className="text-sm font-bold text-trading-accent tracking-widest uppercase mb-2">The Reality</h3>
                        <h4 className="text-xl font-bold text-white mb-4">You Will Lose</h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            I lose trades. We all do. The secret isn't winning every time. It's about Risk Management. Lose small, win big.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 3: Speed Lie */}
            <div className="group h-[380px] perspective-1000 cursor-pointer">
                <div className="flip-card-inner">
                    
                    {/* FRONT - THE LIE */}
                    <div className="flip-card-front bg-[#11151B] border border-red-500/20 rounded-3xl flex flex-col items-center justify-center p-8 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500 border border-red-500/20">
                            <XCircle size={40} />
                        </div>
                        <h3 className="text-sm font-bold text-red-400 tracking-widest uppercase mb-2">The Industry Lie</h3>
                        <h4 className="text-2xl font-black text-white text-center mb-4">"Get Rich in 30 Days"</h4>
                        <p className="text-gray-500 text-center text-sm">
                            Lamborghinis, Rolexes, and private jets. They sell you a lifestyle to steal your capital.
                        </p>
                    </div>

                    {/* BACK - THE TRUTH */}
                    <div className="flip-card-back bg-[#151A21] border border-trading-accent rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-trading-accent/10 to-[#0B0E11]">
                        <div className="w-16 h-16 bg-trading-accent/20 rounded-full flex items-center justify-center mb-4 text-trading-accent">
                             <Brain size={32} />
                        </div>
                        <h3 className="text-sm font-bold text-trading-accent tracking-widest uppercase mb-2">The Reality</h3>
                        <h4 className="text-xl font-bold text-white mb-4">Boring Consistency</h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Real trading is boring. It's waiting. It's discipline. If you want excitement, go to a casino. If you want growth, stay here.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;