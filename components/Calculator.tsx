import React, { useState, useEffect } from 'react';
import { Calculator, RefreshCw, DollarSign, Percent, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { soundService } from '../services/soundService';

const RiskCalculator: React.FC = () => {
  const [balance, setBalance] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1.0);
  const [stopLoss, setStopLoss] = useState<number>(10);
  const [pairType, setPairType] = useState<string>('USD'); // USD pairs (EURUSD, GBPUSD) vs JPY pairs
  
  const [lotSize, setLotSize] = useState<string>('0.00');
  const [riskAmount, setRiskAmount] = useState<string>('0.00');

  // Calculation Logic
  useEffect(() => {
    // 1. Calculate Risk Amount ($)
    const riskInDollars = balance * (riskPercent / 100);
    setRiskAmount(riskInDollars.toFixed(2));

    // 2. Calculate Pip Value per Standard Lot
    // For USD Counter pairs (EURUSD, GBPUSD), 1 Standard Lot (1.00) = $10 per pip
    // For JPY pairs, it's roughly $9.09 per pip (depending on exchange rate), but usually approximated or calculated dynamically.
    // To keep it simple and accurate for the user's main pairs (EU/GU):
    
    let pipValue = 10; 
    if (pairType === 'JPY') {
        pipValue = 9.09; // Approx for USDJPY around 110.00, can vary, but standard estimation
    }

    // 3. Formula: Risk $ / (Stop Loss * Pip Value)
    if (stopLoss > 0) {
        const lots = riskInDollars / (stopLoss * pipValue);
        setLotSize(lots.toFixed(2));
    } else {
        setLotSize('0.00');
    }

  }, [balance, riskPercent, stopLoss, pairType]);

  const handleInputChange = (setter: (val: number) => void, value: string) => {
    const num = parseFloat(value);
    if (!isNaN(num) && num >= 0) {
        setter(num);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#0B0E11] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-trading-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-trading-accent mb-4 bg-trading-accent/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    <Calculator size={14} />
                    <span>Risk Management Tool</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Position Size <span className="text-trading-accent">Calculator</span></h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Never guess your lot size. Consistency comes from risking the same percentage every single trade.
                </p>
            </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto bg-[#151A21] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <DollarSign size={14} /> Account Balance
                        </label>
                        <div className="relative">
                            <input 
                                type="number" 
                                value={balance}
                                onChange={(e) => handleInputChange(setBalance, e.target.value)}
                                className="w-full bg-[#0B0E11] border border-white/10 rounded-xl px-4 py-4 text-white font-mono text-lg focus:outline-none focus:border-trading-accent/50 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Percent size={14} /> Risk %
                            </label>
                            <input 
                                type="number" 
                                value={riskPercent}
                                onChange={(e) => handleInputChange(setRiskPercent, e.target.value)}
                                className="w-full bg-[#0B0E11] border border-white/10 rounded-xl px-4 py-4 text-white font-mono text-lg focus:outline-none focus:border-trading-accent/50 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <Target size={14} /> Stop Loss (Pips)
                            </label>
                            <input 
                                type="number" 
                                value={stopLoss}
                                onChange={(e) => handleInputChange(setStopLoss, e.target.value)}
                                className="w-full bg-[#0B0E11] border border-white/10 rounded-xl px-4 py-4 text-white font-mono text-lg focus:outline-none focus:border-trading-accent/50 transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                         <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                             Pair Type
                         </label>
                         <div className="grid grid-cols-2 gap-2 bg-[#0B0E11] p-1 rounded-xl border border-white/10">
                             <button 
                                onClick={() => { setPairType('USD'); soundService.playClick(); }}
                                className={`py-2 rounded-lg text-xs font-bold transition-all ${pairType === 'USD' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
                             >
                                EUR / GBP / AUD
                             </button>
                             <button 
                                onClick={() => { setPairType('JPY'); soundService.playClick(); }}
                                className={`py-2 rounded-lg text-xs font-bold transition-all ${pairType === 'JPY' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
                             >
                                JPY Pairs
                             </button>
                         </div>
                    </div>
                </div>

                {/* Results - The "Screen" */}
                <div className="flex flex-col justify-center">
                    <div className="bg-[#0B0E11] rounded-2xl border border-trading-accent/20 p-8 text-center relative overflow-hidden group">
                        
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-trading-accent/10 rounded-full blur-[50px] group-hover:bg-trading-accent/20 transition-all"></div>

                        <div className="relative z-10">
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Calculated Lot Size</p>
                            <div className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-4 tabular-nums">
                                {lotSize}
                            </div>
                            
                            <div className="inline-flex items-center gap-4 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                                <div className="text-left">
                                    <p className="text-[10px] text-gray-500 uppercase">Risk Amount</p>
                                    <p className="text-sm font-bold text-red-400 font-mono">-${riskAmount}</p>
                                </div>
                                <div className="w-px h-6 bg-white/10"></div>
                                <div className="text-left">
                                    <p className="text-[10px] text-gray-500 uppercase">Pip Value</p>
                                    <p className="text-sm font-bold text-white font-mono">${pairType === 'USD' ? '10.00' : '9.09'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Reset Button */}
                        <button 
                            onClick={() => {
                                setBalance(10000);
                                setRiskPercent(1);
                                setStopLoss(10);
                                soundService.playClick();
                            }}
                            className="absolute top-4 right-4 text-gray-600 hover:text-white transition-colors"
                        >
                            <RefreshCw size={14} />
                        </button>
                    </div>
                    
                    <p className="text-center text-xs text-gray-500 mt-6 max-w-xs mx-auto">
                        *This calculator uses standard contract sizes. Always verify with your broker before executing.
                    </p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default RiskCalculator;