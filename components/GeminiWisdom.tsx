import React, { useState } from 'react';
import { getTradingWisdom } from '../services/geminiService';
import { BrainCircuit, Sparkles, Loader2 } from 'lucide-react';

const GeminiWisdom: React.FC = () => {
  const [wisdom, setWisdom] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetWisdom = async () => {
    setLoading(true);
    const result = await getTradingWisdom();
    setWisdom(result);
    setLoading(false);
  };

  return (
    <section className="py-20 relative overflow-hidden">
        {/* Background gradient for this section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-trading-accent/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-12 text-center border border-trading-accent/20 shadow-[0_0_50px_-12px_rgba(0,200,5,0.1)]">
          <div className="inline-flex items-center gap-2 text-trading-accent mb-4 bg-trading-accent/10 px-4 py-1.5 rounded-full text-sm font-semibold">
            <BrainCircuit size={18} />
            <span>AI Powered</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Daily Dose of Trading Psychology
          </h2>
          <p className="text-trading-muted mb-8 max-w-2xl mx-auto">
             Trading is 90% psychology. Click the button below to receive unique advice from my AI assistant, trained on the principles of the most successful traders.
          </p>

          {!wisdom && !loading && (
            <button
              onClick={handleGetWisdom}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-yellow-600" />
              Generate Wisdom
            </button>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="w-10 h-10 text-trading-accent animate-spin mb-4" />
              <p className="text-trading-muted animate-pulse">Analyzing market psychology...</p>
            </div>
          )}

          {wisdom && !loading && (
            <div className="animate-float">
              <div className="bg-trading-bg/50 border border-white/10 p-6 rounded-xl relative">
                <div className="absolute -top-3 -left-3 text-6xl text-trading-accent opacity-20 font-serif">"</div>
                <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed">
                  {wisdom}
                </p>
                <div className="absolute -bottom-8 -right-3 text-6xl text-trading-accent opacity-20 font-serif rotate-180">"</div>
              </div>
              <button
                onClick={handleGetWisdom}
                className="mt-8 text-sm text-trading-muted hover:text-white underline underline-offset-4"
              >
                I want another advice
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiWisdom;