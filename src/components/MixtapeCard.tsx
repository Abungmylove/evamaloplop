import React from 'react';
import { Play, Pause } from 'lucide-react';
import { SongTrack, LOVE_SOUNDTRACKS } from '../data/soundtracks';
import { getAssetUrl } from '../utils/assetUrl';

interface MixtapeCardProps {
  currentTrack: SongTrack;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onSelectTrack: (track: SongTrack) => void;
}

export const MixtapeCard: React.FC<MixtapeCardProps> = ({
  currentTrack,
  isPlaying,
  onTogglePlay,
  onSelectTrack,
}) => {
  return (
    <div className="w-full max-w-2xl bg-[#FCFAF8] rounded-md shadow-2xl p-8 sm:p-12 text-stone-800 relative z-10 mx-4">
      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <p className="font-mono-tag text-[10px] tracking-[0.2em] text-stone-500 uppercase">
          FOR EVA &bull; FROM JONATHAN
        </p>
        <h2 className="font-editorial text-4xl sm:text-5xl">Songs for you</h2>
      </div>

      {/* Cassette Tape Graphic */}
      <div className="relative w-full max-w-md mx-auto aspect-[16/10] bg-[#E1DECA] rounded-xl shadow-lg border border-[#C5C0A4] p-3 mb-10">
        <div className="w-full h-full bg-[#F4F1E1] rounded-lg border border-[#D5D0B4] p-3 flex flex-col">
          <div className="flex justify-between items-start border-b border-[#D5D0B4] pb-1 mb-2">
            <span className="font-script text-2xl text-stone-700">Songs for you</span>
            <span className="font-mono-tag text-[9px] text-stone-500">90 MIN</span>
          </div>
          
          {/* Cassette sticker with flowers */}
          <div className="flex-1 bg-white border border-[#D5D0B4] rounded flex items-center justify-center overflow-hidden">
            <img 
              src={getAssetUrl('/bunga/output-onlinepngtools.png')} 
              alt="Cassette floral" 
              className="w-full h-32 object-cover opacity-60" 
            />
          </div>

          <div className="flex justify-center gap-16 mt-3">
            {/* Left Reel */}
            <div className={`w-10 h-10 rounded-full border-2 border-[#C5C0A4] bg-stone-100 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s', animationTimingFunction: 'linear' }}>
              <div className="w-3 h-3 bg-stone-300 rounded-full" />
            </div>
            {/* Right Reel */}
            <div className={`w-10 h-10 rounded-full border-2 border-[#C5C0A4] bg-stone-100 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s', animationTimingFunction: 'linear' }}>
              <div className="w-3 h-3 bg-stone-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Tracklist & Liner Notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-stone-200 pt-8">
        
        {/* Left: Tracklist */}
        <div className="space-y-4">
          {LOVE_SOUNDTRACKS.map((track, idx) => (
            <div 
              key={track.id} 
              className={`flex items-start gap-3 cursor-pointer group ${currentTrack.id === track.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
              onClick={() => {
                if (currentTrack.id === track.id) {
                  onTogglePlay();
                } else {
                  onSelectTrack(track);
                }
              }}
            >
              <span className="font-mono-tag text-[10px] mt-1">{String(idx + 1).padStart(2, '0')}</span>
              <div className="flex-1">
                <p className="font-serif font-medium text-sm">{track.title}</p>
                <p className="font-mono-tag text-[10px] text-stone-500 mt-0.5">{track.artist}</p>
              </div>
              
              {/* Play button indicator */}
              <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center group-hover:bg-stone-300 transition-colors">
                {currentTrack.id === track.id && isPlaying ? (
                  <Pause className="w-3 h-3 text-stone-700" />
                ) : (
                  <Play className="w-3 h-3 text-stone-700 translate-x-px" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Liner Notes */}
        <div>
          <h3 className="font-mono-tag text-[10px] tracking-widest uppercase text-stone-500 mb-3 border-b border-stone-200 pb-1">
            Liner Note
          </h3>
          <p className="font-serif text-sm leading-relaxed text-stone-700 whitespace-pre-line">
            Hey you,
            
            I made you a mixtape. It's filled with the songs that remind me of our moments. 
            
            Press play and let's listen together.
          </p>
        </div>

      </div>
    </div>
  );
};
