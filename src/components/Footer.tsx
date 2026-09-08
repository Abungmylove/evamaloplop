import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-12 pb-24 px-4 sm:px-8 text-[#FAF7F2]/60 font-mono-tag text-xs text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-t border-white/10 pt-8 text-stone-300">
          <span className="font-editorial italic text-base sm:text-lg text-white">
            Yosefa Meing Siung Adjid
          </span>

          <span className="text-[11px] uppercase tracking-widest text-rose-300">
            SINCE MARCH 2, 2024
          </span>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-400">
          <span>&copy; 2024 &mdash; PRESENT &bull; #EVAMALOPLOP</span>
          <span className="flex items-center gap-1.5 text-stone-300">
            MADE WITH <Heart className="w-3 h-3 fill-rose-500 text-rose-500 inline" /> FOR EVA
          </span>
        </div>
      </div>
    </footer>
  );
};
