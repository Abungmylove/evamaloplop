import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Clock, ArrowDown, MapPin } from 'lucide-react';
import { HERO_PHOTOS } from '../data/photos';

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Relationship started on March 2, 2024
    const startDate = new Date('2024-03-02T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeElapsed({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden bg-[#FAF7F2]">
      {/* Warm Ambient Romantic Glows */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-orange-100/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Editorial Barcode & Stamp (Ref 1 & 2 Aesthetic) */}
      <div className="max-w-6xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 border-b border-stone-200/80 pb-4 text-[#7A7067] font-mono-tag text-[11px] tracking-wider uppercase">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[#2D2824] font-semibold">TANGERANG &harr; MALANG</span>
          <span className="text-stone-400">/</span>
          <span className="text-rose-600 font-medium">LDR ARCHIVE (~850 KM)</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-[#8C827A]">OFFICIALLY TOGETHER SINCE MARCH 2, 2024</span>
          <div className="hidden sm:inline-block w-20 h-4 barcode-pattern opacity-40 text-[#403A34]" />
        </div>
      </div>

      {/* Main Editorial Hero Section (Inspired directly by Ref 1: Editorial Romance) */}
      <div className="max-w-6xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Romance Typography (Ref 1 Style) */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-rose-200 bg-rose-50/80 text-rose-700 text-xs font-mono-tag tracking-widest uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Dedicated Entirely to Eva</span>
          </div>

          <div className="space-y-1">
            <p className="font-editorial text-2xl sm:text-3xl italic text-[#6B6259] font-light tracking-wide">
              to the most beautiful soul,
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#1F1D1B] leading-[1.05]">
              Yosefa Meing <br />
              <span className="italic font-editorial font-light text-rose-600">Siung Adjid</span>
            </h1>
          </div>

          <p className="text-[#595047] text-base sm:text-lg font-light leading-relaxed max-w-lg">
            Terima kasih telah selalu menjadi alasan di balik senyuman dan hangatnya setiap hari. 
            Meskipun terpisah jarak antara Tangerang dan Malang, hatiku selalu tertaut pada satu nama: <strong className="text-[#1F1D1B] font-medium">Eva</strong>.
          </p>

          {/* Quote Block (Ref 1 aesthetic: italic editorial serif) */}
          <div className="border-l-2 border-rose-400 pl-4 py-1 italic font-editorial text-xl sm:text-2xl text-[#3D352E]">
            &ldquo;What I have with you, I don&apos;t want it with anyone else.&rdquo;
          </div>

          {/* Live Relationship Counter */}
          <div className="pt-2">
            <div className="text-[11px] font-mono-tag tracking-widest text-[#8C827A] uppercase mb-3 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span>Days of Falling in Love with Eva:</span>
            </div>
            
            <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
              <div className="p-3 sm:p-4 rounded-2xl bg-white border border-stone-200/90 text-center shadow-sm">
                <span className="block font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1D1B] tracking-tight">
                  {timeElapsed.days}
                </span>
                <span className="font-mono-tag text-[10px] tracking-wider text-[#8C827A] uppercase">
                  Days
                </span>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-white border border-rose-100 text-center shadow-sm">
                <span className="block font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600 tracking-tight">
                  {timeElapsed.hours}
                </span>
                <span className="font-mono-tag text-[10px] tracking-wider text-rose-600/80 uppercase">
                  Hours
                </span>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-white border border-stone-200/90 text-center shadow-sm">
                <span className="block font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1D1B] tracking-tight">
                  {timeElapsed.minutes}
                </span>
                <span className="font-mono-tag text-[10px] tracking-wider text-[#8C827A] uppercase">
                  Minutes
                </span>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-white border border-rose-100 text-center shadow-sm">
                <span className="block font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600 tracking-tight">
                  {timeElapsed.seconds}
                </span>
                <span className="font-mono-tag text-[10px] tracking-wider text-rose-600/80 uppercase">
                  Seconds
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Oval Frame & Vintage Film Photo (Direct Ref 1) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          
          {/* Oval cutout portrait (Exactly like Reference 1 center photo!) */}
          <div className="relative group">
            {/* Ambient soft glow */}
            <div className="absolute -inset-3 rounded-[9999px] bg-gradient-to-b from-rose-200/70 via-orange-100/40 to-transparent blur-md group-hover:from-rose-300/80 transition-all duration-700" />

            <div className="relative w-64 sm:w-80 md:w-96 aspect-[3/4] rounded-[9999px] overflow-hidden border-2 border-white bg-stone-100 shadow-xl">
              <img
                src={HERO_PHOTOS.evaMain}
                alt="Yosefa Meing Siung Adjid"
                className="w-full h-full object-cover object-center filter saturate-[1.02] contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/photos/beach-06.jpg';
                }}
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
            </div>

            {/* Floating Editorial Badge (Ref 1 Style) */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-stone-200/90 p-3 sm:p-4 rounded-2xl shadow-lg max-w-[210px]">
              <p className="font-mono-tag text-[10px] text-rose-600 tracking-wider uppercase mb-1 font-semibold">
                HER SPECIAL EDITION
              </p>
              <p className="font-editorial italic text-base sm:text-lg text-[#2D2824] leading-tight">
                &ldquo;My heart belongs with you.&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono-tag text-[#7A7067]">
                <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                <span>FOREVER ADORED</span>
              </div>
            </div>

            {/* Floral Accent Stamp (Because Eva loves flowers) */}
            <div className="absolute -bottom-8 -left-2 sm:-bottom-6 sm:-left-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-lg group-hover:rotate-6 transition-transform duration-500 bg-rose-50">
              <img
                src={`${import.meta.env.BASE_URL}bunga/flower-1.jpg`}
                alt="Flowers for Eva"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-rose-900/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-full text-[8px] font-mono-tag text-rose-700 font-bold uppercase tracking-wider shadow-xs">
                  🌸 BLOOMS
                </span>
              </div>
            </div>

            {/* Monogram Stamp */}
            <div className="absolute -top-4 -left-2 sm:top-2 sm:-left-6 w-14 h-14 rounded-full border border-stone-200 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-md">
              <span className="font-mono-tag text-[9px] text-[#8C827A] tracking-tighter">EST.</span>
              <span className="font-editorial text-sm font-bold text-rose-600">2024</span>
            </div>
          </div>

          {/* Caption underneath */}
          <div className="mt-8 text-center space-y-1">
            <p className="font-mono-tag text-xs tracking-widest text-[#595047] uppercase font-semibold">
              YOSEFA MEING SIUNG ADJID &bull; EVA
            </p>
            <p className="font-editorial italic text-[#7A7067] text-base">
              A timeless muse across the distance.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between pt-6 border-t border-stone-200/80 text-[#8C827A] text-xs font-mono-tag">
        <a href="#about-eva" className="inline-flex items-center space-x-2 text-[#595047] hover:text-rose-600 transition-colors">
          <span>DISCOVER MORE ABOUT EVA</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
        <span className="hidden sm:inline">AN APPRECIATION FOR EVA</span>
        <span>SCROLL TO DISCOVER &darr;</span>
      </div>
    </section>
  );
};
