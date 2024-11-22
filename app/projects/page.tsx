"use client";
/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const AllProjects = () => {
  const projectCategories = [
    {
      category: "Web Development",
      projects: [
        {
          title: "E-commerce Platform",
          description: "Full-stack e-commerce solution with React and Node.js",
          tech: ["React", "Node.js", "MongoDB", "Express"],
          image: "/api/placeholder/400/200",
          github: "#",
          live: "#"
        },
        {
          title: "Task Management App",
          description: "Collaborative task management tool with real-time updates",
          tech: ["Next.js", "Firebase", "Tailwind", "React"],
          image: "/api/placeholder/400/200",
          github: "#",
          live: "#"
        },
        {
          title: "Portfolio Website",
          description: "Personal portfolio showcasing skills and projects",
          tech: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
          image: "/api/placeholder/400/200",
          github: "#",
          live: "#"
        }
      ]
    },
    {
      category: "Mobile Development",
      projects: [
        {
          title: "Fitness Tracking App",
          description: "Mobile app for tracking workouts and fitness progress",
          tech: ["Flutter", "Firebase", "GetX"],
          image: "/api/placeholder/400/200",
          github: "#",
          live: "#"
        },
        {
          title: "Recipe Sharing Social App",
          description: "Platform for sharing and discovering recipes",
          tech: ["React Native", "Expo", "Firebase"],
          image: "/api/placeholder/400/200",
          github: "#",
          live: "#"
        }
      ]
    }
  ];

  return (
    <div className="container px-4 py-20 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-center">My Projects</h1>
      {projectCategories.map((category) => (
        <div key={category.category} className="mb-16">
          <h2 className="mb-8 text-2xl font-semibold text-center">
            {category.category}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.projects.map((project) => (
              <Card 
                key={project.title} 
                className="transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-48 rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;