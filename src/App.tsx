import React, { useState, useRef, useEffect } from 'react';
import { EnvelopeOpening } from './components/EnvelopeOpening';
import { MixtapeCard } from './components/MixtapeCard';
import { SongTrack, LOVE_SOUNDTRACKS } from './data/soundtracks';
import { getAssetUrl } from './utils/assetUrl';

export const App: React.FC = () => {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<SongTrack>(LOVE_SOUNDTRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastTrackIdRef = useRef<string>(currentTrack.id);

  // Audio Logic
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (lastTrackIdRef.current !== currentTrack.id) {
      lastTrackIdRef.current = currentTrack.id;
      if (currentTrack.startTime !== undefined) {
        audio.currentTime = currentTrack.startTime;
      }
    }

    if (isPlaying) {
      if (audio.currentTime === 0 && currentTrack.startTime !== undefined) {
        audio.currentTime = currentTrack.startTime;
      }
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => console.warn('Audio play blocked:', e));
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  const handleOpenEnvelope = () => {
    setHasOpenedEnvelope(true);
    setIsPlaying(true);
  };

  const handleToggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSelectTrack = (track: SongTrack) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handleNextTrack = () => {
    const currentIndex = LOVE_SOUNDTRACKS.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % LOVE_SOUNDTRACKS.length;
    setCurrentTrack(LOVE_SOUNDTRACKS[nextIndex]);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-rose-200 selection:text-stone-900 flex flex-col items-center justify-center bg-[#FDF8F0] overflow-hidden">
      
      {/* Hidden Audio Player */}
      <audio
        ref={audioRef}
        src={getAssetUrl(currentTrack.audioSrc)}
        onEnded={handleNextTrack}
        onLoadedMetadata={() => {
          if (audioRef.current && currentTrack.startTime !== undefined && audioRef.current.currentTime === 0) {
            audioRef.current.currentTime = currentTrack.startTime;
          }
        }}
        preload="auto"
      />

      {/* Background Floral Wallpaper - huge single image like the end of the zoom */}
      <div 
        className={`fixed inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-[2000ms] ${hasOpenedEnvelope ? 'opacity-100' : 'opacity-0'}`}
      >
        <img
          src={getAssetUrl('/bunga/output-onlinepngtools.png')}
          alt="Floral background"
          className="w-full h-full object-cover sm:object-contain scale-[2] sm:scale-[4] opacity-80"
        />
      </div>

      {/* Opening Envelope Screen */}
      {!hasOpenedEnvelope && (
        <EnvelopeOpening onOpen={handleOpenEnvelope} />
      )}

      {/* Main Content (Mixtape Card) */}
      <main className={`relative z-10 w-full flex justify-center p-4 transition-all duration-[2000ms] ease-out ${hasOpenedEnvelope ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
        <MixtapeCard 
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleToggleMusic}
          onSelectTrack={handleSelectTrack}
        />
      </main>

    </div>
  );
};

export default App;
