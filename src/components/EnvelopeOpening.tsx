import React, { useState, useRef } from 'react';
import { Heart, Volume2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

interface EnvelopeOpeningProps {
  onOpen: () => void;
}

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onOpen }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);

    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.warn('Video play error:', err);
      });
    }
  };

  const handleVideoEnded = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFadingOut(true);
    setTimeout(() => {
      onOpen();
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 select-none overflow-hidden bg-[#FBF6ED] ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={handleStart}
    >
      {/* Video element rendering the exact watercolor flower bloom animation */}
      <video
        ref={videoRef}
        src={getAssetUrl('/opening.mp4')}
        playsInline
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover sm:object-contain max-w-5xl max-h-screen"
        preload="auto"
      />

      {/* Tap to open overlay before play */}
      {!hasStarted && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/10 backdrop-blur-[2px] cursor-pointer group transition-all">
          <div className="flex flex-col items-center space-y-4 p-8 rounded-3xl bg-[#FBF6ED]/90 border-2 border-[#8B1220]/30 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-[#8B1220] text-white flex items-center justify-center shadow-lg animate-bounce">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <div className="text-center space-y-1">
              <p className="font-script text-4xl sm:text-5xl text-[#8B1220] tracking-wide">
                Tap to open
              </p>
              <p className="font-mono-tag text-xs text-stone-600 tracking-widest uppercase">
                A special moment for Yosefa Eva
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Skip Button in top-right */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-30 px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white text-[#8B1220] border border-[#8B1220]/30 font-mono-tag text-xs tracking-wider transition-all backdrop-blur-sm shadow-sm"
      >
        SKIP &rarr;
      </button>
    </div>
  );
};
