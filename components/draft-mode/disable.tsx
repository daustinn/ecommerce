'use client'

import { useDraftModeEnvironment } from 'next-sanity/hooks'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DrafModeDisable() {
  const environment = useDraftModeEnvironment()
  const router = useRouter()

  if (environment !== 'live' && environment !== 'unknown') {
    return null
  }

  const handleClick = async () => {
    await fetch('draft-mode/disable')
    router.refresh()
  }

  return (
    <div>
      <button onClick={handleClick}>Disable draft mode</button>
    </div>
  )
}
