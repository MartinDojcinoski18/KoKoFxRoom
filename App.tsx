import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import DiscordPreview from './components/DiscordPreview';
import Stats from './components/Stats';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import FAQ from './components/FAQ';
import GeminiWisdom from './components/GeminiWisdom';
import Footer from './components/Footer';
import LegalPages from './components/LegalPages';
import BackgroundAnimation from './components/BackgroundAnimation';
import Transparency from './components/Transparency';
import TradingRules from './components/TradingRules';
import MarketTerminal from './components/MarketTerminal';
import DailyChecklist from './components/DailyChecklist';
import FinalCTA from './components/FinalCTA';
import CookieBanner from './components/CookieBanner';
import Security from './components/Security';
import RiskCalculator from './components/Calculator';
import Glossary from './components/Glossary';
import EconomicCalendar from './components/EconomicCalendar';

type PageView = 'home' | 'risk' | 'privacy' | 'terms';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');

  const navigateTo = (view: PageView) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-[#050709] text-trading-text font-sans selection:bg-trading-accent/30 selection:text-white flex flex-col relative">
      {/* SECURITY LAYER - ACTIVATED */}
      <Security />
      
      {/* Global Texture (Noise) - Makes it look premium/real */}
      <div className="bg-noise"></div>

      {/* Global Background Animation */}
      <BackgroundAnimation />

      {/* Cookie Consent Banner */}
      <CookieBanner />

      <Navbar onNavigate={navigateTo} />
      
      {/* Main Content with z-10 to stay above background */}
      <main className="flex-grow relative z-10">
        {currentView === 'home' ? (
          <>
            <Hero />
            <MarketTerminal />
            <Transparency />
            <Stats />
            <About />
            <TradingRules />
            <DailyChecklist />
            <EconomicCalendar />
            <RiskCalculator /> 
            <Glossary />
            <Showcase />
            <DiscordPreview />
            <Philosophy />
            <Features />
            <GeminiWisdom />
            <FAQ />
            <FinalCTA />
          </>
        ) : (
          <LegalPages 
            type={currentView} 
            onBack={() => navigateTo('home')} 
          />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;