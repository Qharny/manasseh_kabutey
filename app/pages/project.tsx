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
      image: "https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/images/beads.png?token=GHSAT0AAAAAACZHFHJVE4RJ2OMEM3X6JLLOZ2A5ZZA",
      github: "#",
      live: "https://bead-ochre.vercel.app/"
    },
    {
      title: "Tracking App",
      description: "Mobile app for tracking location of missing phons",
      tech: ["Flutter", "Firebase", "GetX"],
      image: "https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/images/tracker2.jpg?token=GHSAT0AAAAAACZHFHJVSX6FRSZNGZP7G2FKZ2A55LQ",
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