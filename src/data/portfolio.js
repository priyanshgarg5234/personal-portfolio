// ─── Portfolio Data ───────────────────────────────────────────────────────────
// Edit this file to personalise the portfolio content.

export const personal = {
  name: 'Priyansh Garg',
  title: 'Full-Stack Developer',
  tagline: 'I craft fast, accessible, and beautiful digital experiences.',
  bio: `I'm a full-stack developer with 2+ years of experience building products 
  that people love to use. I obsess over the details — from pixel-perfect UIs to 
  well-architected APIs. Currently open to senior roles and interesting freelance 
  projects.`,
  location: 'Noida, India',
  email: 'priyansh21garg@gmail.com ',
  availability: 'Open to work',
}

export const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML','CSS',] },
  { category: 'Backend', items: ['Node.js', 'Express', 'SQL Server', 'REST APIs', 'Asp.Net'] },
  { category: 'DevOps', items: [ 'Vercel', 'GitHub Actions'] },
  { category: 'Tools', items: ['Git', 'Postman', 'VS Code', 'Visual Studio'] },
]

export const projects = [
  {
    id: 1,
    title: 'Flux — Real-time Dashboard',
    description:
      'A high-performance analytics dashboard with real-time data streaming, interactive charts, and multi-tenant support. Handles 10k+ concurrent users.',
    tech: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'Shelf — Book Tracker App',
    description:
      'A beautifully designed reading tracker with AI-powered book recommendations, social features, and reading statistics. 2k+ active users.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'OpenAI', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 3,
    title: 'Prism — UI Component Library',
    description:
      'An accessible, themeable React component library with 40+ components, comprehensive docs, and full TypeScript support. 500+ GitHub stars.',
    tech: ['React', 'TypeScript', 'Storybook', 'Rollup', 'Radix UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'Open Source',
  },
  {
    id: 4,
    title: 'Forge — CLI Dev Tool',
    description:
      'A developer productivity CLI that scaffolds projects, manages environment configs, and automates common workflows.',
    tech: ['Node.js', 'Commander.js', 'Inquirer', 'npm'],
    liveUrl: null,
    githubUrl: 'https://github.com',
    featured: false,
    category: 'Open Source',
  },
]

export const experience = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Cognizant',
    period: 'DEC, 2023 — Present',
    type: 'work',
    description:
      'Lead the frontend architecture for a SaaS platform serving 50k+ users. Reduced bundle size by 40%, improved Core Web Vitals scores, and mentored 3 junior engineers.',
    highlights: ['Led migration from CRA to Vite (3× faster builds)', 'Designed component system used across 4 products', 'Implemented real-time collaboration features'],
  },
  {
    id: 2,
    role: 'Programer Analyst Trainee',
    company: 'Cognizant',
    period: 'Jun, 2023 — Dec, 2023',
    type: 'work',
    description:
      'Built custom web applications for clients across fintech, e-commerce, and healthcare. Delivered 12+ projects on time and within budget.',
    highlights: ['Developed 3 fintech dashboards with complex data visualisations', 'Built a headless e-commerce platform on Next.js', 'Introduced automated testing, achieving 80% coverage'],
  },
  {
    id: 3,
    role: 'B.Tech Computer Science And Engineeering',
    company: 'ABES Engineering College, Ghaziabad',
    period: '2019 — 2023',
    type: 'education',
    description:
      'Specialised in Human-Computer Interaction and Distributed Systems. Graduated with Honours. Thesis on "Optimising React render performance in large-scale applications."',
    highlights: ['Graduated with Honours (3.8 GPA)', 'President, Web Dev Student Club', 'Hackathon winner × 3'],
  },
]

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
