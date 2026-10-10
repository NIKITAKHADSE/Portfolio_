'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Project } from '@/content/portfolio';

function BrowserPreview({ project, index }: { project: Project; index: number }) {
  return (
    <div className={`project-browser project-browser--${index % 3}`} aria-label={`${project.name} project preview placeholder`}>
      <div className="project-browser__bar"><span /><span /><span /><em>{project.slug}.project</em></div>
      <div className="project-browser__canvas">
        <span className="project-browser__index">0{index + 1}</span>
        <span className="project-browser__cross" aria-hidden="true">+</span>
        <div className="project-browser__nav"><b>{project.name}</b><i /><i /><i /></div>
        <div className="project-browser__hero"><small>PROJECT PREVIEW</small><strong>{project.category}</strong><span>{project.summary}</span></div>
        <div className="project-browser__tiles"><i /><i /><i /></div>
      </div>
    </div>
  );
}

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>
      <div className="projects">
        {projects.map((project, index) => (
          <article className="project" key={project.slug} data-cursor="view">
            <motion.button className="project__preview" onClick={() => setSelected(project)} whileHover={{ rotateX: 1.5, rotateY: -2.5, scale: 1.015 }} transition={{ type: 'spring', stiffness: 140, damping: 18 }}>
              <BrowserPreview project={project} index={index} />
            </motion.button>
            <div className="project__info">
              <div className="project__num">0{index + 1}</div>
              <div><h3>{project.name}</h3><p>{project.category}</p></div>
              <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <button onClick={() => setSelected(project)} data-cursor="link">View Project ↗</button>
            </div>
          </article>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div className="project-modal" role="dialog" aria-modal="true" aria-label={`${selected.name} case study`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="project-modal__panel" initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 50 }}>
              <button className="project-modal__close" onClick={() => setSelected(null)}>Close ×</button>
              <div className="eyebrow">CASE STUDY</div><h2>{selected.name}</h2><p className="project-modal__lead">{selected.summary}</p>
              <div className="project-modal__facts">
                <div><span>Category</span><strong>{selected.category}</strong></div>
                <div><span>Role</span><strong>{selected.role || 'Not supplied in brief'}</strong></div>
                <div><span>Timeline</span><strong>{selected.timeline || 'Not supplied in brief'}</strong></div>
                <div><span>Technologies</span><strong>{selected.technologies.join(' · ')}</strong></div>
              </div>
              <BrowserPreview project={selected} index={projects.indexOf(selected)} />
              <div className="project-modal__body">
                <h3>Overview</h3><p>{selected.summary}</p>
                <h3>Challenge · Design approach · Development · Result</h3><p>These details were not included in the supplied brief. Add verified case-study copy in <code>src/content/portfolio.ts</code> rather than publishing invented project claims.</p>
                {selected.url ? <a href={selected.url} target="_blank" rel="noreferrer">Live website ↗</a> : <span className="muted">Live URL not supplied</span>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
