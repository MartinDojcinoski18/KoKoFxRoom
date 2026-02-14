import React from 'react';
import { Send, Lock, CheckCircle2, Signal, Wifi, Battery } from 'lucide-react';

const TelegramPreview: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1318] relative overflow-hidden select-none">
      {/* Static Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-[#0088cc]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-trading-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Text */}
          <div className="lg:w-5/12 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0088cc]/30 bg-[#0088cc]/10 text-[#0088cc] text-xs font-bold tracking-widest uppercase mb-6">
                <Send size={14} />
                Inside the Room
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Directly from the <br />
                <span className="text-[#0088cc]">Source.</span>
                </h2>
                
                <p className="text-trading-muted text-lg leading-relaxed mb-8">
                This is what communication looks like inside the group. No spam, no ads.
                Just raw reality, analysis, and education.
                </p>

                <a 
                href="https://t.me/kokofxroom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(0,136,204,0.3)] hover:shadow-[0_0_30px_rgba(0,136,204,0.5)] transform hover:-translate-y-1"
                >
                <Send className="w-5 h-5" />
                Join Group
                </a>
          </div>

          {/* Right Side: 2D Clean Phone Mockup (High Performance) */}
          <div className="lg:w-7/12 w-full flex justify-center items-center order-1 lg:order-2">
             
             {/* Phone Container */}
             <div className="relative w-[320px] bg-black rounded-[45px] border-[8px] border-[#2a2a2a] shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                 
                 {/* Dynamic Island */}
                 <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20 flex items-center justify-center">
                    <div className="w-16 h-4 bg-[#111] rounded-full"></div>
                 </div>

                 {/* Status Bar */}
                 <div className="px-6 pt-3 pb-2 flex justify-between items-center text-white z-10 bg-[#0E1621]">
                    <span className="text-[12px] font-medium">10:30</span>
                    <div className="flex gap-1.5 items-center">
                        <Signal size={12} fill="white" />
                        <Wifi size={12} />
                        <Battery size={14} fill="white" />
                    </div>
                </div>

                {/* Telegram Header */}
                <div className="bg-[#17212B] px-4 py-3 flex items-center gap-3 border-b border-black/20 z-10 relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-trading-accent to-yellow-700 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md">
                        <span className="text-xs font-black tracking-tighter">KF</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                            <h3 className="text-white font-bold text-sm truncate">KoKoFx Room</h3>
                            <CheckCircle2 size={12} className="text-blue-400 fill-blue-400/10" />
                        </div>
                        <p className="text-[#6C7883] text-xs truncate font-medium">Official Channel</p>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="bg-[#0E1621] h-[450px] p-4 space-y-4 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

                    {/* Message 1 */}
                    <div className="bg-[#182533] rounded-2xl rounded-tl-none p-3 max-w-[90%] shadow-sm border border-white/5">
                        <div className="flex items-center justify-between mb-1">
                            <div className="text-[#64D2FF] font-bold text-xs">KoKoFx Room</div>
                            <div className="text-[#6C7883] text-[10px]">Just now</div>
                        </div>
                        <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                            Welcome to <span className="font-bold text-trading-accent">KoKo FX Room</span>.
                            Discipline, risk management, and honesty.
                        </p>
                    </div>

                    {/* Message 2 - Signal */}
                    <div className="bg-[#182533] rounded-2xl rounded-tl-none p-3 max-w-[90%] shadow-sm border-l-2 border-l-green-500 relative">
                        <div className="flex items-center justify-between mb-1">
                                <div className="text-[#64D2FF] font-bold text-xs">KoKoFx Room</div>
                                <div className="text-[#6C7883] text-[10px]">10:45</div>
                        </div>
                        <div className="text-white text-sm leading-relaxed">
                            <p className="font-bold text-green-400 mb-1">📊 BUY ACTIVATED</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-white/5 p-1 rounded">Entry: 1.0850</div>
                                <div className="bg-red-500/20 p-1 rounded text-red-200">SL: 1.0820</div>
                                <div className="bg-green-500/20 p-1 rounded text-green-200 col-span-2">TP: 1.0940 (RR 1:3)</div>
                            </div>
                        </div>
                    </div>

                    {/* Message 3 */}
                    <div className="bg-[#182533] rounded-2xl rounded-tl-none p-3 max-w-[90%] shadow-sm border border-white/5">
                            <div className="flex items-center justify-between mb-1">
                                <div className="text-[#64D2FF] font-bold text-xs">KoKoFx Room</div>
                                <div className="text-[#6C7883] text-[10px]">16:00</div>
                        </div>
                        <p className="text-white text-sm leading-relaxed">
                            No clean setup today. Capital protected. 💪
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="bg-[#17212B] p-4 flex items-center justify-center border-t border-black/20 pb-8">
                    <div className="text-[#6C7883] text-[10px] uppercase font-bold tracking-widest text-center w-full opacity-50 flex items-center justify-center gap-2">
                        <Lock size={10} />
                        Broadcast Channel
                    </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramPreview;