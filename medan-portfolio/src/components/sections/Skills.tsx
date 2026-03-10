'use client';

import { motion } from 'framer-motion';
import { Database, Layout, ShieldCheck, Cpu, Terminal, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP"],
    icon: <Terminal className="text-accent" />
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Responsive Design"],
    icon: <Layout className="text-accent" />
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "RESTful APIs", "MySQL", "MongoDB"],
    icon: <Database className="text-accent" />
  },
  {
    title: "AI & Innovation",
    skills: ["AI/NLP Integration", "Dialogflow", "OpenAI APIs", "Chatbot Dev"],
    icon: <Cpu className="text-accent" />
  },
  {
    title: "Tools & UX",
    skills: ["Git/GitHub", "VS Code", "Agile", "Figma Prototyping"],
    icon: <ShieldCheck className="text-accent" />
  },
  {
    title: "Mobile Concepts",
    skills: ["Cross-platform Dev", "Mobile-First Design", "Performance Opt"],
    icon: <Smartphone className="text-accent" />
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Equipped with a diverse set of modern technologies to build intelligent and scalable digital products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-glass-border hover:border-accent/40 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 glass rounded-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 hover:bg-accent/10 hover:text-accent transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
