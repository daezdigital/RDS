import { motion } from 'framer-motion'
import logo from '../assets/images/logo.png'
import {
  InstagramIcon,
  WhatsAppIcon,
  TikTokIcon,
  FacebookIcon,
  TelegramIcon,
  YouTubeIcon,
} from './icons/SocialIcons'

const EASE = [0.76, 0, 0.24, 1] as [number, number, number, number]


export default function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-rojo overflow-hidden min-h-[600px] flex flex-col justify-between">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />

      {/* Geometric Cutout (Black Triangle from right) */}
      <div 
        className="absolute top-0 right-0 h-full w-1/3 bg-negro clip-arrow-right translate-x-1/2 rotate-180 z-0"
        style={{ transform: 'translateX(30%) rotate(180deg)' }}
      />

      {/* Top content */}
      <div className="relative z-10 px-8 md:px-12 pt-20 pb-12 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-posterman text-4xl text-negro">RDS.VZLA</h2>
          </div>
          <p className="font-inter text-negro mb-8 leading-relaxed text-lg font-medium max-w-[260px]">
            Empecemos a construir algo que valga la pena ver.
          </p>
          <a
            href="mailto:contacto@rds.com"
            className="inline-block font-posterman uppercase text-blanco bg-negro px-10 py-5 shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            style={{ fontSize: '14px', letterSpacing: '0.12em' }}
          >
            Contacto ↗
          </a>
        </motion.div>

        {/* Center: Navigation */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        >
          {[
            { label: 'Trabajo', href: '#clientes' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Nosotros', href: '#nosotros' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNav(e, link.href)}
              className="font-posterman text-negro transition-colors duration-200 hover:text-blanco cursor-pointer"
              style={{ fontSize: '42px' }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Right: Slogan & Placeholder */}
        <motion.div
          className="flex flex-col items-start md:items-end text-left md:text-right"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          <div className="mb-12">
            <h3 className="font-posterman text-negro text-2xl leading-tight uppercase">
              Si no estás en <span className="bg-negro text-rojo px-2">RDS</span><br />
              no estás en nada
            </h3>
            <div className="w-12 h-1 bg-negro mt-2 ml-auto hidden md:block" />
          </div>

          <div className="flex gap-4 mb-8">
            <a
              href="https://www.instagram.com/rds.vzla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de RDS"
              className="w-10 h-10 bg-negro flex items-center justify-center text-rojo hover:bg-blanco hover:text-negro transition-colors cursor-pointer"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://wa.me/584122346643"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de RDS"
              className="w-10 h-10 bg-negro flex items-center justify-center text-rojo hover:bg-blanco hover:text-negro transition-colors cursor-pointer"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@rds.vzla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de RDS"
              className="w-10 h-10 bg-negro flex items-center justify-center text-rojo hover:bg-blanco hover:text-negro transition-colors cursor-pointer"
            >
              <TikTokIcon size={18} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576604302898"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de RDS"
              className="w-10 h-10 bg-negro flex items-center justify-center text-rojo hover:bg-blanco hover:text-negro transition-colors cursor-pointer"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
          
          <div className="w-32 h-32 bg-blanco border-4 border-negro shadow-hard flex items-center justify-center font-posterman text-negro text-[8px] text-center p-2">
            ESPACIO PARA QR
          </div>
        </motion.div>
      </div>

      {/* Massive RDS background text */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden pointer-events-none">
        <h2 className="absolute bottom-[-10%] left-[-2%] font-posterman text-negro text-[25vw] leading-none opacity-10 select-none">
          RDS.VZLA
        </h2>
      </div>
    </footer>
  )
}
