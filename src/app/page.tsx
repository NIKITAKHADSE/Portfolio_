import { Navbar } from '@/components/Navbar';
import { Cursor } from '@/components/Cursor';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CreativeChrome } from '@/components/CreativeChrome';
import { AmbientInteraction } from '@/components/AmbientInteraction';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Work } from '@/sections/Work';
import { Skills } from '@/sections/Skills';
import { Process } from '@/sections/Process';
import { Experience } from '@/sections/Experience';
import { Resume } from '@/sections/Resume';
import { Contact } from '@/sections/Contact';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Person', name: 'Nikita Khadse', jobTitle: 'Frontend Developer & UI/UX Designer',
    knowsAbout: ['React.js', 'JavaScript', 'TypeScript', 'UI/UX Design', 'WordPress', 'Responsive Design'],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SmoothScroll /><Cursor /><AmbientInteraction /><CreativeChrome /><Navbar />
      <main><Hero /><About /><Work /><Skills /><Process /><Experience /><Resume /><Contact /></main>
      <Footer />
    </>
  );
}
