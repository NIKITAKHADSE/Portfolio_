'use client';
import { useState } from 'react';
const links = ['About','Work','Skills','Experience','Contact'];
export function EditorialNavbar(){
  const [open,setOpen]=useState(false);
  return <header className="editorial-nav"><a className="editorial-logo" href="#home"><b>NK</b><span>NIKITA KHADSE<small>DESIGN + DEVELOPMENT</small></span></a><nav className={open?'is-open':''}>{links.map((item,i)=><a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setOpen(false)}><small>0{i+1}</small>{item}</a>)}</nav><a className="editorial-nav__cta" href="#contact">Start a project <span>↗</span></a><button onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open?'×':'☰'}</button></header>;
}
