// src/components/Resume.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StarryBackground from './StarryBackground';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <StarryBackground>
      <Header forceHomeNav={true} />
      <section className="py-20 px-6 max-w-6xl mx-auto text-center min-h-screen">
        <h2 className="text-4xl font-extrabold mb-8 text-blue-400 border-b-4 border-blue-600 inline-block">Resume</h2>

        <div className="mb-10 flex justify-center">
          <a
            href="/assets/resume/vamsi_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <FaDownload className="text-xl" />
            <span className="text-lg font-semibold">Download Resume</span>
          </a>
        </div>

        <div className="flex justify-center">
          <iframe
            src="/assets/img/vamsi_resume.pdf"
            width="100%"
            height="800px"
            className="rounded-xl shadow-2xl border-4 border-blue-500"
            style={{ maxWidth: '900px' }}
            title="Resume PDF"
          ></iframe>
        </div>
      </section>
      <Footer />
    </StarryBackground>
  );
};

export default Resume;
