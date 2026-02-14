import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Send, Volume2, VolumeX } from 'lucide-react';
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = soundService.toggleMute();
    setIsMuted(muted);
    if (!muted) {
        soundService.playClick();
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Results', id: 'showcase' },
    { name: 'Philosophy', id: 'philosophy' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleScrollTo = (id: string) => {
    soundService.playClick(); // SFX
    
    // First ensure we are on the home view
    onNavigate('home');
    
    // Close mobile menu if open
    setMobileMenuOpen(false);

    // Short timeout to allow state change if we were on a legal page
    setTimeout(() => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80; // height of navbar
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, 100);
  };

  return (
    <>
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-[#0B0E11]/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
            
            {/* Logo */}
            <button 
                onClick={() => handleScrollTo('home')}
                className="hover:opacity-90 transition-opacity focus:outline-none z-50 relative"
            >
                <Logo />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleScrollTo(item.id)}
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:scale-105 active:scale-95"
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center gap-3 md:gap-4">
                
                {/* Sound Toggle */}
                <button 
                    onClick={toggleSound}
                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    aria-label="Toggle Sound"
                >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <a 
                href="https://t.me/kokofxroom"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundService.playClick()}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-trading-accent transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                    <Send size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>Join Now</span>
                </a>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => {
                        setMobileMenuOpen(!mobileMenuOpen);
                        soundService.playClick();
                    }}
                    className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0B0E11] z-40 transition-transform duration-300 ease-in-out pt-32 px-6 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleScrollTo(item.id)}
                        className="text-2xl font-bold text-white text-left py-4 border-b border-white/5 hover:text-trading-accent hover:pl-4 transition-all"
                    >
                        {item.name}
                    </button>
                ))}
                
                <a 
                    href="https://t.me/kokofxroom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundService.playClick()}
                    className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-trading-accent text-black font-bold text-lg rounded-xl"
                >
                    <Send size={20} />
                    Join Community
                </a>
            </div>
        </div>
    </>
  );
};

export default Navbar;