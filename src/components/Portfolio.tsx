'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const videos = [
  'https://www.youtube.com/embed/6g-8RZBaVNg?autoplay=1&mute=1&loop=1&playlist=6g-8RZBaVNg&controls=0&modestbranding=1&rel=0&iv_load_policy=3',
  'https://www.youtube.com/embed/16Hah97nxfs?autoplay=1&mute=1&loop=1&playlist=16Hah97nxfs&controls=0&modestbranding=1&rel=0&iv_load_policy=3',
  'https://www.youtube.com/embed/pXW_0QgR0QM?autoplay=1&mute=1&loop=1&playlist=pXW_0QgR0QM&controls=0&modestbranding=1&rel=0&iv_load_policy=3',
  'https://www.youtube.com/embed/3t4YGVApSeE?autoplay=1&mute=1&loop=1&playlist=3t4YGVApSeE&controls=0&modestbranding=1&rel=0&iv_load_policy=3',
  'https://www.youtube.com/embed/rsIsOjLJY2U?autoplay=1&mute=1&loop=1&playlist=rsIsOjLJY2U&controls=0&modestbranding=1&rel=0&iv_load_policy=3',
  'https://www.youtube.com/embed/dkNeMVstsh8?autoplay=1&mute=1&loop=1&playlist=dkNeMVstsh8&controls=0&modestbranding=1&rel=0&iv_load_policy=3',
  'https://www.youtube.com/embed/RIzq_rHqEII?autoplay=1&mute=1&loop=1&playlist=RIzq_rHqEII&controls=0&modestbranding=1&rel=0&iv_load_policy=3',
  'https://www.youtube.com/embed/eDNC6dlL0HQ?autoplay=1&mute=1&loop=1&playlist=eDNC6dlL0HQ&controls=0&modestbranding=1&rel=0&iv_load_policy=3',
  'https://www.youtube.com/embed/uuoMFLfjuI0?autoplay=1&mute=1&loop=1&playlist=uuoMFLfjuI0&controls=0&modestbranding=1&rel=0&iv_load_policy=3',
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
  const [activeShowroom, setActiveShowroom] = useState<'videos' | 'posts' | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getVideoId = (url: string) => {
    const match = url.match(/embed\/([^/?]+)/)
    return match ? match[1] : ''
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 relative bg-black overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/10 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="font-display text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase mb-2">
            NOSSO <span className="text-highlight">PORTFÓLIO</span>
          </h2>
          <p className="text-gray-light/40 text-sm md:text-base uppercase tracking-[0.5em] font-bold">
            SELECIONE UMA CATEGORIA PARA EXPLORAR
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          
          {/* Card Category: VIDEOS UGC */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative group aspect-[9/16] rounded-[2rem] overflow-hidden bg-black cursor-pointer border border-white/5"
            onClick={() => setActiveShowroom('videos')}
          >
            <img 
              src="https://i.imgur.com/oBIrtXy.png"
              alt="Videos UGC"
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Card Category: DESIGN ESTRATÉGICO */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative group aspect-[9/16] rounded-[2rem] overflow-hidden bg-black cursor-pointer border border-white/5"
            onClick={() => setActiveShowroom('posts')}
          >
            <Image 
              src="https://i.imgur.com/IGViXqI.png"
              alt="Design Estratégico"
              fill
              className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

        </div>
      </div>

      {/* SHOWROOM OVERLAY */}
      <AnimatePresence>
        {activeShowroom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black pointer-events-auto overflow-y-auto"
          >
            <div className="sticky top-0 z-50 p-6 md:p-10 flex justify-between items-center bg-black/50 backdrop-blur-xl">
               <h4 className="font-display text-2xl md:text-4xl font-black text-white uppercase italic">
                 {activeShowroom === 'videos' ? <>VÍDEOS <span className="text-highlight">UGC</span></> : <>DESIGN <span className="text-highlight">ESTRATÉGICO</span></>}
               </h4>
               <button 
                onClick={() => setActiveShowroom(null)}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
               >
                 <span className="text-white font-bold text-xs uppercase tracking-widest">FECHAR</span>
                 <span className="w-8 h-8 rounded-full bg-highlight flex items-center justify-center text-black group-hover:scale-110 transition-transform">✕</span>
               </button>
            </div>

            <div className="container mx-auto px-6 py-20">
              {activeShowroom === 'videos' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {videos.map((vid, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="relative group aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer"
                      onClick={() => setSelectedVideo(vid)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${getVideoId(vid)}/maxresdefault.jpg`}
                        alt="Project"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {posts.map((post, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 group"
                    >
                      <Image src={post} alt="Design Work" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-[340px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Máscara para esconder UI do YouTube */}
              <div className="absolute inset-0 z-10 pointer-events-none border-[6px] border-black rounded-[2.5rem]" />
              
              <div className="w-full h-full overflow-hidden relative">
                <iframe 
                  src={`${selectedVideo.replace('autoplay=1&mute=1', 'autoplay=1&mute=0')}&controls=1&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0&disablekb=1`} 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%]"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  loading="lazy"
                />
              </div>

              {/* Botão de Fechar Premium */}
              <button 
                onClick={() => setSelectedVideo(null)} 
                className="absolute top-6 right-6 z-30 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-highlight transition-all shadow-xl active:scale-90"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
