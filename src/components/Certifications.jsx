// src/components/Certifications.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const allCertifications = [
  { provider: 'AWS', title: 'AWS Certified Cloud Practitioner Essentials', image: 'aws-cloud-pratitioner-essentials.png', link: 'https://aws.amazon.com/verification' },
  { provider: 'AWS', title: 'AWS Certified AI Practitioner', image: 'aws-ai-practitioner.png', link: 'https://aws.amazon.com/verification' },
  { provider: 'AWS', title: 'AWS Certified Solutions Architect', image: 'aws-solutions-architect.png', link: 'https://aws.amazon.com/verification' },
  { provider: 'Microsoft', title: 'Microsoft Certified: Azure Fundamentals', image: 'microsoft-certified-azure-fundamentals.png', link: 'https://learn.microsoft.com/api/credentials/share/en-us/BearalaBalaGeetaVamsiReddy-5696/E46552D6B01649C8?sharingId=BD617AE6BE62AD52' },
];

const itemsPerPage = 3;
const providers = [...new Set(allCertifications.map(cert => cert.provider))];

const Certifications = () => {
  const [selectedProvider, setSelectedProvider] = useState(providers[0]);
  const [page, setPage] = useState(0);

  const certifications = allCertifications.filter(cert => cert.provider === selectedProvider);
  const totalPages = Math.ceil(certifications.length / itemsPerPage);
  const currentCerts = certifications.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <motion.section
      id="certifications"
      className="py-16 px-6 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-white">
        My <span className="text-white">Credentials</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {providers.map((provider, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedProvider(provider);
              setPage(0);
            }}
            className={`px-4 py-2 rounded-full border ${selectedProvider === provider ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 border-gray-300 text-gray-700 dark:text-white'} hover:bg-blue-500 hover:text-white transition`}
          >
            {provider}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {currentCerts.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <img src={`/assets/img/${cert.image}`} alt={cert.title} className="w-full h-auto rounded-md" />
            <h3 className="mt-4 font-semibold text-lg text-gray-900 dark:text-white">{cert.title}</h3>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-1 inline-block">Verify Certificate</a>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>
        <span className="text-white">{page + 1} / {totalPages}</span>
        <button
          onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>
    </motion.section>
  );
};

export default Certifications;
