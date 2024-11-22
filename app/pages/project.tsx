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
        description: "Full-stack e-commerce solution with React and Node.js",
        tech: ["React", "Node.js", "MongoDB"],
        image: "/api/placeholder/400/200",
        github: "#",
        live: "#"
      },
      {
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates",
        tech: ["Next.js", "Firebase", "Tailwind"],
        image: "/api/placeholder/400/200",
        github: "#",
        live: "#"
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
            <Link href="/projects/index.tsx" passHref>
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