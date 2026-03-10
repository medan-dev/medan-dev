'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20">
        {/* Left Side: Text Content */}
        <div className="text-left order-2 lg:order-1">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tighter"
          >
            Hi, I am <br />
            <span className="text-gradient">Medan Dev</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 max-w-xl mb-12 leading-relaxed drop-shadow-md px-4 py-3 glass rounded-2xl md:p-0 md:bg-transparent md:backdrop-blur-none md:border-none relative z-30"
          >
            Crafting the future of software with artificial intelligence. Scalable solutions, intelligent interfaces, and cinematic digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-20 md:mb-0 relative z-30"
          >
            <a href="#projects" className="group px-8 py-4 md:py-5 bg-accent text-black font-black rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,106,0,0.4)]">
              Explore Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 md:py-5 glass-card rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={16} className="fill-white" />
              </div>
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Right Side: Visual Content (User Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative h-[300px] w-[240px] md:h-[600px] md:w-[480px]">
             {/* Glow Behind Image */}
             <div className="absolute inset-0 bg-accent/20 blur-[60px] md:blur-[100px] rounded-full animate-pulse" />
             
             {/* Main Image Container */}
             <div className="relative h-full w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
               <Image
                 src="/images/medan.jpg"
                 alt="Medan Dev"
                 fill
                 className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                 priority
               />
               
               {/* Overlay Info Card */}
               <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 glass p-4 md:p-6 rounded-2xl md:rounded-3xl translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 border border-white/20">
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Expertise</p>
                     <p className="font-bold text-sm md:text-lg">Software & AI Architect</p>
                   </div>
                   <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-accent flex items-center justify-center">
                      <Star size={20} className="text-black fill-black" />
                   </div>
                 </div>
               </div>
             </div>

             {/* Dynamic Shapes Over Image */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 md:-top-10 md:-right-10 h-16 w-16 md:h-24 md:w-24 glass rounded-2xl md:rounded-3xl border border-white/20 flex items-center justify-center z-30"
             >
                <div className="h-8 w-8 md:h-12 md:w-12 rounded-full border-4 border-accent animate-spin-slow rotate-45 border-t-transparent" />
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll to explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
