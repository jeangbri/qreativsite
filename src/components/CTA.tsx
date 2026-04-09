'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden bg-black" ref={ref}>
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(208,254,3,0.05)_0%,transparent_70%)]" />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-highlight/5 rounded-full blur-[160px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            
            {/* Image Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/elementos/baixo.png" 
                alt="Escala" 
                className="w-full max-w-[400px] h-auto"
              />
            </motion.div>

            {/* Content Segment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl w-full"
            >
              
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                PRONTO PARA <br />
                <span className="text-highlight">DOMINAR?</span>
              </h2>
              
              <p className="text-gray-light/60 text-lg md:text-xl mb-12 leading-relaxed mx-auto max-w-lg">
                Seu produto é foda. Agora vamos fazer ele parecer <span className="text-white font-bold italic">irresistível</span> para o público certo. 
                <br /><br />
                Clique abaixo e receba um diagnóstico estratégico em <span className="text-highlight font-bold">menos de 24h</span>.
              </p>

              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
                {[
                  { title: 'Resposta em minutos', desc: 'Consultoria direta via WhatsApp' },
                  { title: 'Análise Premium', desc: 'Olhamos seu perfil e estratégia atual' },
                  { title: 'Sem Contratos', desc: 'Foco total em performance e lucro' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-highlight/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm uppercase tracking-widest">{item.title}</h4>
                      <p className="text-white/30 text-xs mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Actions Segment */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-2xl mx-auto"
            >
              {/* Glass Card Container */}
              <div className="relative p-8 md:p-12 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-highlight/10 blur-[60px]" />
                
                <h3 className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-center">ESCOLHA O SEU CANAL DE ESCALA</h3>

                <div className="grid gap-6">
                  {/* WhatsApp Card */}
                  <motion.a
                    href="https://wa.me/5551993360727"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center justify-between p-6 bg-green-500 rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(34,197,94,0.2)] transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="flex items-center gap-5 relative z-10">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-black text-xl uppercase leading-none">WhatsApp</div>
                        <div className="text-white/70 text-xs mt-1 font-bold">Diagnóstico em minutos</div>
                      </div>
                    </div>
                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white relative z-10 group-hover:bg-white group-hover:text-green-500 transition-colors">
                      →
                    </span>
                  </motion.a>

                  {/* Instagram Card */}
                  <motion.a
                    href="https://www.instagram.com/qreativdesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center justify-between p-6 rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(225,48,108,0.15)] transition-all bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-5 relative z-10">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-black text-xl uppercase leading-none">Instagram</div>
                        <div className="text-white/70 text-xs mt-1 font-bold">Ver bastidores e estilo</div>
                      </div>
                    </div>
                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white relative z-10 group-hover:bg-white group-hover:text-[#dc2743] transition-colors">
                      →
                    </span>
                  </motion.a>
                </div>

                {/* Counter Badge */}
                <div className="mt-10 pt-8 border-t border-white/5 text-center">
                  <div className="text-[10px] font-bold text-highlight uppercase tracking-[0.3em] mb-2">Sempre Ativos</div>
                  <div className="inline-flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border border-black bg-gray-800" />
                      ))}
                    </div>
                    <span className="text-white/40 text-[10px] font-medium">Liderando +40 operações hoje</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l-2 border-b-2 border-highlight opacity-30 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-r-2 border-t-2 border-highlight opacity-30 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
