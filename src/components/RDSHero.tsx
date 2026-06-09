"use client"

import * as React from "react"
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "./ui/hero-gallery-scroll-animation"
import { Button } from "./ui/button"
import logoBlanco from '../assets/images/logo-blanco.png'
import { motion } from "framer-motion"

const RDS_IMAGES = [
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2340&auto=format&fit=crop", // Camera/Video production
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2340&auto=format&fit=crop", // Cinematography
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2340&auto=format&fit=crop", // Movie production
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2340&auto=format&fit=crop", // Video editing
  "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2340&auto=format&fit=crop", // Lighting/Set
]

export default function RDSHero() {
  const scrollToWork = () => {
    document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ContainerScroll className="h-[400vh] bg-negro">
      
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4 gap-2 md:gap-4">
        {RDS_IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-none border-[1px] border-blanco/10 shadow-2xl"
          >
            <div className="size-full bg-negro relative group">
              <img
                className="size-full object-cover object-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out scale-110 group-hover:scale-100"
                src={imageUrl}
                alt={`RDS Production ${index + 1}`}
              />
              <div className="absolute inset-0 bg-rojo/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center flex flex-col items-center px-6">
        <motion.div 
          className="flex flex-col items-center mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={logoBlanco} 
            alt="RDS Logo" 
            className="h-16 md:h-24 object-contain mb-6"
          />
          <div className="font-inter font-black text-rojo tracking-[0.6em] uppercase text-[10px] md:text-xs">
            Agencia Audiovisual
          </div>
        </motion.div>

        <h1 className="max-w-5xl font-posterman text-blanco uppercase leading-[0.85] mb-12 tracking-[-0.02em]" style={{ fontSize: 'clamp(48px, 9vw, 140px)' }}>
          Si no estás en <span className="text-rojo inline-block hover:scale-105 transition-transform duration-300">RDS</span><br />
          no estás en <span className="inline-block relative">
            nada
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-3 bg-rojo clip-diagonal-right" 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </span>
        </h1>

        <motion.p 
          className="max-w-xl font-inter text-blanco/70 text-lg md:text-2xl mb-14 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Producimos contenido estratégico que <span className="text-blanco font-medium italic">conecta marcas</span> con audiencias reales a través del poder de la imagen.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button
            onClick={scrollToWork}
            className="group relative bg-rojo text-blanco font-posterman uppercase tracking-[0.2em] px-16 py-6 shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300 overflow-hidden"
            style={{ fontSize: '15px' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Proyectos <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </span>
          </button>
          
          <button
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            className="group font-posterman uppercase tracking-[0.2em] text-blanco px-16 py-6 border-2 border-blanco/30 hover:border-blanco hover:bg-blanco hover:text-negro transition-all duration-500"
            style={{ fontSize: '15px' }}
          >
            Contacto
          </button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}
