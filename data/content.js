// ============================================
// 📝 CONTENT MANAGEMENT FILE
// ============================================
// This is your site's CMS. Edit values below to update your portfolio.
// No need to touch component files - just change the text/links here.

export const content = {
  // ============================================
  // HERO SECTION (Homepage)
  // ============================================
  // What visitors see first when they land on your site
  hero: {
    name: 'Jane Developer',              // Your name
    title: 'Full-Stack Developer',       // Your job title or tagline
    tagline: 'Building fast, beautiful web experiences with modern tech.',  // Short bio
    cta: 'View Projects',                // Primary button text
    ctaSecondary: 'Get in Touch',        // Secondary button text
  },

  // ============================================
  // ABOUT SECTION
  // ============================================
  // Tell visitors about yourself and your skills
  about: {
    headline: 'About Me',                // Section title
    // Bio paragraphs - add as many as you want
    paragraphs: [
      'I\'m a full-stack developer passionate about creating clean, performant web applications. With 3+ years of experience, I specialize in React, Next.js, and Node.js.',
      'I love solving complex problems and turning ideas into reality. When I\'m not coding, you can find me contributing to open source or learning new technologies.',
    ],
    // Your tech stack - displayed as a grid with checkmarks
    skills: [
      'React & Next.js',
      'TypeScript',
      'Node.js',
      'Tailwind CSS',
      'PostgreSQL',
      'REST & GraphQL',
    ],
  },

  // ============================================
  // PROJECTS SECTION
  // ============================================
  // Showcase your work with project cards
  projects: {
    headline: 'Featured Projects',       // Section title
    description: 'A selection of projects showcasing my skills and experience.',  // Subheading
    // Array of project objects - add or remove as needed
    items: [
      {
        id: 1,                          // Unique ID for each project
        title: 'E-Commerce Platform',   // Project name
        description:                     // What the project does
          'A full-featured online store with product management, cart, checkout, and payment integration.',
        tags: ['Next.js', 'Stripe', 'PostgreSQL'],  // Tech stack badges
        github: 'https://github.com/yourusername/ecommerce',  // GitHub link
        demo: 'https://demo.example.com',                      // Live demo link
      },
      {
        id: 2,
        title: 'Task Management App',
        description:
          'Collaborative task board with drag-and-drop, real-time updates, and team management features.',
        tags: ['React', 'WebSocket', 'MongoDB'],
        github: 'https://github.com/yourusername/taskmanager',
        demo: 'https://demo.example.com',
      },
      {
        id: 3,
        title: 'Analytics Dashboard',
        description:
          'Data visualization platform with interactive charts, filters, and export capabilities.',
        tags: ['TypeScript', 'D3.js', 'Express'],
        github: 'https://github.com/yourusername/analytics',
        demo: 'https://demo.example.com',
      },
    ],
  },

  // ============================================
  // CONTACT SECTION
  // ============================================
  // Ways for people to reach you
  contact: {
    headline: 'Get In Touch',           // Section title
    description: 'Interested in working together? Let\'s connect!',  // Subheading
    email: 'hello@example.com',         // Your email - shows up as clickable button
    // Social media links - add or remove platforms
    social: [
      {
        name: 'GitHub',                // Platform name (must match icon name below)
        url: 'https://github.com/yourusername',  // Your profile URL
        icon: 'github',                // Icon identifier (github, linkedin, twitter)
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/yourusername',
        icon: 'linkedin',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/yourusername',
        icon: 'twitter',
      },
    ],
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    copyright: '© 2026 Jane Developer. Built with Next.js & Tailwind CSS.',  // Footer text
  },
};
