import { useEffect, useRef } from 'react'

export default function Noise() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    // Tiny offscreen canvas to generate noise tile
    const noiseCanvas = document.createElement('canvas')
    noiseCanvas.width = 128
    noiseCanvas.height = 128
    const noiseCtx = noiseCanvas.getContext('2d')
    if (!noiseCtx) return
    const noiseData = noiseCtx.createImageData(128, 128)
    const noiseDataArr = noiseData.data

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const updateNoise = () => {
      for (let i = 0; i < noiseDataArr.length; i += 4) {
        const val = (Math.random() * 255) | 0
        noiseDataArr[i] = val
        noiseDataArr[i + 1] = val
        noiseDataArr[i + 2] = val
        noiseDataArr[i + 3] = 12 // Subtle grain opacity
      }
      noiseCtx.putImageData(noiseData, 0, 0)
    }

    let frame = 0
    const render = () => {
      // Update the noise pattern every 2 frames for smooth, efficient animation
      if (frame % 2 === 0) {
        updateNoise()
      }
      frame++

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const pattern = ctx.createPattern(noiseCanvas, 'repeat')
      if (pattern) {
        ctx.fillStyle = pattern
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationFrameId = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.4]"
      style={{ mixBlendMode: 'overlay' }}
    />
  )
}

