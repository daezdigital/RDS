import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number]

const sectionData: Record<string, { label: string; num: string }> = {
  nosotros: { label: 'LO PRIMERO QUE DEBES SABER', num: '01' },
  clientes: { label: 'LO SEGUNDO QUE DEBES SABER', num: '02' },
  identidad: { label: 'LO TERCERO QUE DEBES SABER', num: '03' },
}

const sectionIds = ['nosotros', 'clientes', 'identidad']

export default function SectionBadge() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const observers = useRef<IntersectionObserver[]>([])

  useEffect(() => {
    observers.current.forEach(o => o.disconnect())
    observers.current = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          } else {
            setActiveId(prev => (prev === id ? null : prev))
          }
        },
        { threshold: 0.15 }
      )
      obs.observe(el)
      observers.current.push(obs)
    })

    return () => observers.current.forEach(o => o.disconnect())
  }, [])

  const active = activeId ? sectionData[activeId] : null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={activeId}
            className="w-full bg-rojo flex items-center justify-between"
            style={{ padding: '10px 32px' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span
              className="font-inter font-medium uppercase text-white"
              style={{ fontSize: '11px', letterSpacing: '0.18em' }}
            >
              {active.label}
            </span>
            <span
              className="font-barlow font-extrabold text-white"
              style={{ fontSize: '20px', letterSpacing: '-0.01em' }}
            >
              {active.num}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
