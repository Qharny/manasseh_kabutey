"use client";
import React from 'react';
import { Button } from "../components/UI/button";
import Particles from "react-tsparticles";

const Hero = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 relative">
      <Particles 
        className="absolute inset-0"
        options={{ 
          particles: { 
            number: { value: 50 }, 
            size: { value: 3 }, 
            move: { speed: 1 } 
          } 
        }} 
      />
      <div className="text-center space-y-6 p-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Manasseh Kabutey</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          A Software Engineer
        </p>
        <div className="flex justify-center gap-4">
          <Button>View Projects</Button>
          <Button variant="outline">Download CV</Button>
        </div>
      </div>
    </div>
  );

  export default Hero