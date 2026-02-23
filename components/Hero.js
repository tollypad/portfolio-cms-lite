'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { content } from '@/data/content';

export default function Hero({ onNavigate }) {
  const { hero } = content;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {hero.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-2xl md:text-3xl text-primary-600 font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {hero.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              onClick={() => onNavigate && onNavigate('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {hero.cta}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => onNavigate && onNavigate('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              {hero.ctaSecondary}
            </motion.button>
          </motion.div>

          {/* Section Hint */}
          <motion.div
            className="mt-12 text-sm text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Use the navigation above to explore
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
