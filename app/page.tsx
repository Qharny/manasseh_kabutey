"use client";
import React, { useState, useEffect } from 'react';
import { Button } from './components/UI/button';
import { Contact, Moon, Sun } from 'lucide-react';
import About from './pages/about';
import Hero from './pages/hero';
import Projects from './pages/project';

// Navbar Component
interface NavbarProps {
  toggleTheme: () => void; // Function type for toggleTheme
  isDark: boolean; // Boolean type for isDark
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold">Portfolio</span>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button>Contact</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};






// Contact Section


// Main App Component
const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;