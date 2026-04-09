'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const videos = [
  'https://docs.google.com/uc?export=download&id=1ZaX2dDenDJwzQ9IWouo5S3EO0v_rqavU',
  '/trabalhos/magico.mp4',
  '/trabalhos/magico2.mp4',
  '/trabalhos/pascoa.mp4',
  '/trabalhos/superman.mp4',
  '/trabalhos/Ruiva.mp4',
  '/trabalhos/Em casa.mp4',
  '/trabalhos/loir praia.mp4',
  '/trabalhos/na rua.mp4',
  '/trabalhos/no quarto.mp4',
  '/trabalhos/Sala de casa.mp4',
  '/trabalhos/Cafeteria.mp4',
]

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

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" className="pt-16 pb-0 md:pt-24 md:pb-0 relative bg-black overflow-hidden" ref={ref}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="text-center mb-24"
        >
          <h2 className="font-display text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase mb-6">
            DOMINAÇÃO <br/>
            <span className="text-highlight">VISUAL</span>
          </h2>
          <p className="text-gray-light/40 text-sm md:text-base uppercase tracking-[0.5em] font-bold">
            Posts que geram desejo. Anúncios que geram lucro.
          </p>
        </motion.div>

        {/* Infinite Parallax Streams */}
        <div className="relative h-[800px] md:h-[1000px] flex gap-8 md:gap-16 justify-center overflow-hidden mask-fade-vertical">
          
          {/* Column 1: Fast Downward Stream (Videos) */}
          <div className="flex-1 max-w-[450px]">
            <motion.div 
              className="flex flex-col gap-10"
              animate={{ y: [0, -1200] }}
              transition={{ 
                duration: 45,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...videos, ...videos].map((vid, idx) => (
                <div 
                  key={idx} 
                  className="relative group cursor-pointer aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/5 bg-white/5 shadow-2xl"
                  onClick={() => setSelectedVideo(vid)}
                >
                  <video src={vid} autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-highlight flex items-center justify-center shadow-[0_0_30px_rgba(208,254,3,0.3)]">
                       <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Minimalist Central Divider */}
          <div className="hidden md:flex flex-col items-center justify-center relative">
             <div className="w-px h-full bg-gradient-to-b from-transparent via-highlight/20 to-transparent" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-highlight shadow-[0_0_15px_#d0fe03]" />
          </div>

          {/* Column 2: Medium Upward Stream (Posts) */}
          <div className="flex-1 max-w-[450px]">
            <motion.div 
              className="flex flex-col gap-10"
              animate={{ y: [-1200, 0] }}
              transition={{ 
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...posts, ...posts].map((post, idx) => (
                <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden bg-black/50 shadow-2xl">
                  <Image src={post} alt="Work" fill className="object-contain group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Global Control Over the Streams */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center relative"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-highlight/20 blur-3xl rounded-full" />
            <motion.a 
              href="#cta" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-highlight rounded-xl font-black text-base uppercase overflow-hidden shadow-[0_20px_40px_rgba(208,254,3,0.1)] transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3 text-black">
                QUERO ESSA ESTRATÉGIA
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </div>
          <p className="text-white/20 text-[10px] font-black uppercase tracking-widest mt-8">Explore o fluxo. Sinta a escala.</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg aspect-[9/16] rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)} 
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white"
              >✕</button>
              <video src={selectedVideo} autoPlay controls playsInline className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .mask-fade-vertical {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  )
}
