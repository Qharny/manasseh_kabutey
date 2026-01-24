import { MetadataRoute } from 'next'
import { privacyPolicies } from '@/lib/privacy-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://manassehkabutey.vercel.app'
  
  const staticPages = [
    '',
    '/apps',
    '/privacy',
    '/projects',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const privacyPages = privacyPolicies.map((policy) => ({
    url: `${baseUrl}/privacy/${policy.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...privacyPages]
}
