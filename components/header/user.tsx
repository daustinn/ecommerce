'use client'

import { ClerkLoaded, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

export default function User() {
  const { user } = useUser()
  return (
    <ClerkLoaded>
      {user ? (
        <UserButton />
      ) : (
        <SignInButton mode="modal">
          <button className="text-stone-300 font-medium">Entrar</button>
        </SignInButton>
      )}
    </ClerkLoaded>
  )
}
