'use client';

import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-2">
      <div className="max-w-7xl mx-auto glass rounded-2xl border-white/10 overflow-hidden">
        {/* Upper Layer: Contact Details & Socials */}
        <div className="flex justify-between items-center px-5 py-2 border-b border-white/10 text-[10px] md:text-xs font-bold tracking-wider text-gray-400">
          <div className="flex gap-4 md:gap-6">
            <a href="mailto:medancityug@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail size={12} className="text-accent" />
              <span className="hidden sm:inline">medancityug@gmail.com</span>
            </a>
            <a href="tel:+256758611414" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone size={12} className="text-accent" />
              <span>+256 758 611 414</span>
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <a href="https://github.com/medan-dev" target="_blank" className="hover:text-accent transition-colors">
              <Github size={14} />
            </a>
            <a href="https://linkedin.com/in/Mctech-hub-Systems" target="_blank" className="hover:text-accent transition-colors">
              <Linkedin size={14} />
            </a>
          </div>
        </div>

        {/* Lower Layer: Logo & Navigation */}
        <div className="flex justify-between items-center px-5 py-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-black tracking-tighter"
          >
            MEDAN<span className="text-accent">.DEV</span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-8 w-px bg-white/10 mx-2" />
            <a href="#contact" className="px-5 py-2 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold text-accent hover:bg-accent hover:text-black transition-all">
              Work Together
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 mx-auto max-w-7xl glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-400 hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
