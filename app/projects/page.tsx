"use client";
/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { title } from "process";

const AllProjects = () => {
  const projectCategories = [
    {
      category: "Web Development",
      projects: [
        {
          title: "E-commerce Platform",
          description: "Full-stack e-commerce solution with HTML, Tailwind, JavaScript and firebase",
          tech: ["HTML", "Tailwind", "JavaScript", "Firebase"],
          image: "/beads.png",
          github: "#",
          live: "https://bead-ochre.vercel.app/"
        },
        {
          title: "Food E-comerce Platform",
          description: "E-commerce solution with HTML, CSS, Tailwind ",
          tech: ["HTML", "CSS", "JavaScript"],
          image: "/dine.png",
          github: "#",
          live: "https://lets-dine-six.vercel.app/"
        },
        {
          title: "Portfolio Website",
          description: "Personal portfolio showcasing skills and projects",
          tech: ["Next.js", "TypeScript", "Tailwind", "Shadcn/UI"],
          image: "/portfolio.png",
          github: "#",
          live: "https://manassehkabutey.vercel.app/"
        },
        {
          title: "Shipping Company Portfolio",
          description: "Companies portfolio showcasing their service and products",
          tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
          image: "/tsk.png",
          github: "#",
          live: "https://tsk-silk.vercel.app/"
        },
        {
          title: "Software Company Portfolio",
          description: "Companies portfolio showcasing their service and products",
          tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
          image: "/sparknest.png",
          github: "#",
          live: "https://sparknest.tech/"
        },
      ]
    },
    {
      category: "Mobile Development",
      projects: [
        {
          title: "Face Recognition Attendance System",
          description: "FacePassX is a Flutter-based mobile application that uses facial recognition technology to automate student attendance tracking in educational institutions. The system provides a secure, efficient, and contactless method for recording student attendance.",
          tech: ["Flutter", "supabase", "Custom API endpoint"],
          image: "/face.png",
          github: "",
          live: "https://github.com/Qharny/FacePassX/releases/download/v1.1.0/app-release.apk"
        },
        {
          title: "Tracking App",
          description: "Mobile app for tracking location of missing phones",
          tech: ["Flutter", "Firebase", "GetX"],
          image: "/tracker1.jpg",
          github: "https://github.com/Qharny/TrackerMate.git",
          live: "https://github.com/Qharny/TrackerMate/releases/download/v1.0.0/app-release.apk"
        },
        {
          title: "EduAtlas",
          description: "Platform for that shows University and Colleges by typing country name",
          tech: ["Flutter", "Dart"],
          image: "/edu.jpg",
          github: "https://github.com/Qharny/EduAtlas_",
          live: "#"
        },
        {
          title: "AaeroGuard",
          description: "AeroGuard is a sophisticated IoT smoke detector application built with Flutter and Firebase. It provides real-time monitoring and alerts for smoke detection through various IoT devices such as ESP8266, ESP32, and Arduino.",
          tech: ["Flutter", "Firebase", "IoT"],
          image: "/home.png",
          github: "",
          live: "#"
        }
      ]
    },
    {
      category: "Console Application",
      projects: [
        {
          title: "Zip Extractor",
          description: "A powerful, user-friendly command-line tool to extract multiple ZIP files from a source directory to multiple destination directories simultaneously.",
          tech: ["dart"],
          image: "/zip.png",
          github: "https://github.com/Qharny/zip_extractor.git",
          live: "https://github.com/Qharny/zip_extractor/releases/tag/v1.0.0"
        },
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