'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/Button';

const stack = ['React.js', 'Next.js', 'TypeScript', 'Node.js'];

export function Hero() {
  return (
    <section id="home" className="hero dev-hero section-shell">
      <div className="dev-hero__grid" aria-hidden="true" />
      <div className="dev-hero__copy">
        <motion.div className="dev-hero__status" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <i /> Available for select projects <span>Based in India</span>
        </motion.div>
        <motion.p className="dev-hero__overline" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          Frontend Developer <b>/</b> UI Engineer
        </motion.p>
        <h1 className="dev-hero__title">
          <motion.span initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>I build digital</motion.span>
          <motion.span initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.24 }}>products that <em>work.</em></motion.span>
        </h1>
        <motion.p className="dev-hero__support" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
          React developer crafting fast, accessible web applications and CRM systems with thoughtful interfaces and maintainable code.
        </motion.p>
        <motion.div className="hero__actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
          <Button href="#work">Explore Projects</Button>
          <Button href="#contact" variant="ghost">Let&apos;s Work Together</Button>
        </motion.div>
        <motion.div className="dev-hero__stack" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <small>CORE STACK</small>
          {stack.map((item) => <span key={item}>{item}</span>)}
        </motion.div>
      </div>

      <motion.div className="dev-hero__visual" initial={{ opacity: 0, x: 50, rotateY: -8 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
        <div className="dev-window">
          <div className="dev-window__bar"><span /><span /><span /><p>portfolio.tsx</p><b>⌘ K</b></div>
          <div className="dev-window__body">
            <aside><b>EXPLORER</b><span>⌄ src</span><span>⌄ components</span><em>◆ Hero.tsx</em><span>◇ Projects.tsx</span><span>◇ Skills.tsx</span></aside>
            <div className="dev-code">
              <div className="dev-code__tabs"><span>Hero.tsx</span><i>×</i></div>
              <div className="dev-code__content">
                <small>01</small><p><span className="keyword">export default</span> <span className="function">function</span> Portfolio() {'{'}</p>
                <small>02</small><p className="indent"><span className="keyword">return</span> (</p>
                <small>03</small><p className="indent2">&lt;<span className="tag">Developer</span></p>
                <small>04</small><p className="indent3">name=<span className="string">&quot;Nikita&quot;</span></p>
                <small>05</small><p className="indent3">experience=<span className="string">&quot;3+ years&quot;</span></p>
                <small>06</small><p className="indent3">available={'{'}<span className="boolean">true</span>{'}'}</p>
                <small>07</small><p className="indent2">/&gt;</p>
                <small>08</small><p className="indent">)</p>
                <small>09</small><p>{'}'}</p>
              </div>
            </div>
          </div>
          <div className="dev-window__terminal"><b>TERMINAL</b><p><span>➜</span> portfolio <em>npm run build</em></p><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>✓ Compiled successfully</motion.p></div>
        </div>
        <motion.div className="dev-float dev-float--top" animate={{ y: [0, -10, 0], rotate: [2, 0, 2] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><small>LIGHTHOUSE</small><strong>98</strong><span>Performance</span></motion.div>
        <motion.div className="dev-float dev-float--bottom" animate={{ y: [0, 9, 0], rotate: [-2, 0, -2] }} transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}><i>●</i><div><small>CURRENTLY BUILDING</small><strong>CRM &amp; Web Apps</strong></div></motion.div>
        <div className="dev-hero__orb" aria-hidden="true" />
      </motion.div>
      <a className="hero__scroll" href="#about" data-cursor="link">SCROLL TO EXPLORE ↓</a>
    </section>
  );
}
