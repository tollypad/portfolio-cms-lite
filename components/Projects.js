'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { content } from '@/data/content';

export default function Projects() {
  const { projects } = content;

  return (
    <section id="projects" className="min-h-screen py-20 px-6 flex items-center">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {projects.headline}
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6" />
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {projects.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-primary-50 text-primary-700 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
