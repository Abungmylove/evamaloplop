import React, { useState, useEffect, useRef } from 'react';
import { ALL_EVA_PHOTOS, CATEGORIES, PhotoItem } from '../data/photos';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Play, 
  Pause, 
  SlidersHorizontal, 
  LayoutGrid, 
  Film,
  Heart,
  Volume2
} from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [selectedLightboxPhoto, setSelectedLightboxPhoto] = useState<PhotoItem | null>(null);

  // Filter photos based on category
  const filteredPhotos = activeCategory === 'all'
    ? ALL_EVA_PHOTOS
    : ALL_EVA_PHOTOS.filter((p) => p.category === activeCategory);

  // Reset slide index when category changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [activeCategory]);

  // Autoplay functionality for carousel
  useEffect(() => {
    let interval: any;
    if (isAutoPlay && viewMode === 'carousel' && filteredPhotos.length > 1) {
      interval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % filteredPhotos.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, viewMode, filteredPhotos.length]);

  const currentPhoto = filteredPhotos[currentSlideIndex] || filteredPhotos[0];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const openLightbox = (photo: PhotoItem) => {
    setSelectedLightboxPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedLightboxPhoto(null);
  };

  const handleLightboxNav = (direction: 'next' | 'prev') => {
    if (!selectedLightboxPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedLightboxPhoto.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIdx = (currentIndex + 1) % filteredPhotos.length;
      setSelectedLightboxPhoto(filteredPhotos[nextIdx]);
    } else {
      const prevIdx = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedLightboxPhoto(filteredPhotos[prevIdx]);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80 relative bg-[#F5EFEB]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-rose-200 bg-white text-rose-700 text-xs font-mono-tag tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>THE COMPLETE PHOTO ARCHIVE ({ALL_EVA_PHOTOS.length} MEMORIES)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1D1B]">
            Galeri &amp; Carousel Eva
          </h2>
          <p className="font-editorial italic text-[#6B6259] text-lg sm:text-xl">
            Dari foto-foto di pantai, momen manis difotoin Desi, fase short hair, sampai masa kecil yang lucu.
          </p>

          {/* View Mode Toggle: Carousel vs Grid */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="inline-flex p-1 rounded-full bg-white border border-stone-200 shadow-xs">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono-tag font-semibold transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-[#6B6259] hover:text-[#1F1D1B]'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Mode Carousel (Slide)</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono-tag font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-[#6B6259] hover:text-[#1F1D1B]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Semua Foto ({filteredPhotos.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 pt-1 gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count = cat.key === 'all'
              ? ALL_EVA_PHOTOS.length
              : ALL_EVA_PHOTOS.filter((p) => p.category === cat.key).length;

            if (count === 0 && cat.key !== 'all') return null;

            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full font-mono-tag text-xs tracking-wider whitespace-nowrap transition-all shrink-0 ${
                  activeCategory === cat.key
                    ? 'bg-rose-600 text-white font-bold shadow-md shadow-rose-600/20'
                    : 'bg-white border border-stone-200 text-[#595047] hover:text-rose-600 hover:border-rose-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 text-[10px] opacity-75 font-normal">({count})</span>
              </button>
            );
          })}
        </div>

        {/* VIEW 1: INTERACTIVE SLIDING CAROUSEL */}
        {viewMode === 'carousel' && currentPhoto && (
          <div className="space-y-6">
            {/* Main Carousel Stage Card */}
            <div className="relative rounded-3xl border-2 border-white bg-white p-4 sm:p-8 shadow-xl overflow-hidden">
              
              {/* Carousel Header Controls */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4 text-xs font-mono-tag text-[#7A7067]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-semibold uppercase text-[10px]">
                    {currentPhoto.categoryLabel}
                  </span>
                  <span>SLIDE {currentSlideIndex + 1} OF {filteredPhotos.length}</span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Autoplay toggle */}
                  <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="flex items-center gap-1 text-xs text-[#595047] hover:text-rose-600 transition-colors"
                    title={isAutoPlay ? "Jeda Auto-Slide" : "Mulai Auto-Slide"}
                  >
                    {isAutoPlay ? <Pause className="w-3.5 h-3.5 text-rose-600 animate-pulse" /> : <Play className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{isAutoPlay ? 'Auto-Slide ON' : 'Auto-Slide'}</span>
                  </button>

                  {/* Zoom Fullscreen */}
                  <button
                    onClick={() => openLightbox(currentPhoto)}
                    className="w-8 h-8 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white transition-colors flex items-center justify-center text-[#595047]"
                    title="Perbesar Layar Penuh"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Slide Media Area */}
              <div className="relative max-h-[68vh] min-h-[380px] sm:min-h-[500px] rounded-2xl overflow-hidden bg-stone-100 flex items-center justify-center">
                {currentPhoto.isVideo ? (
                  <video
                    src={currentPhoto.src}
                    controls
                    playsInline
                    className="max-h-[65vh] w-auto max-w-full rounded-2xl object-contain shadow-sm"
                  >
                    Browser Anda tidak mendukung video.
                  </video>
                ) : (
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.caption}
                    className="max-h-[65vh] w-auto max-w-full rounded-2xl object-contain shadow-sm cursor-zoom-in transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => openLightbox(currentPhoto)}
                  />
                )}

                {/* Left Navigation Arrow */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 text-[#2D2824] hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all flex items-center justify-center shadow-md z-10"
                  title="Slide Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={handleNextSlide}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 text-[#2D2824] hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all flex items-center justify-center shadow-md z-10"
                  title="Slide Berikutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide Caption & Title (Exactly matching renamed file titles) */}
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div className="space-y-1">
                  <span className="font-mono-tag text-[11px] text-rose-600 uppercase tracking-widest block font-semibold">
                    {currentPhoto.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1D1B] font-medium capitalize">
                    {currentPhoto.caption}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono-tag text-xs text-[#8C827A]">
                    KLIK FOTO UNTUK FULLSCREEN
                  </span>
                  <button
                    onClick={() => openLightbox(currentPhoto)}
                    className="px-4 py-2 rounded-full bg-stone-900 text-white hover:bg-rose-600 transition-colors text-xs font-mono-tag font-semibold flex items-center gap-1.5"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span>Perbesar</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Strip (Carousel Filmstrip) */}
            <div className="p-4 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-2">
              <div className="flex items-center justify-between px-2 text-xs font-mono-tag text-[#7A7067]">
                <span>PILIH SLIDE CEPAT:</span>
                <span className="text-rose-600 font-semibold">{filteredPhotos.length} FOTO</span>
              </div>

              <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
                {filteredPhotos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      currentSlideIndex === idx
                        ? 'border-rose-600 scale-105 shadow-md ring-2 ring-rose-300'
                        : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {photo.isVideo ? (
                      <div className="w-full h-full bg-stone-900 flex items-center justify-center text-white text-[10px] font-mono-tag">
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
                    <span className="absolute bottom-1 right-1 px-1 rounded bg-black/60 text-[9px] font-mono text-white">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: FULL GRID OF ALL PHOTOS */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(photo)}
                className="group cursor-pointer rounded-2xl border border-stone-200/90 bg-white p-3 transition-all duration-300 hover:border-rose-400 hover:shadow-lg flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-100">
                  {photo.isVideo ? (
                    <div className="w-full h-full bg-stone-900 flex flex-col items-center justify-center text-white gap-1">
                      <Film className="w-6 h-6 text-rose-400" />
                      <span className="text-[10px] font-mono-tag">Video Moment</span>
                    </div>
                  ) : (
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur text-[#1F1D1B] flex items-center justify-center shadow-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[9px] font-mono-tag font-medium text-stone-700">
                    NO. {index + 1}
                  </div>
                </div>

                <div className="pt-2.5 px-0.5 space-y-0.5">
                  <span className="font-mono-tag text-[9px] text-rose-600 uppercase block font-semibold">
                    {photo.categoryLabel}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base text-[#1F1D1B] font-medium line-clamp-1 group-hover:text-rose-600 transition-colors capitalize">
                    {photo.caption}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedLightboxPhoto && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-all flex items-center justify-center z-10"
            title="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Button */}
          <button
            onClick={() => handleLightboxNav('prev')}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center z-10"
            title="Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => handleLightboxNav('next')}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center z-10"
            title="Berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <div className="relative max-h-[72vh] rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl flex items-center justify-center">
              {selectedLightboxPhoto.isVideo ? (
                <video
                  src={selectedLightboxPhoto.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-auto object-contain rounded-2xl"
                />
              ) : (
                <img
                  src={selectedLightboxPhoto.src}
                  alt={selectedLightboxPhoto.caption}
                  className="max-h-[70vh] w-auto object-contain rounded-2xl"
                />
              )}
            </div>

            <div className="mt-4 text-center max-w-xl space-y-1 text-white">
              <span className="font-mono-tag text-xs text-rose-400 uppercase tracking-widest block font-semibold">
                {selectedLightboxPhoto.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white capitalize">
                {selectedLightboxPhoto.caption}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
