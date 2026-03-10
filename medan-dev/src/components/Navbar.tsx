'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Phone, MessageSquare } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowContactOptions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const contactOptions = [
    { 
      name: 'Call Directly', 
      icon: <Phone size={16} />, 
      href: 'tel:+256758611414',
      description: 'Quick voice call'
    },
    { 
      name: 'WhatsApp Me', 
      icon: <MessageSquare size={16} />, 
      href: 'https://wa.me/256758611414',
      description: 'Instant messaging'
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-2">
      <div className="max-w-7xl mx-auto glass rounded-2xl border-white/10 overflow-hidden relative">
        {/* Upper Layer: Contact Details & Socials */}
        <div className="flex justify-between items-center px-5 py-2 border-b border-white/10 text-[10px] md:text-xs font-bold tracking-wider text-gray-400">
          <div className="flex gap-4 md:gap-6">
            <a href="mailto:medancityug@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail size={12} className="text-accent" />
              <span className="hidden sm:inline">medancityug@gmail.com</span>
            </a>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowContactOptions(!showContactOptions)}
                className="flex items-center gap-1.5 hover:text-accent transition-colors outline-none"
              >
                <Phone size={12} className="text-accent" />
                <span>+256 758 611 414</span>
              </button>

              <AnimatePresence>
                {showContactOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-48 glass rounded-xl border border-white/10 p-2 shadow-2xl z-50 overflow-hidden"
                  >
                    {contactOptions.map((opt) => (
                      <a
                        key={opt.name}
                        href={opt.href}
                        target={opt.href.startsWith('http') ? '_blank' : undefined}
                        className="flex items-center gap-3 p-3 hover:bg-accent/10 rounded-lg transition-all group"
                        onClick={() => setShowContactOptions(false)}
                      >
                        <div className="text-accent group-hover:scale-110 transition-transform">
                          {opt.icon}
                        </div>
                        <div>
                          <p className="text-[11px] font-black text-white">{opt.name}</p>
                          <p className="text-[9px] text-gray-400 font-medium">{opt.description}</p>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
            MEDAN<span className="text-accent">-DEV</span>
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
            <button 
              onClick={() => setShowContactOptions(!showContactOptions)}
              className="px-5 py-2 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold text-accent hover:bg-accent hover:text-black transition-all"
            >
              Work Together
            </button>
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
          <div className="h-px bg-white/10 my-2" />
          <div className="grid grid-cols-2 gap-3">
             {contactOptions.map(opt => (
                <a 
                  key={opt.name}
                  href={opt.href}
                  className="flex flex-col items-center gap-2 p-4 glass rounded-xl border-white/5 hover:border-accent/20"
                >
                  <div className="text-accent">{opt.icon}</div>
                  <span className="text-[10px] font-bold">{opt.name}</span>
                </a>
             ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
