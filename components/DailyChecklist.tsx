import React, { useState } from 'react';
import { Check, ClipboardList, Shield, Zap, BarChart, Globe, Lock, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { soundService } from '../services/soundService';

const checklistItems = [
  {
    id: 1,
    icon: <Globe size={20} />,
    text: "Check Economic Calendar (Red Folders)",
    subtext: "Never trade blindly during NFP or CPI."
  },
  {
    id: 2,
    icon: <BarChart size={20} />,
    text: "Analyze Market Structure (HTF)",
    subtext: "Is the daily trend Bullish or Bearish?"
  },
  {
    id: 3,
    icon: <ClipboardList size={20} />,
    text: "Mark Key Liquidity Levels",
    subtext: "Identify where the retail stops are resting."
  },
  {
    id: 4,
    icon: <Shield size={20} />,
    text: "Calculate Risk Per Trade (1%)",
    subtext: "Know exactly how much you will lose before entering."
  },
  {
    id: 5,
    icon: <Zap size={20} />,
    text: "Wait for Setup Confirmation",
    subtext: "Don't chase candles. Let the price come to you."
  }
];

const DailyChecklist: React.FC = () => {
  // Store the ID of the highest completed step. 0 means nothing done.
  const [completedSteps, setCompletedSteps] = useState<number>(0);
  const [errorId, setErrorId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    // Logic: STRICT ORDER
    // We expect the user to click (completedSteps + 1)
    const nextStep = completedSteps + 1;

    if (id === nextStep) {
        // Success: User clicked the correct next step
        setCompletedSteps(id);
        soundService.playClick();
    } else if (id <= completedSteps) {
        // User clicked an already completed step - Do nothing (Locked in done state)
        // Or strictly strictly: we could allow undoing the LAST step only, 
        // but for a pre-flight check, usually "Done is Done".
    } else {
        // Error: User tried to skip steps (e.g. clicked 3 when only 1 is done)
        setErrorId(id);
        
        // Remove error state after animation plays (500ms)
        setTimeout(() => {
            setErrorId(null);
        }, 500);
    }
  };

  const isComplete = completedSteps === checklistItems.length;

  return (
    <section className="py-24 bg-[#0B0E11] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <ScrollReveal>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Protocol</h2>
                <p className="text-trading-muted text-lg">
                    Amateurs guess. Professionals check. <br />
                    <span className="text-trading-accent font-bold">Strict Order Required.</span> Do not skip steps.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: The Checklist UI */}
            <ScrollReveal direction="left">
                <div className="bg-[#151A21] rounded-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-trading-accent to-transparent"></div>
                    
                    <div className="space-y-4">
                        {checklistItems.map((item) => {
                            const isDone = item.id <= completedSteps;
                            const isNext = item.id === completedSteps + 1;
                            const isLocked = item.id > completedSteps + 1;
                            const isError = errorId === item.id;

                            return (
                                <div 
                                    key={item.id}
                                    onClick={() => handleItemClick(item.id)}
                                    className={`
                                        group flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 select-none
                                        ${isError ? 'animate-shake bg-red-500/10 border-red-500' : ''}
                                        ${!isError && isDone ? 'bg-green-500/10 border-green-500/50 cursor-default' : ''}
                                        ${!isError && isNext ? 'bg-trading-accent/5 border-trading-accent shadow-[0_0_15px_rgba(212,175,55,0.1)] cursor-pointer scale-[1.02]' : ''}
                                        ${!isError && isLocked ? 'bg-[#0B0E11] border-white/5 opacity-50 cursor-not-allowed grayscale' : ''}
                                    `}
                                >
                                    <div className={`mt-1 w-6 h-6 rounded border flex items-center justify-center transition-all shrink-0
                                        ${isError ? 'border-red-500 text-red-500' : ''}
                                        ${!isError && isDone ? 'bg-green-500 border-green-500 text-black' : ''}
                                        ${!isError && isNext ? 'border-trading-accent text-trading-accent animate-pulse' : ''}
                                        ${!isError && isLocked ? 'border-gray-700 text-gray-700' : ''}
                                    `}>
                                        {isDone && <Check size={14} strokeWidth={4} />}
                                        {isError && <AlertCircle size={14} />}
                                        {isLocked && <Lock size={12} />}
                                        {isNext && <span className="text-[10px] font-bold">{item.id}</span>}
                                    </div>
                                    
                                    <div>
                                        <h4 className={`font-bold transition-colors 
                                            ${isError ? 'text-red-400' : ''}
                                            ${!isError && isDone ? 'text-white' : ''}
                                            ${!isError && isNext ? 'text-trading-accent' : ''}
                                            ${!isError && isLocked ? 'text-gray-500' : ''}
                                        `}>
                                            {item.text}
                                        </h4>
                                        <p className={`text-xs mt-1
                                            ${isError ? 'text-red-400/70' : ''}
                                            ${!isError && isLocked ? 'text-gray-600' : 'text-gray-500'}
                                        `}>
                                            {isError ? "DO NOT SKIP STEPS" : item.subtext}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-8 pt-6 border-t border-white/5">
                        <div className="flex justify-between text-xs uppercase font-bold tracking-widest text-gray-500 mb-2">
                            <span>Readiness</span>
                            <span>{Math.round((completedSteps / checklistItems.length) * 100)}%</span>
                        </div>
                        <div className="h-2 bg-[#0B0E11] rounded-full overflow-hidden">
                            <div 
                                className={`h-full transition-all duration-500 ease-out ${isComplete ? 'bg-green-500' : 'bg-trading-accent'}`}
                                style={{ width: `${(completedSteps / checklistItems.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Right: Dynamic Feedback */}
            <ScrollReveal direction="right" delay={200}>
                <div className="text-center md:text-left h-full flex flex-col justify-center">
                    {isComplete ? (
                        <div className="animate-fade-in-up">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 text-green-500 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                <Zap size={40} fill="currentColor" />
                            </div>
                            <h3 className="text-4xl font-black text-white mb-4">SYSTEMS GO.</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                You have verified risk, structure, and news. 
                                Your emotions are removed. 
                                <br/><br/>
                                <span className="text-green-400 font-bold">Now you may execute.</span>
                            </p>
                            <a href="https://discord.gg/FnevZxAZGH" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                Enter the Market
                            </a>
                        </div>
                    ) : (
                        <div className="opacity-50">
                            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 text-gray-600 border border-white/5">
                                <Shield size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-500 mb-4">Sequence Locked</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Complete step <span className="text-trading-accent font-bold">#{completedSteps + 1}</span> to proceed.
                                <br />
                                A disciplined trader follows the order.
                            </p>
                        </div>
                    )}
                </div>
            </ScrollReveal>

        </div>
        
        {/* Custom Shake Animation Style */}
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
            20%, 40%, 60%, 80% { transform: translateX(4px); }
          }
          .animate-shake {
            animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
          }
        `}</style>
      </div>
    </section>
  );
};

export default DailyChecklist;