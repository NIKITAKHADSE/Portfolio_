'use client';

import { useEffect } from 'react';

export function CreativeChrome() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        const progress = distance > 0 ? window.scrollY / distance : 0;
        root.style.setProperty('--page-progress', `${Math.min(1, Math.max(0, progress))}`);
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="creative-chrome" aria-hidden="true">
      <div className="scroll-progress" />
      <div className="edge-label edge-label--left">CREATIVE FRONTEND · 2026</div>
      <div className="edge-label edge-label--right">DESIGN × CODE × MOTION</div>
      <span className="micro-shape micro-shape--one" />
      <span className="micro-shape micro-shape--two" />
      <span className="micro-shape micro-shape--three" />
    </div>
  );
}
