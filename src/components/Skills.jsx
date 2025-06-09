import React from 'react';
import { motion } from 'framer-motion';
import {
  FaAws,
  FaPython,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJenkins,
} from 'react-icons/fa';
import { SiPostman, SiSelenium } from 'react-icons/si';

const skills = [
    // Programming Languages
    { name: 'Python', icon: FaPython },
    { name: 'Java', icon: FaJava },
  
    // Web Technologies
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
  
    // DevOps Tools
    { name: 'Git', icon: FaGitAlt },
    { name: 'Linux', icon: FaLinux },
    { name: 'Docker', icon: FaDocker },
    { name: 'Jenkins', icon: FaJenkins },
    { name: 'AWS', icon: FaAws },
  
    // Testing Tools
    { name: 'Selenium', icon: SiSelenium },
    { name: 'Postman', icon: SiPostman },
  ];
  

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 px-6 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex justify-center flex-wrap gap-10 mt-8">
        {skills.map(({ name, icon: Icon }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md">
              <Icon className="text-4xl text-blue-500" />
            </div>
            <p className="text-white text-sm font-medium mt-2">{name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
