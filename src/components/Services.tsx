'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const services = [
  {
    emoji: '🎯',
    title: 'Otimização de Perfil',
    description: 'Seu Instagram transformado em uma máquina de conversão.',
    features: ['Bio estratégica com CTA', 'Highlights organizados por jornada', '9 primeiros posts planejados', 'Guia de tom de voz'],
  },
  {
    emoji: '🎨',
    title: 'Criativos para Ads',
    description: 'Design que para o scroll. Criativos que convertem.',
    features: ['Hooks que prendem atenção', 'Corpo com gatilhos emocionais', 'Fechamentos persuasivos', 'Variações para testes A/B'],
  },
  {
    emoji: '✍️',
    title: 'Copywriting',
    description: 'Texto que vende. Estruturado para maximizar conversões.',
    features: ['Estrutura AIDA completa', 'CTAs estratégicos', 'Script para stories', 'Tom de voz definido'],
  },
]

const portfolio = [
  '/trabalhos/chef.mp4',
  '/trabalhos/magico.mp4',
  '/trabalhos/magico2.mp4',
  '/trabalhos/pascoa.mp4',
  '/trabalhos/pascoa2.mp4',
  '/trabalhos/superman.mp4',
  '/trabalhos/superman2.mp4',
  '/trabalhos/Em casa.mp4',
  '/trabalhos/na rua.mp4',
  '/trabalhos/no quarto.mp4',
  '/trabalhos/Ruiva.mp4',
  '/trabalhos/Sala de casa.mp4',
  '/trabalhos/loir praia.mp4',
  '/trabalhos/antecipy rua.mp4',
  '/trabalhos/Carioca.mp4',
  '/trabalhos/Cafeteria.mp4',
]

const posts = [
  '/posts/650965563_17860973745611766_3659243065798493942_n..jpg',
  '/posts/650919048_17860682568611766_3678501764544150578_n..jpg',
  '/posts/652685307_17860973970611766_5344659390220569886_n..jpg',
  '/posts/652772655_17861349162611766_2544393745160962302_n..jpg',
  '/posts/652775998_17861350518611766_3171918151095602498_n..jpg',
  '/posts/653697088_17861499288611766_993877022476749707_n..jpg',
  '/posts/652768430_17861674539611766_1258814495511718127_n..jpg',
  '/posts/652769495_17861674584611766_2741043352081082086_n..jpg',
  '/posts/652768336_17861674674611766_799018299389686727_n..jpg',
  '/posts/654488325_17861884740611766_4153197001643860453_n..jpg',
  '/posts/652772773_17861884764611766_3498379700267384930_n..jpg',
  '/posts/653959787_17861884821611766_4041223107288725546_n..jpg',
  '/posts/654012605_17861885061611766_6525714173058918573_n..jpg',
  '/posts/655252744_17862198558611766_3685586511930404231_n..jpg',
  '/posts/655242637_17862198717611766_8447186557141624552_n..jpg',
  '/posts/658701628_17863632648611766_5544231773633722736_n..jpg',
]

function PortfolioItem({ video, onClick }: { video: string; onClick?: () => void }) {
  return (
    <div 
      className="relative flex-shrink-0 w-[280px] sm:w-[320px] cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-dark-50 border border-white/[0.08] h-[480px] sm:h-[560px] group-hover:border-highlight/50 transition-colors">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 320
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0
    }
  }, [])

  useEffect(() => {
    if (!sliderRef.current || isPaused) return
    
    const slider = sliderRef.current
    const maxScroll = slider.scrollWidth - slider.clientWidth
    
    const autoScroll = setInterval(() => {
      if (slider) {
        if (slider.scrollLeft >= maxScroll) {
          slider.scrollLeft = 0
        } else {
          slider.scrollLeft += 1
        }
      }
    }, 30)

    return () => clearInterval(autoScroll)
  }, [isPaused])

  return (
    <>
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-xl w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <video
              src={selectedVideo}
              autoPlay
              controls
              playsInline
              className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}

      <section id="services" className="py-24 md:py-40 relative" ref={ref}>
        <div className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(208,254,3,1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-highlight/5 to-transparent rounded-3xl" />
            
            <div className="relative z-10 py-16 px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm mb-8">
                  <span className="text-highlight text-xs font-semibold uppercase tracking-[0.2em]">
                    Criativos de Alta Conversão
                  </span>
                </div>
                
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                  Resultados que{' '}
                  <span className="text-highlight">falam</span>
                </h3>
                
                <p className="text-gray-light/80 text-lg max-w-xl mx-auto leading-relaxed">
                  Design focado em retenção e conversão. Cada peça criada para gerar impacto real.
                </p>
              </div>

              <div className="mb-12 -mx-8 md:-mx-16">
                <div className="flex items-center justify-between mb-6 px-8 md:px-16">
                  <h4 className="text-white font-semibold text-lg">Criativos em destaque</h4>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => scroll('left')}
                      className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 hover:border-highlight/50 transition-all"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => scroll('right')}
                      className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 hover:border-highlight/50 transition-all"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div 
                  ref={sliderRef}
                  className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-8 md:px-16 pb-4"
                  style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {[...portfolio, ...portfolio, ...portfolio].map((video, idx) => (
                    <div 
                      key={idx} 
                      className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[340px] aspect-[9/16] flex-shrink-0 rounded-2xl overflow-hidden relative group cursor-pointer"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-sm font-medium">Ver mais</span>
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-highlight mb-1">3k+</div>
                  <div className="text-gray-light/60 text-sm leading-relaxed">Seguidores ganhos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-highlight mb-1">200+</div>
                  <div className="text-gray-light/60 text-sm leading-relaxed">Marcas atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-highlight mb-1">R$ 1M+</div>
                  <div className="text-gray-light/60 text-sm leading-relaxed">Em vendas geradas</div>
                </div>
              </div>

              <div className="text-center mb-8">
                <span className="text-white/30 text-sm">@antecipy</span>
                <span className="text-white/20 mx-3">•</span>
                <span className="text-white/40 text-sm">posts recentes</span>
              </div>

              <div className="relative max-w-6xl mx-auto overflow-hidden py-4">
                <div className="flex gap-3 sm:gap-4 md:gap-6 animate-carousel hover:[animation-play-state:paused]">
                  {[...posts, ...posts, ...posts, ...posts].map((post, idx) => (
                    <div 
                      key={idx} 
                      className="w-[140px] sm:w-[180px] md:w-[240px] lg:w-[300px] aspect-[4/5] flex-shrink-0 rounded-xl overflow-hidden relative group"
                    >
                      <img 
                        src={post} 
                        alt={`Post ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-20"
          >
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-highlight via-[#c4e802] to-highlight" />
              <div className="absolute inset-0 bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-black flex items-center gap-3">
                Quero começar agora
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}