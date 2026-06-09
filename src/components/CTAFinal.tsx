import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number]

export default function CTAFinal() {
  return (
    <section
      id="cta"
      className="bg-white flex flex-col items-center justify-center text-center"
      style={{ minHeight: '60vh', paddingTop: '120px', paddingBottom: '140px' }}
    >
      <motion.p
        className="font-inter text-negro mb-12 leading-relaxed"
        style={{ fontSize: '18px', maxWidth: '520px' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        ¿Tienes una marca con algo que decir? Nosotros encontramos la forma de decirlo en imágenes, video y estrategia. Que la gente no pueda ignorarte.
      </motion.p>

      <motion.a
        href="mailto:contacto@rds.com"
        className="font-inter font-medium uppercase text-white bg-negro px-12 py-5 cursor-pointer transition-colors duration-250 hover:bg-rojo"
        style={{ fontSize: '14px', letterSpacing: '0.12em' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        CREEMOS ALGO JUNTOS ↗
      </motion.a>
    </section>
  )
}
