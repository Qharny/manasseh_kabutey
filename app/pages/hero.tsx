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
          <Button onClick={() => handleViewProjects()}>View Projects</Button>
          <Button variant="outline" onClick={() => handleDownloadCV()}>Download CV</Button>
        </div>
      </div>
    </div>
  );

// Define the functions
const handleViewProjects = () => {
    // Logic to view projects, e.g., navigate to the projects page
    console.log('Viewing projects...');
    // You can use a router to navigate if needed
};

const handleDownloadCV = () => {
    // Logic to download CV, e.g., trigger a file download
    console.log('Downloading CV...');
    // You can implement the download logic here
};

export default Hero