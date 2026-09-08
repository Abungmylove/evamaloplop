import React from 'react';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { triggerFlowerBurst } from '../utils/flowerAction';

interface MinimalLoveLetterProps {
  onAddLove: () => void;
  onAddFlower: () => void;
}

export const MinimalLoveLetter: React.FC<MinimalLoveLetterProps> = ({
  onAddLove,
  onAddFlower,
}) => {
  const handleLoveClick = (e: React.MouseEvent) => {
    onAddLove();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 35,
      spread: 70,
      colors: ['#8B1220', '#E11D48', '#FDA4AF', '#FFFFFF'],
    });
  };

  const handleFlowerClick = (e: React.MouseEvent) => {
    onAddFlower();
    triggerFlowerBurst(e);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-3xl bg-white p-8 sm:p-14 shadow-2xl border-4 border-[#8B1220]/20 space-y-6 text-center relative overflow-hidden">
        
        {/* Top Header Stamp */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 text-xs font-mono-tag text-[#7A7067] uppercase">
          <span>FOR EVA</span>
          <span className="text-[#8B1220] font-semibold">A TIMELESS NOTE</span>
          <span>SINCE 02.03.2024</span>
        </div>

        {/* Short & Sweet Letter in English */}
        <div className="max-w-2xl mx-auto space-y-4 py-4">
          <p className="font-editorial italic text-2xl sm:text-3xl text-[#1F1D1B]">
            Dear Yosefa Meing Siung Adjid,
          </p>

          <p className="font-editorial text-lg sm:text-xl text-[#4A433D] leading-relaxed">
            Loving you across 850 kilometers between Tangerang and Malang has been the most beautiful journey. 
            Thank you for your warmth, your laughter, and every single unforgettable moment we share together.
          </p>

          <p className="font-editorial italic text-xl sm:text-2xl text-[#8B1220]">
            &ldquo;When I&apos;m with you, I don&apos;t think about anyone else.&rdquo;
          </p>

          <p className="font-editorial italic text-xl text-[#1F1D1B] pt-2">
            Always yours,<br />
            <span className="font-serif text-base tracking-wider text-[#8B1220] font-bold">
              Jonathan
            </span>
          </p>
        </div>

        {/* Action Buttons (Send Love & Throw Flowers) */}
        <div className="pt-6 border-t border-stone-100 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleLoveClick}
            className="px-6 py-3 rounded-full bg-[#8B1220] hover:bg-[#A31828] text-white font-mono-tag text-xs font-bold tracking-wider transition-all transform active:scale-95 shadow-md flex items-center gap-2"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>SEND LOVE</span>
          </button>

          <button
            onClick={handleFlowerClick}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-mono-tag text-xs font-bold tracking-wider transition-all transform active:scale-95 shadow-md flex items-center gap-2"
          >
            <span>🌸</span>
            <span>THROW FLOWERS FOR EVA</span>
          </button>
        </div>

      </div>
    </section>
  );
};
