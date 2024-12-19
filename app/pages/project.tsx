/* eslint-disable @next/next/no-img-element */
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/UI/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/UI/card";
import { Badge } from '../components/UI/badge';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with HTML, Tailwind, JS and firebase",
      tech: ["HTML", "Tailwind", "JS", "Firebase"],
      image: "/beads.png",
      github: "#",
      live: "https://bead-ochre.vercel.app/"
    },
    {
      title: "Web Scrapper",
      description: "A versatile command-line web scraper built with Dart. This tool allows you to scrape web pages and save the extracted data in various formats.",
      tech: ["dart"],
      image: "/api/placeholder/400/200",
      github: "https://github.com/Qharny/Dart_Web_Scraper.git",
      live: "https://github.com/Qharny/Dart_Web_Scraper.git"
    },
    {
      title: "Tracking App",
      description: "Mobile app for tracking location of missing phones",
      tech: ["Flutter", "Firebase", "GetX"],
      image: "/tracker2.jpg",
      github: "https://github.com/Qharny/TrackerMate.git",
      live: "https://github.com/Qharny/TrackerMate/releases/download/v1.0.0/app-release.apk"
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/projects" passHref>
            <Button size="lg">
              View More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;