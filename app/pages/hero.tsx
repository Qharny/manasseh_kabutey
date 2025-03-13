/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from 'react';
import { Button } from "../components/UI/button";

const Hero = () => {
  // Define the functions inside the component
  const handleViewProjects = () => {
    console.log('Viewing projects...');
    // Navigate to the projects page
    window.location.href = '/projects';
  };

  const handleDownloadCV = () => {
    console.log('Downloading CV...');
    const link = document.createElement('a');
    link.href = 'https://github.com/Qharny/manasseh_kabutey/blob/main/public/KABUTEY%20MANASSEH%20KWAME%20(CV).pdf';
    link.download = 'Manasseh_Kabutey_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Load particlesJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize particles once the script is loaded
      if ((window as any).particlesJS) {
        (window as any).particlesJS('particles-js', {
          particles: {
            number: { value: 50 },
            color: { value: '#000' },
            shape: { type: 'circle' },
            opacity: { value: 0.8, random: true },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#000',
              opacity: 0.4,
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

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
      // Remove the particles container if it exists
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Particles container */}
      <div id="particles-js" className="absolute inset-0"></div>
      
      <div className="z-10 p-4 space-y-6 text-center">
        <h1 className="text-4xl font-bold md:text-6xl animate-fade-in">
          Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Manasseh Kabutey</span>
        </h1>
        <p className="text-xl text-gray-600 md:text-2xl dark:text-gray-300">
          A Software Engineer
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={handleViewProjects}>View Projects</Button>
          <Button variant="outline" onClick={handleDownloadCV}>Download CV</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;