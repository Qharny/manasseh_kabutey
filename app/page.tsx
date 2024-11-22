"use client";
import React, { useState, useEffect } from 'react';
import { Button } from './components/UI/button';
import { Moon, Sun } from 'lucide-react';
import About from './pages/about';
import Hero from './pages/hero';
import Projects from './pages/project';
import ContactSection from './pages/contact'; // Rename this import to avoid confusion with lucide-react's Contact

// Navbar Component
interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold">Portfolio</span>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button>Contact</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Page = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <Hero />
        <About />
        <Projects />
        <ContactSection /> {/* Use your custom Contact component with a different name */}
      </div>
    </div>
  );
};

export default Page;