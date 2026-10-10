export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  technologies: string[];
  url?: string;
  screenshot?: string;
  role?: string;
  timeline?: string;
};

export const siteContent = {
  name: 'Nikita Khadse',
  eyebrow: 'Frontend Developer & UI/UX Designer',
  positioning: 'React.js Developer | UI/UX Designer | Creative Frontend Developer',
  experience: '3+ Years Experience',
  heroLines: ['Designing Ideas.', 'Building Interfaces.', 'Creating Impact.'],
  heroSupport:
    'I turn ambitious ideas into expressive, responsive websites, CRM systems and web applications where thoughtful design meets clean frontend craft.',
  about: [
    'I’m Nikita Khadse, a Frontend Developer and UI/UX Designer focused on creating modern, responsive and meaningful digital experiences.',
    'I combine design thinking with frontend development to transform ideas and interfaces into polished, functional products.',
    'I enjoy working across the complete digital experience — from wireframes and visual systems to responsive development and final deployment.',
  ],
  stats: [
    ['3+', 'Years Experience'],
    ['20+', 'Web Projects'],
    ['10+', 'Technologies'],
    ['100%', 'Passion for Design & Code'],
  ],
  skills: [
    'React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Tailwind CSS',
    'Bootstrap', 'Figma', 'WordPress', 'Shopify', 'Git', 'GitHub', 'REST API',
    'Node.js', 'MongoDB', 'Python', 'Django',
  ],
  extraSkills: ['Express.js', 'AWS', 'Linux', 'CI/CD', 'Micro Frontends', 'AI/Copilot tools'],
  process: ['Discover', 'Wireframe', 'Design', 'Develop', 'Test', 'Launch'],
  social: {
    email: '',
    linkedin: '',
    github: '',
    portfolio: '',
    resume: '',
  },
};

export const projects: Project[] = [
  {
    slug: 'crm-platform',
    name: 'CRM Platform',
    category: 'Customer relationship management',
    summary: 'A responsive CRM web application designed to organize customer data, streamline workflows and support day-to-day business operations.',
    technologies: ['React.js', 'REST API', 'Node.js', 'MongoDB'],
  },
  {
    slug: 'custom-web-application',
    name: 'Custom Web Application',
    category: 'Business web application',
    summary: 'A modern web application with an intuitive interface, responsive layouts and scalable frontend architecture.',
    technologies: ['React.js', 'TypeScript', 'Redux', 'Responsive Design'],
  },
  {
    slug: 'fly-and-tech',
    name: 'Fly & Tech',
    category: 'Drone technology & e-commerce',
    summary: 'Drone technology and e-commerce website.',
    technologies: ['WordPress', 'WooCommerce', 'UI/UX', 'Responsive Design'],
  },
  {
    slug: 'digivik',
    name: 'DigiVik',
    category: 'Digital marketing & growth agency',
    summary: 'Digital marketing and growth agency website.',
    technologies: ['UI/UX', 'Frontend Development', 'WordPress', 'Responsive Design'],
  },
  {
    slug: 'concreteman',
    name: 'ConcreteMan',
    category: 'Corporate / industrial',
    summary: 'Corporate and industrial website.',
    technologies: ['WordPress', 'UI Design', 'Responsive Development'],
  },
  {
    slug: 'hotel-ashirwad',
    name: 'Hotel Ashirwad',
    category: 'Hospitality',
    summary: 'Hospitality website.',
    technologies: ['WordPress', 'UI/UX', 'Responsive Design'],
  },
  {
    slug: 'corporate-skill-hub',
    name: 'Corporate Skill Hub',
    category: 'Education / business',
    summary: 'Education and business website.',
    technologies: ['WordPress', 'UI/UX', 'Frontend Development'],
  },
  {
    slug: 'heal-care-clinic',
    name: 'Heal & Care Clinic',
    category: 'Healthcare',
    summary: 'Healthcare website.',
    technologies: ['UI/UX', 'WordPress', 'Responsive Design'],
  },
];

export const experience = {
  company: 'DigiVik Business Solution',
  role: 'Frontend Developer',
  period: 'October 2023 — Present',
  responsibilities: [
    'Building responsive websites',
    'React.js development',
    'UI implementation',
    'Figma-to-code development',
    'WordPress development',
    'API integration',
    'Performance optimization',
    'Cross-browser compatibility',
    'Responsive layouts',
    'Client website development',
  ],
};
