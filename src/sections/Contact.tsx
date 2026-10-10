'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { siteContent } from '@/content/portfolio';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const startedAt = useRef<number | null>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('sending'); setMessage('');
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, startedAt: startedAt.current ?? Date.now() }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not send your message.');
      form.reset(); setStatus('success'); setMessage('Message sent. Thank you — I’ll get back to you soon.');
    } catch (error) {
      setStatus('error'); setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  const socials = Object.entries(siteContent.social).filter(([key, value]) => key !== 'resume' && Boolean(value));
  return (
    <section id="contact" className="section-shell section-pad contact">
      <SectionHeading index="05" title="Let's Build Something Great." subtitle="Have an idea, project or opportunity? Let's turn it into a digital experience." />
      <div className="contact__layout">
        <div className="contact__left">
          <div className="contact-orb" aria-hidden="true"><i /><i /><i /><b>↗</b></div>
          <h3>Start a Conversation ↗</h3>
          <div className="contact__links">
            {socials.length ? socials.map(([key, url]) => <a key={key} href={url} target={key === 'email' ? undefined : '_blank'} rel="noreferrer">{key} ↗</a>) : <p>Contact links are ready to configure in <code>src/content/portfolio.ts</code>.</p>}
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <input className="hp" name="companyWebsite" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label><span>Name</span><input name="name" required minLength={2} maxLength={80} placeholder="Your name" /></label>
          <label><span>Email</span><input name="email" required type="email" maxLength={120} placeholder="you@example.com" /></label>
          <label><span>Project Type</span><select name="projectType" required defaultValue=""><option value="" disabled>Select one</option><option>Frontend Development</option><option>CRM Development</option><option>Web Application</option><option>UI/UX Design</option><option>Website Redesign</option><option>WordPress / Shopify</option><option>Other</option></select></label>
          <label><span>Message</span><textarea name="message" required minLength={10} maxLength={2500} rows={6} placeholder="Tell me about the project…" /></label>
          <button className="button button--primary" type="submit" disabled={status === 'sending'}><span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span><span>↗</span></button>
          <div className={`form-status form-status--${status}`} role="status" aria-live="polite">{message}</div>
        </form>
      </div>
    </section>
  );
}
