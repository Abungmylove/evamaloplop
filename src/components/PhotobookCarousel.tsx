import React, { useState } from 'react';
import { ALL_EVA_PHOTOS, CATEGORIES, PhotoItem } from '../data/photos';
import { ChevronLeft, ChevronRight, Maximize2, X, Play, Pause, Film } from 'lucide-react';

export const PhotobookCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const filteredPhotos = activeCategory === 'all'
    ? ALL_EVA_PHOTOS
    : ALL_EVA_PHOTOS.filter((p) => p.category === activeCategory);

  const currentPhoto = filteredPhotos[currentIndex] || filteredPhotos[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="photobook" className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="rounded-3xl bg-white p-6 sm:p-12 shadow-2xl border-4 border-[#8B1220]/20 space-y-8 relative overflow-hidden">
        
        {/* Header (Minimalist Editorial Style) */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 text-xs font-mono-tag text-[#7A7067] uppercase">
          <span className="text-[#8B1220] font-semibold">ALBUM ARCHIVE</span>
          <span className="font-editorial italic text-base text-[#8B1220] capitalize">
            moments of my pretty girl
          </span>
          <span className="text-[#8B1220] font-semibold">{filteredPhotos.length} FRAMES</span>
        </div>

        {/* Minimal Categories Filter */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {[
            { key: 'all', label: 'All' },
            { key: 'pantai', label: 'At The Beach' },
            { key: 'desi', label: 'By Desi' },
            { key: 'bunga', label: 'With Flowers' },
            { key: 'malang', label: 'In Malang' },
            { key: 'shorthair', label: 'Short Hair' },
            { key: 'gemes', label: 'Cute Selfies' },
            { key: 'masakecil', label: 'Childhood' },
            { key: 'karya', label: 'Art & Studio' }
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setCurrentIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full font-mono-tag text-xs tracking-wider uppercase transition-all whitespace-nowrap ${
                activeCategory === cat.key
                  ? 'bg-[#8B1220] text-white font-bold'
                  : 'bg-stone-100 text-[#595047] hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Big Slide Stage */}
        <div className="relative rounded-2xl border-2 border-[#8B1220] bg-stone-50 overflow-hidden min-h-[380px] sm:min-h-[520px] flex items-center justify-center p-4">
          {currentPhoto.isVideo ? (
            <video
              src={currentPhoto.src}
              controls
              playsInline
              className="max-h-[60vh] w-auto max-w-full rounded-xl object-contain shadow-sm"
            />
          ) : (
            <img
              src={currentPhoto.src}
              alt={currentPhoto.caption}
              className="max-h-[60vh] w-auto max-w-full rounded-xl object-contain shadow-md cursor-zoom-in transition-transform duration-300 hover:scale-[1.01]"
              onClick={() => setIsLightboxOpen(true)}
            />
          )}

          {/* Left / Right Nav Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-stone-300 text-[#1F1D1B] hover:bg-[#8B1220] hover:text-white hover:border-[#8B1220] transition-all flex items-center justify-center shadow-md z-10"
            title="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur border border-stone-300 text-[#1F1D1B] hover:bg-[#8B1220] hover:text-white hover:border-[#8B1220] transition-all flex items-center justify-center shadow-md z-10"
            title="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Slide Info & Controls (Ref Style: back ... page X of Y ... next) */}
        <div className="flex items-center justify-between text-xs font-mono-tag text-[#7A7067] border-t border-stone-100 pt-4">
          <button
            onClick={handlePrev}
            className="hover:text-[#8B1220] font-semibold transition-colors uppercase"
          >
            &larr; BACK
          </button>

          <div className="text-center space-y-1">
            <span className="font-editorial italic text-base text-[#8B1220] capitalize block">
              {currentPhoto.caption}
            </span>
            <span className="font-mono-tag text-[11px] text-[#8C827A]">
              PAGE {currentIndex + 1} OF {filteredPhotos.length}
            </span>
          </div>

          <button
            onClick={handleNext}
            className="hover:text-[#8B1220] font-semibold transition-colors uppercase"
          >
            NEXT &rarr;
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar pt-2 border-t border-stone-100">
          {filteredPhotos.map((photo, i) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(i)}
              className={`relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === i
                  ? 'border-[#8B1220] scale-105 shadow-md'
                  : 'border-stone-200 opacity-60 hover:opacity-100'
              }`}
            >
              {photo.isVideo ? (
                <div className="w-full h-full bg-stone-900 flex items-center justify-center text-white">
                  <Film className="w-4 h-4" />
                </div>
              ) : (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-rose-600 transition-colors flex items-center justify-center z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.caption}
              className="max-h-[75vh] w-auto object-contain rounded-xl border border-white/20 shadow-2xl"
            />
            <p className="mt-4 text-center font-editorial italic text-lg text-white capitalize">
              {currentPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
