'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';

// Navigation sections configuration
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ currentSection, onSectionChange }) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-neutral-200"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.button
            className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            onClick={() => onSectionChange('home')}
          >
            {content.hero.name.split(' ')[0]}
          </motion.button>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2">
            {sections.map((section) => {
              const isActive = currentSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition-all duration-300
                    ${isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-neutral-700 hover:bg-neutral-100'}
                  `}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
