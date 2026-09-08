import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getAssetUrl } from '../utils/assetUrl';

interface EnvelopeOpeningProps {
  onOpen: () => void;
}

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onOpen }) => {
  const [isOpenAnimation, setIsOpenAnimation] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleEnvelopeClick = () => {
    if (isOpenAnimation) return;
    setIsOpenAnimation(true);

    // Trigger sweet petal burst from center
    confetti({
      origin: { x: 0.5, y: 0.5 },
      particleCount: 70,
      spread: 120,
      scalar: 1.4,
      shapes: ['circle'],
      colors: ['#FFE4E6', '#FDA4AF', '#F43F5E', '#BE123C', '#FFF1F2'],
    });

    // Fade out and reveal website
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onOpen();
      }, 700);
    }, 1800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#FDF8F0', // Soft romantic parchment cream background
        backgroundImage: `radial-gradient(#E8D5C4 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      {/* Decorative vintage frame borders */}
      <div className="absolute inset-4 sm:inset-8 border border-[#8B1220]/20 pointer-events-none rounded-2xl">
        <div className="absolute top-2 left-3 font-mono-tag text-[10px] text-[#8B1220]/40 tracking-widest">
          SPECIAL DELIVERY
        </div>
        <div className="absolute top-2 right-3 font-mono-tag text-[10px] text-[#8B1220]/40 tracking-widest">
          EST. 02.03.2024
        </div>
        <div className="absolute bottom-2 left-3 font-mono-tag text-[10px] text-[#8B1220]/40 tracking-widest">
          FOR YOSEFA MEING SIUNG ADJID
        </div>
        <div className="absolute bottom-2 right-3 font-mono-tag text-[10px] text-[#8B1220]/40 tracking-widest">
          WITH ALL MY LOVE
        </div>
      </div>

      {/* Main Interactive Envelope Container */}
      <div className="relative z-10 flex flex-col items-center cursor-pointer group" onClick={handleEnvelopeClick}>
        
        {/* Watercolor Letter Envelope */}
        <div className="relative w-64 sm:w-80 h-44 sm:h-52 bg-[#F6E9DA] border border-[#D8C2AD] rounded-xl shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
          
          {/* Envelope Flap Triangles Simulation */}
          <div
            className={`absolute top-0 left-0 right-0 h-24 bg-[#EBD8C3] border-b border-[#D4BC9F] rounded-t-xl origin-top transition-transform duration-700 ${
              isOpenAnimation ? '-scale-y-100 opacity-60' : 'group-hover:-translate-y-1'
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
          />

          {/* Pressed Flower Bouquet Artwork on Envelope */}
          <div className="relative z-10 flex flex-col items-center space-y-2 pointer-events-none">
            <img
              src={getAssetUrl('/bunga/flower-1.jpg')}
              alt="Flower seal"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-2 border-[#8B1220]/40 shadow-inner"
            />
            
            {/* Wax Seal Stamp */}
            <div className="w-8 h-8 rounded-full bg-[#8B1220] shadow-md flex items-center justify-center text-rose-200 border border-rose-300/40">
              <Heart className="w-4 h-4 fill-current" />
            </div>
          </div>

          {/* Envelope Bottom Pocket Texture */}
          <div
            className="absolute bottom-0 left-0 right-0 h-28 bg-[#F3E3D1]/80 rounded-b-xl border-t border-white/50"
            style={{
              clipPath: 'polygon(0 100%, 100% 100%, 50% 15%)',
            }}
          />
        </div>

        {/* Tap to open text animation */}
        <div className="mt-8 text-center space-y-1">
          <p className="font-script text-3xl sm:text-4xl text-[#8B1220] tracking-wide animate-pulse">
            Tap to open
          </p>
          <p className="font-mono-tag text-[11px] text-stone-500 tracking-widest uppercase">
            A piece of my heart, just for you
          </p>
        </div>

      </div>

      {/* Bursting Flower Explosion Overlay during Open Animation */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 flex items-center justify-center transition-all duration-1000 ${
          isOpenAnimation ? 'scale-150 opacity-100' : 'scale-50 opacity-0'
        }`}
      >
        <div className="relative w-full h-full max-w-2xl max-h-[800px] flex items-center justify-center">
          <img
            src={getAssetUrl('/bunga/flower-2.jpg')}
            alt="Flower bloom explosion"
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover filter blur-[1px] opacity-70 animate-spin-slow"
          />
        </div>
      </div>

    </div>
  );
};
