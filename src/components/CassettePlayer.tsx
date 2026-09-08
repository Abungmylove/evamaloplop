import React from 'react';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { SongTrack } from '../data/soundtracks';

interface CassettePlayerProps {
  currentTrack: SongTrack;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
}

export const CassettePlayer: React.FC<CassettePlayerProps> = ({
  currentTrack,
  isPlaying,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
}) => {
  return (
    <div className="relative group w-80 sm:w-96 perspective-1000">
      {/* Cassette Tape Body */}
      <div className="relative w-full h-56 bg-stone-200 rounded-2xl shadow-2xl border-b-8 border-stone-300 p-3 transform transition-transform duration-500 hover:scale-105">
        
        {/* Main Sticker Label */}
        <div className="w-full h-full bg-[#FDF8F0] rounded-xl border-2 border-stone-300 flex flex-col p-4 relative overflow-hidden shadow-inner">
          
          {/* Top Label */}
          <div className="flex justify-between items-center border-b border-[#8B1220]/30 pb-2 mb-3">
            <span className="font-mono-tag text-[10px] text-[#8B1220] tracking-widest uppercase font-bold">
              Yosefa Eva Mix
            </span>
            <span className="font-mono-tag text-[10px] text-stone-400">90 MIN</span>
          </div>

          {/* Hand-written Song Title */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-1">
            <h3 className="font-script text-3xl sm:text-4xl text-[#8B1220] text-center px-4 leading-none -rotate-2">
              {currentTrack.title}
            </h3>
            <p className="font-mono-tag text-[9px] text-stone-500 uppercase tracking-widest text-center mt-2">
              {currentTrack.artist}
            </p>
          </div>

          {/* Tape Reels Window */}
          <div className="w-4/5 h-12 mx-auto bg-stone-800/10 rounded-full border border-stone-300/50 mt-4 flex items-center justify-between px-6 shadow-inner relative overflow-hidden">
            {/* Left Reel */}
            <div className={`w-8 h-8 rounded-full border-4 border-stone-700 bg-stone-800 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
              <div className="w-2 h-2 rounded-full bg-stone-200" />
              <div className="absolute w-full h-0.5 bg-stone-600 rotate-0" />
              <div className="absolute w-full h-0.5 bg-stone-600 rotate-60" />
              <div className="absolute w-full h-0.5 bg-stone-600 rotate-120" />
            </div>

            {/* Tape bridge */}
            <div className="absolute top-1/2 left-12 right-12 h-1 bg-stone-900/40 -translate-y-1/2" />

            {/* Right Reel */}
            <div className={`w-8 h-8 rounded-full border-4 border-stone-700 bg-stone-800 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
              <div className="w-2 h-2 rounded-full bg-stone-200" />
              <div className="absolute w-full h-0.5 bg-stone-600 rotate-0" />
              <div className="absolute w-full h-0.5 bg-stone-600 rotate-60" />
              <div className="absolute w-full h-0.5 bg-stone-600 rotate-120" />
            </div>
          </div>
        </div>

        {/* Cassette Bottom Screws */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-stone-400 shadow-inner" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-stone-400 shadow-inner" />
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-stone-400 shadow-inner" />
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-stone-400 shadow-inner" />
      </div>

      {/* Physical Player Buttons below cassette */}
      <div className="flex justify-center mt-8 space-x-4">
        <button 
          onClick={onPrevTrack}
          className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-rose-100 flex items-center justify-center text-[#8B1220] hover:bg-[#8B1220] hover:text-white transition-colors"
        >
          <SkipBack className="w-5 h-5 fill-current" />
        </button>

        <button 
          onClick={onTogglePlay}
          className="w-16 h-16 rounded-full bg-[#8B1220] shadow-xl shadow-[#8B1220]/30 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 fill-current" />
          ) : (
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          )}
        </button>

        <button 
          onClick={onNextTrack}
          className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-rose-100 flex items-center justify-center text-[#8B1220] hover:bg-[#8B1220] hover:text-white transition-colors"
        >
          <SkipForward className="w-5 h-5 fill-current" />
        </button>
      </div>

    </div>
  );
};
