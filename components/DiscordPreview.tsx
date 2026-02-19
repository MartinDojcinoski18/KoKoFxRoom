import React from 'react';
import { Send, Hash, Volume2, Settings, Mic, Headphones } from 'lucide-react';

const DiscordPreview: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1318] relative overflow-hidden select-none">
      {/* Static Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-[#5865F2]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-trading-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Text */}
          <div className="lg:w-5/12 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#5865F2]/30 bg-[#5865F2]/10 text-[#5865F2] text-xs font-bold tracking-widest uppercase mb-6">
                <Hash size={14} />
                Inside the Server
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Directly from the <br />
                <span className="text-[#5865F2]">Source.</span>
                </h2>
                
                <p className="text-trading-muted text-lg leading-relaxed mb-8">
                This is what communication looks like inside the community. 
                Structured channels, real analysis, and focused discussion.
                </p>

                <a 
                href="https://whop.com/koko-market-journal/kmj-public/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(88,101,242,0.3)] hover:shadow-[0_0_30px_rgba(88,101,242,0.5)] transform hover:-translate-y-1"
                >
                <Send className="w-5 h-5" />
                Join Community
                </a>
          </div>

          {/* Right Side: Discord UI Mockup */}
          <div className="lg:w-7/12 w-full flex justify-center items-center order-1 lg:order-2">
             
             {/* Discord App Container */}
             <div className="relative w-full max-w-md h-[500px] bg-[#36393f] rounded-xl shadow-2xl overflow-hidden border border-[#202225] flex flex-row">
                 
                 {/* 1. Server List (Leftmost strip) */}
                 <div className="w-[72px] bg-[#202225] flex flex-col items-center py-3 gap-3 shrink-0">
                     <div className="w-12 h-12 rounded-[24px] bg-[#36393f] flex items-center justify-center hover:rounded-[16px] hover:bg-[#5865F2] transition-all cursor-pointer group relative">
                        {/* Selected Indicator */}
                         <div className="absolute -left-4 w-2 h-10 bg-white rounded-r-lg"></div>
                         <span className="text-xs font-bold text-white">MJ</span>
                     </div>
                     <div className="w-12 h-12 rounded-[24px] bg-[#36393f] flex items-center justify-center hover:rounded-[16px] hover:bg-green-500 transition-all cursor-pointer text-gray-400 hover:text-white">
                         <span className="text-[10px] font-bold">+</span>
                     </div>
                 </div>

                 {/* 2. Channel List (Sidebar) */}
                 <div className="w-60 bg-[#2f3136] flex flex-col shrink-0 hidden sm:flex">
                     {/* Header */}
                     <div className="h-12 border-b border-[#202225] px-4 flex items-center justify-between shadow-sm">
                         <span className="font-bold text-white text-sm truncate">KoKo Journal</span>
                         <span className="text-gray-400 text-xs">▼</span>
                     </div>

                     {/* Scrollable Channels */}
                     <div className="flex-1 overflow-y-auto p-2 space-y-4 custom-scrollbar">
                         
                         {/* Category: Information */}
                         <div>
                             <div className="flex items-center justify-between px-1 mb-1 group cursor-pointer">
                                 <div className="flex items-center text-[#8e9297] text-[10px] font-bold uppercase hover:text-gray-300">
                                     <span>v</span>
                                     <span className="ml-1">Information</span>
                                 </div>
                             </div>
                             <div className="space-y-[2px]">
                                 <div className="flex items-center px-2 py-1 text-[#8e9297] rounded hover:bg-[#34373c] hover:text-gray-200 cursor-pointer">
                                     <Hash size={14} className="mr-1.5" />
                                     <span className="truncate">👋-welcome</span>
                                 </div>
                                 <div className="flex items-center px-2 py-1 text-[#8e9297] rounded hover:bg-[#34373c] hover:text-gray-200 cursor-pointer">
                                     <Hash size={14} className="mr-1.5" />
                                     <span className="truncate">📜-rules</span>
                                 </div>
                             </div>
                         </div>

                         {/* Category: Trading Room */}
                         <div>
                             <div className="flex items-center justify-between px-1 mb-1 group cursor-pointer">
                                 <div className="flex items-center text-[#8e9297] text-[10px] font-bold uppercase hover:text-gray-300">
                                     <span>v</span>
                                     <span className="ml-1">Trading Room</span>
                                 </div>
                             </div>
                             <div className="space-y-[2px]">
                                 <div className="flex items-center px-2 py-1 text-[#8e9297] rounded hover:bg-[#34373c] hover:text-gray-200 cursor-pointer">
                                     <Hash size={14} className="mr-1.5" />
                                     <span className="truncate">🧭-pre-market-plan</span>
                                 </div>
                                 {/* Selected Channel */}
                                 <div className="flex items-center px-2 py-1 text-white bg-[#393c43] rounded cursor-pointer">
                                     <Hash size={14} className="mr-1.5" />
                                     <span className="truncate">🎯-live-ideas</span>
                                 </div>
                                 <div className="flex items-center px-2 py-1 text-[#8e9297] rounded hover:bg-[#34373c] hover:text-gray-200 cursor-pointer">
                                     <Hash size={14} className="mr-1.5" />
                                     <span className="truncate">📘-day-review</span>
                                 </div>
                             </div>
                         </div>

                         {/* Category: Development */}
                         <div>
                             <div className="flex items-center justify-between px-1 mb-1 group cursor-pointer">
                                 <div className="flex items-center text-[#8e9297] text-[10px] font-bold uppercase hover:text-gray-300">
                                     <span>v</span>
                                     <span className="ml-1">Development</span>
                                 </div>
                             </div>
                             <div className="space-y-[2px]">
                                 <div className="flex items-center px-2 py-1 text-[#8e9297] rounded hover:bg-[#34373c] hover:text-gray-200 cursor-pointer">
                                     <Hash size={14} className="mr-1.5" />
                                     <span className="truncate">🧠-psychology</span>
                                 </div>
                                 <div className="flex items-center px-2 py-1 text-[#8e9297] rounded hover:bg-[#34373c] hover:text-gray-200 cursor-pointer">
                                     <Hash size={14} className="mr-1.5" />
                                     <span className="truncate">🛡-risk-management</span>
                                 </div>
                             </div>
                         </div>

                     </div>

                     {/* User Bar */}
                     <div className="h-[52px] bg-[#292b2f] flex items-center px-2 gap-2">
                         <div className="w-8 h-8 rounded-full bg-trading-accent flex items-center justify-center">
                             <span className="text-[10px] font-bold text-black">U</span>
                         </div>
                         <div className="flex-1 min-w-0">
                             <div className="text-white text-xs font-bold truncate">User</div>
                             <div className="text-gray-400 text-[10px] truncate">#1234</div>
                         </div>
                         <div className="flex gap-1 text-gray-400">
                            <Mic size={14} />
                            <Headphones size={14} />
                            <Settings size={14} />
                         </div>
                     </div>
                 </div>

                 {/* 3. Main Chat Area */}
                 <div className="flex-1 flex flex-col bg-[#36393f] min-w-0">
                     
                     {/* Header */}
                     <div className="h-12 border-b border-[#202225] flex items-center px-4 shadow-sm shrink-0">
                         <Hash size={20} className="text-[#8e9297] mr-2" />
                         <span className="text-white font-bold text-sm truncate">live-ideas</span>
                         <div className="ml-4 h-4 w-px bg-[#4f545c]"></div>
                         <span className="ml-4 text-xs text-[#b9bbbe] truncate hidden sm:block">High probability setups only</span>
                     </div>

                     {/* Messages */}
                     <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar relative">
                         {/* Placeholder bg */}
                        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                        
                        {/* Msg 1 */}
                        <div className="flex gap-4 group">
                             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-trading-accent to-yellow-600 shrink-0 mt-0.5 shadow-sm"></div>
                             <div>
                                 <div className="flex items-center gap-2">
                                     <span className="text-white text-sm font-medium hover:underline cursor-pointer">KoKoMJ</span>
                                     <span className="bg-[#5865F2] text-white text-[9px] px-1 rounded uppercase font-bold">Bot</span>
                                     <span className="text-[#72767d] text-xs">Today at 10:45 AM</span>
                                 </div>
                                 <div className="text-[#dcddde] text-sm mt-1 leading-relaxed">
                                     <strong className="text-green-400 block mb-1">📊 BUY LIMIT: GBP/USD</strong>
                                     Setup looking clean. Sweep of Asian lows complete.
                                     <div className="mt-2 pl-3 border-l-4 border-green-500 bg-[#2f3136] p-2 rounded max-w-sm">
                                         <div className="text-xs font-mono">Entry: 1.2650</div>
                                         <div className="text-xs font-mono text-red-400">SL: 1.2630 (20 pips)</div>
                                         <div className="text-xs font-mono text-green-400">TP: 1.2710 (1:3 RR)</div>
                                     </div>
                                 </div>
                             </div>
                        </div>

                         {/* Msg 2 */}
                        <div className="flex gap-4 group">
                             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-trading-accent to-yellow-600 shrink-0 mt-0.5 shadow-sm"></div>
                             <div>
                                 <div className="flex items-center gap-2">
                                     <span className="text-white text-sm font-medium hover:underline cursor-pointer">KoKoMJ</span>
                                     <span className="bg-[#5865F2] text-white text-[9px] px-1 rounded uppercase font-bold">Bot</span>
                                     <span className="text-[#72767d] text-xs">Today at 11:30 AM</span>
                                 </div>
                                 <div className="text-[#dcddde] text-sm mt-1 leading-relaxed">
                                     Tp 1 Hit. Move SL to Breakeven. Risk free now. 🛡️
                                 </div>
                             </div>
                        </div>

                     </div>

                     {/* Input Area */}
                     <div className="px-4 pb-4 bg-[#36393f] shrink-0">
                         <div className="bg-[#40444b] rounded-lg px-4 py-2.5 flex items-center text-[#b9bbbe]">
                             <div className="w-6 h-6 rounded-full bg-[#b9bbbe] flex items-center justify-center mr-3 opacity-50 cursor-not-allowed text-[#40444b] font-black text-xs">+</div>
                             <span className="text-sm">Message #live-ideas</span>
                         </div>
                     </div>

                 </div>
             </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background-color: #2f3136;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #202225;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default DiscordPreview;