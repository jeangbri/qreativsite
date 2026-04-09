'use client'

import { motion } from 'framer-motion'

const items = [
  'Escale sua Operação',
  'Dominação Visual',
  'Criativos que Vendem',
  'Design de Alto Ticket',
  'Estratégia de Elite',
]

export default function Marquee() {
  return (
    <div className="py-12 border-y border-white/5 overflow-hidden relative group">
      {/* Gradientes nas bordas com Blur */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
            ease: 'linear',
          },
        }}
        className="flex whitespace-nowrap items-center"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <span
              className="font-display text-4xl md:text-6xl font-black text-transparent stroke-text tracking-tighter mx-12 transition-all duration-500 hover:text-highlight hover:scale-110 cursor-default"
              style={{ WebkitTextStroke: '1px rgba(208,254,3,0.3)' }}
            >
              {item.toUpperCase()}
            </span>
            <div className="w-4 h-4 rounded-full bg-highlight/20 blur-[2px] animate-pulse" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}