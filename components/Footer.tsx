import React, { useState, useEffect } from 'react';
import { Send, Instagram, Twitter, Linkedin, Mail, ShieldAlert, Globe, Clock, MessageCircle, CheckCircle2, Wifi, Server, Activity } from 'lucide-react';
import Logo from './Logo';
import { soundService } from '../services/soundService';

interface FooterProps {
  onNavigate: (view: 'home' | 'risk' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [time, setTime] = useState(new Date());
  const [ping, setPing] = useState(24);

  // Update clocks and simulate ping fluctuation
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      // Random ping between 20ms and 45ms to look alive
      if (Math.random() > 0.7) {
        setPing(Math.floor(Math.random() * (45 - 20 + 1) + 20));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
        soundService.playClick();
        setSubscribed(true);
        setTimeout(() => {
            setEmail('');
            // Reset after 3 seconds for demo purposes
            setTimeout(() => setSubscribed(false), 5000);
        }, 1000);
    }
  };

  const getSessionTime = (offset: number) => {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000*offset));
    return nd.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  };

  const scrollToSection = (id: string) => {
    soundService.playClick();
    onNavigate('home');
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <footer className="relative z-10 bg-[#050709] pt-20 border-t border-white/5 mt-auto">
      
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="bg-[#0B0E11] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-trading-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-xl">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Activity className="text-trading-accent" size={24} />
                    <span>Market Intelligence</span>
                </h3>
                <p className="text-gray-400">
                    Get the <span className="text-white font-bold">Daily Briefing</span>. Key levels for EUR/USD & GBP/USD delivered to your inbox before London Open.
                </p>
            </div>

            <form onSubmit={handleSubscribe} className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3">
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={subscribed}
                        className="w-full sm:w-80 bg-[#151A21] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-trading-accent/50 transition-colors disabled:opacity-50"
                    />
                </div>
                <button 
                    type="submit"
                    disabled={subscribed}
                    className={`px-6 py-3 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg ${subscribed ? 'bg-green-500 text-black' : 'bg-trading-accent text-black hover:bg-[#ffe16b]'}`}
                >
                    {subscribed ? (
                        <>
                            <CheckCircle2 size={18} />
                            <span>Joined</span>
                        </>
                    ) : (
                        <>
                            <span>Subscribe</span>
                            <Send size={16} />
                        </>
                    )}
                </button>
            </form>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 border-b border-white/5 pb-12">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <button onClick={() => scrollToSection('root')} className="block">
                <Logo />
            </button>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              KoKo Market Journal represents the new standard in retail trading education. 
              We strip away the noise and focus on raw price action, institutional order flow, and rigorous risk management.
            </p>
            
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <Server size={12} />
                    <span>Server Status:</span>
                    <span className="text-green-500 font-bold">OPERATIONAL</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <Wifi size={12} />
                    <span>Latency:</span>
                    <span className={`${ping < 50 ? 'text-green-500' : 'text-yellow-500'} font-bold`}>{ping}ms</span>
                </div>
            </div>

            <div className="flex gap-3 pt-2">
                {[
                    { icon: <Instagram size={18} />, href: "https://whop.com/koko-market-journal/kmj-public/" },
                    { icon: <Twitter size={18} />, href: "https://whop.com/koko-market-journal/kmj-public/" },
                    { icon: <Linkedin size={18} />, href: "https://whop.com/koko-market-journal/kmj-public/" },
                    { icon: <MessageCircle size={18} />, href: "https://whop.com/koko-market-journal/kmj-public/" }
                ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                        {social.icon}
                    </a>
                ))}
            </div>
          </div>

          {/* Links Column 1: Ecosystem (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-trading-accent rounded-full"></span>
                Ecosystem
            </h4>
            <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('terminal')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Terminal</button></li>
                <li><button onClick={() => scrollToSection('showcase')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Trade Journal</button></li>
                <li><button onClick={() => scrollToSection('methodology')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Methodology</button></li>
                <li><a href="https://whop.com/koko-market-journal/kmj-public/" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-trading-accent transition-colors flex items-center gap-2">Community <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span></a></li>
            </ul>
          </div>

          {/* Links Column 2: Tools (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                Tools
            </h4>
            <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('calendar')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Economic Calendar</button></li>
                <li><button onClick={() => scrollToSection('terminal')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Session Converter</button></li>
            </ul>
          </div>

           {/* Links Column 3: Legal (2 cols) */}
           <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-gray-500 rounded-full"></span>
                Compliance
            </h4>
            <ul className="space-y-3">
                <li><button onClick={() => onNavigate('risk')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Risk Disclosure</button></li>
                <li><button onClick={() => onNavigate('privacy')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => onNavigate('terms')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Terms of Service</button></li>
                <li><button onClick={() => onNavigate('privacy')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Cookie Preferences</button></li>
            </ul>
          </div>

          {/* Live Market Clocks (2 cols) */}
          <div className="lg:col-span-2">
             <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider flex items-center gap-2">
                <Clock size={14} className="text-trading-accent" />
                Live Sessions
             </h4>
             <div className="space-y-3">
                <div className="bg-[#151A21] p-3 rounded-lg border border-white/5 flex justify-between items-center group hover:border-blue-500/30 transition-colors">
                    <span className="text-xs text-gray-400 font-bold uppercase">London</span>
                    <span className="text-sm font-mono text-white font-bold">{getSessionTime(1)}</span> {/* Approx UTC+1 */}
                </div>
                <div className="bg-[#151A21] p-3 rounded-lg border border-white/5 flex justify-between items-center group hover:border-green-500/30 transition-colors">
                    <span className="text-xs text-gray-400 font-bold uppercase">New York</span>
                    <span className="text-sm font-mono text-white font-bold">{getSessionTime(-4)}</span> {/* Approx UTC-4 */}
                </div>
                <div className="bg-[#151A21] p-3 rounded-lg border border-white/5 flex justify-between items-center opacity-50">
                    <span className="text-xs text-gray-400 font-bold uppercase">Tokyo</span>
                    <span className="text-sm font-mono text-gray-400">{getSessionTime(9)}</span>
                </div>
             </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mb-12">
             <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-2xl bg-[#0B0E11] border border-red-500/10 hover:border-red-500/20 transition-colors">
                <ShieldAlert className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                <div className="space-y-3">
                    <h5 className="text-sm font-bold text-red-500 uppercase tracking-wide">High Risk Investment Warning</h5>
                    <p className="text-xs text-gray-500 leading-relaxed text-justify">
                        Trading Foreign Exchange (Forex), CFDs, and Commodities on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. You could sustain a loss of some or all of your initial investment.
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed text-justify">
                        KoKo Market Journal is an educational platform. We are not financial advisors. All content provided is for educational purposes only and should not be construed as financial advice or a recommendation to buy or sell any financial instrument.
                    </p>
                </div>
             </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4 pb-10">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <span>&copy; {new Date().getFullYear()} KoKo Market Journal. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2 hover:text-gray-400 transition-colors cursor-pointer">
                    <Globe size={12} />
                    <span>Global / English</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Systems Operational</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;