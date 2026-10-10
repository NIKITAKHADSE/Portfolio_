'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/Button';
import { siteContent } from '@/content/portfolio';

export function ReferenceHero() {
  return (
    <section id="home" className="hero reference-hero section-shell">
      <div className="hero__glow hero__glow--violet" /><div className="hero__glow hero__glow--cyan" />
      <motion.div className="hero__copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="status-pill"><span />Frontend Developer · Open to opportunities</div>
        <h1>Hi, I&apos;m <strong>NIKITA <em>KHADSE</em></strong></h1>
        <p>{siteContent.heroSupport}</p>
        <div className="hero__actions"><Button href="#work">View Projects</Button><Button href={siteContent.social.resume || '#contact'} variant="ghost">{siteContent.social.resume ? 'Download Resume' : 'Let’s Talk'}</Button></div>
        <div className="hero__stats">{siteContent.stats.slice(0, 3).map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        <div className="hero__connect"><span>CONNECT:</span><a href="#contact" aria-label="Email Nikita">@</a><a href="#work" aria-label="View work">↗</a></div>
      </motion.div>
      <motion.div className="dev-window" initial={{ opacity: 0, x: 30, rotateY: -8 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <div className="dev-window__bar"><i /><i /><i /><b>developer.ts</b><span>portfolio.json</span><span>contact.ts</span><small>▣</small></div>
        <div className="dev-window__profile"><div className="dev-window__avatar">NK</div><div><strong>Nikita Khadse</strong><span>&lt;/&gt; Frontend Developer & UI/UX Designer</span></div></div>
        <pre><code><span className="code-purple">const</span> developer = {'{'}{`\n`}  name: <span className="code-green">&quot;Nikita Khadse&quot;</span>,{`\n`}  role: <span className="code-green">&quot;Frontend Developer&quot;</span>,{`\n`}  experience: <span className="code-cyan">&quot;3+ years&quot;</span>,{`\n`}  stack: [<span className="code-green">&quot;React&quot;</span>, <span className="code-green">&quot;TypeScript&quot;</span>, <span className="code-green">&quot;Figma&quot;</span>],{`\n`}  focus: <span className="code-green">&quot;Useful, expressive interfaces&quot;</span>,{`\n`}  available: <span className="code-cyan">true</span>{`\n`}{'}'};</code></pre>
        <div className="dev-window__footer"><span>›_ Ready to build</span><span>Pune, India</span></div>
      </motion.div>
    </section>
  );
}
