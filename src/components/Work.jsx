// src/components/Work.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  const experiences = [
    {
      role: 'Graduate Research Assistant',
      company: 'Texas Tech University',
      period: 'Aug 2023 – May 2025',
      description:
        'Working on secure cloud infrastructure design, DevOps tooling, and academic systems testing automation.',
      image: 'ttu.png',
    },
    {
      role: 'Software Development Engineer in Test',
      company: 'Accenture',
      period: 'Jul 2021 – July 2023',
      description:
        'Automated testing for Google Wearable devices, built frameworks using Selenium and Appium, collaborated across teams to ensure high-quality product delivery.',
      image: 'accenture.png',
    },
  ];

  return (
    <motion.section
      id="work"
      className="py-16 px-6 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">Work Journey</h2>
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all"
          >
            <img
              src={`/assets/img/${exp.image}`}
              alt={exp.company}
              className="w-20 h-20 object-contain mb-4 rounded-full shadow-md"
            />
            <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-1">
              {exp.company}
            </p>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              {exp.role}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
