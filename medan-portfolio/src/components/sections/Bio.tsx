'use client';

import { motion } from 'framer-motion';
import { Quote, Sparkles, BrainCircuit, Target } from 'lucide-react';

export default function Bio() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] glass rounded-[2rem] md:rounded-[3rem] border border-white/10 flex items-center justify-center group overflow-hidden"
          >
            {/* Animated Background in Side Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-purple-500/5 group-hover:scale-110 transition-transform duration-[3s]" />
            
            <div className="relative z-10 text-center p-8 md:p-12">
               <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl md:rounded-3xl bg-accent/20 flex items-center justify-center mx-auto mb-6 md:mb-8 animate-pulse">
                  <BrainCircuit className="text-accent w-8 h-8 md:w-10 md:h-10" />
               </div>
               <h3 className="text-2xl md:text-3xl font-black mb-4">Mission Driven</h3>
               <p className="text-gray-300 text-base md:text-lg">
                 "Developing scalable digital solutions that bridge the gap between human logic and machine intelligence."
               </p>
               
               <div className="mt-8 md:mt-12 flex justify-center gap-4">
                  <div className="h-1.5 w-10 md:h-2 md:w-12 bg-accent rounded-full" />
                  <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-white/20 rounded-full" />
                  <div className="h-1.5 w-1.5 md:h-2 md:w-2 bg-white/20 rounded-full" />
               </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-6"
            >
              <Target size={18} />
              About Me
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight"
            >
              Passionate about <br />
              <span className="text-gradient">Automated Excellence</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              <p>
                As a Software Development student specializing in AI, I thrive at the intersection of clean code and intelligent algorithms. 
                My focus is on creating responsive, user-centric applications from mobile concepts to full-stack web platforms.
              </p>
              <p>
                I am dedicated to building scalable digital solutions using modern JavaScript ecosystems (Node, React, Next.js) and 
                Python-based AI tools, ensuring every project I touch is both robust and innovative.
              </p>
            </motion.div>

            {/* Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4"
            >
               <Badge text="Agile Methodology" />
               <Badge text="RESTful APIs" />
               <Badge text="UI/UX Prototyping" />
               <Badge text="NLP Integration" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="px-6 py-3 glass rounded-2xl border border-white/5 text-sm font-bold text-gray-300 hover:text-accent hover:border-accent/40 transition-all cursor-default">
      {text}
    </div>
  );
}
