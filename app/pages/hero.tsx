"use client";
import React from 'react';
import { Button } from "../components/UI/button";
import Particles from "react-tsparticles";

const Hero = () => (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
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
      <div className="z-10 p-4 space-y-6 text-center">
        <h1 className="text-4xl font-bold md:text-6xl animate-fade-in">
          Hi, I am <span className="text-blue-600 dark:text-blue-400">Manasseh Kabutey</span>
        </h1>
        <p className="text-xl text-gray-600 md:text-2xl dark:text-gray-300">
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