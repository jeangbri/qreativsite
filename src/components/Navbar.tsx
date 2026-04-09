'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'O Problema', href: '#problem' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#about' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className={`mx-4 lg:mx-8 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-black/40 backdrop-blur-md border border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}>
          <div className="px-6 py-3 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="font-display text-xl sm:text-2xl font-black text-white group flex items-center gap-1 tracking-tighter">
              QREATIV
              <span className="text-highlight font-black italic">.</span>
              DESIGN
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-all relative group text-sm font-semibold uppercase tracking-widest"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
              <a
                href="#cta"
                className="px-6 py-2.5 bg-highlight text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(208,254,3,0.3)]"
              >
                COMEÇAR AGORA
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
              aria-label="Alternar menu"
            >
              <motion.span
                className="w-6 h-0.5 bg-white block"
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white block"
                animate={{ opacity: menuOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white block"
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Premium Blur Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />
            <div className="relative h-full flex flex-col p-8">
              <div className="flex justify-between items-center mb-16">
                <span className="font-display text-xl font-bold text-white">MENU</span>
                <button onClick={() => setMenuOpen(false)} className="text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col gap-8">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-display font-bold text-white hover:text-highlight transition-colors flex items-center justify-between group"
                  >
                    {link.name}
                    <span className="text-highlight opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href="#cta"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-5 bg-highlight text-black text-center font-black text-xl rounded-2xl shadow-2xl shadow-highlight/20"
                >
                  COMEÇAR PROJETO
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}