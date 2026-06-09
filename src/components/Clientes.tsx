import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number]

const clients = [
  {
    name: 'Marca Uno',
    project: 'Campaña de lanzamiento en Instagram y TikTok para nueva línea de productos',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80',
  },
  {
    name: 'Marca Dos',
    project: 'Serie de reels mensuales para posicionamiento de marca en redes sociales',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&q=80',
  },
  {
    name: 'Marca Tres',
    project: 'Producción documental corporativa y campaña de employer branding digital',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80',
  },
  {
    name: 'Marca Cuatro',
    project: 'Estrategia de contenido anual con diseño de identidad visual para redes',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80',
  },
  {
    name: 'Marca Cinco',
    project: 'Spot publicitario y clips cortos para campaña de temporada en múltiples plataformas',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80',
  },
]

export default function Clientes() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInSection, setIsInSection] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springConfig = { stiffness: 120, damping: 22, mass: 0.6 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set(e.clientX - rect.left - 160)
    rawY.set(e.clientY - rect.top - 110)
  }, [rawX, rawY])

  return (
    <section
      id="clientes"
      ref={sectionRef}
      className="bg-blanco relative border-t-2 border-negro"
      style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInSection(true)}
      onMouseLeave={() => setIsInSection(false)}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Floating Cursor Image */}
      <motion.div
        className="hidden md:block absolute pointer-events-none z-30"
        style={{ x, y, top: 0, left: 0, width: '320px', height: '220px' }}
        animate={{ opacity: isInSection ? 1 : 0, scale: isInSection ? 1 : 0.9 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <div className="w-full h-full border-4 border-negro shadow-hard overflow-hidden bg-negro">
          <AnimatePresence mode="wait">
            <motion.img
              key={clients[activeIndex].image}
              src={clients[activeIndex].image}
              alt={clients[activeIndex].name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: EASE }}
            />
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="px-8 md:px-12 relative z-10">
        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ x: '-10%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="font-posterman text-negro leading-[0.85] uppercase"
            style={{ fontSize: 'clamp(44px, 10vw, 120px)' }}
          >
            Confianza <br />
            <span className="text-rojo italic">Referidos</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-20 border-l-4 border-rojo pl-8">
          <p className="font-inter text-negro text-xl leading-relaxed max-w-xl">
            No invertimos en publicidad. Cada cliente llega por recomendación directa de alguien que ya experimentó el impacto de <span className="font-bold">RDS</span>.
          </p>
          <p className="font-inter text-negro text-xl leading-relaxed max-w-xl">
            Trabajamos con pocas marcas para garantizar foco total. Somos el motor creativo que tu marca necesita para escalar.
          </p>
        </div>

        {/* Client List */}
        <div className="mt-32">
          <p className="font-posterman text-rojo uppercase tracking-[0.3em] mb-12 text-sm">
            PROYECTOS RECIENTES
          </p>

          <div className="border-y-2 border-negro">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                className="group relative cursor-pointer py-10 border-b border-negro/10 last:border-0 overflow-hidden"
                onHoverStart={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
              >
                <div className="flex items-center justify-between px-4 transition-transform duration-500 group-hover:translate-x-4">
                   <h3 className="font-posterman text-negro group-hover:text-rojo transition-colors uppercase leading-none" style={{ fontSize: 'clamp(32px, 6vw, 84px)' }}>
                     {client.name}
                   </h3>
                   <span className="hidden md:block font-inter font-black text-negro/20 text-4xl">0{i+1}</span>
                </div>
                
                {/* Hover Background fill */}
                <motion.div 
                  className="absolute inset-0 bg-rojo -z-10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
