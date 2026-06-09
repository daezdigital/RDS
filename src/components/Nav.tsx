import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const links = [
  { label: 'Trabajo', href: '#clientes' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#footer' },
]

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number]

function RollingText({ text }: { text: string }) {
  const chars = text.split('')

  return (
    <span className="relative inline-flex overflow-hidden" style={{ lineHeight: 1 }}>
      <motion.span
        aria-hidden="true"
        className="flex"
        variants={{
          rest: { y: 0 },
          hover: { y: '-100%' },
        }}
        transition={{ duration: 0.38, ease: EASE }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            variants={{
              rest: { y: 0 },
              hover: { y: '-100%' },
            }}
            transition={{
              duration: 0.38,
              ease: EASE,
              delay: i * 0.015,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute inset-0 flex text-rojo"
        variants={{
          rest: { y: '100%' },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.38, ease: EASE }}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            variants={{
              rest: { y: '100%' },
              hover: { y: 0 },
            }}
            transition={{
              duration: 0.38,
              ease: EASE,
              delay: i * 0.015,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
      <span className="sr-only">{text}</span>
    </span>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const nosotros = document.getElementById('nosotros')
      if (nosotros) {
        const rect = nosotros.getBoundingClientRect()
        // Aparece cuando la sección "Nosotros" está cerca o ha pasado
        setIsVisible(rect.top < 300)
      } else {
        // Fallback si no hay sección nosotros aún
        setIsVisible(window.scrollY > 1200)
      }
      setScrolled(window.scrollY > 100)
    }
    onScroll() // Ejecutar al inicio
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className="fixed top-6 left-1/2 z-[100] w-fit"
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -20, x: "-50%" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div 
            className={cn(
              "flex items-center gap-6 px-6 py-3 rounded-full border transition-all duration-500",
              scrolled 
                ? "bg-blanco/80 backdrop-blur-md border-negro/10 shadow-lg" 
                : "bg-negro text-blanco border-blanco/10 shadow-2xl"
            )}
          >
            {/* Desktop Links - Minimalist version */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={cn(
                    "font-posterman uppercase cursor-pointer tracking-[0.2em]",
                    scrolled ? "text-negro" : "text-blanco"
                  )}
                  style={{ fontSize: '10px' }}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <RollingText text={link.label} />
                </motion.a>
              ))}
            </div>

            {/* Mobile Toggle & Status Dot */}
            <button
              className={cn(
                "flex items-center gap-3 relative z-[130] font-posterman uppercase tracking-widest",
                scrolled ? "text-negro" : "text-blanco"
              )}
              style={{ fontSize: '10px' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="hidden md:block">{isOpen ? 'Cerrar' : 'Menú'}</span>
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rojo opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rojo"></span>
              </div>
              {isOpen ? <X size={18} className="md:hidden" /> : <Menu size={18} className="md:hidden" />}
            </button>
          </div>

          {/* Mobile & Tablet Full Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20, x: "-50%" }}
                animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, scale: 0.95, y: 20, x: "-50%" }}
                transition={{ duration: 0.5, ease: EASE }}
                className="fixed top-24 left-1/2 w-[calc(100vw-3rem)] md:w-80 bg-negro p-8 flex flex-col gap-8 z-[110] shadow-2xl border border-blanco/10"
                style={{ borderRadius: '24px' }}
              >
                {/* Texture Layer */}
                <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none rounded-[24px]" />
                
                <div className="flex flex-col gap-4 items-center">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="font-posterman uppercase text-blanco text-3xl leading-none hover:text-rojo transition-colors text-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-4 border-t border-blanco/10 pt-6 text-center">
                   <p className="font-posterman text-rojo text-sm tracking-widest uppercase mb-1">RDS.VZLA</p>
                   <p className="font-inter text-blanco/40 text-[10px] uppercase tracking-wider leading-relaxed">
                     Agencia Audiovisual Estratégica
                   </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
