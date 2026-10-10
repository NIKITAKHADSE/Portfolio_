'use client';
import { useEffect, useState } from 'react';
const links = ['Home', 'About', 'Work', 'Skills', 'Experience', 'Contact'];
export function ReferenceNavbar() {
  const [active, setActive] = useState('Home');
  useEffect(() => {
    const sections = links.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => { const current = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0]; if (current) setActive(current.target.id[0].toUpperCase()+current.target.id.slice(1)); }, { rootMargin: '-30% 0px -60%', threshold: [0,.2,.6] });
    sections.forEach((section) => observer.observe(section)); return () => observer.disconnect();
  }, []);
  return <><header className="topbar section-shell"><a className="brand" href="#home"><b>N</b><span><strong>NIKITA</strong><small>Portfolio</small></span><em>DEV</em></a><div className="topbar__actions"><span><i />Available for projects</span><a href="#contact">✣ HIRE ME</a></div></header><nav className="dock" aria-label="Primary navigation">{links.map((label,index)=><a key={label} className={active===label?'is-active':''} href={`#${label.toLowerCase()}`}><span>{['⌂','♙','▣','</>','◇','✉'][index]}</span>{label}</a>)}</nav></>;
}
