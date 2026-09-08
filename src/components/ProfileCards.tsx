import React from 'react';
import { Sparkles, Heart, Sun, Smile, Compass, Feather } from 'lucide-react';

export const ProfileCards: React.FC = () => {
  return (
    <section id="about-eva" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80 relative bg-[#F5EFEB]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-rose-200 bg-white text-rose-700 text-xs font-mono-tag tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3 h-3 text-rose-500" />
            <span>THE SPOTLIGHT IS ON HER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1F1D1B]">
            All About Eva
          </h2>
          <p className="font-editorial italic text-[#6B6259] text-lg sm:text-xl">
            Satu perempuan istimewa dengan seribu alasan untuk selalu dikagumi dan dicintai.
          </p>
        </div>

        {/* Featured Muse Card (Ref 3 Layout adapted 100% for Eva in Light Romantic Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Portrait & Identity Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-4 border-white bg-white shadow-xl group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl relative">
                <img
                  src="/photos/beach-06.jpg"
                  alt="Yosefa Meing Siung Adjid"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/photos/eva-main.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-white/40 text-xs font-mono-tag font-semibold text-rose-700 shadow-sm flex items-center gap-1.5">
                  <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                  <span>YOSEFA &bull; EVA</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-mono-tag text-[10px] text-rose-200 uppercase tracking-widest">
                    AT THE BEACH &bull; CAPTURED IN LOVE
                  </p>
                  <p className="font-serif text-xl font-medium">
                    Yosefa Meing Siung Adjid
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Traits & Appreciation Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="font-mono-tag text-xs text-rose-600 uppercase tracking-widest font-semibold block">
                MUSE ARCHIVE &bull; NO. 01
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1F1D1B] font-normal leading-snug">
                Pesona yang Tak Pernah Pudar, Dari Malang Hingga Ke Hati
              </h3>
              <p className="text-[#595047] text-base leading-relaxed font-light">
                Ada ketenangan tersendiri setiap kali melihat senyuman Eva. Bukan hanya parasnya yang anggun 
                saat berdiri di depan deburan ombak pantai, melainkan hatinya yang hangat, perhatiannya yang tulus, 
                dan caranya membawa rasa damai di tengah jarak ratusan kilometer.
              </p>
            </div>

            {/* Aesthetic ID Ticket Box (Ref 3 Style in Warm Light Palette) */}
            <div className="rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="flex flex-wrap justify-between items-center gap-2 border-b border-stone-100 pb-3">
                <div>
                  <span className="font-mono-tag text-[10px] text-[#8C827A] uppercase block">
                    FULL NAME
                  </span>
                  <span className="font-mono-tag text-sm text-[#2D2824] font-bold">
                    Yosefa Meing Siung Adjid (Eva)
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-mono-tag text-[10px] text-[#8C827A] uppercase block">
                    HOMETOWN
                  </span>
                  <span className="font-mono-tag text-xs text-rose-600 font-semibold">
                    MALANG, JAWA TIMUR
                  </span>
                </div>
              </div>

              {/* Traits Meter */}
              <div className="grid grid-cols-3 gap-3 py-1 font-mono-tag text-center">
                <div className="p-2.5 rounded-2xl bg-[#FAF7F2] border border-stone-200/60">
                  <span className="block text-rose-600 text-lg sm:text-xl font-bold">100%</span>
                  <span className="text-[10px] text-[#7A7067] uppercase">Prettiest Smile</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#FAF7F2] border border-stone-200/60">
                  <span className="block text-rose-600 text-lg sm:text-xl font-bold">&infin;</span>
                  <span className="text-[10px] text-[#7A7067] uppercase">Loving Heart</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#FAF7F2] border border-stone-200/60">
                  <span className="block text-rose-600 text-lg sm:text-xl font-bold">#1</span>
                  <span className="text-[10px] text-[#7A7067] uppercase">My Priority</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Sweet Smile', 'Thoughtful', 'Radiant Energy', 'Kind Soul', 'Irreplaceable', 'My Favorite Person'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60 text-xs font-mono-tag"
                  >
                    &bull; {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                <span className="font-mono-tag text-xs text-[#8C827A] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>The One and Only</span>
                </span>
                {/* Barcode */}
                <div className="w-28 h-5 barcode-pattern opacity-50 text-[#3D352E]" />
              </div>
            </div>

          </div>

        </div>

        {/* 3 Pillars of Admiration for Eva */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="rounded-3xl bg-white border border-stone-200/90 p-6 space-y-3 shadow-sm hover:border-rose-300 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl text-[#1F1D1B] font-medium">
              Her Warmth &amp; Kindness
            </h4>
            <p className="text-sm text-[#595047] leading-relaxed font-light">
              Caranya memperlakukan orang lain dengan tulus dan penuh perhatian selalu membuat siapa pun merasa nyaman dan dihargai.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-stone-200/90 p-6 space-y-3 shadow-sm hover:border-rose-300 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Smile className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl text-[#1F1D1B] font-medium">
              Her Infectious Laughter
            </h4>
            <p className="text-sm text-[#595047] leading-relaxed font-light">
              Tawanya yang renyah adalah obat terbaik. Setiap lelucon kecil dan ceritanya selalu berhasil mencairkan hari yang melelahkan.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-stone-200/90 p-6 space-y-3 shadow-sm hover:border-rose-300 transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Feather className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl text-[#1F1D1B] font-medium">
              Her Grace Across the Distance
            </h4>
            <p className="text-sm text-[#595047] leading-relaxed font-light">
              Meskipun terpisah ratusan kilometer, kesabarannya dan cara ia menjaga hubungan ini membuat jarak terasa sangat kecil.
            </p>
          </div>
        </div>

        {/* Special Floral Tribute Section (Eva's Love for Flowers) */}
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-white via-rose-50/40 to-orange-50/30 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Two Flower Photos Diptych */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative group rounded-2xl overflow-hidden border-2 border-white shadow-md aspect-square bg-white">
                <img
                  src="/bunga/flower-1.jpg"
                  alt="Bunga untuk Eva"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[9px] font-mono-tag font-semibold text-rose-700">
                  BLOOM NO. 01
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden border-2 border-white shadow-md aspect-square bg-white mt-4 sm:mt-6">
                <img
                  src="/bunga/flower-2.jpg"
                  alt="Bunga untuk Eva 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[9px] font-mono-tag font-semibold text-rose-700">
                  BLOOM NO. 02
                </div>
              </div>
            </div>

            {/* Right Column: Floral Romantic Note */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-2 text-rose-600 font-mono-tag text-xs tracking-wider uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FLOWERS FOR MY FAVORITE GIRL</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1D1B] font-normal leading-snug">
                Bunga Abadi yang Selalu Mekar untuk Eva 🌸
              </h3>

              <p className="text-[#595047] text-sm sm:text-base leading-relaxed font-light">
                Karena kamu sangat menyukai bunga, ini adalah bunga-bunga yang kupersembahkan khusus 
                untuk menghiasi halaman ini. Bunga bisa layu seiring waktu, tapi rasa kagum, rasa sayang, 
                dan rasa syukurku memiliki Eva akan selalu mekar segar di setiap musim.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono-tag text-rose-700">
                <span className="px-3 py-1 rounded-full bg-white border border-rose-200 shadow-2xs">
                  🌷 Always in Bloom
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-rose-200 shadow-2xs">
                  🌺 Blooming with Love
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
