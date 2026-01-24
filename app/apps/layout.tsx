import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipped Applications',
  description: 'Explore a collection of premium mobile and web applications built and shipped to production by Manasseh Kabutey.',
  openGraph: {
    title: 'Shipped Applications | Manasseh Kabutey',
    description: 'Discover high-quality mobile and web solutions shipped to production. From Flutter apps on Play Store to modern web systems.',
    url: 'https://manassehkabutey.vercel.app/apps',
  },
}

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
