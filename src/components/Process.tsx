'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Briefing',
    subtitle: 'Você conta o que precisa',
    description: 'Me conta o que você vende, qual seu público e qual o objetivo. Em 24h já startamos.',
    icon: '💬',
  },
  {
    number: '02',
    title: 'Criação',
    subtitle: 'Nós fazemos tudo',
    description: 'Posts, criativos para ads, vídeos editados, bio otimizada. Você não move um dedo.',
    icon: '🎨',
  },
  {
    number: '03',
    title: 'Entrega',
    subtitle: 'Tudo organizado',
    description: 'Recebe tudo pronto. É só publicar e vender.',
    icon: '📦',
  },
  {
    number: '04',
    title: 'Suporte',
    subtitle: 'Sempre conectado',
    description: 'Precisa de ajuste? Manda mensagem. Estamos aqui até você decolar.',
    icon: '🚀',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-12 md:py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-highlight/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-highlight/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
            <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Como funciona</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tighter">
            O que<br />
            <span className="text-highlight">nós fazemos</span>
          </h2>
          
          <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto">
            Você me diz o que precisa. Eu crio: posts, criativos para ads, vídeos editados, bio otimizada. Simples assim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-highlight/10 via-dark/50 to-dark rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-dark-50/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-highlight/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-5xl font-bold text-white/5 group-hover:text-highlight/20 transition-colors duration-500">
                    {step.number}
                  </span>
                  <span className="text-3xl">{step.icon}</span>
                </div>

                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <span className="text-highlight text-sm font-medium">
                    {step.subtitle}
                  </span>
                </div>

                <p className="text-gray text-sm leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-dark-50 border border-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <div className="text-center md:text-left">
              <div className="text-gray text-sm mb-1">Tempo de entrega</div>
              <div className="font-display text-3xl md:text-4xl font-bold text-white">
                <span className="text-highlight">7-10 dias</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10" />
            <div className="h-px md:h-16 w-px md:w-px bg-white/10" />
            <a
              href="#cta"
              className="group relative px-10 py-5 rounded-2xl font-bold overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-highlight via-[#c4e802] to-highlight" />
              <div className="absolute inset-0 bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-black">Quero começar agora</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}