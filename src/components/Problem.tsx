'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const negativeValues = [
  { label: '-R$ 250', position: 'top-left' },
  { label: '-R$ 1.200', position: 'top-right' },
  { label: '-87%', position: 'bottom-left' },
  { label: '0 VENDAS', position: 'bottom-right' },
  { label: '-3 anos', position: 'left' },
]

const positiveValues = [
  { label: '+R$ 5.000', position: 'top-left' },
  { label: '+340%', position: 'top-right' },
  { label: '+VENDAS', position: 'bottom-left' },
  { label: '14 DIAS', position: 'bottom-right' },
  { label: 'RESULTADOS', position: 'right' },
]

function FloatingValue({ label, position, negative }: { label: string; position: string; negative?: boolean }) {
  const positions: Record<string, string> = {
    'top-left': '-top-4 -left-4',
    'top-right': '-top-4 -right-4',
    'bottom-left': '-bottom-4 -left-4',
    'bottom-right': '-bottom-4 -right-4',
    'left': 'top-1/2 -left-8 -translate-y-1/2',
    'right': 'top-1/2 -right-8 -translate-y-1/2',
  }

  return (
    <motion.div
      className={`absolute ${positions[position]} px-3 py-1.5 bg-black/80 border rounded-lg text-[10px] font-black tracking-widest backdrop-blur-sm ${negative ? 'border-red-500/50 text-red-500' : 'border-highlight/50 text-highlight'}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        y: [0, -8, 0],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{ 
        duration: 2 + Math.random(), 
        repeat: Infinity, 
        ease: 'easeInOut',
        delay: Math.random() * 0.5,
      }}
    >
      {label}
    </motion.div>
  )
}

function ImageWithOverlay({ src, alt, negative }: { src: string; alt: string; negative?: boolean }) {
  return (
    <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
      {negative ? negativeValues.map((v, i) => (
        <FloatingValue key={i} label={v.label} position={v.position} negative />
      )) : positiveValues.map((v, i) => (
        <FloatingValue key={i} label={v.label} position={v.position} />
      ))}
      <div className={`w-full h-full rounded-2xl overflow-hidden border ${negative ? 'border-red-500/20' : 'border-highlight/40 shadow-[0_0_30px_rgba(208,254,3,0.1)]'}`}>
        <img src={src} alt={alt} className={`w-full h-full object-cover ${negative ? 'grayscale opacity-60' : ''}`} />
      </div>
    </div>
  )
}

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="problem" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-black" />
      
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-highlight/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tighter uppercase">
            O PROBLEMA NÃO É O SEU PRODUTO.
            <br />
            <span className="text-highlight">É O QUE VOCÊ APRESENTA.</span>
          </h2>

          <p className="text-gray-light/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Pare de ser apenas mais um no feed. Transforme sua marca em uma autoridade imparável que gera desejo imediato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 max-w-6xl mx-auto">
          {/* Side A: O Problema */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="relative mb-12">
              <ImageWithOverlay src="/elementos/VOC%C3%8A.png" alt="Sem Qreativ" negative />
              <div className="absolute inset-x-0 -bottom-6 flex justify-center">
                <div className="bg-black/80 backdrop-blur-md px-8 py-2 border border-red-500/30 rotate-[-2deg]">
                  <span className="text-red-500 font-black text-2xl uppercase tracking-tighter italic">SEM QREATIV</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-2 text-red-500 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[10px] font-black uppercase tracking-widest">Estagnação</span>
              </div>
              
              {[
                'Criativos genéricos que o público ignora',
                'Copy robótica e textos genéricos de IA',
                'Perfil bagunçado que gera desconfiança',
                'Presença digital lenta, instável ou amadora'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-red-500 font-bold">✕</span>
                  <p className="text-gray-light/40 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-red-500/40 text-[10px] font-black uppercase tracking-widest">
              Postando o que dá. Esperando cliente aparecer.
            </p>
          </motion.div>

          {/* Side B: A Solução */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="relative mb-12">
              <div className="absolute -inset-4 bg-highlight/10 rounded-full blur-[60px] opacity-50" />
              <ImageWithOverlay src="/elementos/concorrente.png" alt="Com Qreativ" />
              <div className="absolute inset-x-0 -bottom-6 flex justify-center">
                <div className="bg-highlight px-8 py-2 rotate-[2deg] shadow-[0_10px_30px_rgba(208,254,3,0.3)]">
                  <span className="text-black font-black text-2xl uppercase tracking-tighter italic">COM QREATIV</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-2 text-highlight mb-6">
                <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-highlight">Dominação</span>
              </div>

              {[
                'Criativos exclusivos para ads',
                'Copy humanizada, sem refugo de ChatGPT',
                'Perfil organizado, transformando seguidor em clientes',
                'Site completo e profissional'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-highlight font-bold">✓</span>
                  <p className="text-white text-sm font-medium">{item}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-highlight/60 text-[10px] font-black uppercase tracking-widest">
              Postando o que vende. Convertendo todos os dias.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
