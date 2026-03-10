'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Sparkles, Layers } from 'lucide-react';

const projects = [
  {
    title: "Full-Stack Task Manager",
    description: "A complete task tracker with JWT authentication, CRUD operations, and real-time updates using Next.js, Node.js, and MongoDB.",
    tags: ["Next.js", "MongoDB", "Node.js", "JWT"],
    icon: <Layers className="text-accent" />,
    link: "#",
    github: "#"
  },
  {
    title: "AI-Powered Chatbot",
    description: "An intelligent chatbot embedded into a web platform using Python and NLP APIs, featuring context retention and fallback mechanisms.",
    tags: ["Python", "NLP", "OpenAI", "Dialogflow"],
    icon: <Sparkles className="text-accent" />,
    link: "#",
    github: "#"
  },
  {
    title: "Current Portfolio 3D",
    description: "The very portfolio you are browsing! Built with Next.js and Three.js for a cinematic developer experience.",
    tags: ["Three.js", "R3F", "Next.js", "Framer Motion"],
    icon: <Terminal className="text-accent" />,
    link: "#",
    github: "https://github.com/in/Mctech-hub-Systems"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-400 max-w-xl">A selection of my recent works, ranging from full-stack applications to AI-driven experiments.</p>
          </div>
          <a href="#" className="flex items-center gap-2 text-accent hover:underline font-medium">
            View All Projects <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 flex flex-col group h-full"
            >
              <div className="mb-6 h-12 w-12 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 glass rounded-full text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} className="p-3 glass rounded-xl hover:text-accent transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.link} className="flex-1 flex items-center justify-center glass rounded-xl hover:bg-white/10 transition-colors font-bold text-sm">
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
