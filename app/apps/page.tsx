"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Download, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Chatbot from '../components/Chatbot';
import { useTheme } from '../hooks/use-theme';
import { Button } from '../components/UI/button';
import { Badge } from '../components/UI/badge';

declare global {
  interface Window {
    particlesJS: (id: string, config: unknown) => void;
  }
}

interface AppBase {
  type: 'mobile' | 'web';
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubPath: string;
}

interface MobileApp extends AppBase {
  type: 'mobile';
  playStore: string;
  apkLink: string;
}

interface WebApp extends AppBase {
  type: 'web';
  liveUrl: string;
}

type AppItem = MobileApp | WebApp;

const apps: AppItem[] = [
  {
    type: 'mobile',
    title: 'FacePassX',
    description: 'A Flutter-based mobile application that uses facial recognition technology to automate student attendance tracking. Secure, efficient, and contactless.',
    tech: ['Flutter', 'Supabase', 'Python API', 'AI'],
    image: '/face.png',
    githubPath: 'https://github.com/Qharny/FacePassX',
    playStore: '#', // Placeholder
    apkLink: 'https://github.com/Qharny/FacePassX/releases/download/v1.1.0/app-release.apk',
  },
  {
    type: 'mobile',
    title: 'TrackerMate',
    description: 'Advanced location tracking application designed to help users find missing phones in real-time using Firebase and GetX architecture.',
    tech: ['Flutter', 'Firebase', 'GetX', 'Google Maps'],
    image: '/tracker1.jpg',
    githubPath: 'https://github.com/Qharny/TrackerMate.git',
    playStore: '#', // Placeholder
    apkLink: 'https://github.com/Qharny/TrackerMate/releases/download/v1.0.0/app-release.apk',
  },
  {
    type: 'mobile',
    title: 'AeroGuard',
    description: 'IoT smoke detector application that provides real-time monitoring and alerts for smoke detection through various IoT devices like ESP32 and Arduino.',
    tech: ['Flutter', 'Firebase', 'IoT', 'Hardware Integration'],
    image: '/home.png',
    githubPath: 'https://github.com/Qharny/AeroGuard',
    playStore: '#', // Placeholder
    apkLink: '#',
  },
  {
    type: 'web',
    title: 'SparkNest Tech',
    description: 'Professional portfolio and service platform for a software development company, featuring a sleek, modern UI and responsive design.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'PostCSS'],
    image: '/sparknest.png',
    liveUrl: 'https://sparknest.tech/',
    githubPath: '#',
  },
  {
    type: 'web',
    title: 'Beads E-commerce',
    description: 'Elegant full-stack e-commerce solution for jewelry and accessories, featuring product management and order tracking.',
    tech: ['HTML', 'Tailwind', 'JavaScript', 'Firebase'],
    image: '/beads.png',
    liveUrl: 'https://bead-ochre.vercel.app/',
    githubPath: '#',
  },
  {
    type: 'web',
    title: 'Dine Hub',
    description: 'Modern food ordering and delivery platform with a focus on user experience and seamless restaurant discovery.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: '/dine.png',
    liveUrl: 'https://lets-dine-six.vercel.app/',
    githubPath: '#',
  },
];

const AppCard = ({ app }: { app: AppItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={app.image}
          alt={app.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-3">
             {app.type === 'mobile' ? (
               <>
                 {app.apkLink !== '#' && (
                    <Link href={app.apkLink}>
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full">
                        <Download className="w-4 h-4 mr-2" />
                        APK
                      </Button>
                    </Link>
                 )}
               </>
             ) : (
               <Link href={app.liveUrl}>
                <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit
                </Button>
              </Link>
             )}
            <Link href={app.githubPath}>
              <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/20 rounded-full backdrop-blur-sm">
                <Github className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className={`${app.type === 'mobile' ? 'bg-blue-600' : 'bg-blue-600'} text-white border-none px-3 py-1 rounded-full text-xs font-medium`}>
            {app.type === 'mobile' ? <Smartphone className="w-3 h-3 mr-1 inline" /> : <Globe className="w-3 h-3 mr-1 inline" />}
            {app.type.toUpperCase()}
          </Badge>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {app.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {app.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {app.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-gray-50 dark:bg-gray-700/50 rounded-full text-[10px] font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase border border-gray-100 dark:border-gray-600">
              {t}
            </span>
          ))}
        </div>

        {app.type === 'mobile' && (
          <div className="flex flex-col gap-3">
            <Link href={app.playStore} className="w-full">
              <div className="flex items-center justify-center gap-3 bg-gray-900 dark:bg-black text-white px-6 py-3 rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 transform active:scale-95 shadow-lg">
                <Play className="w-6 h-6 fill-current" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase font-bold opacity-70">Get it on</span>
                  <span className="text-lg font-semibold -mt-1">Google Play</span>
                </div>
              </div>
            </Link>
            <Link href={`/privacy/${app.type === 'mobile' ? app.title.toLowerCase() : ''}`} className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline text-center mt-2">
              Privacy Policy
            </Link>
          </div>
        )}
        
        {app.type === 'web' && (
          <Link href={app.liveUrl}>
            <Button className="w-full rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 shadow-xl shadow-blue-500/20">
              Launch Application
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

const AppsPage = () => {
  const { toggleTheme, theme } = useTheme();

  React.useEffect(() => {
    // Load particlesJS script for hero section consistency
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('apps-particles-js', {
          particles: {
            number: { value: 30 },
            color: { value: theme === 'dark' ? '#3b82f6' : '#2563eb' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 2 },
            line_linked: {
              enable: true,
              distance: 150,
              color: theme === 'dark' ? '#3b82f6' : '#2563eb',
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
              resize: true
            }
          },
          retina_detect: true
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans selection:bg-blue-500 selection:text-white">
        <Navbar toggleTheme={toggleTheme} isDark={theme === 'dark'} />
        
        {/* Hero Section aligned with Homepage */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div id="apps-particles-js" className="absolute inset-0"></div>
          
          <div className="container px-4 mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Shipped <span className="text-blue-600 dark:text-blue-400">Applications</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Exploring the boundary between development and delivery. A collection of mobile and web applications built with precision and shipped to production.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container px-4 mx-auto mb-16 relative z-20 -mt-10">
           <div className="flex justify-center gap-4">
              <Link href="#mobile-apps">
                <Button className="rounded-full px-8 shadow-lg shadow-blue-500/20">
                  Mobile Apps
                </Button>
              </Link>
              <Link href="#web-apps">
                <Button variant="outline" className="rounded-full px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  Web Systems
                </Button>
              </Link>
           </div>
        </div>

        {/* Mobile Apps Section */}
        <section id="mobile-apps" className="py-20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Mobile Applications</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apps.filter(a => a.type === 'mobile').map(app => (
                <AppCard key={app.title} app={app} />
              ))}
            </div>
          </div>
        </section>

        {/* Web Apps Section */}
        <section id="web-apps" className="py-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Web Applications</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apps.filter(a => a.type === 'web').map(app => (
                <AppCard key={app.title} app={app} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-20 overflow-hidden text-center text-white"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-6">Have an Idea?</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
                  Let&apos;s collaborate to build something amazing. From concept to shipping on the Play Store, I can help you realize your vision.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-12 py-8 text-lg font-bold shadow-2xl">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Chatbot />
        <Footer />
      </div>
    </div>
  );
};

export default AppsPage;
