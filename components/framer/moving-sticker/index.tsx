'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

interface MovingStickerProps {
  children: React.ReactNode
  intensity?: number // controla qué tanto se mueve
  transitionSpeed?: number // controla la velocidad de transición
  tiltIntensity?: number // controla qué tanto se inclina en 3D
}

const MovingSticker = ({
  children,
  intensity = 20,
  transitionSpeed = 0.1,
  tiltIntensity = 10 // valor de inclinación predeterminado
}: MovingStickerProps) => {
  if (typeof window === 'undefined') {
    return null
  }

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Ajuste personalizado de desplazamiento en función de la intensidad
  const translateX = useTransform(
    mouseX,
    [0, window.innerWidth],
    [intensity, -intensity]
  )
  const translateY = useTransform(
    mouseY,
    [0, window.innerHeight],
    [-intensity, intensity]
  )

  // Aplicamos inclinación en el eje X e Y para el efecto 3D
  const rotateX = useTransform(
    mouseY,
    [0, window.innerHeight],
    [-tiltIntensity, tiltIntensity]
  )
  const rotateY = useTransform(
    mouseX,
    [0, window.innerWidth],
    [tiltIntensity, -tiltIntensity]
  )

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        x: translateX,
        y: translateY,
        rotateX,
        rotateY
      }}
      transition={{ type: 'spring', damping: transitionSpeed * 10 }}
      className="will-change-[transform]"
    >
      {children}
    </motion.div>
  )
}

export default MovingSticker
