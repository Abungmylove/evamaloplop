import React from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { SongTrack, LOVE_SOUNDTRACKS } from '../data/soundtracks';

interface LoveSongsVinylProps {
  currentTrack: SongTrack;
  isPlaying: boolean;
  onSelectTrack: (track: SongTrack) => void;
  onToggleMusic: () => void;
}

export const LoveSongsVinyl: React.FC<LoveSongsVinylProps> = ({
  currentTrack,
  isPlaying,
  onSelectTrack,
  onToggleMusic,
}) => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-3xl bg-white p-6 sm:p-12 shadow-2xl border-4 border-[#8B1220]/20 space-y-10 relative overflow-hidden">
        
        {/* Header Title (Direct Match to Reference 3rd Card) */}
        <div className="text-center space-y-1">
          <p className="font-editorial text-xl sm:text-2xl italic text-[#7A7067]">
            You remind me of
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-[#8B1220] leading-none">
            everything beautiful
          </h2>
          <p className="font-mono-tag text-xs text-[#8C827A] tracking-wider uppercase pt-1">
            SOUNDTRACKS OF OUR LOVE &bull; MARCH 2024 &mdash; PRESENT
          </p>
        </div>

        {/* 3 Vinyl Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 items-start">
          {LOVE_SOUNDTRACKS.map((track) => {
            const isThisPlaying = isPlaying && currentTrack.id === track.id;
            const isSelected = currentTrack.id === track.id;

            const handleClick = () => {
              if (isSelected) {
                onToggleMusic();
              } else {
                onSelectTrack(track);
              }
            };

            return (
              <div key={track.id} className="flex flex-col items-center text-center space-y-4 group">
                {/* Record Sleeve & Vinyl Disc Sliding Out */}
                <div
                  className="relative w-48 sm:w-56 aspect-square flex items-center justify-center cursor-pointer select-none"
                  onClick={handleClick}
                  title={`Click to play ${track.title} by ${track.artist}`}
                >
                  {/* Spinning Black Vinyl Disc */}
                  <div
                    className={`absolute right-1 w-40 h-40 rounded-full bg-[#121212] border-4 border-[#222] shadow-xl flex items-center justify-center transition-all duration-700 ${
                      isThisPlaying
                        ? 'translate-x-10 animate-spin-slow'
                        : isSelected
                        ? 'translate-x-8'
                        : 'translate-x-6 group-hover:translate-x-10'
                    }`}
                  >
                    {/* Vinyl Grooves */}
                    <div className="w-28 h-28 rounded-full border border-stone-700/60 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full border border-stone-700/80 flex items-center justify-center ${
                        isThisPlaying ? 'bg-rose-600 shadow-lg shadow-rose-500/50' : 'bg-[#8B1220]'
                      }`}>
                        <span className="w-3 h-3 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>

                  {/* Album Cover Sleeve */}
                  <div className={`relative z-10 w-40 h-40 rounded-lg overflow-hidden border-2 bg-stone-900 shadow-md transition-all duration-300 ${
                    isSelected ? 'border-[#8B1220] ring-4 ring-rose-500/20 scale-105' : 'border-[#8B1220]/60 group-hover:border-[#8B1220]'
                  }`}>
                    <img
                      src={track.coverImage}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 flex flex-col justify-between p-2.5 text-white">
                      <div className="flex items-center justify-between">
                        <span className="font-mono-tag text-[9px] uppercase tracking-wider text-rose-300 font-bold bg-black/40 px-1.5 py-0.5 rounded">
                          {track.artist}
                        </span>
                        {isThisPlaying && (
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-left">
                          <span className="font-mono-tag text-[8px] uppercase tracking-widest text-white/70 block">
                            {track.accentBadge}
                          </span>
                          <span className="font-serif text-xs font-bold leading-tight line-clamp-1">
                            {track.title}
                          </span>
                        </div>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isThisPlaying
                            ? 'bg-rose-600 text-white scale-110 shadow-md'
                            : 'bg-white/90 text-[#8B1220] group-hover:scale-110 group-hover:bg-white'
                        }`}>
                          {isThisPlaying ? (
                            <Pause className="w-3.5 h-3.5 fill-current" />
                          ) : (
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lyric Quote */}
                <div className="max-w-[220px] text-xs font-editorial italic text-[#8B1220] leading-relaxed">
                  {track.quote}
                </div>

                {/* YouTube Link */}
                <a
                  href={track.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] font-mono-tag text-stone-500 hover:text-[#8B1220] transition-colors"
                >
                  <span>Listen on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
