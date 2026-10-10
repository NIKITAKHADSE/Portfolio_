'use client';

import { motion } from 'motion/react';
import { SectionHeading } from '@/components/SectionHeading';
import { experience } from '@/content/portfolio';

export function Experience() {
  return (
    <section id="experience" className="section-shell section-pad experience">
      <SectionHeading index="04" title="Experience" />
      <div className="experience__timeline">
        <motion.div className="experience__line" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
        <div className="experience__date">{experience.period}</div>
        <div className="experience__content">
          <div className="eyebrow">{experience.company}</div><h3>{experience.role}</h3>
          <div className="experience__responsibilities">{experience.responsibilities.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
