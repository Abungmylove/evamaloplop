import React, { useEffect, useState } from 'react';

export const CSSFlower: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [bloom, setBloom] = useState(false);

  useEffect(() => {
    // Start bloom shortly after mount
    const t = setTimeout(() => setBloom(true), 100);
    // End sequence after 4s
    const t2 = setTimeout(() => onComplete(), 4000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [onComplete]);

  // We create 12 petals layered in a circle
  const petals = Array.from({ length: 12 });

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Center glowing core */}
      <div 
        className={`absolute w-12 h-12 bg-rose-300 rounded-full blur-md transition-all duration-[3000ms] ease-out ${
          bloom ? 'scale-150 opacity-80' : 'scale-0 opacity-0'
        }`}
      />
      
      {/* Petals */}
      {petals.map((_, i) => {
        const angle = i * 30; // 360 / 12 = 30 degrees
        const delay = (i % 3) * 200; // staggered blooming
        
        return (
          <div
            key={i}
            className="absolute origin-bottom transition-all ease-out"
            style={{
              width: '40px',
              height: '100px',
              bottom: '50%', // align origin to center
              left: 'calc(50% - 20px)',
              // Petal shape: pointy top, rounded bottom
              borderRadius: '50% 50% 20% 20%',
              background: `linear-gradient(to top, #FDA4AF, #F43F5E, #9F1239)`,
              boxShadow: '0 0 10px rgba(159, 18, 57, 0.4)',
              transform: bloom 
                ? `rotate(${angle}deg) translateY(-20px) scale(1.5)` 
                : `rotate(${angle}deg) translateY(0px) scale(0)`,
              transitionDuration: '2500ms',
              transitionDelay: `${delay}ms`,
              opacity: bloom ? 0.9 : 0,
            }}
          />
        );
      })}

      {/* Inner Petals */}
      {petals.map((_, i) => {
        const angle = i * 30 + 15; // offset by 15 deg
        const delay = 500 + (i % 2) * 200; // bloom slightly later
        
        return (
          <div
            key={`inner-${i}`}
            className="absolute origin-bottom transition-all ease-out"
            style={{
              width: '30px',
              height: '70px',
              bottom: '50%',
              left: 'calc(50% - 15px)',
              borderRadius: '50% 50% 20% 20%',
              background: `linear-gradient(to top, #FBCFE8, #FB7185, #E11D48)`,
              transform: bloom 
                ? `rotate(${angle}deg) translateY(-10px) scale(1.2)` 
                : `rotate(${angle}deg) translateY(0px) scale(0)`,
              transitionDuration: '2000ms',
              transitionDelay: `${delay}ms`,
              opacity: bloom ? 0.95 : 0,
            }}
          />
        );
      })}
    </div>
  );
};
