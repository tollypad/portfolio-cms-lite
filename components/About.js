'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { content } from '@/data/content';

export default function About() {
  const { about } = content;

  return (
    <section id="about" className="min-h-screen py-20 px-6 flex items-center">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {about.headline}
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-neutral-700 text-lg leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {about.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-neutral-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
