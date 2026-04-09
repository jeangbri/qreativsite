'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function AnimatedBackground() {
  const particles = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 2000,
      y: Math.random() * 2000,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    })), 
  [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(208,254,3,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(208,254,3,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] will-change-transform"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full bg-highlight rounded-full blur-[120px]" />
      </motion.div>

      <motion.div
        className="absolute -top-40 -right-40 w-[400px] h-[400px] will-change-transform"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full bg-highlight rounded-full blur-[100px] opacity-20" />
      </motion.div>

      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] will-change-transform"
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full bg-highlight rounded-full blur-[100px] opacity-15" />
      </motion.div>

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-highlight/30 rounded-full"
          initial={{ x: p.x, y: p.y }}
          animate={{
            y: [null, -200],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}