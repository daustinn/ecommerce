'use client'

import React, { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring
} from 'framer-motion'
import { cn } from '@/lib/utils'

const ROTATION_RANGE = 40.5
const HALF_ROTATION_RANGE = 40.5 / 2

type Props = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}

export const TiltCard = ({ children, className, style }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
        ...style
      }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  )
}
