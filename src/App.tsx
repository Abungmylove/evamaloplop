import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroEditorial } from './components/HeroEditorial';
import { CenterCalligraphyRibbon } from './components/CenterCalligraphyRibbon';
import { LoveSongsVinyl } from './components/LoveSongsVinyl';
import { PhotobookCarousel } from './components/PhotobookCarousel';
import { MinimalLoveLetter } from './components/MinimalLoveLetter';
import { Footer } from './components/Footer';
import { FlowerRain } from './components/FlowerRain';
import { FlowerWidget } from './components/FlowerWidget';
import { MusicPlayerBar } from './components/MusicPlayerBar';
import { BackgroundAesthetics } from './components/BackgroundAesthetics';
import { AnimatedSection } from './components/AnimatedSection';
import { OpeningSequence } from './components/OpeningSequence';
import { SongTrack, LOVE_SOUNDTRACKS } from './data/soundtracks';

export const App: React.FC = () => {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<SongTrack>(LOVE_SOUNDTRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [loveCount, setLoveCount] = useState<number>(520);
  const [flowerCount, setFlowerCount] = useState<number>(99);
  const [flowerRainEnabled, setFlowerRainEnabled] = useState<boolean>(true);

  // Triggered when the user finishes the Mixtape opening sequence
  const handleSequenceComplete = (track: SongTrack) => {
    setCurrentTrack(track);
    setHasOpenedEnvelope(true);
    setIsPlaying(true);
  };

  const handleToggleMusic = () => setIsPlaying((prev) => !prev);
  const handleSelectTrack = (track: SongTrack) => { setCurrentTrack(track); setIsPlaying(true); };
  const handleNextTrack = () => {
    const nextIndex = (LOVE_SOUNDTRACKS.findIndex((t) => t.id === currentTrack.id) + 1) % LOVE_SOUNDTRACKS.length;
    setCurrentTrack(LOVE_SOUNDTRACKS[nextIndex]);
    setIsPlaying(true);
  };
  const handlePrevTrack = () => {
    const prevIndex = (LOVE_SOUNDTRACKS.findIndex((t) => t.id === currentTrack.id) - 1 + LOVE_SOUNDTRACKS.length) % LOVE_SOUNDTRACKS.length;
    setCurrentTrack(LOVE_SOUNDTRACKS[prevIndex]);
    setIsPlaying(true);
  };
  const handleAddLove = () => setLoveCount((prev) => prev + 1);
  const handleAddFlower = () => setFlowerCount((prev) => prev + 1);
  const handleToggleFlowerRain = () => setFlowerRainEnabled((prev) => !prev);

  return (
    <div className="min-h-screen bg-[#3D040A] text-[#1F1D1B] font-sans selection:bg-rose-600 selection:text-white relative">
      {/* 1. Opening Sequence (Envelope -> Bloom -> Mixtape) */}
      {!hasOpenedEnvelope && (
        <OpeningSequence onSequenceComplete={handleSequenceComplete} />
      )}

      {/* 2. Main Website (Hero, Photobook, etc) */}
      <BackgroundAesthetics />
      <FlowerRain enabled={flowerRainEnabled} />
      <Navbar isPlaying={isPlaying} onToggleMusic={handleToggleMusic} loveCount={loveCount} onAddLove={handleAddLove} flowerCount={flowerCount} onAddFlower={handleAddFlower} />

      <main className="relative z-10 space-y-6 sm:space-y-12 pb-16">
        <AnimatedSection delay={100}><HeroEditorial /></AnimatedSection>
        <AnimatedSection delay={150}><CenterCalligraphyRibbon /></AnimatedSection>
        <AnimatedSection delay={200}><LoveSongsVinyl currentTrack={currentTrack} isPlaying={isPlaying} onSelectTrack={handleSelectTrack} onToggleMusic={handleToggleMusic} /></AnimatedSection>
        <AnimatedSection delay={200}><PhotobookCarousel /></AnimatedSection>
        <AnimatedSection delay={150}><MinimalLoveLetter onAddLove={handleAddLove} onAddFlower={handleAddFlower} /></AnimatedSection>
      </main>

      <Footer />
      <FlowerWidget flowerRainEnabled={flowerRainEnabled} onToggleFlowerRain={handleToggleFlowerRain} flowerCount={flowerCount} onAddFlower={handleAddFlower} />
      <MusicPlayerBar currentTrack={currentTrack} isPlaying={isPlaying} onTogglePlay={handleToggleMusic} onNextTrack={handleNextTrack} onPrevTrack={handlePrevTrack} />
    </div>
  );
};

export default App;
