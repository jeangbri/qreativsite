'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="pt-0 pb-12 md:pb-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[150px]"
          animate={{ x: [-20, 20, -20], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12 lg:gap-20">
            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative"
            >
              <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] mx-auto rounded-3xl overflow-hidden border border-white/10 group">
                <Image
                  src="/perfil.jpg"
                  alt="Qreativ Design Studio"
                  fill
                  className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <div className="text-highlight text-sm font-bold tracking-widest uppercase mb-1">DESIGN ESTRATÉGICO</div>
                  <div className="text-white text-xl font-display font-bold">Qreativ Design</div>
                </div>
              </div>
              
              {/* Badge Flutuante */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-highlight text-black p-6 rounded-2xl shadow-2xl z-20 hidden lg:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-4xl font-black">+200</div>
                <div className="text-xs font-bold uppercase tracking-tight">Projetos Entregues</div>
              </motion.div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 border border-highlight/20 rounded-full mb-8 mx-auto"
              >
                <span className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
                <span className="text-highlight text-xs font-bold uppercase tracking-widest">A Agência</span>
              </motion.div>

              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-center font-black mb-8 leading-none tracking-tighter">
                TRANSFORMAMOS<br />
                <span className="text-highlight">VISIBILIDADE EM</span><br />
                LUCRO REAL.
              </h2>

              <div className="space-y-6 text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center">
                <p>
                  A Qreativ Design não é apenas sobre estética. É sobre <span className="text-white font-bold italic">comportamento humano</span> e <span className="text-white font-bold italic">conversão financeira</span>.
                </p>
                <p>
                  Entendemos que no digital, você tem apenas 3 segundos para capturar a atenção. Nosso trabalho é garantir que esses segundos resultem em um clique, um lead e uma venda.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
