import React from 'react';
import { Heart } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/photos';

export const OurStoryTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80 relative bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
          <div className="space-y-2">
            <span className="font-mono-tag text-xs text-rose-600 uppercase tracking-widest font-semibold block">
              CHRONICLES &bull; MARCH 2, 2024 &mdash; PRESENT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1D1B]">
              The Story of Us
            </h2>
          </div>
          <div className="font-mono-tag text-xs text-[#8C827A] text-right">
            <span>START: 02.03.2024</span>
            <div className="w-24 h-4 barcode-pattern opacity-40 text-[#403A34] ml-auto mt-1" />
          </div>
        </div>

        {/* Timeline Events (Bright Editorial Style) */}
        <div className="relative border-l-2 border-rose-200 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_EVENTS.map((event, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-white bg-rose-500 group-hover:scale-125 group-hover:bg-rose-600 transition-all duration-300 shadow-sm" />

              {/* Date Stamp on the Left (for desktop screens) */}
              <div className="hidden sm:block absolute -left-36 top-1.5 w-28 text-right font-mono-tag text-xs text-rose-600 font-semibold tracking-wider">
                {event.date}
              </div>

              {/* Content Card */}
              <div className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 space-y-4 hover:border-rose-300 transition-all shadow-sm">
                {/* Mobile Date Badge */}
                <div className="sm:hidden inline-block px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-mono-tag text-[10px] tracking-wider mb-2">
                  {event.date}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1F1D1B] group-hover:text-rose-600 transition-colors">
                    {event.title}
                  </h3>
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[10px] font-mono-tag text-[#595047] uppercase tracking-wider">
                    {event.badge}
                  </span>
                </div>

                <p className="text-[#595047] text-sm sm:text-base leading-relaxed font-light">
                  {event.description}
                </p>

                {/* Romantic Quote */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-editorial italic text-rose-600 text-base sm:text-lg">
                    {event.quote}
                  </span>
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-100" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photobook Banner */}
        <div className="rounded-3xl border border-rose-200/80 bg-gradient-to-r from-rose-50/80 via-white to-orange-50/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center sm:text-left">
            <span className="font-mono-tag text-xs text-rose-600 uppercase tracking-widest font-semibold">
              MEMORIES IN FRAMES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1D1B]">
              Every Smile, Captured Forever
            </h3>
            <p className="text-[#6B6259] text-sm font-light">
              Dari hari-hari di pantai hingga pap keseharian yang kamu kirimkan dari Malang.
            </p>
          </div>

          <a
            href="#gallery"
            className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-mono-tag text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-rose-600/20 shrink-0 flex items-center gap-2"
          >
            <span>OPEN PHOTOBOOK</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
