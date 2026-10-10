'use client';

import { useEffect } from 'react';

export function AmbientInteraction() {
  useEffect(() => {
    const root = document.documentElement;
    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  return <div className="ambient-interaction" aria-hidden="true" />;
}
