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
      I'm Vamsi Reddy Bearala, a DevOps and Automation Engineer with 2+ years of industry experience and a Master’s in Computer Science from Texas Tech University. I specialize in CI/CD, cloud infrastructure, and test automation using tools like Python, Docker, Jenkins, and AWS.
      </p>
    </motion.section>
  );
};

export default About;
