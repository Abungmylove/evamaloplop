import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { CSSFlower } from './CSSFlower';
import { MixtapeCard } from './MixtapeCard';
import { SongTrack, LOVE_SOUNDTRACKS } from '../data/soundtracks';
import { getAssetUrl } from '../utils/assetUrl';

interface OpeningSequenceProps {
  onSequenceComplete: (initialTrack: SongTrack) => void;
}

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onSequenceComplete }) => {
  const [stage, setStage] = useState<'envelope' | 'bloom' | 'mixtape' | 'fading_out'>('envelope');
  const [currentTrack, setCurrentTrack] = useState<SongTrack>(LOVE_SOUNDTRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnvelopeClick = () => {
    if (stage !== 'envelope') return;
    setStage('bloom');
  };

  const handleBloomComplete = () => {
    setStage('mixtape');
    
    // Auto-advance to the main website after 5 seconds of seeing the mixtape
    // in case the user doesn't know they need to click play.
    setTimeout(() => {
      setStage((prev) => {
        if (prev === 'mixtape') {
           setTimeout(() => {
             onSequenceComplete(currentTrack);
           }, 1000);
           return 'fading_out';
        }
        return prev;
      });
    }, 5000);
  };

  const handleTogglePlay = () => {
    setIsPlaying(true);
    // Once they press play on the mixtape, we start fading out the entire opening to reveal the main site!
    setTimeout(() => {
      setStage('fading_out');
      setTimeout(() => {
        onSequenceComplete(currentTrack);
      }, 1000); 
    }, 1500); 
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center select-none overflow-hidden transition-opacity duration-1000 z-[9999] ${
        stage === 'fading_out' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#FDF8F0',
        backgroundImage: `radial-gradient(#E8D5C4 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
    >
      {/* 1. Envelope State */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
        style={{
          opacity: stage === 'envelope' ? 1 : 0,
          transform: stage === 'envelope' ? 'scale(1)' : 'scale(0.9)',
          pointerEvents: stage === 'envelope' ? 'auto' : 'none',
        }}
      >
        <div className="relative z-10 flex flex-col items-center cursor-pointer group" onClick={handleEnvelopeClick}>
          <div className="relative w-64 sm:w-80 h-44 sm:h-52 bg-[#F6E9DA] border border-[#D8C2AD] rounded-xl shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
            <div className="absolute top-0 left-0 right-0 h-24 bg-[#EBD8C3] border-b border-[#D4BC9F] rounded-t-xl" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#8B1220] shadow-md flex items-center justify-center text-rose-200">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#F3E3D1]/80 rounded-b-xl border-t border-white/50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 15%)' }} />
          </div>
          <div className="mt-8 text-center">
            <p className="font-script text-3xl sm:text-4xl text-[#8B1220] tracking-wide animate-pulse">Tap to open</p>
          </div>
        </div>
      </div>

      {/* 2. Bloom State (CSS Flower) */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-1000"
        style={{ opacity: stage === 'bloom' ? 1 : 0 }}
      >
        {stage === 'bloom' && <CSSFlower onComplete={handleBloomComplete} />}
      </div>

      {/* 3. Mixtape State (TikTok UI) */}
      {/* The background becomes a large blurred floral pattern when Mixtape arrives */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-2000 ${stage === 'mixtape' || stage === 'fading_out' ? 'opacity-80 scale-100' : 'opacity-0 scale-50'}`}
        style={{
          backgroundImage: `url('${getAssetUrl('/bunga/output-onlinepngtools.png')}')`,
          backgroundSize: '400px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-[1500ms] ease-out ${
          stage === 'mixtape' ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
        }`}
      >
        <MixtapeCard 
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onSelectTrack={(t) => setCurrentTrack(t)}
        />
      </div>

    </div>
  );
};
