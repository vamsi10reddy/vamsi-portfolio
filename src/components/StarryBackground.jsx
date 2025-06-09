// src/components/StarryBackground.jsx
import React from 'react';
import { motion } from 'framer-motion';

const StarryBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:bg-[url('/assets/img/night-sky.png')] bg-[url('/assets/img/night-sky-light.png')]"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80" />

        {/* Animated stars */}
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Shooting star */}
        <motion.div
          className="absolute h-0.5 bg-white rounded-full shadow-lg"
          initial={{ x: '-10%', y: '10%', opacity: 0 }}
          animate={{ x: '110%', y: '50%', opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
          style={{ width: '150px' }}
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StarryBackground;
