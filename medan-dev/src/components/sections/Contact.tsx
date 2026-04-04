'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Have a project in mind or just want to chat intelligence? Drop me a message and let's create something extraordinary.
            </p>

            <div className="space-y-8">
              <ContactMethod icon={<Mail className="text-accent" />} label="Email" value="medancityug@gmail.com" href="mailto:medancityug@gmail.com" />
              <ContactMethod icon={<Phone className="text-accent" />} label="Phone" value="+256 758 611 414" href="tel:+256758611414" />
              <ContactMethod icon={<MapPin className="text-accent" />} label="Location" value="Mengo, Kampala, Uganda" href="#" />
            </div>

            <div className="mt-16 flex gap-6">
               <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/Mctech-hub-Systems" />
               <SocialIcon icon={<Github />} href="https://github.com/medan-dev" />
               <SocialIcon icon={<Instagram />} href="https://instagram.com/medan_dev" />
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border border-glass-border shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" placeholder="Medan Dev" />
                <InputGroup label="Email Address" placeholder="hello@example.com" type="email" />
              </div>
              <InputGroup label="Subject" placeholder="Project Inquiry" />
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white/5 border border-glass-border rounded-2xl px-5 py-4 focus:border-accent focus:outline-none transition-colors text-white placeholder:text-gray-600"
                  placeholder="Tell me about your vision..."
                ></textarea>
              </div>
              <button className="w-full py-4 bg-accent text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-6 group">
      <div className="p-4 glass rounded-2xl group-hover:scale-110 transition-transform group-hover:bg-accent/10">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-lg font-bold group-hover:text-accent transition-colors">{value}</p>
      </div>
    </a>
  );
}

function InputGroup({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      <input 
        type={type} 
        className="w-full bg-white/5 border border-glass-border rounded-2xl px-5 py-4 focus:border-accent focus:outline-none transition-colors text-white placeholder:text-gray-600"
        placeholder={placeholder}
      />
    </div>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a href={href} target="_blank" className="p-4 glass rounded-2xl hover:text-accent hover:-translate-y-2 transition-all">
      {icon}
    </a>
  );
}
