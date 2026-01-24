import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = 'https://manassehkabutey.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Manasseh Kabutey | Software Engineer',
    template: '%s | Manasseh Kabutey'
  },
  description: 'Software Engineer specializing in building premium mobile and web applications with Flutter, Next.js, and modern technologies.',
  keywords: ['Manasseh Kabutey', 'Software Engineer', 'Full Stack Developer', 'Flutter Developer', 'React Developer', 'Mobile App Development', 'Web Development'],
  authors: [{ name: 'Manasseh Kabutey' }],
  creator: 'Manasseh Kabutey',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Manasseh Kabutey | Software Engineer',
    description: 'Explore the portfolio of Manasseh Kabutey, a Software Engineer dedicated to shipping high-quality mobile and web solutions.',
    siteName: 'Manasseh Kabutey Portfolio',
    images: [
      {
        url: '/logo1.png',
        width: 1200,
        height: 630,
        alt: 'Manasseh Kabutey Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manasseh Kabutey | Software Engineer',
    description: 'Software Engineer specializing in Mobile and Web technologies.',
    creator: '@mr_kabuteyy',
    images: ['/logo1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
