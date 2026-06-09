import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Espera a que el DOM cargue, luego dispara la salida
    const timer = setTimeout(() => {
      setVisible(false)
    }, 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-negro"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* RDS centrado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center select-none"
          >
            <span
              className="font-posterman text-rojo leading-none shadow-hard"
              style={{ fontSize: 'clamp(100px, 18vw, 240px)' }}
            >
              RDS
            </span>
            <span
              className="font-posterman uppercase tracking-[0.5em] text-white/30 mt-4"
              style={{ fontSize: '14px' }}
            >
              VZLA
            </span>
          </motion.div>

          {/* Barra de progreso */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-rojo"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
