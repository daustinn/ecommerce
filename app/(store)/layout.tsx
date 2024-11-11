import type { Metadata } from 'next'
import '../globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/header'
import { dark } from '@clerk/themes'
import { esMX } from '@clerk/localizations'
import Footer from '@/components/footer'
import { SanityLive } from '@/sanity/lib/live'
import ThemeProvider from '@/providers/theme'
import DrafModeDisable from '@/components/draft-mode/disable'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'

export const metadata: Metadata = {
  title: '366 Clothing | Moda para todos',
  description:
    '366 Clothing, lugar donde encontrarás las mejores outfits para ti.',
  keywords: [
    'moda',
    'ropa',
    'outfits',
    'tendencias',
    'fashion',
    'clothing',
    'trend',
    'style'
  ],
  authors: {
    name: 'David Bendezú (Daustinn)',
    url: 'https://daustinn.com'
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      dynamic
      appearance={{
        baseTheme: dark,
        variables: {
          colorBackground: '#000',
          borderRadius: '.4rem',
          colorSuccess: '#00ff00'
        }
      }}
      localization={esMX}
    >
      <html lang="es" suppressHydrationWarning>
        <head>
          <link
            rel="stylesheet"
            href="/fonts/hellix/Hellix-Medium.otf"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="/fonts/larken/Larken-Bold.otf"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="/fonts/larken/Larken-Medium.otf"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </head>
        <body
          suppressHydrationWarning
          className="antialiased font-hellix bg-black min-h-svh text-white flex flex-col"
        >
          <ThemeProvider>
            {(await draftMode()).isEnabled && (
              <>
                <DrafModeDisable />
                <VisualEditing />
              </>
            )}
            <Header />
            <main className="flex flex-grow">{children}</main>
            <Footer />
            <SanityLive />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
