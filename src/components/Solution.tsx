'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Solution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="solution" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-12 h-px bg-highlight"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ delay: 0.2 }}
            />
            <span className="text-highlight text-sm font-semibold uppercase tracking-[0.2em]">
              A Solução
            </span>
            <motion.div
              className="w-12 h-px bg-highlight"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ delay: 0.2 }}
            />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none tracking-tighter">
            Da mesma forma que seu concorrente.
            <br />
            <span className="text-highlight">Ou melhor.</span>
          </h2>

          <p className="text-gray-light/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Não precisamos de um produto melhor. Precisamos de uma estratégia de conteúdo tão boa quanto a dele.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              step: '01',
              title: 'Perfil',
              before: 'Sou @joaquimcosmeticos - perfumes e cosmetics',
              after: 'A única loja de perfumes em SP que você NÃO sai sem comprar | +1500 clientes atendidos',
              icon: '📱',
            },
            {
              step: '02',
              title: 'Feed',
              before: 'Post de "bom dia" + repost story cliente',
              after: 'Carrossel de benefícios + prova social + CTA direto',
              icon: '🎨',
            },
            {
              step: '03',
              title: 'Copy',
              before: 'Clique no link',
              after: 'Esse perfume é pra quem... + 3 motivos + Oferta exclusiva',
              icon: '✍️',
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="flex flex-col h-full"
            >
              <div className="flex-1 bg-gradient-to-b from-dark-50/90 to-black/90 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-green-500/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 opacity-0 hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-green-500/50 font-display text-4xl font-bold">{item.step}</span>
                  <span className="text-3xl">{item.icon}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-8">{item.title}</h3>

                <div className="space-y-4 flex-1">
                  <div className="bg-red-500/10 border-l-2 border-red-500/50 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Antes</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.before}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-highlight/20 flex items-center justify-center">
                      <span className="text-highlight text-sm">↓</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 border-l-2 border-green-500/50 p-4 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Depois</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed font-medium">{item.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-lg md:text-xl text-white font-medium mb-4">
            E o melhor: <span className="text-highlight">resultados em até 14 dias</span>
          </p>
          <p className="text-gray-light/60 max-w-lg mx-auto leading-relaxed">
            Sem guessing. Sem "acho que vai funcionar". Estratégia validada que transforma perfil em máquina de vender.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
