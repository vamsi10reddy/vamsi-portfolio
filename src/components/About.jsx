// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16 px-6 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
      <p className="text-lg text-gray-100 dark:text-gray-300 leading-relaxed mt-4">
        I’m a Software Development Engineer in Test with strong skills in automation, DevOps, and quality engineering.
        Passionate about solving problems, building scalable systems, and continuously learning.
        With a Master's degree in Computer Science and industry experience at Accenture,
        I specialize in building robust testing frameworks and deploying secure infrastructure.
      </p>
    </motion.section>
  );
};

export default About;
