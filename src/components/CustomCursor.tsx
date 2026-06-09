import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [cursorText, setCursorText] = useState('')
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Suavizado premium con springs
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, .client-item, .service-card')
      
      if (interactive) {
          setIsHovered(true)
          const text = interactive.getAttribute('data-cursor-text')
          setCursorText(text || '')
      } else {
          setIsHovered(false)
          setCursorText('')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (isTouch) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: isHovered ? (cursorText ? 100 : 80) : 20,
        height: isHovered ? (cursorText ? 100 : 80) : 20,
        backgroundColor: '#FFFFFF', // Blanco en mix-blend-difference se verá como el negativo (Rojo en fondo blanco, etc)
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] font-inter font-bold uppercase tracking-tighter text-black"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  )
}
