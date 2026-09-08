import confetti from 'canvas-confetti';

const FLOWER_EMOJIS = ['🌸', '🌷', '🌹', '🌺', '🌼', '💐', '✨'];

export const triggerFlowerBurst = (e?: React.MouseEvent | { clientX: number; clientY: number }) => {
  let originX = 0.5;
  let originY = 0.6;

  if (e && 'clientX' in e) {
    originX = e.clientX / window.innerWidth;
    originY = e.clientY / window.innerHeight;
  }

  // Generate confetti shapes from flower emojis
  try {
    const sakura = confetti.shapeFromText({ text: '🌸', scalar: 2.2 });
    const tulip = confetti.shapeFromText({ text: '🌷', scalar: 2.2 });
    const rose = confetti.shapeFromText({ text: '🌹', scalar: 2.2 });
    const blossom = confetti.shapeFromText({ text: '🌺', scalar: 2.2 });
    const bouquet = confetti.shapeFromText({ text: '💐', scalar: 2.4 });

    // 1. Center flower blast
    confetti({
      origin: { x: originX, y: originY },
      particleCount: 35,
      spread: 90,
      startVelocity: 35,
      ticks: 280,
      shapes: [sakura, tulip, rose, blossom, bouquet],
      scalar: 1.8,
    });

    // 2. Soft petal flurry surrounding the flowers
    confetti({
      origin: { x: originX, y: originY },
      particleCount: 50,
      spread: 120,
      startVelocity: 25,
      ticks: 300,
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#fbcfe8', '#fed7aa', '#ffffff'],
      shapes: ['circle'],
      scalar: 1.1,
    });

    // 3. Side cannons for grand celebration
    setTimeout(() => {
      confetti({
        particleCount: 25,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        shapes: [sakura, tulip, blossom],
        scalar: 1.7,
      });
      confetti({
        particleCount: 25,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        shapes: [sakura, rose, bouquet],
        scalar: 1.7,
      });
    }, 200);

  } catch (err) {
    // Fallback if shapeFromText is not supported in some environment
    confetti({
      origin: { x: originX, y: originY },
      particleCount: 60,
      spread: 100,
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#fed7aa', '#ffffff'],
    });
  }

  // Spawn visual floating flower photo badge on DOM
  spawnFloatingFlowerPhoto(originX * window.innerWidth, originY * window.innerHeight);
};

// Spawn actual photo thumbnail from folder bunga floating up
const spawnFloatingFlowerPhoto = (startX: number, startY: number) => {
  const flowerImg = Math.random() > 0.5 ? '/bunga/flower-1.jpg' : '/bunga/flower-2.jpg';
  
  const el = document.createElement('div');
  el.className = 'fixed pointer-events-none z-50 transition-all duration-1000 ease-out flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-rose-300 shadow-xl';
  el.style.left = `${Math.max(20, Math.min(window.innerWidth - 180, startX - 80))}px`;
  el.style.top = `${startY - 30}px`;
  el.style.opacity = '1';
  el.style.transform = 'scale(0.8) translateY(0)';

  el.innerHTML = `
    <img src="${flowerImg}" class="w-6 h-6 rounded-full object-cover border border-rose-400" />
    <span class="text-xs font-mono font-bold text-rose-600">Bunga untuk Eva 🌸</span>
  `;

  document.body.appendChild(el);

  requestAnimationFrame(() => {
    el.style.transform = `scale(1.1) translateY(-90px) rotate(${(Math.random() - 0.5) * 20}deg)`;
    el.style.opacity = '0';
  });

  setTimeout(() => {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }, 1100);
};

export const FLOWER_MESSAGES = [
  "Bunga mawar cantik terkirim untuk Eva! 🌹",
  "1 Buket bunga mekar spesial untukmu, sayang! 💐",
  "Bunga sakura bertebaran untuk bidadari Malang! 🌸",
  "Semerbak wangi bunga untuk mencerahkan harimu! 🌷",
  "Bunga abadi ini selalu mekar seperti cintaku padamu! 🌺"
];
