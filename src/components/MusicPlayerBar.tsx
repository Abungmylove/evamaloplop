import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ExternalLink, SkipForward, SkipBack } from 'lucide-react';
import { SongTrack } from '../data/soundtracks';
import { getAssetUrl } from '../utils/assetUrl';

interface MusicPlayerBarProps {
  currentTrack: SongTrack;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
}

export const MusicPlayerBar: React.FC<MusicPlayerBarProps> = ({
  currentTrack,
  isPlaying,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
}) => {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play / Pause audio element when isPlaying or currentTrack changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Playback error / autoplay blocked by browser:', error);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  // Update mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Time update for progress bar
  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  // When song ends, play next track
  const handleEnded = () => {
    onNextTrack();
  };

  return (
    <>
      {/* Native HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={getAssetUrl(currentTrack.audioSrc)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="auto"
      />

      {/* Floating Bottom Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 py-2.5 sm:py-3 px-4 sm:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Left: Track Info & Play/Pause & Skip */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            {/* Skip Prev */}
            <button
              onClick={onPrevTrack}
              className="text-stone-400 hover:text-[#8B1220] transition-colors p-1"
              title="Previous song"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={onTogglePlay}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8B1220] hover:bg-[#A31828] text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm shrink-0"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-white" />
              ) : (
                <Play className="w-4 h-4 fill-white ml-0.5" />
              )}
            </button>

            {/* Skip Next */}
            <button
              onClick={onNextTrack}
              className="text-stone-400 hover:text-[#8B1220] transition-colors p-1"
              title="Next song"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            {/* Track Title */}
            <div className="flex flex-col text-left truncate">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="font-mono-tag text-xs font-bold text-[#1F1D1B] tracking-wider uppercase truncate">
                  {currentTrack.title}
                </span>
                <span className="text-stone-400 font-mono-tag text-xs">&mdash;</span>
                <span className="font-mono-tag text-xs text-[#8B1220] font-medium shrink-0">
                  {currentTrack.artist}
                </span>
              </div>
              <span className="font-editorial italic text-stone-500 text-xs hidden sm:block truncate max-w-md">
                {currentTrack.quote}
              </span>
            </div>
          </div>

          {/* Center: Audio Waveform Equalizer */}
          <div className="hidden md:flex items-end space-x-1 h-4 shrink-0">
            <div className={`w-1 bg-[#8B1220] rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse' : 'h-1'}`} />
            <div className={`w-1 bg-[#8B1220] rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-bounce' : 'h-1.5'}`} />
            <div className={`w-1 bg-[#8B1220] rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse' : 'h-1'}`} />
            <div className={`w-1 bg-[#8B1220] rounded-full transition-all duration-300 ${isPlaying ? 'h-2 animate-bounce' : 'h-1'}`} />
          </div>

          {/* Right: Controls & Link */}
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-stone-500 hover:text-[#1F1D1B] transition-colors p-1"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <a
              href={currentTrack.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs font-mono-tag text-[#8B1220] hover:text-[#A31828] transition-colors underline"
              title="Open video on YouTube"
            >
              <span className="hidden sm:inline">YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Thin Animated Progress Bar */}
        <div className="w-full bg-stone-100 h-0.5 mt-2 rounded-full overflow-hidden">
          <div
            className="bg-[#8B1220] h-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
};
