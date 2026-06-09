import { motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number]

const servicios = [
  {
    titulo: 'CONTENIDO PARA REDES',
    descripcion: 'Diseñamos y producimos piezas nativas para cada plataforma. Reels y formatos cortos que generan engagement real.',
    keywords: 'Reels · Stories · Campañas',
    numero: '01',
    bgColor: 'bg-negro',
    textColor: 'text-blanco',
  },
  {
    titulo: 'PRODUCCIÓN AUDIOVISUAL',
    descripcion: 'Desde la concept hasta la entrega final. Equipo técnico profesional y dirección creativa de alto nivel.',
    keywords: 'Dirección · Rodaje · Post',
    numero: '02',
    bgColor: 'bg-rojo',
    textColor: 'text-blanco',
  },
  {
    titulo: 'ESTRATEGIA DIGITAL',
    descripcion: 'Definimos el qué, cuándo y cómo publicar. Construimos calendarios editoriales e identidades visuales.',
    keywords: 'Branding · Calendarios · Análisis',
    numero: '03',
    bgColor: 'bg-blanco',
    textColor: 'text-negro',
    hasBorder: true,
  },
  {
    titulo: 'CAMPAÑAS DE MARCA',
    descripcion: 'De la idea a la ejecución. Creamos campañas integrales que maximizan el alcance de tu mensaje.',
    keywords: 'Concepto · Ejecución · Resultados',
    numero: '04',
    bgColor: 'bg-negro',
    textColor: 'text-rojo',
  },
]

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative bg-blanco overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span
          className="font-inter font-black uppercase text-center opacity-[0.03] tracking-tighter"
          style={{ fontSize: '20vw', lineHeight: 1 }}
        >
          QUÉ HACEMOS
        </span>
      </div>

      <div className="px-8 md:px-12 mb-20 relative z-10 flex items-center gap-4">
        <div className="w-12 h-[2px] bg-rojo" />
        <p className="font-posterman uppercase tracking-widest text-negro" style={{ fontSize: '14px' }}>
          Servicios
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 px-4 md:px-12 max-w-7xl mx-auto border-2 border-negro">
        {servicios.map((serv, i) => (
          <motion.div
            key={serv.titulo}
            className={`${serv.bgColor} ${serv.textColor} p-10 md:p-16 border-negro border-[1px] relative overflow-hidden group`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: EASE }}
          >
            <div className="relative z-10">
              <span className="font-inter font-black text-sm opacity-50 block mb-6">{serv.numero}</span>
              <h3
                className="font-posterman uppercase leading-none mb-8"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                {serv.titulo}
              </h3>
              <p className="font-inter mb-12 opacity-80 text-lg leading-relaxed max-w-md">
                {serv.descripcion}
              </p>
              <div className="font-posterman text-xs tracking-widest uppercase py-2 px-4 border border-current inline-block opacity-40">
                {serv.keywords}
              </div>
            </div>

            {/* Geometric Decoration */}
            <div className={`absolute top-0 right-0 w-24 h-24 ${serv.bgColor === 'bg-rojo' ? 'bg-negro' : 'bg-rojo'} opacity-10 clip-diagonal-right translate-x-1/2 -translate-y-1/2`} />
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
         <div className="w-16 h-[1px] bg-rojo mx-auto opacity-20 mb-8" />
      </div>
    </section>
  )
}

