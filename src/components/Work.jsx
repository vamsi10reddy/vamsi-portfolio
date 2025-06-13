// src/components/Work.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  const experiences = [
    {
      role: 'Graduate Assistant',
      company: 'Texas Tech University',
      period: 'Aug 2023 – May 2025',
      description: (
        <ul className="list-disc list-outside pl-5 text-left space-y-2">
      <li>Design and execute detailed manual test cases based on academic project requirements, ensuring functionality and user experience standards.</li>
      <li>Maintain test documentation, reports, and traceability matrices to ensure quality control in student-led and research-driven projects.</li>        
      </ul>
      ),
      image: 'ttu.png',
    },
    {
      role: 'Software Development Engineer in Test',
      company: 'Accenture',
      period: 'Jul 2021 – July 2023',
      description: (
        <ul className="list-disc list-outside pl-5 text-left space-y-2">
          <li>Migrated manual QA workflows into CI/CD-integrated automation pipelines to improve deployment speed, reliability, and system quality for Google product teams.</li>
          <li>Automated test flows using Mobly and Copycat, reducing test execution time by 70% and minimizing manual errors.</li>
          <li>Built UI automation for Android phones, Wear OS watches, and TVs using Mobly and UIAutomator.</li>
          <li>Created reusable test flows using UICD (UI Test Creator) for Android and wearable platforms, improving regression testing efficiency.</li>
          <li>Executed automated UI test suites on remote and virtual Android devices within nightly CI pipelines to catch UI regressions early.</li>
          <li>Developed Bash and Python scripts to simulate device behavior, trigger nightly Jenkins builds, and generate dashboards for Google Wearables and Assistant devices.</li>
          <li>Used Piper for version control and Critique/CitC for code reviews in multiple test environments.</li>
          <li>Containerized legacy desktop test environments using Docker to improve consistency and repeatability.</li>
          <li>Built self-healing automation scripts using Healenium to manage dynamic UI changes and reduce maintenance by 40%.</li>
          <li>Designed Jenkins-integrated CI/CD workflows to support test execution and deployment validation across various devices.</li>
          <li>Set up cloud-hosted Android virtual devices to simulate real-world scenarios for deployment validation.</li>
          <li>Monitored test health and regression trends using internal dashboards and CI artifacts, and supported debugging via logs and screenshots.</li>
          <li>Worked in Agile sprint cycles, providing feedback to developers and infrastructure teams to resolve deployment issues.</li>
          <li>Migrated over 80 daily test cases from manual to automated, increasing test coverage, reliability, and release speed.</li>
          <li>Logged defects, performed root cause analysis, and collaborated with developers to resolve issues across test cycles.</li>
        </ul>
      ),
      image: 'accenture.png',
    }
    
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
