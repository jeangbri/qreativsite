'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const posts = [
  '/posts/650919048_17860682568611766_3678501764544150578_n..jpg',
  '/posts/650965563_17860973745611766_3659243065798493942_n..jpg',
  '/posts/652685307_17860973970611766_5344659390220569886_n..jpg',
  '/posts/652768336_17861674674611766_799018299389686727_n..jpg',
  '/posts/652768430_17861674539611766_1258814495511718127_n..jpg',
  '/posts/652769495_17861674584611766_2741043352081082086_n..jpg',
  '/posts/652772655_17861349162611766_2544393745160962302_n..jpg',
  '/posts/652775998_17861350518611766_3171918151095602498_n..jpg',
  '/posts/653697088_17861499288611766_993877022476749707_n..jpg',
  '/posts/653959787_17861884821611766_4041223107288725546_n..jpg',
  '/posts/658701628_17863632648611766_5544231773633722736_n..jpg',
]

export default function LatestWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length)
  }

  return (
    <section id="latest-work" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-highlight/10 border border-highlight/30 rounded-full text-highlight text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
           Case de sucesso
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-none"
          >
            <span className="text-highlight">Antecipy</span>
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
              Desenvolvemos uma estratégia de <span className="text-highlight font-medium">content marketing</span> personalizada para a Antecipy, focada em construir uma conexão autêntica com o público-alvo.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              O resultado? Campanhas que convertem, engajamento genuíno e resultados mensuráveis que superaram as expectativas do cliente.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-highlight/10 blur-3xl rounded-full" />
          
          <div className="relative flex items-center justify-center">
            <button 
              onClick={goToPrev}
              className="absolute left-0 md:left-4 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-black/70 hover:border-highlight/50 hover:scale-110 transition-all group"
              aria-label="Post anterior"
            >
              <svg className="w-5 h-5 text-white/70 group-hover:text-highlight transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
              <div className="relative aspect-[4/5]">
                {posts.map((post, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
                    animate={{ 
                      opacity: idx === currentIndex ? 1 : 0,
                      rotate: idx === currentIndex ? 0 : 2,
                      scale: idx === currentIndex ? 1 : 0.9,
                      x: idx === currentIndex ? 0 : idx < currentIndex ? -20 : 20,
                      display: idx === currentIndex ? 'block' : 'none'
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl shadow-highlight/20 bg-black/50"
                  >
                    <Image
                      src={post}
                      alt={`Post da Qreativ ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-white/80 text-xs font-semibold px-3 py-1 bg-black/40 backdrop-blur-md rounded-full">
                        {idx + 1} / {posts.length}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <button 
              onClick={goToNext}
              className="absolute right-0 md:right-4 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center hover:bg-black/70 hover:border-highlight/50 hover:scale-110 transition-all group"
              aria-label="Próximo post"
            >
              <svg className="w-5 h-5 text-white/70 group-hover:text-highlight transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {posts.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-highlight' : 'w-4 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>16 posts</span>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>Alto engajamento</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}