import React from 'react';
import { Send, Instagram, Twitter, Linkedin, Mail, ShieldAlert, Globe, Clock, MessageCircle } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (view: 'home' | 'risk' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative z-10 bg-[#050709] pt-20 pb-10 border-t border-white/5 mt-auto">
      <div className="container mx-auto px-6">

        {/* Top Call to Action Box */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#0B0E11] p-8 rounded-2xl border border-white/5 mb-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5865F2]/10 rounded-full blur-[80px] group-hover:bg-[#5865F2]/20 transition-all"></div>
            
            <div className="relative z-10 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to start?</h3>
                <p className="text-trading-muted">Join the community on Discord. <span className="text-white">It's free.</span></p>
            </div>
            
            <a 
              href="https://discord.gg/4znatm94Fv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 flex items-center gap-3 px-8 py-3 bg-[#5865F2] text-white font-bold rounded-xl hover:bg-[#4752c4] transition-all shadow-lg hover:shadow-[#5865F2]/30 hover:scale-105 active:scale-95"
            >
                <MessageCircle size={18} />
                <span>Join the Server</span>
            </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4">
            <button onClick={() => onNavigate('home')} className="mb-6 block">
                <Logo />
            </button>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              KoKoFx Room is a professional educational platform for Forex traders. 
              Our mission is to create disciplined traders who focus on the process, not luck.
            </p>
            <div className="flex gap-3">
                {[
                    { icon: <Instagram size={18} />, href: "#" },
                    { icon: <Twitter size={18} />, href: "#" },
                    { icon: <Linkedin size={18} />, href: "#" },
                    { icon: <Mail size={18} />, href: "mailto:contact@kokofx.com" }
                ].map((social, i) => (
                    <a key={i} href={social.href} className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                        {social.icon}
                    </a>
                ))}
            </div>
          </div>

          {/* Platform Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-4">
                <li><button onClick={() => onNavigate('home')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Home</button></li>
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">About Me</button></li>
                <li><button onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Methodology</button></li>
                <li><button onClick={() => document.getElementById('showcase')?.scrollIntoView({behavior: 'smooth'})} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Results</button></li>
            </ul>
          </div>

          {/* Resources Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
                <li><button className="text-sm text-gray-400 hover:text-trading-accent transition-colors cursor-not-allowed opacity-50 flex items-center gap-2">Blog <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white">Soon</span></button></li>
                <li><button onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Calculators</button></li>
                <li><button onClick={() => onNavigate('home')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">FAQ</button></li>
                <li><button className="text-sm text-gray-400 hover:text-trading-accent transition-colors cursor-not-allowed opacity-50">Academy</button></li>
            </ul>
          </div>

           {/* Legal Links (2 cols) */}
           <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4">
                <li><button onClick={() => onNavigate('privacy')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => onNavigate('terms')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Terms of Use</button></li>
                <li><button onClick={() => onNavigate('risk')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Risk Disclaimer</button></li>
                <li><button onClick={() => onNavigate('privacy')} className="text-sm text-gray-400 hover:text-trading-accent transition-colors">Cookies Policy</button></li>
            </ul>
          </div>

          {/* Status Column (2 cols) */}
          <div className="lg:col-span-2">
             <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Status</h4>
             <div className="bg-[#0B0E11] p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold text-green-500 uppercase tracking-wide">Operational</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">Discord & AI Systems</p>
                
                <div className="h-px bg-white/5 w-full mb-3"></div>
                
                <div className="flex items-start gap-2">
                    <Clock size={14} className="text-trading-accent mt-0.5" />
                    <div>
                         <p className="text-xs text-gray-500">London Session Focus</p>
                         <p className="text-xs font-mono text-white mt-1">08:00 - 16:00 (GMT)</p>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mb-10"></div>

        {/* Risk Disclaimer */}
        <div className="mb-10 max-w-5xl mx-auto">
             <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-2xl bg-[#0B0E11]/50 border border-white/5">
                <ShieldAlert className="w-6 h-6 text-red-500/50 shrink-0 mt-1" />
                <div className="space-y-3">
                    <p className="text-xs text-gray-500 leading-relaxed text-justify">
                        <strong>HIGH RISK WARNING:</strong> Trading Foreign Exchange (Forex) and Contracts for Differences (CFDs) is highly speculative, carries a high level of risk, and may not be suitable for all investors. You may sustain a loss of some or all of your invested capital, therefore, you should not speculate with capital that you cannot afford to lose. You should be aware of all the risks associated with trading on margin.
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed text-justify">
                        The content of this website is solely for educational and informational purposes and should not be construed as financial advice. KoKoFx Room accepts no liability for any loss or damage resulting from reliance on the information contained on this site.
                    </p>
                </div>
             </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4 pt-6 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <span>&copy; {new Date().getFullYear()} KoKoFx Room. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2 hover:text-gray-400 transition-colors cursor-pointer">
                    <Globe size={12} />
                    <span>Region: Global</span>
                </div>
                <span>Designed for Traders.</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;