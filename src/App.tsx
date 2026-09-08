import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { EnvelopeOpening } from './components/EnvelopeOpening';
import { CassettePlayer } from './components/CassettePlayer';
import { SongTrack, LOVE_SOUNDTRACKS } from './data/soundtracks';
import { getAssetUrl } from './utils/assetUrl';

export const App: React.FC = () => {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<SongTrack>(LOVE_SOUNDTRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [loveCount, setLoveCount] = useState<number>(520);
  const [flowerCount, setFlowerCount] = useState<number>(99);
  
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

  const handleNextTrack = () => {
    const currentIndex = LOVE_SOUNDTRACKS.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % LOVE_SOUNDTRACKS.length;
    setCurrentTrack(LOVE_SOUNDTRACKS[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    const currentIndex = LOVE_SOUNDTRACKS.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + LOVE_SOUNDTRACKS.length) % LOVE_SOUNDTRACKS.length;
    setCurrentTrack(LOVE_SOUNDTRACKS[prevIndex]);
    setIsPlaying(true);
  };

  const handleAddLove = () => setLoveCount((prev) => prev + 1);
  const handleAddFlower = () => setFlowerCount((prev) => prev + 1);

  return (
    <div className="min-h-screen relative font-sans selection:bg-rose-600 selection:text-white flex flex-col">
      
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

      {/* Background Floral Wallpaper (Main Content Background) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundColor: '#FDF8F0',
          backgroundImage: `url('${getAssetUrl('/bunga/output-onlinepngtools.png')}')`,
          backgroundSize: '800px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="fixed inset-0 z-0 bg-[#FDF8F0]/70 pointer-events-none" />

      {/* Navbar (Optional, keeping it for the navigation) */}
      <div className="relative z-40">
        <Navbar
          isPlaying={isPlaying}
          onToggleMusic={handleToggleMusic}
          loveCount={loveCount}
          onAddLove={handleAddLove}
          flowerCount={flowerCount}
          onAddFlower={handleAddFlower}
        />
      </div>

      {/* Opening Envelope Screen */}
      {!hasOpenedEnvelope && (
        <EnvelopeOpening onOpen={handleOpenEnvelope} />
      )}

      {/* Main Content (Cassette Player) */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
        <CassettePlayer 
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleToggleMusic}
          onNextTrack={handleNextTrack}
          onPrevTrack={handlePrevTrack}
        />
        
        {/* Simple message below cassette */}
        <p className="mt-12 font-editorial italic text-stone-600 text-lg text-center max-w-md">
          "A playlist of our forever moments. Just for you, Eva."
        </p>
      </main>

    </div>
  );
};

export default App;
