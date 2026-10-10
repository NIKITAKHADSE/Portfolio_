import { SectionHeading } from '@/components/SectionHeading';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { projects } from '@/content/portfolio';

export function Work() {
  return (
    <section id="work" className="section-shell section-pad work">
      <SectionHeading index="02" title="Selected Work" subtitle="A collection of digital experiences I've designed and developed." />
      <ProjectShowcase projects={projects} />
    </section>
  );
}
