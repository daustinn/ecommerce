'use client'

import React, { useRef, useState, useEffect } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type FollowMouseEffectProps = HTMLMotionProps<'div'> & {}

export default function FollowMouseEffect({
  className,
  ...props
}: FollowMouseEffectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (ref.current) {
      const handlePointerMove = ({
        clientX,
        clientY
      }: {
        clientX: number
        clientY: number
      }) => {
        const element = ref.current
        if (!element) return
        const x = clientX - element.offsetLeft - element.offsetWidth / 2
        const y = clientY - element.offsetTop - element.offsetHeight / 2
        setCoordinates({ x, y })
      }

      window.addEventListener('pointermove', handlePointerMove)
      return () => window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      animate={{ x: coordinates.x, y: coordinates.y }}
      transition={{
        type: 'spring'
      }}
      className={cn('pointer-events-none', className)}
      {...props}
    />
  )
}
