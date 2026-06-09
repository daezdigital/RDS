import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number]
const cycleWords = ['CONTENIDO', 'ESTRATEGIA', 'PRODUCCIÓN', 'RESULTADOS']

export default function Identidad() {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const cycleRef = useRef<HTMLDivElement>(null)
  const isCycleInView = useInView(cycleRef, { amount: 0.5, once: false })

  useEffect(() => {
    if (!isCycleInView) return
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex(prev => (prev + 1) % cycleWords.length)
        setVisible(true)
      }, 500)
    }, 2200)
    return () => clearInterval(interval)
  }, [isCycleInView])

  return (
    <section
      id="identidad"
      className="bg-white overflow-hidden"
      style={{ minHeight: '150vh', paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* SOMOS + MULTILENGUAJE — reveal por línea */}
      <div className="px-8 md:px-12 mb-32">
        {['SOMOS', 'MULTILENGUAJE'].map((line, i) => (
          <div key={line} className="overflow-hidden">
            <motion.span
              className="font-barlow font-extrabold uppercase text-negro block leading-none"
              style={{ fontSize: 'clamp(80px, 12vw, 160px)' }}
              initial={{ y: '110%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.18, duration: 0.9, ease: EASE }}
            >
              {line}
            </motion.span>
          </div>
        ))}
      </div>

      {/* Palabra cíclica */}
      <div
        ref={cycleRef}
        className="flex flex-col items-center justify-center px-8"
        style={{ minHeight: '60vh' }}
      >
        <div
          className="overflow-hidden"
          style={{ height: 'clamp(100px, 16vw, 220px)' }}
        >
          <motion.div
            key={cycleWords[wordIndex]}
            className="font-barlow font-extrabold uppercase text-negro text-center leading-none"
            style={{ fontSize: 'clamp(80px, 16vw, 200px)' }}
            initial={{ y: '100%', opacity: 0 }}
            animate={visible ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            {cycleWords[wordIndex]}
          </motion.div>
        </div>

        <motion.p
          className="font-inter text-negro text-center mt-10"
          style={{ fontSize: '18px', maxWidth: '520px', lineHeight: 1.7 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
        >
          Hablamos el idioma de cada red social. Entendemos los formatos, los algoritmos y la psicología detrás de cada plataforma. No adaptamos contenido, lo creamos desde cero para donde tiene que vivir.
        </motion.p>
      </div>
    </section>
  )
}
