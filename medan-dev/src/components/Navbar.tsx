'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Phone, MessageSquare, Send } from 'lucide-react';
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
  const portalRef = useRef<HTMLDivElement>(null);

  // Close portal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (portalRef.current && !portalRef.current.contains(event.target as Node)) {
        setShowContactOptions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const contactOptions = [
    { 
      name: 'Direct Call', 
      icon: <Phone size={20} />, 
      href: 'tel:+256758611414',
      description: 'Instant voice connection',
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    { 
      name: 'WhatsApp Me', 
      icon: <MessageSquare size={20} />, 
      href: 'https://wa.me/256758611414',
      description: 'Quick chat & support',
      color: 'bg-green-500/20 text-green-400 border-green-500/30'
    }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-2">
        <div className="max-w-7xl mx-auto glass rounded-2xl border-white/10 overflow-hidden relative">
          {/* Upper Layer: Contact Details & Socials */}
          <div className="flex justify-between items-center px-5 py-2 border-b border-white/10 text-[10px] md:text-xs font-bold tracking-wider text-gray-400">
            <div className="flex gap-4 md:gap-6">
              <a href="mailto:medancityug@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Mail size={12} className="text-accent" />
                <span className="hidden sm:inline">medancityug@gmail.com</span>
              </a>
              <button 
                onClick={() => setShowContactOptions(!showContactOptions)}
                className="flex items-center gap-1.5 hover:text-accent transition-colors outline-none"
              >
                <Phone size={12} className="text-accent" />
                <span>+256 758 611 414</span>
              </button>
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
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
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
        </AnimatePresence>
      </nav>

      {/* Floating Contact Portal - Moved outside of the overflow-hidden nav */}
      <AnimatePresence>
        {showContactOptions && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center md:justify-end pt-24 md:pt-32 md:pr-12 pointer-events-none">
            <motion.div
              ref={portalRef}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className="w-[90%] max-w-[340px] glass-card p-6 rounded-[2rem] border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.8)] pointer-events-auto backdrop-blur-3xl relative overflow-hidden group"
            >
              {/* Decorative accent glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 blur-[50px] rounded-full group-hover:bg-accent/30 transition-colors" />
              
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Contact Portal</h3>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Let's build together</p>
                </div>
                <button 
                  onClick={() => setShowContactOptions(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                {contactOptions.map((opt) => (
                  <a
                    key={opt.name}
                    href={opt.href}
                    target={opt.href.startsWith('http') ? '_blank' : undefined}
                    className="flex items-center gap-5 p-5 glass rounded-2xl border border-white/5 hover:border-accent/30 hover:bg-accent/5 transition-all group/opt"
                    onClick={() => setShowContactOptions(false)}
                  >
                    <div className={`p-4 rounded-xl border ${opt.color} group-hover/opt:scale-110 transition-transform`}>
                      {opt.icon}
                    </div>
                    <div>
                      <p className="font-black text-lg text-white group-hover/opt:text-accent transition-colors">{opt.name}</p>
                      <p className="text-xs text-gray-400 font-medium">{opt.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-xs text-gray-500 font-medium italic">Available for remote collaboration worldwide</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
