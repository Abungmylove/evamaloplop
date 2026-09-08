import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

interface EnvelopeOpeningProps {
  onOpen: () => void;
}

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onOpen }) => {
  const [stage, setStage] = useState<'initial' | 'blooming' | 'fading_out'>('initial');

  const handleEnvelopeClick = () => {
    if (stage !== 'initial') return;
    setStage('blooming');

    // Animasi mekar 4 detik
    setTimeout(() => {
      setStage('fading_out');
      
      // Tunggu crossfade selesai baru buka website utama
      setTimeout(() => {
        onOpen();
      }, 1000);
    }, 4000);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center select-none overflow-hidden ${
        stage === 'fading_out' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        zIndex: 9999, // Pastikan di atas segalanya (termasuk navbar)
        backgroundColor: '#FDF8F0', // Warna krem lembut kertas vintage
        backgroundImage: `radial-gradient(#E8D5C4 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        transition: 'opacity 1s ease-in-out',
      }}
    >
      {/* 1. Initial State: Amplop Tertutup */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        style={{
          opacity: stage === 'initial' ? 1 : 0,
          transform: stage === 'initial' ? 'scale(1)' : 'scale(0.9)',
          transition: 'all 0.5s ease-in-out',
        }}
      >
        <div className="relative z-10 flex flex-col items-center cursor-pointer group pointer-events-auto" onClick={handleEnvelopeClick}>
          {/* Ilustrasi Amplop Surat Tertutup */}
          <div className="relative w-64 sm:w-80 h-44 sm:h-52 bg-[#F6E9DA] border border-[#D8C2AD] rounded-xl shadow-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
            {/* Tutup Amplop (Flap) */}
            <div
              className="absolute top-0 left-0 right-0 h-24 bg-[#EBD8C3] border-b border-[#D4BC9F] rounded-t-xl"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />
            {/* Segel Wax (Wax Seal) */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#8B1220] shadow-md flex items-center justify-center text-rose-200 border border-rose-300/40">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            {/* Bagian Bawah Amplop */}
            <div
              className="absolute bottom-0 left-0 right-0 h-28 bg-[#F3E3D1]/80 rounded-b-xl border-t border-white/50"
              style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 15%)' }}
            />
          </div>

          {/* Teks 'Tap to open' dengan efek pulsing lambat */}
          <div className="mt-8 text-center">
            <p className="font-script text-3xl sm:text-4xl text-[#8B1220] tracking-wide animate-pulse">
              Tap to open
            </p>
          </div>
        </div>
      </div>

      {/* 2 & 3. Animasi Utama (The Bloom) */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          // Gunakan CSS murni agar animasi tidak patah/gagal di-load oleh Tailwind
          transform: stage === 'initial' ? 'scale(0)' : 'scale(15)',
          opacity: stage === 'initial' ? 0 : 1,
          transition: 'transform 4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-in',
        }}
      >
        <img
          src={getAssetUrl('/bunga/output-onlinepngtools.png')}
          alt="Blooming Flower"
          className="w-64 h-64 sm:w-96 sm:h-96 object-contain drop-shadow-2xl"
          // Preload gambar agar tidak patah saat diklik
          loading="eager"
        />
      </div>

    </div>
  );
};
