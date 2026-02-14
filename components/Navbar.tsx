import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Send, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { soundService } from '../services/soundService';

interface NavbarProps {
  onNavigate: (view: 'home' | 'risk' | 'privacy' | 'terms') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundService.getMuteStatus());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = soundService.toggleMute();
    setIsMuted(muted);
    if (!muted) soundService.playClick();
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Results', id: 'showcase' },
    { name: 'Principles', id: 'philosophy' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleScrollTo = (id: string) => {
    soundService.playClick();
    onNavigate('home');
    setMobileMenuOpen(false);
    
    setTimeout(() => {
        if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
        else {
            const el = document.getElementById(id);
            if (el) {
                const offset = 100;
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    }, 100);
  };

  return (
    <>
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0B0E11]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                
                <button onClick={() => handleScrollTo('home')} className="hover:opacity-80 transition-opacity z-50">
                    <Logo />
                </button>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleScrollTo(item.id)}
                            className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors relative group py-2"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-trading-accent transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>
                
                <div className="flex items-center gap-3">
                    <button 
                        onClick={toggleSound}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5"
                    >
                        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>

                    <a 
                    href="https://t.me/kokofxroom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundService.playClick()}
                    className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-black font-bold text-[10px] uppercase tracking-wider rounded hover:bg-trading-accent transition-all duration-300"
                    >
                        <span>Telegram</span>
                        <Send size={10} />
                    </a>

                    <button 
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden p-2 text-white hover:text-trading-accent transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>

        {mobileMenuOpen && (
            <div className="fixed inset-0 z-[60] bg-[#0B0E11] animate-fade-in-up">
                <div className="flex flex-col h-full p-8">
                    <div className="flex justify-between items-center mb-12">
                        <Logo />
                        <button 
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 text-gray-400 hover:text-white"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-8 flex-grow justify-center">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleScrollTo(item.id)}
                                className="text-4xl font-bold text-gray-300 hover:text-white text-left uppercase tracking-tight transition-all"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/10">
                        <a 
                            href="https://t.me/kokofxroom"
                            className="w-full py-4 bg-trading-accent text-black font-bold text-lg uppercase tracking-widest flex items-center justify-center gap-3 rounded"
                        >
                            Join Telegram <ArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        )}
    </>
  );
};

export default Navbar;