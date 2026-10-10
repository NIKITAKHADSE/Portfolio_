'use client';

import { useState, type PointerEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { SectionHeading } from '@/components/SectionHeading';
import { siteContent } from '@/content/portfolio';

export function Skills() {
  const [active, setActive] = useState('React.js');
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.7 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.7 });
  const rotateY = useTransform(smoothX, [-1, 1], [-11, 11]);
  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
  };

  const resetPerspective = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section id="skills" className="section-shell section-pad skills-section">
      <SectionHeading index="03" title="Tools I Build With" />
      <div className="skill-universe" aria-label="Interactive 3D skill universe" onPointerMove={handlePointerMove} onPointerLeave={resetPerspective}>
        <motion.div className="skill-universe__scene" style={reduceMotion ? undefined : { rotateX, rotateY }}>
          <div className="skill-universe__rings" aria-hidden="true"><i /><i /><i /></div>
          <motion.div className="skill-universe__core" animate={reduceMotion ? undefined : { y: [0, -8, 0], rotateY: [0, 12, 0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}><span>FRONTEND</span><small>{active}</small></motion.div>
          {siteContent.skills.map((skill, i) => {
          const angle = (i / siteContent.skills.length) * Math.PI * 2;
          const radius = i % 3 === 0 ? 45 : i % 2 === 0 ? 38 : 31;
          const depth = Math.round(Math.sin(angle * 1.5) * 100);
          // Fixed precision keeps the server and browser style strings identical.
          const x = (50 + Math.cos(angle) * radius).toFixed(3);
          const y = (50 + Math.sin(angle) * radius * 0.7).toFixed(3);
          return (
            <motion.button key={skill} className={`skill-node ${active === skill ? 'is-active' : ''}`} style={{ left: `${x}%`, top: `${y}%`, z: depth }} animate={reduceMotion ? undefined : { y: [0, i % 2 ? -7 : 7, 0] }} transition={{ duration: 4 + (i % 4) * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }} onMouseEnter={() => setActive(skill)} onFocus={() => setActive(skill)}>
              {skill}
            </motion.button>
          );
          })}
        </motion.div>
      </div>
      <p className="skills-extra">Also working with {siteContent.extraSkills.join(', ')}.</p>
    </section>
  );
}
