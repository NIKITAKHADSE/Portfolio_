'use client';

import { motion } from 'motion/react';
import { siteContent } from '@/content/portfolio';

export function Process() {
  return (
    <section className="section-shell section-pad process" aria-labelledby="process-title">
      <div className="section-kicker">UI / UX PROCESS</div>
      <h2 id="process-title">From Idea to Interface.</h2>
      <div className="process__track">
        {siteContent.process.map((step, i) => (
          <motion.div className="process__step" key={step} initial={{ opacity: 0, z: -100, y: 40 }} whileInView={{ opacity: 1, z: 0, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: i * 0.08 }}>
            <span>0{i + 1}</span><strong>{step}</strong>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
