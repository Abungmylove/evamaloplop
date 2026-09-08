import React, { useEffect, useRef } from 'react';

interface FlowerRainProps {
  enabled: boolean;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  swayAmplitude: number;
  swaySpeed: number;
  swayPhase: number;
}

const PETAL_COLORS = [
  'rgba(255, 182, 193, 0.85)', // Light Pink
  'rgba(255, 192, 203, 0.9)',  // Pink
  'rgba(244, 63, 94, 0.75)',   // Rose
  'rgba(253, 164, 175, 0.85)', // Soft Rose
  'rgba(254, 205, 211, 0.9)',  // Very Soft Pink
  'rgba(255, 241, 242, 0.85)', // Pure Sakura White-Pink
];

export const FlowerRain: React.FC<FlowerRainProps> = ({ enabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate Petals
    const PETAL_COUNT = 38;
    const petals: Petal[] = [];

    const createPetal = (startY?: number): Petal => {
      return {
        x: Math.random() * width,
        y: startY !== undefined ? startY : Math.random() * height,
        size: Math.random() * 8 + 7, // 7px to 15px
        speedX: Math.random() * 0.8 - 0.2, // Drift slightly right
        speedY: Math.random() * 1.2 + 0.8, // Fall speed
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.4 + 0.5,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        swayAmplitude: Math.random() * 25 + 15,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayPhase: Math.random() * Math.PI * 2,
      };
    };

    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push(createPetal());
    }

    // Draw single organic petal shape
    const drawPetal = (ctx: CanvasRenderingContext2D, p: Petal) => {
      ctx.save();
      const currentX = p.x + Math.sin(p.swayPhase) * p.swayAmplitude;
      ctx.translate(currentX, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.scale(1, 0.65); // 3D squish tilt

      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      // Organic curved petal path
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.7, -p.size * 0.8, p.size * 0.9, p.size * 0.2, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.2, -p.size * 0.7, -p.size * 0.8, 0, -p.size);
      ctx.fill();

      // Delicate subtle center vein
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 0.8;
      ctx.moveTo(0, -p.size * 0.7);
      ctx.lineTo(0, p.size * 0.5);
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.swayPhase += p.swaySpeed;
        p.rotation += p.rotationSpeed;

        // Reset when fallen below screen
        if (p.y > height + 20) {
          petals[i] = createPetal(-20);
        }
        if (p.x > width + 50) {
          p.x = -20;
        } else if (p.x < -50) {
          p.x = width + 20;
        }

        drawPetal(ctx, p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
    />
  );
};
