import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { AIAssistant } from './AIAssistant';
import { FloatingSocials } from './FloatingSocials';

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <AIAssistant />
      <FloatingSocials />
    </div>
  );
}
