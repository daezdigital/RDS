import { useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

const ITEMS = [
  'PRODUCCIÓN',
  'REELS',
  'ESTRATEGIA',
  'CONTENIDO',
  'REDES SOCIALES',
  'MARCA',
  'AUDIOVISUAL',
  'CAMPAÑAS',
]

// Duplicamos para efecto infinito
const loopItems = [...ITEMS, ...ITEMS, ...ITEMS]

export default function Marquee() {
  return (
    <div
      className="w-full bg-rojo overflow-hidden py-8 select-none"
      style={{ borderTop: '2px solid #0D0D0D', borderBottom: '2px solid #0D0D0D' }}
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          duration: 22,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {loopItems.map((item, i) => (
          <span
            key={i}
            className="font-posterman uppercase text-negro inline-flex items-center"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)', letterSpacing: '0.08em' }}
          >
            {item}
            <span
              className="inline-block text-blanco mx-10"
              style={{ fontSize: '0.5em', lineHeight: 1 }}
            >
              ●
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
