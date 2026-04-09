'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
  {
    title: 'LUCRO ACIMA DE LIKE',
    subtitle: 'FOCO TOTAL NO SEU CHECKOUT',
    description: 'Enquanto o mercado foca em métricas de vaidade, nós focamos no que realmente importa: seu faturamento. Design desenhado para converter atenção em lucro real.'
  },
  { 
    title: 'CRIATIVOS ANTI-ROBÔS', 
    subtitle: 'INTELIGÊNCIA HUMANA VS IA GENÉRICA',
    description: 'Em um mundo inundado por conteúdos de IA sem alma, criamos peças humanizadas que rompem o padrão de "copy-paste" e fazem sua marca se destacar da massa.'
  },
  {
    title: 'VELOCIDADE ESTRATÉGICA',
    subtitle: 'AGILIDADE COM QUALIDADE ELITE',
    description: 'O digital não espera. Entregamos criatividade de alta performance com a velocidade que o tráfego pago exige, sem abrir mão do acabamento de luxo.'
  }
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[#050505]" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-highlight/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-highlight/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-highlight/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none uppercase">
            <span className="text-highlight">O QUE NOS</span>
            <br />
            DIFERENCIA?
          </h2>
          
          <p className="text-gray-light/40 text-sm md:text-base uppercase tracking-[0.4em] font-bold">
            Métricas que importam, design que escala.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-0">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-highlight/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 md:py-16 border-b border-white/5 group-hover:border-highlight/20 transition-all duration-500">
                  <div className="w-20 text-center">
                    <span className="text-highlight font-black text-5xl md:text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-highlight font-black text-xs tracking-[0.3em] mb-4 uppercase opacity-60 group-hover:opacity-100">
                      {reason.subtitle}
                    </div>
                    <h3 className="text-white font-black text-3xl md:text-4xl lg:text-5xl tracking-tighter mb-6 uppercase group-hover:text-highlight transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-light/60 text-base md:text-lg leading-relaxed max-w-2xl group-hover:text-gray-light transition-colors">
                      {reason.description}
                    </p>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-highlight/50 group-hover:bg-highlight transition-all"
                  >
                    <svg className="w-6 h-6 text-white group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-2xl font-black text-lg overflow-hidden bg-highlight text-black transition-transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(208,254,3,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            VAMOS ESCALAR?
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
