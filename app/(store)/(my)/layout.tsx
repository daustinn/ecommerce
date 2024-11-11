import React from 'react'
import MyTabs from './@tabs'

export default function MyLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full flex flex-col">
      <MyTabs />
      <div className="w-full max-w-4xl py-5 mx-auto">{children}</div>
    </div>
  )
}
