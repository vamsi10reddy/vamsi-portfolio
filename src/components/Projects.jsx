import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SpeedESales',
    description: 'Django e‑commerce app for managing products, inventory, and payments.',
    tech: ['Django', 'HTML', 'CSS', 'SQLite'],
    demo: '#',
    github: '#',
  },
];

const Projects = () => {
  const single = projects.length === 1;

  return (
    <motion.section
      id="projects"
      className="py-16 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 w-full text-center">Projects</h2>

      <div
        className={`grid ${
          single ? 'justify-items-center' : 'md:grid-cols-2 gap-8'
        }`}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg transition-transform hover:-translate-y-1 hover:shadow-2xl max-w-lg w-full"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 mt-3 text-sm text-gray-600 dark:text-gray-400">
              {project.tech.map((tech, i) => (
                <li key={i} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-blue-600">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
