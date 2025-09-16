// components/RollingNumber.jsx
'use client';
import { useState, useEffect } from 'react';

export default function RollingNumber({ targetNumber, duration = 2000 }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const start = 0;
          const end = targetNumber;
          const increment = (end - start) / (duration / 16); // 16ms per frame
          let current = start;
          setHasAnimated(true);

          const interval = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCurrentNumber(end);
              clearInterval(interval);
            } else {
              setCurrentNumber(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(interval);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetNumber, duration, hasAnimated]);

  return (
    <div ref={ref} className="detail-number">
      {currentNumber}
    </div>
  );
}