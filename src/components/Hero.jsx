// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center py-16 px-6 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <style>
        {`
          .wave {
            display: inline-block;
            animation: wave-animation 2s infinite;
            transform-origin: 70% 70%;
          }

          @keyframes wave-animation {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>

      <div className="text-lg text-white mb-2">
        Hi There! <span className="wave" role="img" aria-label="waving hand">👋</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
        I'm <span className="text-blue-400">Vamsi Reddy Bearala</span>
      </h2>
      <p className="text-lg text-white leading-relaxed mb-6">
        Building scalable and reliable systems.
      </p>
      <div className="flex gap-6">
        <a href="https://linkedin.com/in/vamsi-reddy-8375b9290" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-110">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:vamsi10reddy@gmail.com" aria-label="Email" className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition-transform transform hover:scale-110">
          <FaEnvelope size={24} />
        </a>
        <a href="https://github.com/vamsi10reddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-transform transform hover:scale-110">
          <FaGithub size={24} />
        </a>
        <a href="https://instagram.com/vamsireddy12_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-transform transform hover:scale-110">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com/vamsi10reddy" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-transform transform hover:scale-110">
          <FaTwitter size={24} />
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
