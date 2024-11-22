// import Link from 'next/link'
// import { Github, Linkedin, Twitter } from 'lucide-react'

// export default function Footer() {
//   const socialLinks = [
//     { 
//       icon: Github, 
//       href: "https://github.com/yourusername",
//       label: "GitHub" 
//     },
//     { 
//       icon: Linkedin, 
//       href: "https://linkedin.com/in/yourusername",
//       label: "LinkedIn" 
//     },
//     { 
//       icon: Twitter, 
//       href: "https://twitter.com/yourusername",
//       label: "Twitter" 
//     }
//   ]

//   return (
//     <footer className="py-8 text-white bg-gray-900">
//       <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
//         <div className="mb-4 text-center md:text-left md:mb-0">
//           <p>&copy; 2024 Your Name. All Rights Reserved.</p>
//         </div>

//         <div className="flex space-x-4">
//           {socialLinks.map(({ icon: Icon, href, label }) => (
//             <a
//               key={href}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 transition hover:text-white"
//               aria-label={label}
//             >
//               <Icon size={24} />
//             </a>
//           ))}
//         </div>

//         <div className="hidden md:block">
//           <nav className="flex space-x-4">
//             <Link href="/privacy" className="text-gray-300 hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="text-gray-300 hover:text-white">
//               Terms of Service
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   )
// }

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/qharny',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/manasseh-kabutey',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/mr_kabuteyy',
      icon: Twitter,
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'kabuteymanasseh@gmail.com',
      href: 'mailto:kabuteymanasseh@gmail.com',
    },
    {
      icon: Phone,
      text: '+233 20 233 4725',
      href: 'tel:+233202334725',
    },
    {
      icon: MapPin,
      text: 'Accra, Ghana',
      href: 'https://maps.google.com/?q=Accra,Ghana',
    },
  ];

  return (
    <footer className="text-gray-200 bg-gray-900">
      {/* Main Footer Content */}
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Manasseh Kabutey</h3>
            <p className="text-gray-400">
              Software Engineer specializing in building exceptional digital experiences
              with a focus on mobile and web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-center text-gray-400 md:text-left">
              © {currentYear} Manasseh Kabutey. All rights reserved.
            </p>
            
            <Button
              variant="ghost"
              size="icon"
              className="bg-gray-800 rounded-full hover:bg-gray-700"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;