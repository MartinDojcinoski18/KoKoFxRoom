import React, { useState, useEffect } from 'react';
import { Clock, Globe, MapPin, Activity, Calendar, Ban, Crosshair, AlertTriangle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const MarketTerminal: React.FC = () => {
  const [time, setTime] = useState(new Date());
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Helper to format time for specific timezones
  const getCityTime = (timezone: string) => {
    try {
        return time.toLocaleTimeString('en-GB', { 
            timeZone: timezone, 
            hour12: false,
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
    } catch (e) {
        return "--:--:--";
    }
  };

  // Helper to check if session is active (Based on UTC hours)
  const isSessionOpen = (startHour: number, endHour: number) => {
    const currentUtcHour = time.getUTCHours();
    // Handle crossover midnight (e.g. Tokyo sometimes)
    if (startHour > endHour) {
        return currentUtcHour >= startHour || currentUtcHour < endHour;
    }
    return currentUtcHour >= startHour && currentUtcHour < endHour;
  };

  // Session Configurations
  const sessions = [
    {
      id: 'london',
      name: 'London',
      timezone: 'Europe/London',
      isOpen: isSessionOpen(8, 17), // 08:00 - 17:00 UTC approx
      color: 'text-blue-400',
      borderColor: 'group-hover:border-blue-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]'
    },
    {
      id: 'ny',
      name: 'New York',
      timezone: 'America/New_York',
      isOpen: isSessionOpen(13, 22), // 13:00 - 22:00 UTC approx
      color: 'text-green-400',
      borderColor: 'group-hover:border-green-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]'
    },
    {
      id: 'tokyo',
      name: 'Tokyo',
      timezone: 'Asia/Tokyo',
      isOpen: isSessionOpen(0, 9), // 00:00 - 09:00 UTC approx
      color: 'text-red-400',
      borderColor: 'group-hover:border-red-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(248,113,113,0.2)]'
    }
  ];

  // Weekly Schedule Configuration
  const weekDays = [
    { day: 'MON', status: 'caution', label: 'A+ SETUPS ONLY' },
    { day: 'TUE', status: 'on', label: 'ACTIVE SNIPING' },
    { day: 'WED', status: 'on', label: 'ACTIVE SNIPING' },
    { day: 'THU', status: 'on', label: 'ACTIVE SNIPING' },
    { day: 'FRI', status: 'off', label: 'Review / No Trade' },
  ];

  return (
    <section className="py-24 bg-[#0B0E11] relative border-y border-white/5 overflow-hidden">
      {/* Background World Map Effect (Abstract) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none flex items-center justify-center">
         <Globe size={600} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-trading-accent font-mono text-xs mb-4 animate-pulse">
                    <span className="w-2 h-2 bg-trading-accent rounded-full"></span>
                    LIVE MARKET DATA
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Global Market <span className="text-trading-accent">Sessions</span></h2>
                <p className="text-trading-muted text-lg max-w-2xl mx-auto">
                    Timing is everything. We trade liquidity, not random candles. 
                    <br />Know when the banks are awake.
                </p>
            </div>
        </ScrollReveal>

        {/* Clocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {sessions.map((session, index) => (
                <ScrollReveal key={session.id} delay={index * 100}>
                    <div className={`group relative bg-[#151A21] border border-white/5 rounded-2xl p-8 transition-all duration-300 ${session.borderColor} ${session.glow}`}>
                        
                        {/* Status Indicator Top Right */}
                        <div className="absolute top-6 right-6 flex items-center gap-2">
                            <span className={`text-xs font-bold tracking-wider uppercase ${session.isOpen ? 'text-white' : 'text-gray-600'}`}>
                                {session.isOpen ? 'OPEN' : 'CLOSED'}
                            </span>
                            <span className={`relative flex h-3 w-3`}>
                              {session.isOpen && <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${session.isOpen ? 'bg-green-500' : 'bg-gray-600'}`}></span>}
                              <span className={`relative inline-flex rounded-full h-3 w-3 ${session.isOpen ? 'bg-green-500' : 'bg-gray-600'}`}></span>
                            </span>
                        </div>

                        {/* City Name & Icon */}
                        <div className="flex items-center gap-3 mb-8">
                            <MapPin size={24} className={session.isOpen ? session.color : 'text-gray-600'} />
                            <h3 className={`text-2xl font-bold ${session.isOpen ? 'text-white' : 'text-gray-500'}`}>{session.name}</h3>
                        </div>

                        {/* Digital Clock */}
                        <div className="mb-6">
                            <div className="font-mono text-4xl md:text-5xl font-black text-white tracking-widest tabular-nums">
                                {getCityTime(session.timezone)}
                            </div>
                            <p className="text-xs text-gray-500 font-mono mt-2 uppercase tracking-widest">Local Time</p>
                        </div>

                        {/* Volatility Status */}
                        <div className={`flex items-center gap-2 text-sm border-t border-white/5 pt-4 ${session.isOpen ? 'text-gray-300' : 'text-gray-600'}`}>
                            <Activity size={16} className={session.isOpen ? session.color : 'text-gray-600'} />
                            <span>Volatility: <strong className={session.isOpen ? 'text-white' : ''}>{session.isOpen ? 'HIGH' : 'LOW'}</strong></span>
                        </div>

                    </div>
                </ScrollReveal>
            ))}
        </div>

        {/* --- WEEKLY SCHEDULE SECTION --- */}
        <ScrollReveal>
            <div className="max-w-5xl mx-auto border-t border-white/5 pt-16">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-4">
                        <Calendar size={16} className="text-trading-accent" />
                        <span className="text-xs font-bold text-white uppercase tracking-widest">Weekly Protocol</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">When We Strike</h3>
                    <p className="text-gray-500 text-sm mt-2">
                        We don't trade every day. We avoid the Monday traps and the Friday exits.
                    </p>
                </div>

                <div className="grid grid-cols-5 gap-2 md:gap-4">
                    {weekDays.map((item, idx) => {
                        const isActive = item.status === 'on';
                        const isCaution = item.status === 'caution';
                        
                        let containerClass = '';
                        let textClass = '';
                        let labelClass = '';
                        let icon = null;
                        let indicator = null;

                        if (isActive) {
                             containerClass = 'bg-trading-accent/10 border-trading-accent/50 hover:bg-trading-accent/20 hover:scale-105 z-10';
                             textClass = 'text-white';
                             labelClass = 'text-trading-accent';
                             icon = <Crosshair size={12} />;
                             indicator = <div className="absolute top-2 right-2 w-2 h-2 bg-trading-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>;
                        } else if (isCaution) {
                             containerClass = 'bg-orange-500/10 border-orange-500/50 hover:bg-orange-500/20 hover:scale-105 z-10';
                             textClass = 'text-white';
                             labelClass = 'text-orange-500';
                             icon = <AlertTriangle size={12} />;
                             indicator = <div className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>;
                        } else {
                             containerClass = 'bg-[#151A21] border-white/5 opacity-50 grayscale hover:opacity-70';
                             textClass = 'text-gray-600';
                             labelClass = 'text-gray-600';
                             indicator = <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"><Ban size={40} className="text-red-500" /></div>;
                        }

                        return (
                            <div 
                                key={idx} 
                                className={`
                                    relative flex flex-col items-center justify-center p-4 md:p-6 rounded-xl border transition-all duration-300 group
                                    ${containerClass}
                                `}
                            >
                                {indicator}

                                <span className={`text-xl md:text-3xl font-black mb-2 ${textClass}`}>
                                    {item.day}
                                </span>
                                
                                <div className={`flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-tighter text-center ${labelClass}`}>
                                    {icon}
                                    {item.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </ScrollReveal>
        
        {/* UTC Reference */}
        <div className="text-center mt-16">
             <div className="inline-flex items-center gap-2 bg-black/40 px-6 py-3 rounded-full border border-white/10 text-gray-400 font-mono text-sm">
                <Clock size={14} />
                <span>Current UTC: {time.toLocaleTimeString('en-GB', { timeZone: 'UTC' })}</span>
             </div>
        </div>

        {/* Scrolling Ticker Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default MarketTerminal;