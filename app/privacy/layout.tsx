import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policies',
  description: 'Official privacy policies for applications and services provided by Manasseh Kabutey. Learn how we protect your data.',
  openGraph: {
    title: 'App Privacy Policies | Manasseh Kabutey',
    description: 'Official privacy policies for our released mobile and web applications.',
    url: 'https://manassehkabutey.vercel.app/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
