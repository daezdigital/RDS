import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '../lib/utils'

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number]

const nosotrosImages = [
  {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=500&q=80',
    alt: 'Producción audiovisual',
    style: { top: '-40px', left: '5%', width: '220px', height: '160px' },
    parallaxFactor: 0.1,
  },
  {
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&q=80',
    alt: 'Equipo de contenido',
    style: { top: '20px', left: '30%', width: '200px', height: '260px' },
    parallaxFactor: 0.18,
  },
  {
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80',
    alt: 'Estrategia digital',
    style: { top: '-20px', right: '25%', width: '180px', height: '240px' },
    parallaxFactor: 0.12,
  },
  {
    src: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=500&q=80',
    alt: 'Redes sociales',
    style: { top: '10px', right: '4%', width: '200px', height: '150px' },
    parallaxFactor: 0.22,
  },
]

function FloatingNosotrosImage({
  img,
  index,
  scrollYProgress,
}: {
  img: typeof nosotrosImages[0]
  index: number
  scrollYProgress: any
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -600 * img.parallaxFactor])
  return (
    <motion.div
      className="absolute hidden md:block border-2 border-negro shadow-hard overflow-hidden grayscale"
      style={{ ...img.style, y, zIndex: 5 } as any}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.9, ease: EASE }}
    >
      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
    </motion.div>
  )
}

const titleLines = [
  { text: 'CREAMOS CONTENIDO', ghost: false },
  { text: 'QUE TU AUDIENCIA', ghost: false },
  { text: 'NO PUEDE IGNORAR', ghost: true },
]

export default function Nosotros() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative bg-blanco overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] -right-20 w-96 h-96 bg-rojo opacity-5 clip-arrow-right rotate-45" />
         <div className="absolute bottom-[20%] -left-20 w-80 h-80 bg-negro opacity-5 clip-diagonal-right -rotate-12" />
      </div>

      <div className="relative" style={{ height: '120px' }}>
        {nosotrosImages.map((img, i) => (
          <FloatingNosotrosImage key={i} img={img} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      <div className="px-8 md:px-12 mt-16 md:mt-20 relative z-10">
        {titleLines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.span
              className={cn(
                "uppercase block leading-[0.85]",
                line.ghost ? "font-inter font-black italic tracking-tighter" : "font-posterman"
              )}
              style={{
                fontSize: line.ghost ? 'clamp(40px, 9vw, 130px)' : 'clamp(52px, 11vw, 160px)',
                color: line.ghost ? '#f21b42' : '#0D0D0D',
              }}
              initial={{ x: '-20%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 1, ease: EASE }}
            >
              {line.text}
            </motion.span>
          </div>
        ))}
      </div>

      <div className="flex justify-center px-4 md:px-12 mt-24 relative z-10">
        <motion.div
          className="bg-negro text-blanco w-full max-w-7xl p-12 md:p-24 shadow-hard clip-diagonal-right relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <div className="max-w-4xl">
            <h2 className="font-posterman text-rojo mb-12" style={{ fontSize: '14px', letterSpacing: '0.4em' }}>NOSOTROS</h2>
            <p className="font-posterman leading-[1] mb-12 uppercase" style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}>
              Somos RDS, una obsesión creativa por <span className="text-rojo">contenido</span> que impacta.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-blanco/10 pt-12">
              <p className="font-inter leading-relaxed opacity-70 text-lg">
                No seguimos tendencias, las anticipamos. Cada proyecto nace de un análisis profundo de tu marca y de lo que tu audiencia necesita ver.
              </p>
              <p className="font-inter leading-relaxed opacity-70 text-lg">
                Combinamos dirección creativa, producción profesional y estrategia digital para entregar resultados que se pueden medir y escalar.
              </p>
            </div>
          </div>
          {/* Arrow highlight */}
          <div className="absolute bottom-12 right-12 hidden md:block">
             <div className="w-24 h-1 bg-rojo mb-2" />
             <div className="w-16 h-1 bg-rojo" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="text-center mt-20 px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p className="font-inter text-negro mx-auto mb-12 text-xl max-w-xl italic">
          "Si no estás en RDS, no estás en nada."
        </p>
        <a
          href="#clientes"
          onClick={e => { e.preventDefault(); document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-block bg-rojo text-blanco font-posterman uppercase tracking-widest px-12 py-5 shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
          style={{ fontSize: '14px' }}
        >
          VER NUESTRO TRABAJO ↗
        </a>
      </motion.div>
    </section>
  )
}
