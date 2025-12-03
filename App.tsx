import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PageTransition from './components/animations/PageTransition';

const ProjectsPlaceholder = () => (
  <div className="flex items-center justify-center h-[50vh] text-slate-400">
    Projects page coming soon...
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error Routes accepts key in React but types might be strict */}
      <Routes location={location} key={location.pathname + i18n.language}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsPlaceholder /></PageTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;