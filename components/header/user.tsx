'use client'

import { ClerkLoaded, SignInButton, UserButton, useUser } from '@clerk/nextjs'
// import Image from 'next/image'
import React from 'react'

export default function User() {
  const { user } = useUser()
  return (
    <ClerkLoaded>
      {/* <Image
          src={user.imageUrl}
          alt={user.fullName ?? 'Profile picture'}
          width={30}
          height={30}
          className="rounded-full"
        /> */}
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
