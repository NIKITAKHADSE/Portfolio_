'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export function Button({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'ghost' }) {
  return (
    <motion.a
      href={href}
      className={`button button--${variant}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      data-cursor="link"
    >
      <span>{children}</span><span aria-hidden="true">↗</span>
    </motion.a>
  );
}
