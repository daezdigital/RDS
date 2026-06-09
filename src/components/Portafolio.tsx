import React from 'react';
import { motion } from 'framer-motion';
import { CircularGallery, GalleryItem } from './ui/circular-gallery';

const portafolioItems: GalleryItem[] = [
  {
    title: 'NIGHT RIDE',
    category: 'CINEMATOGRAPHY',
    photo: {
      url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2340&auto=format&fit=crop',
      text: 'Visual cinematic production',
      client: 'URBAN VIBES'
    }
  },
  {
    title: 'THE STUDIO',
    category: 'CONTENT CREATION',
    photo: {
      url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2340&auto=format&fit=crop',
      text: 'Recording studio setup',
      client: 'RDS ORIGINALS'
    }
  },
  {
    title: 'NEON DREAMS',
    category: 'MUSIC VIDEO',
    photo: {
      url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2340&auto=format&fit=crop',
      text: 'Neon lighting production',
      client: 'NOCTURNAL ENT.'
    }
  },
  {
    title: 'FASHION FILM',
    category: 'EDITORIAL',
    photo: {
      url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2340&auto=format&fit=crop',
      text: 'Fashion production shoot',
      client: 'MODA VZLA'
    }
  },
  {
    title: 'STREET BEATS',
    category: 'REELS / SOCIAL',
    photo: {
      url: 'https://images.unsplash.com/photo-1514525253344-481bb025cd74?q=80&w=2340&auto=format&fit=crop',
      text: 'Street music production',
      client: 'CULTURAL HUB'
    }
  },
  {
    title: 'BRAND STORY',
    category: 'COMMERCIAL',
    photo: {
      url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2340&auto=format&fit=crop',
      text: 'Professional camera gear',
      client: 'TECH CORP'
    }
  },
  {
    title: 'LIVE SESSION',
    category: 'EVENT CAPTURE',
    photo: {
      url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2340&auto=format&fit=crop',
      text: 'Live music recording',
      client: 'RDS LIVE'
    }
  },
  {
    title: 'MOTION ART',
    category: 'VFX / EDITING',
    photo: {
      url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop',
      text: 'Post-production suite',
      client: 'PIXEL PERFECT'
    }
  }
];

export default function Portafolio() {
  return (
    <section id="portafolio" className="relative bg-blanco py-24 md:py-32 overflow-hidden border-t-2 border-negro">
      {/* Background Text Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] z-0">
        <h2 className="font-posterman text-[20vw] leading-none uppercase">TRABAJO</h2>
      </div>

      <div className="relative z-10 px-8 md:px-12 flex flex-col items-center mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-rojo" />
          <span className="font-posterman uppercase tracking-widest text-negro text-xs">Portafolio</span>
          <div className="w-12 h-[2px] bg-rojo" />
        </div>
        
        <h2 className="font-posterman text-5xl md:text-8xl text-negro text-center leading-[0.9] uppercase mb-8">
          NUESTROS <span className="text-rojo">TRABAJOS</span>
        </h2>
        
        <p className="font-inter text-negro/60 text-center max-w-xl text-lg md:text-xl uppercase tracking-tighter font-medium italic">
          Piezas audiovisuales con propósito, impacto y estrategia. No solo grabamos, <span className="text-negro font-black">conectamos</span>.
        </p>
      </div>

      <div className="w-full relative py-20">
        <CircularGallery items={portafolioItems} radius={window.innerWidth < 768 ? 400 : 700} />
      </div>

      <div className="text-center mt-12 relative z-10">
        <p className="font-posterman text-rojo text-[10px] tracking-[0.5em] uppercase mb-8">Scroll para rotar el universo rds</p>
        <div className="flex justify-center gap-2">
            {[1,2,3].map(i => <div key={i} className="w-2 h-2 bg-negro/10 rounded-full" />)}
        </div>
      </div>
    </section>
  );
}
