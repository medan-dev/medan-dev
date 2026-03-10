'use client';

import Navbar from '@/components/Navbar';
import Scene from '@/components/canvas/Scene';
import Hero from '@/components/sections/Hero';
import Bio from '@/components/sections/Bio';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* 3D Background */}
      <Scene />

      {/* Navigation */}
      <Navbar />

      {/* Content Sections */}
      <div className="relative z-10 w-full">
        <Hero />
        <Bio />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-glass-border glass text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Medan Dev. Built with Next.js, Three.js & Passion.
          </p>
        </footer>
      </div>
    </main>
  );
}
