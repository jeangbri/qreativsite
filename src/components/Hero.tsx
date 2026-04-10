'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

function TypedText({ phrases, delay = 0 }: { phrases: string[]; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => setStartTyping(true), delay)
    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!startTyping) return

    const currentPhrase = phrases[currentIndex]
    
    if (!isDeleting) {
      if (displayedText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 2500)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % phrases.length)
      }
    }
  }, [displayedText, currentIndex, isDeleting, startTyping, phrases])

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background System */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-b from-highlight/10 via-transparent to-transparent opacity-20" />
        
        {/* Animated Moving Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(208,254,3,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(208,254,3,1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{
            opacity: 0.05,
            y: [0, -80],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Cinematic Lighting */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-highlight/5 rounded-full blur-[60px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-highlight/5 rounded-full blur-[60px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-0 items-center min-h-[100dvh] pt-24 pb-12">
          
          {/* Top (Mobile) / Right (Desktop) - Visual Impact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center order-1 lg:order-2 w-full"
          >
            {/* Dynamic Background Effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-[150%] aspect-square bg-[radial-gradient(circle,rgba(208,254,3,0.15)_0%,transparent_70%)] blur-[60px]"
              />
            </div>

            <motion.div 
              className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[550px] transition-all duration-500"
            >
              <div className="absolute -inset-4 bg-highlight/10 blur-3xl rounded-full opacity-20" />
              <div className="relative">
                <div className="lg:hidden">
                  <Image src="/mobile.png" alt="Mobile View" width={600} height={800} priority className="w-full h-auto" />
                </div>
                <div className="hidden lg:block">
                  <Image src="/desktop.png" alt="Desktop View" width={1000} height={750} priority className="w-full h-auto" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom (Mobile) / Left (Desktop) - Narrative */}
          <div className="text-center lg:text-left order-2 lg:order-1 relative w-full">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[2.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter uppercase"
            >
              <span className="block text-white/90">
                Seu negócio merece
              </span>
              <span className="relative inline-grid mt-2">
                <span className="invisible row-start-1 col-start-1 text-highlight pointer-events-none uppercase">
                  Visibilidade
                </span>
                <span className="relative z-10 text-highlight row-start-1 col-start-1 uppercase">
                  <TypedText phrases={['Estratégia', 'Visibilidade', 'Autoridade']} delay={1000} />
                </span>
                <motion.span
                  className="absolute bottom-1 left-0 h-[20%] bg-highlight/20 -z-0"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-light/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Você tem o produto. A Qreativ cria o que faz ele <span className="text-white font-black italic">vender de verdade</span>. No digital, você tem 3 segundos. <span className="text-white font-bold">Nós dominamos cada um deles.</span>
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-black text-base overflow-hidden shadow-[0_20px_40px_rgba(208,254,3,0.1)]"
              >
                <div className="absolute inset-0 bg-highlight" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-3 text-black">
                  VAMOS ESCALAR
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                href="#portfolio"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="px-8 py-4 border-2 border-white/10 text-white font-bold text-base rounded-xl backdrop-blur-xl transition-all hover:border-highlight/40"
              >
                PORTFÓLIO
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Scroll para explorar</span>
        <div className="w-px h-12 bg-gradient-to-b from-highlight to-transparent" />
      </motion.div>
    </section>
  )
}
