'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const links = ['Home', 'About', 'Work', 'Skills', 'Experience', 'Contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = links.map((label) => document.getElementById(label.toLowerCase())).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id[0].toUpperCase() + visible.target.id.slice(1));
    }, { rootMargin: '-35% 0px -55%', threshold: [0, 0.2, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a className="nav__brand" href="#home" data-cursor="link">NIKITA KHADSE</a>
      <nav className="nav__links" aria-label="Primary navigation">
        {links.map((label) => (
          <a key={label} className={active === label ? 'is-active' : ''} href={`#${label.toLowerCase()}`} data-cursor="link">
            {label}<span className="nav__dot" />
          </a>
        ))}
      </nav>
      <a className="nav__talk" href="#contact" data-cursor="link">Let&apos;s Talk ↗</a>
      <button className="nav__menu" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><span /><span /></button>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
            <button onClick={() => setOpen(false)} aria-label="Close menu">CLOSE ×</button>
            {links.map((label, i) => (
              <motion.a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <small>0{i + 1}</small>{label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
