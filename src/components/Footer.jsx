// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.section
      id="footer"
      className="py-16 px-6 max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Footer Text */}
      <p className="relative z-10 text-gray-300 text-sm font-medium">
        &copy; {new Date().getFullYear()} <span className="text-blue-400">Vamsi Reddy Bearala</span>. Portfolio.
      </p>
    </motion.section>
  );
};

export default Footer;
