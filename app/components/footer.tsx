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
  // Instagram,
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
      url: 'https://github.com/qharny',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manasseh-kabutey',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mr_kabuteyy',
      icon: Twitter,
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/mr_kabuteyy',
    //   icon: Instagram,
    // },
    {
      name: 'Dev.to',
      url: 'https://dev.to/mr_kabuteyy',
      icon: () => (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="21"
          width="21"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z" />
        </svg>
      ),
    },
    {
      name: 'hasnode',
      url: 'https://hashnode.com/@mr-kabuteyy',
      icon: () => (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M35.19 171.1C-11.72 217.1-11.72 294 35.19 340.9L171.1 476.8C217.1 523.7 294 523.7 340.9 476.8L476.8 340.9C523.7 294 523.7 217.1 476.8 171.1L340.9 35.19C294-11.72 217.1-11.72 171.1 35.19L35.19 171.1zM315.5 315.5C282.6 348.3 229.4 348.3 196.6 315.5C163.7 282.6 163.7 229.4 196.6 196.6C229.4 163.7 282.6 163.7 315.5 196.6C348.3 229.4 348.3 282.6 315.5 315.5z"></path></svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:kabuteymanasseh5@gmail.com',
      icon: Mail,
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'kabuteymanasseh5@gmail.com',
      href: 'mailto:kabuteymanasseh5@gmail.com',
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
                  href={social.url}
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