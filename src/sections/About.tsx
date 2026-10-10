'use client';

import { motion } from 'motion/react';
import { SectionHeading } from '@/components/SectionHeading';
import { siteContent } from '@/content/portfolio';

export function About() {
  return (
    <section id="about" className="section-shell section-pad about">
      <SectionHeading index="01" title="More Than Just Code." />
      <div className="about__layout">
        <div className="about__copy">
          {siteContent.about.map((p, i) => (
            <motion.p key={p} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ delay: i * 0.08 }}>{p}</motion.p>
          ))}
        </div>
        <motion.div className="browser-stack" initial={{ rotateY: -14, rotateX: 8, y: 30 }} whileInView={{ rotateY: 0, rotateX: 0, y: 0 }} viewport={{ once: true, amount: 0.5 }}>
          {['Design', 'Code', 'Experience'].map((item, i) => (
            <motion.div className="browser-layer" key={item} style={{ zIndex: 3 - i }} whileInView={{ x: (i - 1) * 24, y: i * 18 }} transition={{ type: 'spring', stiffness: 90 }}>
              <div className="browser-layer__bar"><i /><i /><i /></div><strong>{item}</strong><span>{i < 2 ? '→' : '✓'}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="stats">
        {siteContent.stats.map(([value, label]) => (
          <motion.div key={label} className="stat" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <strong>{value}</strong><span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
