"use client";
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import About from './pages/about';
import Hero from './pages/hero';
import Projects from './pages/project';
import ContactSection from './pages/contact';
import Skills from './components/skill';
import { Button } from './components/UI/button';
import Education from './components/education';
import Footer from './components/footer';
import { useTheme } from './hooks/use-theme';
import Chatbot from './components/Chatbot';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <span className="text-xl font-bold">Kabutey</span>
          <div className="items-center hidden gap-4 md:flex">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button>Contact</Button>
          </div>
          <div className="md:hidden">
            <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="bg-white md:hidden dark:bg-gray-900">
          <div className="flex flex-col items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button>Contact</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Page = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Navbar toggleTheme={toggleTheme} isDark={theme === 'dark'} />
        <Hero />
        <About />
        <Skills/>
        <Projects />
        <Education />
        <ContactSection />
        <Chatbot />
        <Footer/>
      </div>
    </div>
  );
};

export default Page;