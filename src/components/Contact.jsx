// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 px-6 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading without underline */}
      <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>

      {/* Subtext in white */}
      <p className="text-lg text-white leading-relaxed mb-8">
        Feel free to connect with me on any of the platforms below.
      </p>

      {/* Social icons section */}
      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://linkedin.com/in/vamsi-reddy-8375b9290"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="mailto:vamsi10reddy@gmail.com"
          aria-label="Email"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-transform transform hover:scale-110"
        >
          <FaEnvelope size={24} />
        </a>

        <a
          href="https://github.com/vamsi10reddy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-transform transform hover:scale-110"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://instagram.com/vamsireddy12_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-transform transform hover:scale-110"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="https://twitter.com/vamsi10reddy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-transform transform hover:scale-110"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
