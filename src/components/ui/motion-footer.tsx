"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES
// -------------------------------------------------------------------------
const STYLES = `
.cinematic-footer-wrapper {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  
  /* RDS Identity Colors */
  --rds-red: #f21b42;
  --rds-white: #ece9f4;
  --rds-black: #0D0D0D;

  /* Dynamic Variables using RDS tokens */
  --pill-bg-1: rgba(236, 233, 244, 0.05);
  --pill-bg-2: rgba(236, 233, 244, 0.02);
  --pill-shadow: rgba(0,0,0,0.5);
  --pill-highlight: rgba(255,255,255,0.15);
  --pill-inset-shadow: rgba(0,0,0,0.8);
  --pill-border: rgba(236, 233, 244, 0.15);
  
  --pill-bg-1-hover: var(--rds-red);
  --pill-bg-2-hover: #d11235;
  --pill-border-hover: var(--rds-red);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(242, 27, 66, 0.5)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px rgba(242, 27, 66, 0.8)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 120s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Theme-adaptive Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(242, 27, 66, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(242, 27, 66, 0.05) 1px, transparent 1px);
  mask-image: radial-gradient(circle at 50% 50%, black, transparent 90%);
  -webkit-mask-image: radial-gradient(circle at 50% 50%, black, transparent 90%);
}

/* RDS Aurora Glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(242, 27, 66, 0.25) 0%, 
    rgba(13, 13, 13, 0.3) 40%, 
    transparent 70%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 0 20px 40px -10px rgba(242, 27, 66, 0.3);
  color: white;
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(242, 27, 66, 0.15);
  background: linear-gradient(180deg, rgba(242, 27, 66, 0.2) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255, 0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px rgba(255,255,255, 0.15));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    },[]);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>SI NO ESTÁS EN RDS</span> <span className="text-rojo">✦</span>
    <span>NO ESTÁS EN NADA</span> <span className="text-rojo">✦</span>
    <span>PRODUCCIÓN AUDIOVISUAL</span> <span className="text-rojo">✦</span>
    <span>ESTRATEGIA DIGITAL</span> <span className="text-rojo">✦</span>
    <span>CONTENIDO REAL</span> <span className="text-rojo">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  },[]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      <div
        ref={wrapperRef}
        id="footer"
        className="relative h-screen w-full mt-20"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-negro text-blanco cinematic-footer-wrapper">
          
          {/* Ambient Light & Grid Background */}
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text font-posterman absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none opacity-40"
          >
            RDS.VZLA
          </div>

          {/* 1. Diagonal Sleek Marquee (Top of footer) */}
          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-white/10 bg-negro/60 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-posterman tracking-[0.3em] text-white uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-5xl md:text-8xl font-posterman footer-text-glow tracking-tighter mb-12 text-center uppercase"
            >
              ¿Listo para <span className="text-rojo">crecer</span> en RDS?
            </h2>

            {/* Interactive Magnetic Pills Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton as="a" href="https://wa.me/584122346643" target="_blank" className="footer-glass-pill px-10 py-5 rounded-full text-blanco font-posterman uppercase text-sm md:text-base flex items-center gap-3 group">
                   WhatsApp
                </MagneticButton>
                
                <MagneticButton as="a" href="https://www.instagram.com/rds.vzla/" target="_blank" className="footer-glass-pill px-10 py-5 rounded-full text-blanco font-posterman uppercase text-sm md:text-base flex items-center gap-3 group">
                   Instagram
                </MagneticButton>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
                <MagneticButton as="a" href="https://www.tiktok.com/@rds.vzla" target="_blank" className="footer-glass-pill px-6 py-3 rounded-full text-white/80 font-posterman uppercase text-xs md:text-sm hover:text-white">
                  TikTok
                </MagneticButton>
                <MagneticButton as="a" href="https://www.facebook.com/profile.php?id=61576604302898" target="_blank" className="footer-glass-pill px-6 py-3 rounded-full text-white/80 font-posterman uppercase text-xs md:text-sm hover:text-white">
                  Facebook
                </MagneticButton>
                <MagneticButton as="a" href="#servicios" onClick={(e: any) => handleNav(e, '#servicios')} className="footer-glass-pill px-6 py-3 rounded-full text-white/80 font-posterman uppercase text-xs md:text-sm hover:text-white">
                  Servicios
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-white/90 text-[11px] md:text-sm font-inter tracking-[0.2em] uppercase order-2 md:order-1 flex flex-col gap-1 items-center md:items-start">
              <span>(C) {new Date().getFullYear()} RDS Agencia Audiovisual. ALL RIGHTS RESERVED.</span>
              <span className="text-[10px] text-white/40 tracking-normal normal-case">
                Web por <a href="https://www.daezdigital.com/" target="_blank" rel="noopener noreferrer" className="hover:text-rojo transition-colors underline decoration-rojo/30 underline-offset-2">Daez</a>
              </span>
            </div>

            {/* "Made with Love" Badge */}
            <div className="footer-glass-pill px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-white/30">
              <span className="text-white/90 text-[12px] md:text-sm font-posterman uppercase tracking-widest">Hecho con</span>
              <span className="animate-footer-heartbeat text-sm md:text-base text-rojo">❤</span>
              <span className="text-white/90 text-[12px] md:text-sm font-posterman uppercase tracking-widest">por</span>
              <span className="text-white font-posterman text-sm md:text-base tracking-normal ml-1">RDS</span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-white/60 hover:text-white group order-3"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}
