import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Eye, X, Check } from 'lucide-react'
import logoBlanco from '../assets/images/logo-blanco.png'

export default function UnderConstruction() {
  const [showPackages, setShowPackages] = useState(false)

  const socialLinks = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      label: 'Instagram',
      href: 'https://www.instagram.com/rds.vzla',
      text: '@rds.vzla'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      label: 'WhatsApp',
      href: 'https://wa.me/584122346643',
      text: '+58 412-2346643'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      label: 'Email',
      href: 'mailto:info@rdsvzla.com',
      text: 'info@rdsvzla.com'
    }
  ]

  // Configuración de animación para los orbes de luz (leaks cinematográficos)
  const leakTransition = (duration: number) => ({
    duration,
    repeat: Infinity,
    repeatType: 'mirror' as const,
    ease: 'easeInOut',
  })

  return (
    <div className="relative min-h-screen w-full bg-negro text-blanco overflow-hidden flex flex-col justify-between p-6 md:p-12 font-inter select-none">
      
      {/* ─── Background Layer: Video & Light Leaks ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        
        {/* Background Cinematic Video Loop with organic camera drift */}
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          animate={{
            scale: [1.02, 1.07, 1.02],
            rotate: [0, 0.5, -0.5, 0],
            x: [0, 10, -10, 0],
            y: [0, -5, 5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-screen"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-vintage-film-projector-light-leaks-34321-large.mp4" 
              type="video/mp4" 
            />
          </video>
        </motion.div>

        {/* Cinematic Light Leak 1: Red */}
        <motion.div
          className="absolute w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-rojo/25 blur-[100px] md:blur-[160px]"
          animate={{
            x: [-80, 150, -50, -80],
            y: [-50, 200, 50, -50],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={leakTransition(20)}
          style={{ top: '-10%', left: '-10%' }}
        />
        
        {/* Cinematic Light Leak 2: Orange (Warm Flare) */}
        <motion.div
          className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-orange-600/15 blur-[90px] md:blur-[150px]"
          animate={{
            x: [100, -150, 50, 100],
            y: [150, -100, 200, 150],
            scale: [1.1, 0.85, 1.2, 1.1],
          }}
          transition={leakTransition(18)}
          style={{ top: '40%', right: '10%' }}
        />

        {/* Cinematic Light Leak 3: Mint (Cool Contrast) */}
        <motion.div
          className="absolute w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-mint/15 blur-[90px] md:blur-[160px]"
          animate={{
            x: [50, -100, 120, 50],
            y: [-80, 150, -120, -80],
            scale: [0.9, 1.15, 0.8, 0.9],
          }}
          transition={leakTransition(24)}
          style={{ bottom: '-10%', left: '20%' }}
        />

        {/* Scanline pattern & general film noise */}
        <div className="absolute inset-0 bg-noise opacity-5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
      </div>

      {/* ─── Camera Viewfinder Frame ─── */}
      <div className="absolute inset-4 md:inset-8 border border-blanco/5 pointer-events-none z-10">
        {/* Corner Notches */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blanco/25" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blanco/25" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blanco/25" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blanco/25" />

        {/* Center Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-15">
          <div className="w-10 h-[1px] bg-blanco" />
          <div className="absolute w-[1px] h-10 bg-blanco" />
          <div className="absolute w-4 h-4 border border-blanco rounded-full" />
        </div>
      </div>

      {/* ─── Header: Brand Status & REC Indicator ─── */}
      <header className="relative w-full flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          {/* Custom SVG Video Camera Icon */}
          <svg className="text-rojo animate-pulse" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 8-6 4 6 4V8Z"/>
            <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
          </svg>
          <span className="font-posterman uppercase text-[10px] md:text-xs tracking-[0.3em] text-blanco/50">
            RDS.VZLA // PROD.
          </span>
        </div>
        
        {/* Pulsing REC Indicator */}
        <div className="flex items-center gap-3 bg-negro/40 backdrop-blur-md border border-blanco/10 px-4 py-1.5 rounded-full">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rojo opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rojo"></span>
          </span>
          <span className="font-mono text-[10px] md:text-xs tracking-wider text-rojo font-bold uppercase">
            REC 4K
          </span>
        </div>
      </header>

      {/* ─── Main Content: Logo & Under Construction Announcement ─── */}
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-4 z-20 max-w-4xl mx-auto mt-8 mb-4">
        {/* Animated Brand Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.2
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer mb-6 md:mb-10 relative group"
          data-cursor-text="RDS.VZLA"
        >
          {/* Logo glow effect on hover */}
          <div className="absolute -inset-4 bg-rojo/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={logoBlanco}
            alt="RDS Logo"
            className="h-16 md:h-24 object-contain relative z-10"
          />
        </motion.div>

        {/* Text Area */}
        <div className="flex flex-col items-center">
          {/* Section Badge tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-4 border border-rojo/30 bg-rojo/5 text-rojo font-posterman uppercase text-[9px] md:text-[11px] tracking-[0.4em] px-4 py-1.5"
          >
            Mantenimiento Activo // Post-Producción
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-posterman text-blanco uppercase leading-[0.9] tracking-tight mb-4 md:mb-6 overflow-hidden" style={{ fontSize: 'clamp(38px, 6vw, 84px)' }}>
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="inline-block"
            >
              Silencio en el <span className="text-rojo">Set</span>
            </motion.span>
          </h1>

          {/* Descriptive Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-inter text-blanco/60 text-base md:text-lg max-w-xl leading-relaxed font-light mb-6"
          >
            Estamos editando algo asombroso. Nuestra plataforma web está en plena postproducción para ofrecerte una experiencia audiovisual verdaderamente innovadora.
          </motion.p>

          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="font-posterman text-blanco/95 text-base md:text-xl uppercase tracking-[0.2em] leading-normal mb-8 md:mb-10 select-none"
          >
            Si no estás en <span className="bg-rojo text-negro px-2 py-0.5 font-bold">RDS</span> no estás en nada
          </motion.div>
        </div>

        {/* Interactive Progress Bar */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.2 }}
          className="w-full max-w-xs h-[2px] bg-blanco/10 relative rounded-full overflow-hidden mb-8"
        >
          <motion.div 
            className="absolute top-0 left-0 h-full bg-rojo"
            initial={{ width: '0%' }}
            animate={{ width: '85%' }}
            transition={{ delay: 1.2, duration: 2.5, ease: 'easeOut' }}
          />
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[9px] font-mono text-blanco/40 uppercase tracking-widest">
            <span>Renderizando sitio</span>
            <span>85%</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full justify-center"
        >
          <a 
            href="https://wa.me/584122346643" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-3 bg-blanco text-negro px-8 py-4 text-xs font-bold font-inter uppercase tracking-widest hover:bg-blanco/90 active:scale-[0.97] transition-all duration-200 rounded-none w-full sm:w-auto cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button 
            onClick={() => setShowPackages(true)} 
            className="flex items-center justify-center gap-3 bg-transparent border-2 border-blanco text-blanco px-8 py-4 text-xs font-bold font-inter uppercase tracking-widest hover:bg-blanco hover:text-negro active:scale-[0.97] transition-all duration-200 rounded-none w-full sm:w-auto cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            Servicios
          </button>
        </motion.div>
      </main>

      {/* ─── Footer: Contact, Social Info & Audio Widget ─── */}
      <footer className="relative w-full flex flex-col md:flex-row items-center justify-between gap-6 z-20 border-t border-blanco/5 pt-6 mt-8 md:mt-0">
        
        {/* Left: Audio Visualizer Widget + Daez Credit */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-blanco/[0.03] border border-blanco/5 rounded-lg px-4 py-2 text-[9px] font-mono text-blanco/40 tracking-wider">
            <div className="flex items-end gap-[2px] h-3 w-6">
              <motion.div className="w-[2px] bg-rojo" animate={{ height: [4, 12, 6, 10, 4] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.div className="w-[2px] bg-rojo" animate={{ height: [8, 4, 12, 6, 8] }} transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.div className="w-[2px] bg-blanco" animate={{ height: [6, 10, 4, 12, 6] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.div className="w-[2px] bg-blanco" animate={{ height: [10, 6, 8, 4, 10] }} transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }} />
            </div>
            <span>AUDIO SYNC // ACTIVO</span>
          </div>

          <span className="text-[10px] md:text-xs font-mono text-blanco/30 tracking-wider">
            Web por <a href="https://www.daezdigital.com/" target="_blank" rel="noopener noreferrer" className="hover:text-rojo transition-colors underline decoration-rojo/30 underline-offset-2">Daez</a>
          </span>
        </div>

        {/* Center: Copyright */}
        <div className="text-[10px] md:text-xs font-mono text-blanco/30 tracking-wider text-center">
          © {new Date().getFullYear()} RDS Agencia Audiovisual. TODOS LOS DERECHOS RESERVADOS.
        </div>

        {/* Social Networks Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blanco/50 hover:text-rojo transition-colors duration-300 font-posterman uppercase text-[9px] md:text-[11px] tracking-wider cursor-pointer"
              data-cursor-text={link.text}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </footer>

      {/* ─── Packages Modal (Branded Styling) ─── */}
      <AnimatePresence>
        {showPackages && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-50 bg-negro text-blanco flex flex-col p-6 md:p-12 overflow-y-auto min-h-screen font-inter"
          >
            {/* Modal Background Texture */}
            <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none" />
            
            <div className="max-w-6xl mx-auto w-full relative z-10">
              {/* Header */}
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-4">
                  <img src={logoBlanco} alt="RDS Logo" className="h-8 md:h-12 object-contain" />
                  <div className="h-8 md:h-12 w-[1px] bg-blanco/20"></div>
                  <h2 className="font-posterman text-3xl md:text-5xl uppercase tracking-widest leading-none pt-2">Nuestros <span className="text-rojo">Servicios</span></h2>
                </div>
                <button 
                  onClick={() => setShowPackages(false)} 
                  className="p-3 border border-blanco/30 text-blanco/60 hover:border-rojo hover:text-rojo hover:bg-rojo/10 active:scale-[0.93] transition-all duration-200 rounded-none cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Plans Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Plan 1 */}
                <div className="border border-blanco/20 p-8 flex flex-col bg-negro hover:border-blanco/50 hover:-translate-y-1 transition-all duration-300 group">
                  <h3 className="font-posterman text-xl uppercase tracking-[0.2em] mb-2 text-blanco group-hover:text-rojo transition-colors">Plan Test</h3>
                  <div className="flex items-end gap-2 mb-8 border-b border-blanco/10 pb-6">
                    <span className="text-4xl md:text-5xl font-bold leading-none text-blanco">150€</span>
                    <span className="text-xs font-normal text-blanco/50 uppercase tracking-widest mb-1">Tasa Euro</span>
                  </div>
                  <ul className="space-y-4 flex-1 mb-8">
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> 2 Horas de Pauta</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> 3 Reels (de 30 a 50 seg)</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> 5 Fotos</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> 4 Historias</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> Análisis de Estrategia</li>
                  </ul>
                  <a href="https://wa.me/584122346643?text=Hola,%20me%20interesa%20el%20Plan%20Test" target="_blank" rel="noopener noreferrer" className="w-full py-4 border border-blanco/30 text-center font-bold uppercase tracking-widest text-xs hover:bg-blanco hover:text-negro active:scale-[0.97] transition-all duration-200 cursor-pointer">
                    Solicitar Plan
                  </a>
                </div>
                
                {/* Plan 2 (Recomendado - Brand Red) */}
                <div className="border-2 border-rojo p-8 flex flex-col bg-rojo text-blanco relative transform md:-translate-y-4 hover:md:-translate-y-5 hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-rojo/20">
                  <div className="absolute top-0 right-0 bg-negro text-rojo text-[10px] uppercase tracking-widest px-3 py-1 font-bold border-l-2 border-b-2 border-rojo font-posterman">
                    Recomendado
                  </div>
                  <h3 className="font-posterman text-xl uppercase tracking-[0.2em] mb-2 text-blanco pr-24">Nosotros nos encargamos</h3>
                  <div className="flex items-end gap-2 mb-8 border-b border-blanco/20 pb-6">
                    <span className="text-4xl md:text-5xl font-bold leading-none text-blanco">210€</span>
                    <span className="text-xs font-normal text-blanco/80 uppercase tracking-widest mb-1">Tasa Euro</span>
                  </div>
                  <ul className="space-y-4 flex-1 mb-8">
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco"><Check className="w-4 h-4 text-negro" /> 2 Horas de Pauta</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco"><Check className="w-4 h-4 text-negro" /> 6 Reels (de 30 a 50 seg)</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco"><Check className="w-4 h-4 text-negro" /> 15 Fotos</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco"><Check className="w-4 h-4 text-negro" /> 8 Historias</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco"><Check className="w-4 h-4 text-negro" /> Análisis de Estrategia</li>
                  </ul>
                  <a href="https://wa.me/584122346643?text=Hola,%20me%20interesa%20el%20plan%20Nosotros%20nos%20encargamos" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-negro text-blanco text-center font-bold uppercase tracking-widest text-xs hover:bg-negro/80 active:scale-[0.97] transition-all duration-200 border-2 border-negro cursor-pointer">
                    Solicitar Plan
                  </a>
                </div>

                {/* Plan 3 */}
                <div className="border border-blanco/20 p-8 flex flex-col bg-negro hover:border-blanco/50 hover:-translate-y-1 transition-all duration-300 group">
                  <h3 className="font-posterman text-xl uppercase tracking-[0.2em] mb-2 text-blanco group-hover:text-rojo transition-colors">Alcance y Conocimiento</h3>
                  <div className="flex items-end gap-2 mb-8 border-b border-blanco/10 pb-6">
                    <span className="text-4xl md:text-5xl font-bold leading-none text-blanco">250€</span>
                    <span className="text-xs font-normal text-blanco/50 uppercase tracking-widest mb-1">Tasa Euro</span>
                  </div>
                  <ul className="space-y-4 flex-1 mb-8">
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> 4 Horas de Pauta</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> 12 Reels (de 30 a 50 seg)</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> Guión</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> Edición y Grabación</li>
                    <li className="flex items-center gap-3 text-sm tracking-wider uppercase text-blanco/80"><Check className="w-4 h-4 text-rojo" /> Análisis de Estrategia</li>
                  </ul>
                  <a href="https://wa.me/584122346643?text=Hola,%20me%20interesa%20el%20plan%20Alcance%20y%20Conocimiento" target="_blank" rel="noopener noreferrer" className="w-full py-4 border border-blanco/30 text-center font-bold uppercase tracking-widest text-xs hover:bg-blanco hover:text-negro active:scale-[0.97] transition-all duration-200 cursor-pointer">
                    Solicitar Plan
                  </a>
                </div>
              </div>

              {/* Additional Services */}
              <div className="border-t border-blanco/10 pt-16 mb-16">
                <h2 className="font-posterman text-2xl md:text-4xl uppercase tracking-widest mb-12 text-center text-blanco">Servicios <span className="text-rojo">Adicionales</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Videos */}
                  <div className="border border-blanco/10 p-6 bg-blanco/[0.01] hover:bg-blanco/[0.03] hover:-translate-y-0.5 transition-all duration-300">
                    <div className="mb-6">
                      <h4 className="font-posterman text-lg uppercase tracking-widest mb-1 text-blanco">Videos</h4>
                      <p className="text-xs text-rojo uppercase tracking-widest font-bold">C. Unidad: 40€ Tasa Euro</p>
                    </div>
                    <ul className="space-y-3 font-mono text-sm">
                      <li className="flex justify-between items-center border-b border-blanco/5 pb-3">
                        <span className="text-blanco/60">2 Reels (de 30 a 50 seg)</span>
                        <span className="font-bold text-blanco">70€</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-blanco/5 pb-3">
                        <span className="text-blanco/60">3 Reels (de 30 a 50 seg)</span>
                        <span className="font-bold text-blanco">100€</span>
                      </li>
                    </ul>
                  </div>

                  {/* Fotos */}
                  <div className="border border-blanco/10 p-6 bg-blanco/[0.01] hover:bg-blanco/[0.03] hover:-translate-y-0.5 transition-all duration-300">
                    <div className="mb-6">
                      <h4 className="font-posterman text-lg uppercase tracking-widest mb-1 text-blanco">Fotos</h4>
                      <p className="text-xs text-rojo uppercase tracking-widest font-bold">C. Unidad: 7.5€ Tasa Euro</p>
                    </div>
                    <ul className="space-y-3 font-mono text-sm">
                      <li className="flex justify-between items-center border-b border-blanco/5 pb-3">
                        <span className="text-blanco/60">5 Fotos</span>
                        <span className="font-bold text-blanco">25€</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-blanco/5 pb-3">
                        <span className="text-blanco/60">15 Fotos</span>
                        <span className="font-bold text-blanco">50€</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-blanco/5 pb-3">
                        <span className="text-blanco/60">30 Fotos</span>
                        <span className="font-bold text-blanco">80€</span>
                      </li>
                    </ul>
                  </div>

                  {/* Historias */}
                  <div className="border border-blanco/10 p-6 bg-blanco/[0.01] hover:bg-blanco/[0.03] hover:-translate-y-0.5 transition-all duration-300">
                    <div className="mb-6">
                      <h4 className="font-posterman text-lg uppercase tracking-widest mb-1 text-blanco">Historias</h4>
                      <p className="text-xs text-rojo uppercase tracking-widest font-bold">C. Unidad: 15€ Tasa Euro</p>
                    </div>
                    <ul className="space-y-3 font-mono text-sm">
                      <li className="flex justify-between items-center border-b border-blanco/5 pb-3">
                        <span className="text-blanco/60">2 Historias</span>
                        <span className="font-bold text-blanco">25€</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-blanco/5 pb-3">
                        <span className="text-blanco/60">4 Historias</span>
                        <span className="font-bold text-blanco">35€</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-blanco/5 pb-3">
                        <span className="text-blanco/60">8 Historias</span>
                        <span className="font-bold text-blanco">70€</span>
                      </li>
                      <li className="flex justify-between items-center border-b border-blanco/5 pb-3">
                        <span className="text-blanco/60">20 Historias</span>
                        <span className="font-bold text-blanco">180€</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
