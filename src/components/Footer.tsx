'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'O Problema', href: '#problem' },
  ]

  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-highlight/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <a href="#" className="font-display text-2xl font-bold text-white group flex items-center gap-1">
              QREATIV
              <span className="text-highlight font-black italic">.</span>
              DESIGN
            </a>
            <p className="text-white/40 mt-6 leading-relaxed max-w-sm text-lg">
              Design estratégico para negócios que buscam autoridade e conversão. 
              Transformamos pixels em lucro real.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-highlight transition-all hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-sm">Social</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.instagram.com/qreativdesign" target="_blank" rel="noopener noreferrer" className="group text-white/40 hover:text-highlight transition-all flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-highlight/20 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  @qreativdesign
                </a>
              </li>
              <li>
                <a href="https://wa.me/5551993360727" target="_blank" rel="noopener noreferrer" className="group text-white/40 hover:text-highlight transition-all flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-highlight/20 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase">
          <span className="text-white/20">
            &copy; {currentYear} QREATIV DESIGN STUDIO
          </span>
          <span className="text-white/20 flex items-center gap-2">
            DESIGNED BY{' '}
            <span className="text-highlight">QREATIV.DESIGN</span>
          </span>
        </div>
      </div>
    </footer>
  )
}