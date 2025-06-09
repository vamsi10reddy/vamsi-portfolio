import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StarryBackground from './components/StarryBackground';
import Header from './components/Header';
import Footer from './components/Footer';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Resume from './components/Resume';

const Layout = ({ children }) => (
  <StarryBackground>
    <Header />
    {children}
    <Footer />
  </StarryBackground>
);

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Work />
    <Certifications />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
);

const ResumePage = () => (
  <Layout>
    <section className="py-16 px-6 max-w-6xl mx-auto text-center min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-white">Resume</h2>
      <div className="mb-6">
        <a
          href="/assets/resume/vamsi_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
      <div className="flex justify-center">
        <iframe
          src="/assets/resume/vamsi_resume.pdf"
          width="100%"
          height="800px"
          className="rounded-lg shadow-xl border-none"
          style={{ maxWidth: '900px' }}
          title="Resume PDF"
        ></iframe>
      </div>
    </section>
  </Layout>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
};

export default App;
