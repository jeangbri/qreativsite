import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Marquee from '@/components/Marquee'
import WhyChooseUs from '@/components/WhyChooseUs'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[9998] opacity-[0.02]" />

      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <WhyChooseUs />
      <Portfolio />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}