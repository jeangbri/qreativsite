'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Juliana Silva',
    role: 'Empreendedora Digital',
    avatar: 'JS',
    content: 'Meu Instagram finalmente decolou! Em 30 dias já tinha mais seguidores do que em 1 ano tentando sozinha. O criativo que fez para minha campanha viralizou e gerou mais de R$ 15mil em vendas.',
    rating: 5,
    metrics: '+340% alcance',
  },
  {
    name: 'Roberto Martins',
    role: 'Coach Empresarial',
    avatar: 'RM',
    content: 'Contratei várias agências antes. Aqui foi diferente. Ele não só criou o conteúdo, mas me explicou a estratégia por trás. Meu ROI nas ads triplicou em 2 meses.',
    rating: 5,
    metrics: '3x ROAS',
  },
  {
    name: 'Carla Souza',
    role: 'Nutricionista',
    avatar: 'CS',
    content: 'Nunca tinha gravado stories. Agora tenho uma rotina de conteúdo estabelecida e minha agenda só cresce. O bio otimizado fez toda a diferença na conversão.',
    rating: 5,
    metrics: '+50 clientes/mês',
  },
  {
    name: 'Marcos Paulo',
    role: 'Infoprodutor',
    avatar: 'MP',
    content: 'Precisei de urgência e a entrega foi rápida. Num final de semana recebi todos os criativos. Qualidade incrível e exatamente o que eu precisava para meu lançamento.',
    rating: 5,
    metrics: '48h entrega',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="py-12 md:py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-[120px]"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm mb-8"
          >
            <motion.span 
              className="w-2 h-2 bg-highlight rounded-full" 
              animate={{ scale: [1, 1.5, 1], boxShadow: ['0 0 0 rgba(208,254,3,0)', '0 0 10px rgba(208,254,3,0.8)', '0 0 0 rgba(208,254,3,0)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-highlight text-xs font-semibold uppercase tracking-[0.2em]">
              Prova Social
            </span>
          </motion.div>
          
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
            O que quem{' '}
            <span className="text-highlight">já contratou</span>
            <br />
            diz sobre nós
          </h3>
          
          <p className="text-gray-light/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Não precisa acreditar em mim. Acredite em quem já viu resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.6 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-highlight/30 transition-all duration-500 hover:bg-white/[0.04]"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="absolute top-6 left-8 text-6xl text-highlight/10 font-serif leading-none">"</div>
              
              <div className="flex items-start justify-between mb-6 relative">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-highlight to-highlight/60 flex items-center justify-center text-black font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + idx * 0.15 }}
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-light/60 text-sm leading-relaxed">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-highlight text-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + idx * 0.15 + i * 0.1 }}
                    >★</motion.span>
                  ))}
                </div>
              </div>

              <p className="text-gray-light/80 text-base leading-relaxed mb-6 relative">
                {testimonial.content}
              </p>

              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-highlight" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-highlight font-bold text-lg">{testimonial.metrics}</div>
                  <div className="text-white/30 text-xs uppercase tracking-wider">Resultado</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-highlight via-[#c4e802] to-highlight"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
              <div className="absolute inset-0 bg-gradient-to-r from-highlight via-[#c4e802] to-highlight" />
            <div className="absolute inset-0 bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 text-black flex items-center gap-3 text-lg">
              Quero resultados iguais
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
