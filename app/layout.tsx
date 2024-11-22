import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manasseh | Software Engineer',
  description: 'Software Engineer specializing in Mobile and Web technologies',
  keywords: ['Software Engineer', 'Full Stack Developer', 'Flutter Developer'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/profile1.png?token=GHSAT0AAAAAACZHFHJVOMJLRYIJUD27CRL2Z2A6PXA" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}