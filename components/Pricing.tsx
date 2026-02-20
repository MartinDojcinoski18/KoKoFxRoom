import React from 'react';
import { Check, X, ArrowRight, ShieldCheck, Zap, BookOpen, BarChart2, Lock } from 'lucide-react';
import { soundService } from '../services/soundService';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0B0E11] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-trading-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-trading-accent text-xs font-bold tracking-widest uppercase mb-4">
            <ShieldCheck size={12} />
            Official Access
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Join the <span className="text-trading-accent">Journal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional execution framework. No signals. No gambling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <div className="relative bg-[#151A21] border border-trading-accent/30 rounded-3xl overflow-hidden shadow-2xl group hover:border-trading-accent/50 transition-all duration-500">
            
            {/* Top Badge */}
            <div className="bg-trading-accent text-black text-center py-2 font-bold text-xs uppercase tracking-widest">
              Most Popular • Limited Spots
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Structured Forex Journal</h3>
                  <p className="text-gray-400 text-sm">Complete London Session Framework</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-500 line-through text-sm font-mono">$37.49</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">$29.99</span>
                    <span className="text-gray-400 text-sm">/ month</span>
                  </div>
                  <div className="text-trading-accent text-xs font-bold mt-1 uppercase tracking-wider">7 Day Free Trial</div>
                </div>
              </div>

              <div className="h-px bg-white/10 w-full mb-8"></div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                
                {/* Column 1 */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-trading-accent/10 flex items-center justify-center shrink-0 text-trading-accent">
                      <Zap size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">Structured London Session Plan</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Daily HTF structure, liquidity targets, and exact trade conditions. Not an "idea" - a pre-defined execution framework.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-trading-accent/10 flex items-center justify-center shrink-0 text-trading-accent">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">Real-Time Execution Log</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Live documentation of every trade: Logic, risk %, entry/exit, and screenshot proof. We document the process, not just the profit.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-trading-accent/10 flex items-center justify-center shrink-0 text-trading-accent">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">No-Trade Discipline Days</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Understanding when to stay flat is a skill. We explain why no liquidity or shift occurred. Huge value.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-trading-accent/10 flex items-center justify-center shrink-0 text-trading-accent">
                      <BarChart2 size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">Weekly Performance Breakdown</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Total R result, winrate, rule adherence, and mistakes identified. Full transparency every single week.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-trading-accent/10 flex items-center justify-center shrink-0 text-trading-accent">
                      <Lock size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">Execution Framework Access</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Full access to our system: Structure rules, liquidity rules, entry models, and risk models. Clear, fixed, repeatable.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-trading-accent/10 flex items-center justify-center shrink-0 text-trading-accent">
                      <Check size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">Discipline-Based Environment</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        No signal culture. No hype. No gambling. Just structured thinking and a risk-first mindset.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What We DON'T Offer */}
              <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-6 mb-8">
                <h4 className="text-red-500 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <X size={14} />
                  What We Do NOT Offer
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <X size={12} className="text-red-500" /> Guaranteed profits
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <X size={12} className="text-red-500" /> Copy trading
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <X size={12} className="text-red-500" /> Trade alerts
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <X size={12} className="text-red-500" /> Get-rich-fast
                  </div>
                </div>
              </div>

              {/* Summary & CTA */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0B0E11] rounded-2xl p-6 border border-white/5">
                <p className="text-gray-400 text-xs md:text-sm italic max-w-md">
                  "A repeatable London session execution framework applied live, with full transparency and discipline accountability."
                </p>
                <a 
                  href="https://whop.com/koko-market-journal/kmj-public/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundService.playClick()}
                  className="w-full md:w-auto px-8 py-4 bg-trading-accent text-black font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-[#ffe16b] transition-all flex items-center justify-center gap-2 shadow-lg shadow-trading-accent/20 whitespace-nowrap"
                >
                  Start 7 Day Trial
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;