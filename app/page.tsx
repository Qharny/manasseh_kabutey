"use client";
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import About from './pages/about';
import Hero from './pages/hero';
import Projects from './pages/project';
import ContactSection from './pages/contact';
import Blog from './pages/blog';
import Skills from './components/skill';
import { Button } from './components/UI/button';
import Education from './components/education';
import Footer from './components/footer';
import { useTheme } from './hooks/use-theme';
import Chatbot from './components/Chatbot';

import Navbar from './components/Navbar';

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
        <Blog />
        <Education />
        <ContactSection />
        <Chatbot />
        <Footer/>
      </div>
    </div>
  );
};

export default Page;