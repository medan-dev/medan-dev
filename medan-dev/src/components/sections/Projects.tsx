'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Layout, MessageSquare, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Shemous Beverages & Exports",
    description: "A premium e-commerce platform for organic beverage exports, featuring high-end product photography and an editorial 'Sunnyside S-Curve' design system.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    icon: <Layout className="text-accent" />,
    image: "/projects/shemous.png",
    status: "Live",
    link: "https://shemous-beverages-exports.vercel.app/",
    github: "https://github.com/medan-dev/Shemousbeverages-exports"
  },
  {
    title: "Dental Management System",
    description: "A professional medical dashboard for patient registration, billing automation (10,000 UGX receipts), and clinical record management.",
    tags: ["React", "PostgreSQL", "Node.js", "Chart.js"],
    icon: <ShieldCheck className="text-accent" />,
    image: "/projects/dental.png",
    status: "Production",
    link: "https://dental-ms.mctechhub.co.ug",
    github: "https://github.com/medan-dev/Dental-Ms"
  },
  {
    title: "WhatsApp Inquiry Workflow",
    description: "An administrative dashboard for real-time customer support routing, status tracking, and automated inquiry management.",
    tags: ["React Portals", "Socket.io", "Express", "MongoDB"],
    icon: <MessageSquare className="text-accent" />,
    image: "/projects/whatsapp.png",
    status: "Live",
    link: "https://whatsapp-admin.mctechhub.co.ug",
    github: "https://github.com/medan-dev/whatsapp-inquiry-workflow"
  },
  {
    title: "StreetCart Africa",
    description: "A vibrant multi-vendor e-commerce web app for East African street food, featuring Rolex/Samosa listings and local payment integration.",
    tags: ["Next.js", "Prisma", "Pesapal", "Firebase"],
    icon: <Sparkles className="text-accent" />,
    image: "/projects/street_cart.png",
    status: "Live",
    link: "https://street-cart.vercel.app",
    github: "https://github.com/medan-dev/StreetCart"
  },
  {
    title: "EduHub Android Platform",
    description: "A comprehensive e-learning management system for students, featuring video lessons, course progress tracking, and quiz modules.",
    tags: ["Android", "Java/Kotlin", "Firebase", "Material Design"],
    icon: <Layout className="text-accent" />,
    image: "/projects/eduhub_admin.png",
    status: "Production",
    link: "https://eduhub-ug.vercel.app",
    github: "https://github.com/medan-dev/Eduhub-UG"
  },
  {
    title: "TikTok Recommendation Engine",
    description: "A futuristic data-processing engine visualizing machine learning algorithms, video stream analytics, and user engagement metrics.",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    icon: <ShieldCheck className="text-accent" />,
    image: "/projects/tikok_engine.png",
    status: "Live",
    link: "https://tiktok-engine-sigma.vercel.app",
    github: "https://github.com/medan-dev/tiktok-engine"
  },
  {
    title: "Safety Tools & Machinery",
    description: "A professional industrial e-commerce platform for safety gear and heavy machinery, featuring a robust catalog and product management system.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    icon: <ShieldCheck className="text-accent" />,
    image: "/projects/safety_tools.png",
    status: "Production",
    link: "https://safetytools.mctechhub.co.ug",
    github: "https://github.com/medan-dev/safety-tools"
  },
  {
    title: "Mt. Zion Admission Portal",
    description: "A premium academic dashboard for school admissions, featuring student application tracking, dynamic reporting, and high-fidelity UI.",
    tags: ["PHP", "MySQL", "Glassmorphism", "Chart.js"],
    icon: <Layout className="text-accent" />,
    image: "/projects/mt_zion_portal.png",
    status: "Live",
    link: "http://mt-zion-ss-mubende-admissions.online",
    github: "https://github.com/medan-dev/mtzion-admissions"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter">
              LIVE <span className="text-gradient">PROJECTS</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              A showcase of production-ready applications, enterprise systems, and high-performance digital solutions.
            </p>
          </motion.div>
          <motion.a 
            href="https://github.com/medan-dev" 
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-accent hover:text-white transition-colors font-bold group"
          >
            VIEW ALL REPOSITORIES 
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col group border border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(var(--accent-rgb),0.3)]"
            >
              {/* Project Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md text-accent text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Floating Icon */}
                <div className="absolute -bottom-6 left-8 h-12 w-12 glass rounded-2xl flex items-center justify-center shadow-2xl border border-white/10">
                  {project.icon}
                </div>
              </div>

              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.github} 
                    className="p-3.5 glass rounded-2xl hover:bg-white/10 hover:text-accent transition-all duration-300"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.link} 
                    className="flex-1 flex items-center justify-center gap-2 glass rounded-2xl hover:bg-white/10 transition-all duration-300 font-bold text-sm tracking-widest border border-white/5 hover:border-accent/20"
                  >
                    LIVE DEMO <Sparkles size={16} className="text-accent" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
