import React, { useState } from 'react';
import { Sparkles, Heart, X, Wind, Send, Layers } from 'lucide-react';
import { triggerFlowerBurst, FLOWER_MESSAGES } from '../utils/flowerAction';

interface FlowerWidgetProps {
  flowerRainEnabled: boolean;
  onToggleFlowerRain: () => void;
  flowerCount: number;
  onAddFlower: () => void;
}

export const FlowerWidget: React.FC<FlowerWidgetProps> = ({
  flowerRainEnabled,
  onToggleFlowerRain,
  flowerCount,
  onAddFlower,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const handleActionClick = (e: React.MouseEvent) => {
    onAddFlower();
    triggerFlowerBurst(e);

    const randomMsg = FLOWER_MESSAGES[Math.floor(Math.random() * FLOWER_MESSAGES.length)];
    setToastMessage(randomMsg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleMegaBouquet = (e: React.MouseEvent) => {
    onAddFlower();
    onAddFlower();
    onAddFlower();
    triggerFlowerBurst(e);
    setTimeout(() => triggerFlowerBurst(), 250);
    setTimeout(() => triggerFlowerBurst(), 500);

    setToastMessage("💐 SEKERANJANG BESAR BUNGA MEKAR UNTUK EVA! 🌸");
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  return (
    <>
      {/* Toast notification when flower is sent */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce pointer-events-none">
          <div className="px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-rose-300 text-rose-700 font-mono-tag text-xs sm:text-sm font-bold shadow-xl flex items-center gap-2">
            <span>🌸</span>
            <span>{toastMessage}</span>
            <span>✨</span>
          </div>
        </div>
      )}

      {/* Floating Action Button Widget (Bottom Left) */}
      <div className="fixed bottom-20 left-4 sm:left-6 z-40 flex items-center space-x-2">
        {/* Main Action Button (Click to trigger flower explosion!) */}
        <button
          onClick={handleActionClick}
          className="group flex items-center space-x-2 pl-2 pr-4 py-2 rounded-full bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white shadow-lg hover:shadow-rose-400/40 hover:scale-105 active:scale-95 transition-all border-2 border-white"
          title="Klik untuk lempar bunga ke Eva!"
        >
          {/* Flower Thumbnail with Pulse */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-xs shrink-0 group-hover:rotate-45 transition-transform duration-500">
            <img
              src="/bunga/flower-1.jpg"
              alt="Bunga untuk Eva"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col text-left leading-tight">
            <span className="font-mono-tag text-xs font-black tracking-wider flex items-center gap-1">
              <span>🌸 LEMPAR BUNGA</span>
              <span className="bg-white text-rose-600 px-1.5 py-0.2 rounded-full text-[10px] font-bold">
                +{flowerCount}
              </span>
            </span>
            <span className="text-[10px] opacity-90 font-light">
              Klik untuk hujan bunga!
            </span>
          </div>
        </button>

        {/* Small Settings / Bouquet Modal Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-all flex items-center justify-center shadow-md hover:scale-105 active:scale-95"
          title="Buka Buket Bunga & Pengaturan"
        >
          <Layers className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Bouquet Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-md rounded-3xl border-2 border-white bg-white p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-rose-600 hover:text-white transition-colors flex items-center justify-center text-stone-500"
              title="Tutup Widget"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="space-y-1 text-left">
              <div className="inline-flex items-center space-x-1.5 text-xs font-mono-tag text-rose-600 font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FLORAL ACTION SUITE</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1D1B]">
                Buket Bunga untuk Eva 🌸
              </h3>
              <p className="font-editorial italic text-[#6B6259] text-base">
                Koleksi bunga cantik dari folder bunga khusus untukmu.
              </p>
            </div>

            {/* Showcase from folder bunga */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="relative group rounded-2xl overflow-hidden border-2 border-rose-100 aspect-square shadow-xs bg-stone-50">
                <img
                  src="/bunga/flower-1.jpg"
                  alt="Bunga 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[9px] font-mono-tag font-semibold text-rose-700">
                  BLOOM 01
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden border-2 border-rose-100 aspect-square shadow-xs bg-stone-50">
                <img
                  src="/bunga/flower-2.jpg"
                  alt="Bunga 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[9px] font-mono-tag font-semibold text-rose-700">
                  BLOOM 02
                </div>
              </div>
            </div>

            {/* Interactive Actions */}
            <div className="space-y-3 pt-1">
              {/* Mega Bouquet Blast Button */}
              <button
                onClick={handleMegaBouquet}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 text-white font-mono-tag text-xs font-bold tracking-wider transition-all transform active:scale-95 shadow-md shadow-rose-600/30 flex items-center justify-center gap-2"
              >
                <span>💐</span>
                <span>LEMPAR SEKERANJANG BUNGA!</span>
                <span>✨</span>
              </button>

              {/* Falling Petals Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                <div className="flex items-center space-x-2.5 text-left">
                  <Wind className="w-5 h-5 text-rose-500" />
                  <div>
                    <span className="block font-mono-tag text-xs font-bold text-[#1F1D1B]">
                      Hujan Bunga di Layar
                    </span>
                    <span className="font-editorial italic text-xs text-[#7A7067]">
                      Kelopak bunga jatuh perlahan
                    </span>
                  </div>
                </div>

                <button
                  onClick={onToggleFlowerRain}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono-tag font-bold transition-all shadow-2xs ${
                    flowerRainEnabled
                      ? 'bg-rose-600 text-white'
                      : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                  }`}
                >
                  {flowerRainEnabled ? 'AKTIF ✓' : 'OFF'}
                </button>
              </div>
            </div>

            {/* Sweet Footer Quote */}
            <div className="border-t border-stone-100 pt-3 text-center">
              <p className="font-editorial italic text-sm text-[#6B6259]">
                &ldquo;You are my favorite flower in this entire universe.&rdquo;
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
