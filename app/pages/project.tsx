import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/UI/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/UI/card";
import { Badge } from '../components/UI/badge';

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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-t-lg h-48 w-full object-cover"
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
        </div>
      </section>
    );
  };
  
  export default Projects;