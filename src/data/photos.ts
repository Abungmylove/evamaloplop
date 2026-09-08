export interface PhotoItem {
  id: string;
  src: string;
  caption: string;
  category: string;
  categoryLabel: string;
  date?: string;
  location?: string;
  note?: string;
  isVideo?: boolean;
}

export const CATEGORIES = [
  {
    "key": "all",
    "label": "All Photos (Semua Foto)"
  },
  {
    "key": "pantai",
    "label": "🏖️ Di Pantai Sama Aku"
  },
  {
    "key": "desi",
    "label": "✨ Difotoin Desi (Cantik Bgt!)"
  },
  {
    "key": "bunga",
    "label": "🌸 Foto Sama Bunga"
  },
  {
    "key": "malang",
    "label": "☕ Di Malang & Cafe"
  },
  {
    "key": "shorthair",
    "label": "💇‍♀️ Fase Short Hair"
  },
  {
    "key": "gemes",
    "label": "📸 PAP & Selfie Gemes"
  },
  {
    "key": "masakecil",
    "label": "👶 Masa Kecil"
  },
  {
    "key": "candid",
    "label": "💻 Webcam & Kolase"
  },
  {
    "key": "karya",
    "label": "🎨 Model & Hasil Karya"
  }
];

export const ALL_EVA_PHOTOS: PhotoItem[] = [
  {
    "id": "photo-1",
    "src": "/photos/photo-01-aiko.jpeg",
    "caption": "aiko",
    "category": "other",
    "categoryLabel": "Kenangan Manis",
    "isVideo": false
  },
  {
    "id": "photo-2",
    "src": "/photos/photo-02-di-cafe-malang-sama-aku-.jpeg",
    "caption": "di cafe malang (sama aku)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-3",
    "src": "/photos/photo-03-di-solaria-sama-aku-1-.jpeg",
    "caption": "di solaria sama aku (1)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-4",
    "src": "/photos/photo-04-di-solaria-sama-aku-2-.jpeg",
    "caption": "di solaria sama aku (2)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-5",
    "src": "/photos/photo-05-di-solaria-sama-aku-3-.jpeg",
    "caption": "di solaria sama aku (3)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-6",
    "src": "/photos/photo-06-difotoin-desi-ini-cantik-bgt-1-.jpeg",
    "caption": "difotoin desi (INI CANTIK BGT) (1)",
    "category": "desi",
    "categoryLabel": "Difotoin Desi (Cantik Bgt!)",
    "isVideo": false
  },
  {
    "id": "photo-7",
    "src": "/photos/photo-07-difotoin-desi-ini-cantik-bgt-2-.jpeg",
    "caption": "difotoin desi (INI CANTIK BGT) (2)",
    "category": "desi",
    "categoryLabel": "Difotoin Desi (Cantik Bgt!)",
    "isVideo": false
  },
  {
    "id": "photo-8",
    "src": "/photos/photo-08-difotoin-desi-ini-cantik-bgt-3-.jpeg",
    "caption": "difotoin desi (INI CANTIK BGT) (3)",
    "category": "desi",
    "categoryLabel": "Difotoin Desi (Cantik Bgt!)",
    "isVideo": false
  },
  {
    "id": "photo-9",
    "src": "/photos/photo-09-difotoin-desi-ini-cantik-bgt-4-.jpeg",
    "caption": "difotoin desi (INI CANTIK BGT) (4)",
    "category": "desi",
    "categoryLabel": "Difotoin Desi (Cantik Bgt!)",
    "isVideo": false
  },
  {
    "id": "photo-10",
    "src": "/photos/photo-10-difotoin-desi-ini-cantik-bgt-5-.jpeg",
    "caption": "difotoin desi (INI CANTIK BGT) (5)",
    "category": "desi",
    "categoryLabel": "Difotoin Desi (Cantik Bgt!)",
    "isVideo": false
  },
  {
    "id": "photo-11",
    "src": "/photos/photo-11-difotoin-desi-ini-cantik-bgt-6-.jpeg",
    "caption": "difotoin desi (INI CANTIK BGT) (6)",
    "category": "desi",
    "categoryLabel": "Difotoin Desi (Cantik Bgt!)",
    "isVideo": false
  },
  {
    "id": "photo-12",
    "src": "/photos/photo-12-difotoin-desi-ini-cantik-bgt-7-.jpeg",
    "caption": "difotoin desi (INI CANTIK BGT) (7)",
    "category": "desi",
    "categoryLabel": "Difotoin Desi (Cantik Bgt!)",
    "isVideo": false
  },
  {
    "id": "photo-13",
    "src": "/photos/photo-13-difotoin-desi-ini-cantik-bgt-8-.jpeg",
    "caption": "difotoin desi (INI CANTIK BGT) (8)",
    "category": "desi",
    "categoryLabel": "Difotoin Desi (Cantik Bgt!)",
    "isVideo": false
  },
  {
    "id": "photo-14",
    "src": "/photos/photo-14-difotoin-desi-ini-cantik-bgt-9-.jpeg",
    "caption": "difotoin desi (INI CANTIK BGT) (9)",
    "category": "desi",
    "categoryLabel": "Difotoin Desi (Cantik Bgt!)",
    "isVideo": false
  },
  {
    "id": "photo-15",
    "src": "/photos/photo-15-dipantai-sama-aku-1-.jpeg",
    "caption": "dipantai sama aku (1)",
    "category": "pantai",
    "categoryLabel": "Di Pantai Sama Aku",
    "isVideo": false
  },
  {
    "id": "photo-16",
    "src": "/photos/photo-16-dipantai-sama-aku-2-.jpeg",
    "caption": "dipantai sama aku (2)",
    "category": "pantai",
    "categoryLabel": "Di Pantai Sama Aku",
    "isVideo": false
  },
  {
    "id": "photo-17",
    "src": "/photos/photo-17-dipantai-sama-aku-3-.jpeg",
    "caption": "dipantai sama aku (3)",
    "category": "pantai",
    "categoryLabel": "Di Pantai Sama Aku",
    "isVideo": false
  },
  {
    "id": "photo-18",
    "src": "/photos/photo-18-fase-shorthair-1-.jpeg",
    "caption": "fase shorthair (1)",
    "category": "shorthair",
    "categoryLabel": "Fase Short Hair",
    "isVideo": false
  },
  {
    "id": "photo-19",
    "src": "/photos/photo-19-fase-shorthair-2-.jpeg",
    "caption": "fase shorthair (2)",
    "category": "shorthair",
    "categoryLabel": "Fase Short Hair",
    "isVideo": false
  },
  {
    "id": "photo-20",
    "src": "/photos/photo-20-fase-shorthair-3-.jpeg",
    "caption": "fase shorthair (3)",
    "category": "shorthair",
    "categoryLabel": "Fase Short Hair",
    "isVideo": false
  },
  {
    "id": "photo-21",
    "src": "/photos/photo-21-fase-shorthair-4-.jpeg",
    "caption": "fase shorthair (4)",
    "category": "shorthair",
    "categoryLabel": "Fase Short Hair",
    "isVideo": false
  },
  {
    "id": "photo-22",
    "src": "/photos/photo-22-fase-shorthair-5-.jpeg",
    "caption": "fase shorthair (5)",
    "category": "shorthair",
    "categoryLabel": "Fase Short Hair",
    "isVideo": false
  },
  {
    "id": "photo-23",
    "src": "/photos/photo-23-foto-di-cafe-1-.jpeg",
    "caption": "foto di cafe  (1)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-24",
    "src": "/photos/photo-24-foto-di-cafe-3-.jpeg",
    "caption": "foto di cafe  (3)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-25",
    "src": "/photos/photo-25-foto-di-cafe-4-.jpeg",
    "caption": "foto di cafe  (4)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-26",
    "src": "/photos/photo-26-foto-di-kayutangan-malang-1-.jpg",
    "caption": "foto di kayutangan malang (1)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-27",
    "src": "/photos/photo-27-foto-di-kayutangan-malang-2-.jpg",
    "caption": "foto di kayutangan malang (2)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-28",
    "src": "/photos/photo-28-foto-di-kayutangan-malang-3-.jpg",
    "caption": "foto di kayutangan malang (3)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-29",
    "src": "/photos/photo-29-foto-di-kayutangan-malang-4-.jpg",
    "caption": "foto di kayutangan malang (4)",
    "category": "malang",
    "categoryLabel": "Di Malang & Cafe",
    "isVideo": false
  },
  {
    "id": "photo-30",
    "src": "/photos/photo-30-foto-model-1-.jpeg",
    "caption": "foto model  (1)",
    "category": "karya",
    "categoryLabel": "Model & Karya",
    "isVideo": false
  },
  {
    "id": "photo-31",
    "src": "/photos/photo-31-foto-model-2-.jpeg",
    "caption": "foto model  (2)",
    "category": "karya",
    "categoryLabel": "Model & Karya",
    "isVideo": false
  },
  {
    "id": "photo-32",
    "src": "/photos/photo-32-foto-model-3-.jpeg",
    "caption": "foto model  (3)",
    "category": "karya",
    "categoryLabel": "Model & Karya",
    "isVideo": false
  },
  {
    "id": "photo-33",
    "src": "/photos/photo-33-foto-model-4-.jpeg",
    "caption": "foto model  (4)",
    "category": "karya",
    "categoryLabel": "Model & Karya",
    "isVideo": false
  },
  {
    "id": "photo-34",
    "src": "/photos/photo-34-foto-sama-aku-2-1-.jpeg",
    "caption": "foto sama aku 2 (1)",
    "category": "berdua",
    "categoryLabel": "Momen Berdua",
    "isVideo": false
  },
  {
    "id": "photo-35",
    "src": "/photos/photo-35-foto-sama-aku-2-2-.jpeg",
    "caption": "foto sama aku 2 (2)",
    "category": "berdua",
    "categoryLabel": "Momen Berdua",
    "isVideo": false
  },
  {
    "id": "photo-36",
    "src": "/photos/photo-36-foto-sama-aku.jpeg",
    "caption": "foto sama aku",
    "category": "berdua",
    "categoryLabel": "Momen Berdua",
    "isVideo": false
  },
  {
    "id": "photo-37",
    "src": "/photos/photo-37-foto-sama-bunga-1-.jpeg",
    "caption": "foto sama bunga (1)",
    "category": "bunga",
    "categoryLabel": "Foto Sama Bunga",
    "isVideo": false
  },
  {
    "id": "photo-38",
    "src": "/photos/photo-38-foto-sama-bunga-2-.jpeg",
    "caption": "foto sama bunga (2)",
    "category": "bunga",
    "categoryLabel": "Foto Sama Bunga",
    "isVideo": false
  },
  {
    "id": "photo-39",
    "src": "/photos/photo-39-foto-sama-bunga-3-.jpeg",
    "caption": "foto sama bunga (3)",
    "category": "bunga",
    "categoryLabel": "Foto Sama Bunga",
    "isVideo": false
  },
  {
    "id": "photo-40",
    "src": "/photos/photo-40-foto-studio-lucu.jpg",
    "caption": "foto studio lucu",
    "category": "karya",
    "categoryLabel": "Model & Karya",
    "isVideo": false
  },
  {
    "id": "photo-41",
    "src": "/photos/photo-41-hasil-karya-1-.jpeg",
    "caption": "hasil karya (1)",
    "category": "karya",
    "categoryLabel": "Model & Karya",
    "isVideo": false
  },
  {
    "id": "photo-42",
    "src": "/photos/photo-42-hasil-karya-2-.jpeg",
    "caption": "hasil karya (2)",
    "category": "karya",
    "categoryLabel": "Model & Karya",
    "isVideo": false
  },
  {
    "id": "photo-43",
    "src": "/photos/photo-43-hasil-karya-3-.jpeg",
    "caption": "hasil karya (3)",
    "category": "karya",
    "categoryLabel": "Model & Karya",
    "isVideo": false
  },
  {
    "id": "photo-44",
    "src": "/photos/photo-44-hasil-karya-4-.jpeg",
    "caption": "hasil karya (4)",
    "category": "karya",
    "categoryLabel": "Model & Karya",
    "isVideo": false
  },
  {
    "id": "photo-45",
    "src": "/photos/photo-45-kolase-foto-lucu-1-.jpeg",
    "caption": "kolase foto lucu (1)",
    "category": "candid",
    "categoryLabel": "Webcam & Kolase",
    "isVideo": false
  },
  {
    "id": "photo-46",
    "src": "/photos/photo-46-kolase-foto-lucu-2-.jpeg",
    "caption": "kolase foto lucu (2)",
    "category": "candid",
    "categoryLabel": "Webcam & Kolase",
    "isVideo": false
  },
  {
    "id": "photo-47",
    "src": "/photos/photo-47-kolase-foto-lucu-3-.jpeg",
    "caption": "kolase foto lucu (3)",
    "category": "candid",
    "categoryLabel": "Webcam & Kolase",
    "isVideo": false
  },
  {
    "id": "photo-48",
    "src": "/photos/photo-48-masa-kecil-1-.jpeg",
    "caption": "masa kecil (1)",
    "category": "masakecil",
    "categoryLabel": "Masa Kecil",
    "isVideo": false
  },
  {
    "id": "photo-49",
    "src": "/photos/photo-49-masa-kecil-1-.mp4",
    "caption": "masa kecil (1)",
    "category": "masakecil",
    "categoryLabel": "Masa Kecil",
    "isVideo": true
  },
  {
    "id": "photo-50",
    "src": "/photos/photo-50-masa-kecil-2-.jpeg",
    "caption": "masa kecil (2)",
    "category": "masakecil",
    "categoryLabel": "Masa Kecil",
    "isVideo": false
  },
  {
    "id": "photo-51",
    "src": "/photos/photo-51-pap-gemes-1-.jpeg",
    "caption": "pap gemes (1)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-52",
    "src": "/photos/photo-52-pap-gemes-2-.jpeg",
    "caption": "pap gemes (2)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-53",
    "src": "/photos/photo-53-pap-gemes-3-.jpeg",
    "caption": "pap gemes (3)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-54",
    "src": "/photos/photo-54-pap-gemes-4-.jpeg",
    "caption": "pap gemes (4)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-55",
    "src": "/photos/photo-55-pas-foto.jpg",
    "caption": "pas foto",
    "category": "other",
    "categoryLabel": "Kenangan Manis",
    "isVideo": false
  },
  {
    "id": "photo-56",
    "src": "/photos/photo-56-selfie-lucu-1-.jpeg",
    "caption": "selfie lucu (1)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-57",
    "src": "/photos/photo-57-selfie-lucu-2-.jpeg",
    "caption": "selfie lucu (2)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-58",
    "src": "/photos/photo-58-selfie-makeup-gemes-1-.jpeg",
    "caption": "selfie makeup gemes (1)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-59",
    "src": "/photos/photo-59-selfie-makeup-gemes-2-.jpeg",
    "caption": "selfie makeup gemes (2)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-60",
    "src": "/photos/photo-60-selfie-makeup-gemes-3-.jpeg",
    "caption": "selfie makeup gemes (3)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-61",
    "src": "/photos/photo-61-webcam-laptop-gemes-1-.jpeg",
    "caption": "webcam laptop gemes (1)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-62",
    "src": "/photos/photo-62-webcam-laptop-gemes-2-.jpeg",
    "caption": "webcam laptop gemes (2)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-63",
    "src": "/photos/photo-63-webcam-laptop-gemes-3-.jpeg",
    "caption": "webcam laptop gemes (3)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-64",
    "src": "/photos/photo-64-webcam-laptop-gemes-4-.jpeg",
    "caption": "webcam laptop gemes (4)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  },
  {
    "id": "photo-65",
    "src": "/photos/photo-65-webcam-laptop-gemes-5-.jpeg",
    "caption": "webcam laptop gemes (5)",
    "category": "gemes",
    "categoryLabel": "PAP & Selfie Gemes",
    "isVideo": false
  }
];

export const HERO_PHOTOS = {
  evaMain: '/photos/photo-15-dipantai-sama-aku-1-.jpeg',
  beachHighlight: '/photos/photo-15-dipantai-sama-aku-1-.jpeg'
};

export const TIMELINE_EVENTS = [
  {
    date: '02 Maret 2024',
    title: 'The Day We Started Our Story',
    badge: 'EST. MARCH 2, 2024',
    description: 'Hari resmi di mana dua hati sepakat untuk saling menjaga dan menyayangi, meskipun terbentang jarak antara Tangerang dan Malang.',
    quote: '"Whatever you want, as long as I\'m with you."'
  },
  {
    date: 'LDR: Tangerang ⇄ Malang',
    title: 'Jarak 850 KM & Ribuan Panggilan Telepon',
    badge: 'DISTANCE & DEVOTION',
    description: 'Menjaga cinta dari kejauhan. Dari voice call larut malam, pap foto keseharian Eva di Malang, sampai saling menyemangati di hari-hari yang melelahkan.',
    quote: '"Distance means so little when someone means so much."'
  },
  {
    date: 'Saat Kita Bertemu di Pantai',
    title: 'Hari Spesial: Kamera & Deburan Ombak',
    badge: 'PRECIOUS REUNION',
    description: 'Saat akhirnya bisa bertatap muka secara langsung. Menghabiskan waktu di pantai bersama, mengabadikan senyum manismu di depan deburan ombak.',
    quote: '"What I have with you, I don\'t want it with anyone else."'
  },
  {
    date: 'Menatap Hari Esok',
    title: 'Menanti Hari Tanpa Jarak',
    badge: 'FOREVER PROMISE',
    description: 'Setiap perpisahan selalu membawa janji bahwa kita akan segera bertemu kembali. Sampai hari di mana kita tak perlu lagi berpamitan pulang.',
    quote: '"In every universe, it\'s always you, Eva."'
  }
];
