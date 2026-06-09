import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import SectionBadge from './components/SectionBadge'
import Preloader from './components/Preloader'
import RDSHero from './components/RDSHero'
import Marquee from './components/Marquee'
import Nosotros from './components/Nosotros'
import Clientes from './components/Clientes'
import Identidad from './components/Identidad'
import Servicios from './components/Servicios'
import Portafolio from './components/Portafolio'
import CTAFinal from './components/CTAFinal'
import { CinematicFooter } from './components/ui/motion-footer'
import Noise from './components/Noise'
import UnderConstruction from './components/UnderConstruction'

// Toggle to enable/disable the under construction page
const UNDER_CONSTRUCTION = true;

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Only initialize smooth scroll if not in under construction mode
    if (UNDER_CONSTRUCTION) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  if (UNDER_CONSTRUCTION) {
    return (
      <>
        {/* Custom cursor for high-fidelity interactive elements */}
        <CustomCursor />
        
        {/* Cinematic film grain grain background */}
        <Noise />
        
        {/* Under Construction screen */}
        <UnderConstruction />
      </>
    )
  }

  return (
    <>
      {/* Preloader — bloquea hasta estar listo */}
      <Preloader onComplete={() => setReady(true)} />

      {/* Cursor personalizado */}
      <CustomCursor />


      {/* Interfaz principal */}
      <div style={{ visibility: ready ? 'visible' : 'hidden' }}>
        <Nav />
        <SectionBadge />

        <main>
          <RDSHero />
          <Marquee />
          <Nosotros />
          <Clientes />
          <Identidad />
          <Servicios />
          <Portafolio />
          <CTAFinal />
        </main>

        <CinematicFooter />
      </div>
    </>
  )
}

