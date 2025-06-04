import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className={`${inter.className} min-h-screen bg-background`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
} 