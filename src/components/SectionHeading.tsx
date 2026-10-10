import type { ReactNode } from 'react';

export function SectionHeading({ index, title, subtitle }: { index: string; title: ReactNode; subtitle?: string }) {
  return (
    <div className="section-heading">
      <div className="section-heading__index">/{index}</div>
      <div>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </div>
  );
}
