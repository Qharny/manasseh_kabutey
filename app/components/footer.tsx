import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/yourusername",
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn" 
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/yourusername",
      label: "Twitter" 
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        </div>

        <div className="flex space-x-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <nav className="flex space-x-4">
            <Link href="/privacy" className="text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}