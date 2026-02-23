'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { content } from '@/data/content';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Contact() {
  const { contact } = content;

  return (
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {contact.headline}
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6" />
          <p className="text-lg text-neutral-600">
            {contact.description}
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            <Mail className="w-6 h-6" />
            {contact.email}
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          {contact.social.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-neutral-100 rounded-full hover:bg-primary-600 hover:text-white transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
