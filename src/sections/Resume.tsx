import { siteContent } from '@/content/portfolio';

export function Resume() {
  const resume = siteContent.social.resume;
  return (
    <section className="section-shell resume">
      <div><div className="section-kicker">RESUME</div><h2>Want the Full Story?</h2><p>Explore my complete experience, skills and professional background.</p></div>
      <div className="resume__doc" aria-hidden="true"><i /><i /><i /><b>NK</b></div>
      {resume ? (
        <a className="button button--primary" href={resume} download data-cursor="link"><span>Download Resume</span><span>↗</span></a>
      ) : (
        <span className="button button--primary button--disabled" aria-disabled="true" title="Add the real resume PDF and set its path in src/content/portfolio.ts"><span>Download Resume</span><span>↗</span></span>
      )}
      {!resume && <p className="resume__note">Resume PDF was not supplied. Add it to <code>public/</code> and set its path in <code>src/content/portfolio.ts</code>.</p>}
    </section>
  );
}
