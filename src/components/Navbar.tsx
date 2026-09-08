import React from 'react';
import { Heart, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { triggerFlowerBurst } from '../utils/flowerAction';

interface NavbarProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
  loveCount: number;
  onAddLove: () => void;
  flowerCount: number;
  onAddFlower: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isPlaying,
  onToggleMusic,
  loveCount,
  onAddLove,
  flowerCount,
  onAddFlower,
}) => {
  const triggerLoveExplosion = (e: React.MouseEvent<HTMLButtonElement>) => {
    onAddLove();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 25,
      spread: 60,
      colors: ['#8B1220', '#E11D48', '#FDA4AF', '#FFFFFF'],
    });
  };

  const handleFlowerAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    onAddFlower();
    triggerFlowerBurst(e);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3.5 px-4 sm:px-8 bg-[#52090F]/90 backdrop-blur-md border-b border-[#8B1220]/40 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left Monogram / Title */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2 text-white">
            <span className="font-mono-tag text-xs tracking-widest text-rose-300 font-bold">
              09
            </span>
            <span className="text-white/40 font-mono-tag text-xs">/</span>
            <span className="font-editorial italic text-base sm:text-lg text-white font-medium">
              Yosefa &bull; Eva
            </span>
            <span className="text-white/40 font-mono-tag text-xs">/</span>
            <span className="font-mono-tag text-xs tracking-widest text-rose-300 font-bold">
              02
            </span>
          </a>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono-tag text-stone-300 tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-colors">
            Prologue
          </a>
          <a href="#photobook" className="hover:text-white transition-colors">
            Photobook
          </a>
          <span className="text-rose-400/80 font-editorial lowercase text-base">
            true love
          </span>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-2.5">
          {/* Music Toggle */}
          <button
            onClick={onToggleMusic}
            title={isPlaying ? "Pause Reality Club" : "Play Reality Club"}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all text-xs font-mono-tag"
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
                <span className="hidden sm:inline text-[11px]">PLAYING</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden sm:inline text-[11px]">SONG</span>
              </>
            )}
          </button>

          {/* Flower Action Button */}
          <button
            onClick={handleFlowerAction}
            title="Throw flowers"
            className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-mono-tag text-xs tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all"
          >
            <span>🌸</span>
            <span>{flowerCount}</span>
          </button>

          {/* Love Count Button */}
          <button
            onClick={triggerLoveExplosion}
            title="Send love"
            className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-[#8B1220] hover:bg-[#A31828] text-white font-mono-tag text-xs tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-white" />
            <span>{loveCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
