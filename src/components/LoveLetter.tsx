import React, { useState } from 'react';
import { Heart, Sparkles, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { triggerFlowerBurst } from '../utils/flowerAction';

interface LoveLetterProps {
  onAddLove: () => void;
}

export const LoveLetter: React.FC<LoveLetterProps> = ({ onAddLove }) => {
  const [sent, setSent] = useState(false);
  const [userNote, setUserNote] = useState('');
  const [notesList, setNotesList] = useState<string[]>([
    "Kamu selalu berharga, cantik, dan dicintai setiap detik.",
    "Senyumanmu adalah hal terindah yang selalu kurindukan.",
    "Semangat untuk hari-harimu di Malang ya sayang, aku selalu ada di sini buat kamu."
  ]);

  const handleSendHeart = (e: React.MouseEvent) => {
    onAddLove();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 45,
      spread: 80,
      colors: ['#e11d48', '#f43f5e', '#fb7185', '#fda4af', '#fed7aa'],
    });
  };

  const handleAddCustomNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userNote.trim()) return;
    setNotesList([userNote.trim(), ...notesList]);
    setUserNote('');
    setSent(true);
    setTimeout(() => setSent(false), 3000);

    confetti({
      particleCount: 30,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#e11d48', '#fb7185', '#fda4af']
    });
  };

  return (
    <section id="letter" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80 relative bg-[#FAF7F2] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-rose-200 bg-white text-rose-700 text-xs font-mono-tag tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>WORDS FROM THE HEART</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1F1D1B] font-normal">
            To Yosefa Meing Siung Adjid,
          </h2>
          <p className="font-editorial italic text-[#6B6259] text-lg sm:text-xl">
            Sepucuk surat apresiasi yang ditulis dengan penuh ketulusan untukmu.
          </p>
        </div>

        {/* The Letter Card (Warm Parchment Paper Style) */}
        <div className="rounded-3xl border border-stone-200/90 bg-white p-8 sm:p-12 shadow-md relative space-y-8">
          
          {/* Wax Stamp Seal Effect */}
          <div className="absolute -top-6 right-8 sm:right-12 w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 border-2 border-white shadow-lg flex items-center justify-center text-white">
            <Heart className="w-6 h-6 fill-white" />
          </div>

          <div className="flex items-center justify-between border-b border-stone-100 pb-4 text-xs font-mono-tag text-[#8C827A]">
            <span>FOR: YOSEFA (EVA)</span>
            <span>EDITION: FOREVER YOURS</span>
            <span>SINCE: 02 MAR 2024</span>
          </div>

          {/* Letter Body */}
          <div className="space-y-6 text-[#4A433D] font-light text-base sm:text-lg leading-relaxed font-sans">
            <p className="font-editorial italic text-2xl text-[#1F1D1B]">
              Hai Eva sayang,
            </p>
            <p>
              Website kecil ini sengaja dibuat khusus untukmu—sebagai ruang kecil yang mengabadikan 
              betapa cantiknya kamu, betapa berharganya senyumanmu, dan betapa berartinya kehadiranmu 
              di dalam hidup ini sejak <strong className="text-rose-600 font-semibold">2 Maret 2024</strong>.
            </p>
            <p>
              Menjalani hubungan jarak jauh Tangerang dan Malang bukan hal yang selalu mudah. 
              Kita hanya bisa bertemu beberapa waktu saja. Tapi setiap momen yang berhasil kita bagi—terutama 
              waktu kita di pantai kemarin, saat aku bisa mengabadikan senyum manismu di depan ombak laut—selalu 
              menjadi kenangan terindah yang tak pernah pudar.
            </p>
            <p>
              Di hari-hari biasa saat kita berjauhan, foto-foto yang kamu kirimkan dari Malang selalu menjadi 
              alasan kenapa hariku terasa jauh lebih cerah dan hangat. Terima kasih sudah menjadi Eva yang penuh kasih, 
              yang selalu sabar, dan yang selalu ada.
            </p>
            <p className="font-editorial italic text-xl sm:text-2xl text-rose-600 pt-2">
              &ldquo;Whatever you want, as long as I&apos;m with you... my heart belongs with you.&rdquo;
            </p>
            <p className="pt-4 text-right font-editorial italic text-2xl text-[#1F1D1B]">
              With all my love,<br />
              <span className="font-serif text-lg font-normal text-rose-600 tracking-wider">
                Jonathan
              </span>
            </p>
          </div>

          {/* Action Bar inside Letter (Matching User Screenshot with Flower Action) */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono-tag text-xs text-[#8C827A]">
              AKSI SPESIAL UNTUK EVA &rarr;
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Send Love Button */}
              <button
                onClick={handleSendHeart}
                className="flex-1 sm:flex-initial px-5 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-mono-tag text-xs font-bold tracking-wider transition-all transform active:scale-95 shadow-sm hover:shadow-rose-600/20 flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white animate-pulse" />
                <span>KIRIM PELUK &amp; CINTA</span>
              </button>

              {/* Send Flowers Action Button */}
              <button
                onClick={(e) => triggerFlowerBurst(e)}
                className="flex-1 sm:flex-initial px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-mono-tag text-xs font-bold tracking-wider transition-all transform active:scale-95 shadow-sm hover:shadow-pink-500/20 flex items-center justify-center gap-2"
              >
                <span>🌸</span>
                <span>LEMPAR BUNGA UNTUK EVA</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive "Little Notes for Eva" */}
        <div className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1F1D1B]">
              Little Reminders for Eva
            </h3>
            <span className="font-mono-tag text-xs text-rose-600 font-semibold">
              DAILY AFFIRMATIONS
            </span>
          </div>

          {/* Form to leave a note */}
          <form onSubmit={handleAddCustomNote} className="flex gap-2">
            <input
              type="text"
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              placeholder="Tulis pesan manis singkat buat Eva..."
              className="flex-1 bg-[#FAF7F2] border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-[#1F1D1B] placeholder-[#8C827A] focus:outline-none focus:border-rose-400 transition-colors font-sans"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-mono-tag font-bold tracking-wider flex items-center gap-1.5 transition-colors shrink-0 shadow-xs"
            >
              {sent ? <Check className="w-4 h-4 text-white" /> : <Send className="w-4 h-4" />}
              <span>{sent ? 'TERKIRIM' : 'KIRIM'}</span>
            </button>
          </form>

          {/* Notes list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {notesList.map((note, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200/70 text-xs sm:text-sm text-[#4A433D] font-light flex items-start gap-2.5"
              >
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">&ldquo;{note}&rdquo;</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
