import { siteContent } from '@/content/portfolio';

export function Footer() {
  return (
    <footer className="footer section-shell">
      <div><strong>NIKITA KHADSE</strong><span>Frontend Developer & UI/UX Designer</span></div>
      <div className="footer__links">
        {siteContent.social.linkedin && <a href={siteContent.social.linkedin}>LinkedIn</a>}
        {siteContent.social.github && <a href={siteContent.social.github}>GitHub</a>}
        {siteContent.social.email && <a href={siteContent.social.email}>Email</a>}
        {siteContent.social.resume && <a href={siteContent.social.resume}>Resume</a>}
      </div>
      <div className="footer__mark" aria-hidden="true">◇</div>
      <small>© 2026 Nikita Khadse</small>
    </footer>
  );
}
