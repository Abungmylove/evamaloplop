import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

interface EnvelopeOpeningProps {
  onOpen: () => void;
}

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onOpen }) => {
  const [stage, setStage] = useState<'initial' | 'blooming' | 'fading_out'>('initial');

  const handleEnvelopeClick = () => {
    if (stage !== 'initial') return;
    setStage('blooming');

    // The bloom takes about 3.5 seconds to scale up fully.
    // After that, we transition to fading out.
    setTimeout(() => {
      setStage('fading_out');
      
      // Give it 1.2s to smoothly crossfade and reveal the main website.
      setTimeout(() => {
        onOpen();
      }, 1200);
    }, 3500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 select-none overflow-hidden ${
        stage === 'fading_out' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#FDF8F0', // Soft vintage parchment cream
        backgroundImage: `radial-gradient(#E8D5C4 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      {/* 1. Initial State: Closed Envelope */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
          stage !== 'initial' ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <div className="relative z-10 flex flex-col items-center cursor-pointer group" onClick={handleEnvelopeClick}>
          {/* Watercolor Letter Envelope */}
          <div className="relative w-64 sm:w-80 h-44 sm:h-52 bg-[#F6E9DA] border border-[#D8C2AD] rounded-xl shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
            {/* Envelope Flap Triangles */}
            <div
              className="absolute top-0 left-0 right-0 h-24 bg-[#EBD8C3] border-b border-[#D4BC9F] rounded-t-xl group-hover:-translate-y-1 transition-transform duration-500"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />
            {/* Wax Seal Stamp */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#8B1220] shadow-md flex items-center justify-center text-rose-200 border border-rose-300/40 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            {/* Envelope Bottom Pocket Texture */}
            <div
              className="absolute bottom-0 left-0 right-0 h-28 bg-[#F3E3D1]/80 rounded-b-xl border-t border-white/50"
              style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 15%)' }}
            />
          </div>

          {/* Tap to open text with slow pulsing effect */}
          <div className="mt-8 text-center space-y-1">
            <p className="font-script text-3xl sm:text-4xl text-[#8B1220] tracking-wide animate-pulse">
              Tap to open
            </p>
          </div>
        </div>
      </div>

      {/* 2 & 3. The Bloom Animation */}
      {/* Flower appears from center and scales massively over 4s */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-[4000ms] ease-in-out`}
        style={{
          transform: stage === 'initial' ? 'scale(0.1)' : 'scale(15)',
          opacity: stage === 'initial' ? 0 : 1,
        }}
      >
        <img
          src={getAssetUrl('/bunga/output-onlinepngtools.png')}
          alt="Blooming Flower"
          className="w-96 h-96 sm:w-[500px] sm:h-[500px] object-contain drop-shadow-2xl"
        />
      </div>

    </div>
  );
};
