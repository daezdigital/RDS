import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface GalleryItem {
  title: string;
  category: string;
  photo: {
    url: string; 
    text: string;
    pos?: string;
    client: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<number | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        const rect = galleryRef.current?.getBoundingClientRect();
        if (rect) {
          // Calculate progress relative to the section's position in viewport
          const viewportHeight = window.innerHeight;
          const sectionHeight = rect.height;
          const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + sectionHeight)));
          
          setRotation(scrollProgress * 720); // Double rotation for more dynamic feel
        }

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) {
          setRotation(prev => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;
    
    return (
      <div
        ref={galleryRef}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn("relative w-full h-[80vh] flex items-center justify-center overflow-hidden", className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.1, 1 - (normalizedAngle / 120)); // Narrower focal point
            const scale = Math.max(0.8, 1.1 - (normalizedAngle / 180));

            return (
              <div
                key={i} 
                className="absolute w-[280px] h-[380px] md:w-[350px] md:h-[480px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px) scale(${scale})`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-140px', // Adjusted for w-280
                  marginTop: '-190px', // Adjusted for h-380
                  opacity: opacity,
                  transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                  zIndex: normalizedAngle < 90 ? 10 : 0
                }}
              >
                <div className="relative w-full h-full rounded-none border-2 border-negro bg-negro shadow-hard overflow-hidden group">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  
                  {/* Branding Overlay */}
                  <div className="absolute inset-0 bg-rojo/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-negro to-transparent text-blanco translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-rojo mb-2 font-black">{item.category}</p>
                    <h2 className="font-posterman text-xl md:text-2xl leading-none mb-1">{item.title}</h2>
                    <p className="font-inter text-[10px] opacity-60 uppercase tracking-widest mt-3 border-t border-blanco/10 pt-3">CLIENTE: {item.photo.client}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
