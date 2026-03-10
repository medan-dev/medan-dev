'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center px-6 pt-48 md:pt-64 lg:pt-72 overflow-hidden">
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-20">
        {/* Left Side: Text Content */}
        <div className="text-left order-2 lg:order-1 lg:mt-12">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            Hi, I am <br />
            <span className="text-gradient">Medan Dev</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-100 max-w-xl mb-12 leading-relaxed drop-shadow-2xl px-10 py-6 glass rounded-[2rem] border-white/20 bg-black/60 backdrop-blur-2xl relative z-30"
          >
            Crafting the future of software with artificial intelligence. Scalable solutions, intelligent interfaces, and cinematic digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-20 md:mb-0 relative z-30"
          >
            <a href="#projects" className="group px-10 py-5 bg-accent text-black font-black rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_60px_rgba(255,106,0,0.6)]">
              Explore Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-10 py-5 glass-card rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all border-white/40">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={16} className="fill-white" />
              </div>
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Right Side: Visual Content (User Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative h-[380px] w-[340px] md:h-[700px] md:w-[600px] group">
             {/* Glow Behind Image */}
             <div className="absolute inset-0 bg-accent/40 blur-[100px] md:blur-[180px] rounded-full animate-pulse transition-opacity duration-1000 group-hover:opacity-100" />
             
             {/* Main Image Container with Vertical Hexagon Clip and Glow Border */}
             <div className="relative h-full w-full">
               <div 
                 className="absolute inset-0 bg-accent/30 group-hover:bg-accent/60 transition-all duration-500 shadow-[0_0_40px_rgba(255,106,0,0.3)]"
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
               >
                 <div 
                   className="absolute inset-[2px] overflow-hidden bg-black/40"
                   style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                 >
                   <Image
                     src="/images/medan.jpg"
                     alt="Medan Dev"
                     fill
                     className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                     priority
                   />
                   
                   {/* Grayscale overlay that fades on hover */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                 </div>
               </div>
               
               {/* Overlay Info Card (Centered below hexagon) */}
               <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 p-6 glass rounded-2xl border-white/20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 w-[240px] text-center z-40 backdrop-blur-3xl">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Expertise</p>
                  <p className="font-bold text-lg">Software & AI Architect</p>
               </div>
             </div>

             {/* Rotating Frame */}
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 z-0 p-4"
             >
                <div 
                  className="h-full w-full border border-dashed border-accent/20"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
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
