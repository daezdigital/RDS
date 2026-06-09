import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import logo from '../assets/images/logo.png'

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=600&q=80',
    alt: 'Studio',
    style: { top: '20%', left: '15%', width: '300px', height: '200px', zIndex: 10 },
    parallaxFactor: 0.1,
  },
  {
    src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    alt: 'Social',
    style: { top: '10%', right: '15%', width: '250px', height: '350px', zIndex: 12 },
    parallaxFactor: 0.2,
  },
  {
    src: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=600&q=80',
    alt: 'Brand',
    style: { bottom: '15%', right: '10%', width: '320px', height: '220px', zIndex: 8 },
    parallaxFactor: 0.15,
  },
]


function HeroImage({ img, index }: { img: typeof heroImages[0]; index: number }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 800 * img.parallaxFactor])

  return (
    <motion.div
      className="absolute hidden md:block border-4 border-blanco overflow-hidden shadow-hard"
      style={{
        ...img.style,
        y,
      } as any}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
    </motion.div>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToWork = () => {
    document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full bg-negro overflow-hidden flex items-center justify-center"
      style={{ height: '100vh', minHeight: '700px' }}
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      {/* Background Geometric Logo (Huge) */}
      <motion.div 
        className="absolute z-0 opacity-10 select-none pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img src={logo} alt="" className="w-[120vw] h-auto max-w-none grayscale invert" />
      </motion.div>

      {/* Floating images with hard borders */}
      {heroImages.map((img, i) => (
        <HeroImage key={i} img={img} index={i} />
      ))}

      {/* Center Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-4 mb-4">
            <motion.img 
              src={logo} 
              alt="RDS Logo" 
              className="h-32 md:h-48 object-contain shadow-hard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            />
          </div>
          <div className="font-posterman text-rojo tracking-[0.2em] md:tracking-[0.4em] uppercase" style={{ fontSize: '14px' }}>
            Agencia Audiovisual
          </div>
        </div>

        <motion.h1 
          className="font-posterman text-blanco uppercase leading-[0.9] mb-12"
          style={{ fontSize: 'clamp(60px, 10vw, 140px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Si no estás en <span className="text-rojo">RDS</span><br />
          no estás en <span className="inline-block relative">
            nada
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-rojo clip-diagonal-right" />
          </span>
        </motion.h1>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-inter text-blanco/70 text-lg max-w-sm text-center md:text-left">
            Producimos contenido estratégico que conecta marcas con audiencias reales.
          </p>
          <button
            onClick={scrollToWork}
            className="bg-rojo text-blanco font-posterman uppercase tracking-widest px-10 py-5 shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            style={{ fontSize: '14px' }}
          >
            Ver Proyectos ↗
          </button>
        </motion.div>
      </div>

      {/* Decorative Geometric Cuts */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-rojo opacity-5 clip-arrow-right -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-rojo opacity-10 clip-diagonal-right -z-10 -translate-x-1/4 translate-y-1/4" />
    </section>
  )
}
