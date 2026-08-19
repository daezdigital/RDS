import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Desactivar en dispositivos táctiles/móviles
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    let targetX = -100
    let targetY = -100
    let ringX = -100
    let ringY = -100
    let isHovered = false
    let cursorText = ''
    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target?.closest?.('a, button, [role="button"], input, textarea, select, .cursor-pointer, .client-item, .service-card')
      
      if (interactive) {
        isHovered = true
        cursorText = interactive.getAttribute('data-cursor-text') || ''
      } else {
        isHovered = false
        cursorText = ''
      }
    }

    // Bucle ultra-fluido directo en rAF (Hardware Direct GPU Update)
    const loop = () => {
      // 1. Punto central: Seguimiento táctil 1:1 instantáneo (0ms latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
      }

      // 2. Aro perimetral: Interpolación fluida (Lerp 0.35)
      ringX += (targetX - ringX) * 0.35
      ringY += (targetY - ringY) * 0.35

      if (ringRef.current) {
        const scale = isHovered ? (cursorText ? 2.8 : 1.7) : 1
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`
        ringRef.current.style.borderColor = isHovered ? 'rgba(242, 27, 66, 0.95)' : 'rgba(242, 27, 66, 0.45)'
        ringRef.current.style.backgroundColor = isHovered ? 'rgba(242, 27, 66, 0.22)' : 'rgba(242, 27, 66, 0.08)'

        if (textRef.current) {
          textRef.current.textContent = cursorText
          textRef.current.style.opacity = cursorText ? '1' : '0'
        }
      }

      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Punto central ultra-instantáneo */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] w-2.5 h-2.5 bg-rojo rounded-full will-change-transform shadow-[0_0_8px_#f21b42]"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      />

      {/* Halo exterior super fluido */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998] flex items-center justify-center rounded-full border border-rojo/50 bg-rojo/10 backdrop-blur-[1px] w-8 h-8 will-change-transform transition-colors duration-150 ease-out"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      >
        <span
          ref={textRef}
          className="text-[7px] font-inter font-bold uppercase tracking-tighter text-blanco px-1 text-center leading-none transition-opacity duration-150 opacity-0 select-none pointer-events-none"
        />
      </div>
    </>
  )
}


