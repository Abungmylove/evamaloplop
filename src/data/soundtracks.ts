export interface SongTrack {
  id: string;
  title: string;
  artist: string;
  audioSrc: string;
  youtubeId: string;
  youtubeUrl: string;
  quote: string;
  coverImage: string;
  accentBadge: string;
  startTime?: number; // Starting time in seconds
}

export const LOVE_SOUNDTRACKS: SongTrack[] = [
  {
    id: 'track-1',
    title: 'Anything You Want',
    artist: 'REALITY CLUB',
    audioSrc: '/music/anything-you-want.webm',
    youtubeId: 'FKijnRja8is',
    youtubeUrl: 'https://www.youtube.com/watch?v=FKijnRja8is',
    quote: '“Trails of smoke, singing songs in the car... Whatever you want, as long as I’m with you.”',
    coverImage: '/bunga/flower-1.jpg',
    accentBadge: 'HER FAVORITE',
    startTime: 60, // Menit ke-1:00
  },
  {
    id: 'track-2',
    title: '2112',
    artist: 'REALITY CLUB',
    audioSrc: '/music/2112.webm',
    youtubeId: 'JT0R5mAoHQw',
    youtubeUrl: 'https://www.youtube.com/watch?v=JT0R5mAoHQw',
    quote: '“I want to be with you until the end of time. A melody through every chapter of us.”',
    coverImage: '/photos/photo-15-dipantai-sama-aku-1-.jpeg',
    accentBadge: 'OUR MEMORY',
    startTime: 60,
  },
  {
    id: 'track-3',
    title: 'Alexandra',
    artist: 'REALITY CLUB',
    audioSrc: '/music/alexandra.webm',
    youtubeId: 'nxMokRj0bl8',
    youtubeUrl: 'https://www.youtube.com/watch?v=nxMokRj0bl8',
    quote: '“You really, really love me. You know me and you love me, and it’s the kind of love I always hoped I’d find.”',
    coverImage: '/photos/photo-37-foto-sama-bunga-1-.jpeg',
    accentBadge: 'ETERNAL BLOOMS',
    startTime: 60,
  },
];
