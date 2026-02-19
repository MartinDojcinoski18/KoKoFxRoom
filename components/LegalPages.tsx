import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert, Lock, FileText } from 'lucide-react';

interface LegalPageProps {
  type: 'risk' | 'privacy' | 'terms';
  onBack: () => void;
}

const LegalPages: React.FC<LegalPageProps> = ({ type, onBack }) => {
  
  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const renderContent = () => {
    switch (type) {
      case 'risk':
        return (
          <>
            <div className="flex items-center gap-3 mb-8 text-red-500">
                <ShieldAlert size={40} />
                <h1 className="text-3xl md:text-4xl font-bold text-white">Risk Warning</h1>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
                <p className="font-bold text-white">IMPORTANT: Please read this carefully before starting to trade.</p>

                <h3 className="text-xl font-bold text-white mt-8">1. High Risk Trading</h3>
                <p>
                    Trading Foreign Exchange (Forex) and Contracts for Differences (CFDs) on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">2. Possibility of Loss</h3>
                <p>
                    The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading and seek advice from an independent financial advisor if you have any doubts.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">3. Educational Nature</h3>
                <p>
                    Any opinions, news, research, analyses, prices, or other information contained on this website or in the "KoKo Market Journal" Discord server is provided as general market commentary and educational material, and <strong className="text-white">DOES NOT constitute investment advice</strong>. KoKo Market Journal will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information.
                </p>

                <h3 className="text-xl font-bold text-white mt-8">4. Past Performance</h3>
                <p>
                    Past performance of any trading system or methodology is not necessarily indicative of future results. There is no guarantee that you will earn any money using the techniques and ideas in these materials.
                </p>
            </div>
          </>
        );
      case 'privacy':
        return (
            <>
              <div className="flex items-center gap-3 mb-8 text-blue-400">
                  <Lock size={40} />
                  <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
              </div>
              
              <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
                  <p className="text-sm text-gray-500">Last updated: 2026</p>
  
                  <h3 className="text-xl font-bold text-white mt-8">1. Introduction</h3>
                  <p>
                      At KoKo Market Journal, your privacy is a serious matter. This Privacy Policy explains how we (do not) collect and use your data.
                  </p>
  
                  <h3 className="text-xl font-bold text-white mt-8">2. Data Collection</h3>
                  <p>
                      This website is primarily informational. We do not use registration forms, we do not request credit cards, and we do not collect personal data directly through the site, except for standard anonymous analytical data (Google Analytics) for site traffic monitoring.
                  </p>
  
                  <h3 className="text-xl font-bold text-white mt-8">3. Discord Server</h3>
                  <p>
                      If you decide to join our Discord server, your data (name, username) is governed by Discord's privacy policy. We do not have access to your private data beyond what is publicly visible in the group.
                  </p>
  
                  <h3 className="text-xl font-bold text-white mt-8">4. Cookies</h3>
                  <p>
                      This website may use cookies to improve user experience. You can disable cookies in your browser settings.
                  </p>
              </div>
            </>
          );
      case 'terms':
        return (
            <>
              <div className="flex items-center gap-3 mb-8 text-trading-accent">
                  <FileText size={40} />
                  <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Use</h1>
              </div>
              
              <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
                  <h3 className="text-xl font-bold text-white mt-8">1. Acceptance of Terms</h3>
                  <p>
                      By accessing this website and joining the KoKo Market Journal Discord server, you agree to be bound by these Terms of Use, all applicable laws and regulations.
                  </p>
  
                  <h3 className="text-xl font-bold text-white mt-8">2. Use License</h3>
                  <p>
                      Permission is granted to temporarily download one copy of the materials (information) on KoKo Market Journal's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                  </p>
                  <p>Under this license you may not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                      <li>Modify or copy the materials;</li>
                      <li>Use the materials for any commercial purpose (reselling signals or courses);</li>
                      <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                  </ul>
  
                  <h3 className="text-xl font-bold text-white mt-8">3. Community Conduct</h3>
                  <p>
                      KoKo Market Journal is a community for professional development. Hate speech, spamming, insults, or promoting other services is strictly prohibited and will result in immediate removal from the server.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-8">4. Accuracy of Materials</h3>
                  <p>
                     The materials appearing on KoKo Market Journal's website could include technical, typographical, or photographic errors. KoKo Market Journal does not warrant that any of the materials on its website are accurate, complete, or current.
                  </p>
              </div>
            </>
          );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E11] py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
            onClick={onBack}
            className="group mb-12 flex items-center gap-2 text-trading-muted hover:text-white transition-colors"
        >
            <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/10 transition-all">
                <ArrowLeft size={20} />
            </div>
            <span>Back to Home</span>
        </button>

        <div className="bg-[#151A21] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LegalPages;