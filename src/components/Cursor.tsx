'use client';

import { useEffect, useState } from 'react';

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<'default' | 'link' | 'view'>('default');

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
      const value = target?.dataset.cursor;
      setMode(value === 'view' ? 'view' : value === 'link' ? 'link' : 'default');
    };
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <div className={`cursor cursor--${mode}`} style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }} aria-hidden="true">
      {mode === 'view' ? 'VIEW' : ''}
    </div>
  );
}
