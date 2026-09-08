import React from 'react';

export const CenterCalligraphyRibbon: React.FC = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-3xl bg-white p-8 sm:p-16 shadow-2xl border-4 border-[#8B1220]/20 text-center relative overflow-hidden flex flex-col justify-between min-h-[360px] sm:min-h-[420px]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between text-xs font-mono-tag tracking-wider text-[#7A7067] uppercase border-b border-stone-100 pb-4">
          <span className="text-[#8B1220] font-semibold">TRUE LOVE</span>
          <span className="font-editorial italic text-base text-[#8B1220] capitalize">
            songs that remind me of you
          </span>
          <span className="text-[#8B1220] font-semibold">FOREVER &bull; 02.03</span>
        </div>

        {/* Center Calligraphy Element (Direct Match to Reference 2nd card) */}
        <div className="my-auto py-10 relative flex flex-col items-center justify-center">
          <div className="relative inline-block px-8 py-4">
            {/* Elegant SVG Ribbon outline */}
            <svg
              className="absolute inset-0 w-full h-full text-rose-200 pointer-events-none opacity-60"
              viewBox="0 0 300 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M 20 60 Q 150 10 280 60 Q 150 110 20 60 Z" />
            </svg>

            <h2 className="font-script text-5xl sm:text-7xl md:text-8xl text-[#8B1220] leading-none select-none tracking-wide">
              Girl, I&apos;m so in love with You
            </h2>
          </div>
          <p className="font-editorial italic text-lg sm:text-xl text-[#7A7067] mt-3">
            &ldquo;In every crowd, my eyes will always search for you.&rdquo;
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between text-xs font-mono-tag text-[#8C827A] border-t border-stone-100 pt-4">
          <span>TANGERANG</span>
          <span className="text-[#8B1220] font-semibold">PAGE 2 OF 4</span>
          <span>MALANG</span>
        </div>

      </div>
    </section>
  );
};
