import React from 'react';

export const BackgroundAesthetics: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Deep Wine Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A0207] via-[#45070E] to-[#200105]" />

      {/* 2. Film Grain Texture */}
      <div className="absolute inset-0 bg-grain" />

      {/* 3. Subtle Editorial Grid Accent */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70" />

      {/* 4. Glowing Radiant Radial Lighting / Aura Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-rose-900/25 blur-[120px] animate-float-1" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-red-900/20 blur-[140px] animate-float-2" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-rose-950/40 blur-[130px] animate-float-1" />

      {/* 5. Giant Editorial Watermark Typographies in Background (Inspired by Reference) */}
      <div className="absolute top-28 left-8 text-white/[0.035] font-script text-[140px] sm:text-[220px] leading-none whitespace-nowrap -rotate-6 transform">
        Yosefa Eva
      </div>

      <div className="absolute top-1/2 -right-12 text-white/[0.03] font-mono-tag font-bold text-[90px] sm:text-[160px] leading-none tracking-widest uppercase rotate-90 transform">
        EST. 02.03.24
      </div>

      <div className="absolute bottom-32 left-6 text-white/[0.035] font-editorial italic text-[110px] sm:text-[180px] leading-none whitespace-nowrap">
        my forever muse
      </div>

      {/* 6. Subtle Editorial Coordinates & Grid Markers along margins */}
      <div className="hidden lg:flex flex-col justify-between absolute left-6 top-32 bottom-32 text-white/20 font-mono-tag text-[9px] tracking-widest uppercase space-y-24">
        <span className="rotate-180 [writing-mode:vertical-rl]">LAT -7.9826° &bull; MALANG</span>
        <span className="rotate-180 [writing-mode:vertical-rl]">LONG 106.63° &bull; TANGERANG</span>
        <span className="rotate-180 [writing-mode:vertical-rl]">DIST 850 KM</span>
      </div>

      <div className="hidden lg:flex flex-col justify-between absolute right-6 top-32 bottom-32 text-white/20 font-mono-tag text-[9px] tracking-widest uppercase space-y-24">
        <span className="[writing-mode:vertical-rl]">LOVE SOUNDTRACK &bull; REALITY CLUB</span>
        <span className="[writing-mode:vertical-rl]">MARCH 02, 2024 &bull; PRESENT</span>
        <span className="[writing-mode:vertical-rl]">ARCHIVE &bull; 67 FRAMES</span>
      </div>

      {/* 7. Corner Crosshairs (+) for Luxury Editorial Polish */}
      <div className="absolute top-20 left-8 text-white/25 font-mono-tag text-xs">+</div>
      <div className="absolute top-20 right-8 text-white/25 font-mono-tag text-xs">+</div>
      <div className="absolute bottom-24 left-8 text-white/25 font-mono-tag text-xs">+</div>
      <div className="absolute bottom-24 right-8 text-white/25 font-mono-tag text-xs">+</div>
    </div>
  );
};
