import React, { useState, useEffect, useRef } from 'react';
import { Maximize, ShieldCheck, Terminal, Cpu, Wifi, Lock } from 'lucide-react';
import { soundService } from '../services/soundService';

const FullScreenOverlay: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'booting' | 'success' | 'hidden'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const logsEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs
  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `> ${message}`]);
  };

  const runBootSequence = async () => {
    setStatus('booting');
    
    const steps = [
      { msg: "ESTABLISHING SECURE CONNECTION...", delay: 200, prog: 10 },
      { msg: "VERIFYING ENCRYPTION KEYS [AES-256]...", delay: 400, prog: 25 },
      { msg: "SYNCING WITH LONDON SESSION SERVERS...", delay: 400, prog: 40 },
      { msg: "LOADING PRICE ACTION ALGORITHMS...", delay: 500, prog: 60 },
      { msg: "FETCHING LIQUIDITY DATA...", delay: 400, prog: 75 },
      { msg: "CALIBRATING RISK PARAMETERS...", delay: 300, prog: 85 },
      { msg: "OPTIMIZING INTERFACE...", delay: 300, prog: 95 },
      { msg: "SYSTEM INTEGRITY: 100%", delay: 200, prog: 100 },
    ];

    for (const step of steps) {
      await new Promise(r => setTimeout(r, step.delay));
      addLog(step.msg);
      setProgress(step.prog);
    }

    await new Promise(r => setTimeout(r, 400));
    setStatus('success');
    
    await new Promise(r => setTimeout(r, 800));
    setStatus('hidden');
  };

  const handleEnter = async () => {
    soundService.playClick();
    
    // Trigger Full Screen
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        await (document.documentElement as any).webkitRequestFullscreen();
      }
    } catch (err) {
      console.log("Full screen info: ", err);
    }

    runBootSequence();
  };

  if (status === 'hidden') return null;

  return (
    <div 
        className={`fixed inset-0 z-[99999] bg-[#050709] flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${
            status === 'success'
                ? 'opacity-0 scale-[1.5] pointer-events-none filter blur-xl' 
                : 'opacity-100 scale-100'
        }`}
        style={{ cursor: 'auto' }} 
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      
      {/* IDLE STATE UI */}
      {status === 'idle' && (
        <div className="relative z-10 max-w-lg w-full animate-fade-in-up">
            <div className="mb-10 flex justify-center">
                <div className="w-24 h-24 bg-[#0B0E11] rounded-3xl border border-white/10 flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-trading-accent/5 rounded-3xl blur-xl group-hover:bg-trading-accent/20 transition-all duration-500"></div>
                    
                    {/* Custom Logo Image */}
                    <img 
                        src="https://i.postimg.cc/hv0LGvMv/Chat-GPT-Image-Feb-15-2026-02-17-14-PM.png"
                        alt="System Core"
                        className="w-full h-full object-cover relative z-10 opacity-90 group-hover:opacity-100 transition-opacity p-1"
                    />
                    
                    {/* Rotating Ring */}
                    <div className="absolute inset-0 border border-white/5 rounded-3xl animate-[spin_10s_linear_infinite] z-20 pointer-events-none"></div>
                </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tighter uppercase">
                KoKo<span className="text-trading-accent">Fx</span>
            </h1>
            <p className="text-gray-500 tracking-[0.5em] text-xs font-bold uppercase mb-12">System Access Required</p>
            
            <button 
                onClick={handleEnter}
                className="group relative w-full py-6 bg-white text-black font-black text-lg uppercase tracking-[0.15em] rounded-xl hover:bg-trading-accent transition-all shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] hover:scale-[1.02] flex items-center justify-center gap-4 active:scale-95 overflow-hidden border border-transparent hover:border-white/20"
            >
                <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <Maximize size={20} />
                <span>Initialize System</span>
            </button>
            
            <div className="mt-8 flex justify-center gap-6 text-[10px] text-gray-600 font-mono uppercase">
                <span className="flex items-center gap-1.5"><Lock size={10} /> Secure Connection</span>
                <span className="flex items-center gap-1.5"><Wifi size={10} /> Live Data Feed</span>
            </div>
        </div>
      )}

      {/* BOOTING STATE UI (Terminal) */}
      {(status === 'booting' || status === 'success') && (
         <div className="relative z-10 w-full max-w-2xl">
            
            {/* Loading Bar */}
            <div className="mb-8 relative">
                <div className="flex justify-between text-xs font-mono text-trading-accent mb-2">
                    <span>SYSTEM INITIALIZATION</span>
                    <span>{progress}%</span>
                </div>
                <div className="h-1 bg-gray-800 w-full overflow-hidden">
                    <div 
                        className="h-full bg-trading-accent transition-all duration-300 ease-out shadow-[0_0_20px_#D4AF37]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Terminal Window */}
            <div className="bg-[#080a0c] border border-white/10 p-6 rounded-lg text-left h-64 overflow-hidden relative font-mono text-sm shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-trading-accent/50 to-transparent"></div>
                
                {/* Scanlines Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>

                <div className="flex flex-col justify-end h-full relative z-10 text-gray-400">
                    {logs.map((log, i) => (
                        <div key={i} className="mb-1 animate-fade-in-up" style={{animationDuration: '0.2s'}}>
                            <span className="text-trading-accent mr-2">➜</span>
                            {log}
                        </div>
                    ))}
                    {status === 'booting' && (
                         <div className="animate-pulse text-white">_</div>
                    )}
                    {status === 'success' && (
                        <div className="text-green-500 font-bold mt-2">
                             ACCESS GRANTED. WELCOME TRADER.
                        </div>
                    )}
                    <div ref={logsEndRef} />
                </div>
            </div>

            <div className="mt-6 flex justify-between text-[10px] text-gray-600 font-mono">
                <div className="flex items-center gap-2">
                    <Cpu size={12} className="animate-pulse text-trading-accent" />
                    <span>PROCESSOR: ACTIVE</span>
                </div>
                <div>
                    SESSION ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
            </div>
         </div>
      )}

    </div>
  );
};

export default FullScreenOverlay;