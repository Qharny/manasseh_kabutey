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
          description: "Full-stack e-commerce solution with HTML, Tailwind, JavaScript and firebase",
          tech: ["HTML", "Tailwind", "JavaScript", "Firebase"],
          image: "https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/images/beads.png?token=GHSAT0AAAAAACZHFHJVE4RJ2OMEM3X6JLLOZ2A5ZZA",
          github: "#",
          live: "https://bead-ochre.vercel.app/"
        },
        {
          title: "Food E-comerce Platform",
          description: "E-commerce solution with HTML, CSS, Tailwind ",
          tech: ["HTML", "CSS", "JavaScript"],
          image: "https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/images/dine.png?token=GHSAT0AAAAAACZHFHJUWAYYDPSFCNPW6M3MZ2A523A",
          github: "#",
          live: "https://lets-dine-six.vercel.app/"
        },
        {
          title: "Portfolio Website",
          description: "Personal portfolio showcasing skills and projects",
          tech: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
          image: "https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/images/portfolio.png?token=GHSAT0AAAAAACZHFHJV2SQNMNCQAZ3KJPLWZ2A53XQ",
          github: "#",
          live: "https://manassehkabutey.vercel.app/"
        },
        {
          title: "Shipping Company Portfolio",
          description: "Companies portfolio showcasing their service and products",
          tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
          image: "https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/images/tsk.png?token=GHSAT0AAAAAACZHFHJVSPL65FXNHY7YP4OYZ2A56IA",
          github: "#",
          live: "https://tsk-silk.vercel.app/"
        },
        {
          title: "Software Company Portfolio",
          description: "Companies portfolio showcasing their service and products",
          tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
          image: "https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/images/sparknest.png?token=GHSAT0AAAAAACZHFHJUL2W7JCD6IL2YKKLKZ2A5YGA",
          github: "#",
          live: "https://sparknest.tech/"
        },
      ]
    },
    {
      category: "Mobile Development",
      projects: [
        {
          title: "Tracking App",
          description: "Mobile app for tracking location of missing phons",
          tech: ["Flutter", "Firebase", "GetX"],
          image: "https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/images/tracker1.jpg?token=GHSAT0AAAAAACZHFHJVWTJB7DBJKUKGIYFCZ2A54PA",
          github: "https://github.com/Qharny/TrackerMate.git",
          live: "https://github.com/Qharny/TrackerMate/releases/download/v1.0.0/app-release.apk"
        },
        {
          title: "EduAtlas",
          description: "Platform for that shows University and Colleges by typing country name",
          tech: ["Flutter", "Dart"],
          image: "https://raw.githubusercontent.com/Qharny/manasseh_kabutey/refs/heads/main/public/images/edu.jpg?token=GHSAT0AAAAAACZHFHJVKFOHV67ZW6NUREI2Z2A6N5Q",
          github: "https://github.com/Qharny/EduAtlas_",
          live: "#"
        }
      ]
    },
    {
      category: "Console Application",
      projects: [
        {
          title: "Evoting System",
          description: "A voting system for elections",
          tech: ["dart", "local Storage"],
          image: "/api/placeholder/400/200",
          github: "https://github.com/Qharny/E-voting.git",
          live: "https://github.com/Qharny/E-voting.git"
        },
        {
          title: "Chat Sever",
          description: "This project is a simple chat server implemented in Dart using WebSockets. It allows multiple clients to connect and exchange messages in real-time.",
          tech: ["dart", "websocket"],
          image: "/api/placeholder/400/200",
          github: "https://github.com/Qharny/chat_server.git",
          live: "https://github.com/Qharny/chat_server/releases/tag/v1.0.0"
        },
        {
          title: "Web Scrapper",
          description: "A versatile command-line web scraper built with Dart. This tool allows you to scrape web pages and save the extracted data in various formats.",
          tech: ["dart"],
          image: "/api/placeholder/400/200",
          github: "https://github.com/Qharny/Dart_Web_Scraper.git",
          live: "https://github.com/Qharny/Dart_Web_Scraper.git"
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