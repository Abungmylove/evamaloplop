import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Clock, Calendar } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HeroEditorial: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date('2024-03-02T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        setTimeElapsed({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Main Editorial Card */}
      <div className="rounded-3xl bg-white p-6 sm:p-12 shadow-2xl border-4 border-[#8B1220]/20 relative overflow-hidden space-y-8">
        
        {/* Top Header: 09 ... You too divine to just be [ MINE ] ... 02 */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-6 text-[#8B1220]">
          <span className="font-mono-tag text-lg sm:text-2xl font-bold tracking-tighter opacity-80">
            09
          </span>

          {/* Center Calligraphy Header */}
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <span className="font-script text-4xl sm:text-6xl text-[#8B1220] leading-none">
                Y
              </span>
              <div className="flex flex-col text-left leading-none">
                <span className="font-editorial text-sm sm:text-xl italic text-[#8B1220]">
                  ou too <span className="font-script text-lg sm:text-2xl lowercase">divine</span>
                </span>
                <span className="font-mono-tag text-xs sm:text-base tracking-widest uppercase font-bold text-[#8B1220]">
                  to just be [ MINE ]
                </span>
              </div>
            </div>
          </div>

          <span className="font-mono-tag text-lg sm:text-2xl font-bold tracking-tighter opacity-80">
            02
          </span>
        </div>

        {/* 3 Featured Photos with Crimson Red Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-6 items-center">
          
          {/* Frame 1 (Left) */}
          <div className="relative group rounded-xl overflow-hidden border-2 border-[#8B1220] aspect-[3/4] bg-stone-100 shadow-md">
            <img
              src={getAssetUrl('/photos/photo-15-dipantai-sama-aku-1-.jpeg')}
              alt="At the Beach"
              className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-3 left-3 px-2 py-0.5 rounded-sm bg-[#8B1220] text-white text-[9px] font-mono-tag tracking-wider uppercase">
              beach archive
            </div>
          </div>

          {/* Frame 2 (Center - Featured) */}
          <div className="relative group rounded-xl overflow-hidden border-2 border-[#8B1220] aspect-[3/4] bg-stone-100 shadow-xl sm:-translate-y-2">
            <img
              src={getAssetUrl('/photos/eva-main.jpg')}
              alt="Yosefa Meing Siung Adjid"
              className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-3 left-3 px-2 py-0.5 rounded-sm bg-[#8B1220] text-white text-[9px] font-mono-tag tracking-wider uppercase">
              yosefa eva
            </div>
            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-sm bg-[#8B1220] text-white text-[9px] font-mono-tag tracking-wider uppercase">
              my pretty girl
            </div>
          </div>

          {/* Frame 3 (Right) */}
          <div className="relative group rounded-xl overflow-hidden border-2 border-[#8B1220] aspect-[3/4] bg-stone-100 shadow-md">
            <img
              src={getAssetUrl('/photos/photo-06-difotoin-desi-ini-cantik-bgt-1-.jpeg')}
              alt="Candid Beauty"
              className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-sm bg-[#8B1220] text-white text-[9px] font-mono-tag tracking-wider uppercase">
              forever muse
            </div>
          </div>

        </div>

        {/* Live Relationship Counter / Countdown Timer since March 2, 2024 */}
        <div className="rounded-2xl bg-stone-50 border border-[#8B1220]/20 p-4 sm:p-6 text-center space-y-3">
          <div className="flex items-center justify-center space-x-2 text-xs font-mono-tag tracking-widest uppercase text-[#8B1220] font-bold">
            <Clock className="w-3.5 h-3.5 text-[#8B1220] animate-pulse" />
            <span>COUNTING EVERY SECOND WITH YOU &bull; SINCE MARCH 2, 2024</span>
          </div>

          {/* 4 Clock Boxes: Days, Hours, Minutes, Seconds */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto pt-1">
            {/* Days */}
            <div className="bg-white rounded-xl border border-[#8B1220]/30 p-2.5 sm:p-4 shadow-sm text-center">
              <span className="font-serif text-2xl sm:text-4xl font-black text-[#8B1220] block leading-none">
                {timeElapsed.days}
              </span>
              <span className="font-mono-tag text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider block mt-1">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl border border-[#8B1220]/30 p-2.5 sm:p-4 shadow-sm text-center">
              <span className="font-serif text-2xl sm:text-4xl font-black text-[#8B1220] block leading-none">
                {String(timeElapsed.hours).padStart(2, '0')}
              </span>
              <span className="font-mono-tag text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider block mt-1">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="bg-white rounded-xl border border-[#8B1220]/30 p-2.5 sm:p-4 shadow-sm text-center">
              <span className="font-serif text-2xl sm:text-4xl font-black text-[#8B1220] block leading-none">
                {String(timeElapsed.minutes).padStart(2, '0')}
              </span>
              <span className="font-mono-tag text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider block mt-1">
                Mins
              </span>
            </div>

            {/* Seconds */}
            <div className="bg-white rounded-xl border-2 border-[#8B1220] p-2.5 sm:p-4 shadow-sm text-center relative overflow-hidden bg-rose-50/40">
              <span className="font-serif text-2xl sm:text-4xl font-black text-[#8B1220] block leading-none animate-pulse">
                {String(timeElapsed.seconds).padStart(2, '0')}
              </span>
              <span className="font-mono-tag text-[10px] sm:text-xs text-[#8B1220] font-bold uppercase tracking-wider block mt-1">
                Secs
              </span>
            </div>
          </div>

          <p className="font-editorial italic text-stone-500 text-xs sm:text-sm pt-1">
            &ldquo;And I would choose you in a hundred lifetimes, in any version of reality.&rdquo;
          </p>
        </div>

        {/* Minimal Footer Stamp */}
        <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-tag text-[#7A7067]">
          <span>EST. MARCH 2, 2024 &bull; TANGERANG &harr; MALANG</span>
          <span className="font-editorial italic text-base text-[#8B1220]">
            every second belongs to you
          </span>
          <span>DEDICATED FOR EVA</span>
        </div>

      </div>
    </section>
  );
};
