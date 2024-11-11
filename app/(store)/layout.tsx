import type { Metadata } from 'next'
import localFont from 'next/font/local'
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

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: '366 Clothing | Moda para todos',
  description:
    '366 Clothing, lugar donde encontrarás las mejores outfits para ti.'
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
        <body
          suppressHydrationWarning
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-hellix bg-black min-h-svh text-white flex flex-col`}
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
