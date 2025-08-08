'use client';

import React, { useState, useRef, useEffect } from "react";
import { Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Portfolio information database
const portfolioData = {
  personal: {
    name: "Manasseh",
    email: "kabuteymanasseh5@gmail.com",
    location: "Ghana",
    about: "I'm a passionate software developer with experience in mobile and web development."
  },
  experience: [
    {
      title: "Mobile Developer Intern",
      company: "Cross Switch LTD",
      period: "2023",
      description: "Developed mobile applications using Flutter and Dart."
    },
    {
      title: "Mobile Developer Intern",
      company: "EvoSoft Tech",
      period: "2022",
      description: "Worked on Android applications using Kotlin."
    },
    {
      title: "Web Developer",
      company: "Freelance",
      period: "2021-Present",
      description: "Created responsive websites using modern technologies."
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "University of Mines and Technology (UMaT)",
      year: "2018-2022"
    },
    {
      degree: "Certificate in Software Development",
      institution: "GI-KACE",
      year: "2022"
    }
  ],
  skills: {
    languages: ["Dart", "JavaScript", "PHP", "Python", "Kotlin", "TypeScript"],
    frameworks: ["Flutter", "Next.js", "React", "Node.js", "Express"],
    other: ["Tailwind CSS", "Firebase", "MongoDB", "Git", "RESTful APIs", "SQL"]
  },
  projects: [
    {
      name: "Smart Exam Attendance System",
      description: "An automated system for tracking student attendance during exams using facial recognition.",
      technologies: ["Python", "OpenCV", "Flask"]
    },
    {
      name: "EduAtlas",
      description: "Educational platform connecting students with tutors and resources.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      name: "TrackerMate",
      description: "A mobile app for tracking personal habits and daily activities.",
      technologies: ["Flutter", "Firebase"]
    }
  ]
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
              text: "Hi there! I&apos;m Manasseh&apos;s virtual assistant. How can I help you?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await generateResponse(inputValue);
      
      const botMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting response:", error);
      const errorMessage: Message = {
        text: "Sorry, I couldn't process your request. Please try again.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Natural language understanding and response generation
  const generateResponse = async (query: string): Promise<string> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const normalizedQuery = query.toLowerCase();
    
    // Greetings
    if (/^(hi|hello|hey|greetings|howdy|good (morning|afternoon|evening))$/i.test(normalizedQuery)) {
      return "Hello! I&apos;m Manasseh&apos;s portfolio assistant. How can I help you today?";
    }
    
    // Check for common questions in multiple ways
    if (containsAny(normalizedQuery, ["who", "about", "tell me about", "info about", "biography", "background"]) && 
        containsAny(normalizedQuery, ["you", "manasseh", "himself", "portfolio owner"])) {
      return `${portfolioData.personal.about} He&apos;s currently based in ${portfolioData.personal.location} and specializes in mobile and web development.`;
    }

    // Experience queries
    if (containsAny(normalizedQuery, ["work", "job", "experience", "career", "profession", "employment"])) {
      const experiences = portfolioData.experience.map(exp => 
        `${exp.title} at ${exp.company} (${exp.period}): ${exp.description}`
      ).join("\n\n");
      
      return `Here&apos;s Manasseh&apos;s work experience:\n\n${experiences}\n\nWould you like more details about any specific role?`;
    }

    // Skills queries
    if (containsAny(normalizedQuery, ["skill", "technology", "tech stack", "programming", "language", "framework", "tool"])) {
      return `Manasseh is skilled in:\n\n• Languages: ${portfolioData.skills.languages.join(", ")}\n• Frameworks: ${portfolioData.skills.frameworks.join(", ")}\n• Other: ${portfolioData.skills.other.join(", ")}\n\nIs there a specific technology you'd like to know more about?`;
    }

    // Project queries
    if (containsAny(normalizedQuery, ["project", "portfolio", "work", "created", "built", "developed", "app", "application", "website"])) {
      const projects = portfolioData.projects.map(proj => 
        `${proj.name}: ${proj.description} (Built with: ${proj.technologies.join(", ")})`
      ).join("\n\n");
      
      return `Here are some of Manasseh&apos;s notable projects:\n\n${projects}\n\nWould you like me to elaborate on any specific project?`;
    }

    // Education queries
    if (containsAny(normalizedQuery, ["education", "study", "degree", "university", "college", "school", "certificate", "qualification"])) {
      const education = portfolioData.education.map(edu => 
        `${edu.degree} from ${edu.institution} (${edu.year})`
      ).join("\n\n");
      
      return `Manasseh&apos;s educational background:\n\n${education}`;
    }

    // Contact queries
    if (containsAny(normalizedQuery, ["contact", "reach", "email", "phone", "message", "get in touch", "connect", "hire"])) {
      return `You can contact Manasseh via email at ${portfolioData.personal.email}. Would you like me to provide more contact information?`;
    }

    // Specific project inquiries
    const projectMatch = portfolioData.projects.find(project => 
      normalizedQuery.includes(project.name.toLowerCase())
    );
    
    if (projectMatch) {
      return `${projectMatch.name} is a ${projectMatch.description} It was built using ${projectMatch.technologies.join(", ")}. Would you like to know more about this or other projects?`;
    }

    // Specific technology inquiries
    const allTechnologies = [
      ...portfolioData.skills.languages, 
      ...portfolioData.skills.frameworks, 
      ...portfolioData.skills.other
    ];
    
    const techMatch = allTechnologies.find(tech => 
      normalizedQuery.includes(tech.toLowerCase())
    );
    
    if (techMatch) {
      return `Yes, Manasseh is proficient in ${techMatch}. Would you like to know about other technologies he uses or projects where he&apos;s applied ${techMatch}?`;
    }

    // Thanks or appreciation
    if (containsAny(normalizedQuery, ["thanks", "thank you", "appreciate", "helpful"])) {
      return "You&apos;re welcome! I&apos;m happy to help. Is there anything else you&apos;d like to know about Manasseh?";
    }

    // Goodbye
    if (containsAny(normalizedQuery, ["bye", "goodbye", "see you", "farewell"])) {
      return "Thank you for your interest in Manasseh&apos;s portfolio! Feel free to return if you have more questions. Have a great day!";
    }

    // For queries that don't match any category
    return "I&apos;m not sure I understood your question. You can ask me about Manasseh&apos;s experience, skills, projects, education, or contact information. How can I help you learn more about Manasseh?";
  };

  // Helper function to check if a string contains any of the keywords
  const containsAny = (text: string, keywords: string[]): boolean => {
    return keywords.some(keyword => text.includes(keyword.toLowerCase()));
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 rounded-full p-4 shadow-xl z-50 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 scale-110 hover:scale-125`}
        aria-label="Chat with AI assistant"
      >
        <Bot size={28} className="text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-28 right-8 w-96 sm:w-[450px] rounded-2xl shadow-2xl z-50 flex flex-col ${
          theme === 'dark' 
            ? "bg-gray-800 border border-gray-700" 
            : "bg-white border border-gray-200"
        }`}>
          {/* Chat Header */}
          <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-indigo-600 text-white rounded-t-2xl">
            <div className="flex items-center">
              <Bot size={24} className="mr-3" />
              <h3 className="font-semibold text-lg">Portfolio Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 rounded-full hover:bg-indigo-700/50 text-white"
            >
              ✕
            </Button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-6 overflow-y-auto max-h-[500px] min-h-[400px]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 max-w-[85%] ${
                  message.isUser ? "ml-auto" : "mr-auto"
                }`}
              >
                <div
                  className={`p-4 rounded-2xl ${
                    message.isUser
                      ? "bg-indigo-600 text-white rounded-tr-none"
                      : theme === "dark"
                      ? "bg-gray-700 text-white rounded-tl-none"
                      : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-xs mt-2 ${
                    message.isUser ? "text-right" : ""
                  } text-gray-500 dark:text-gray-400`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center justify-center space-x-1 mb-4 max-w-[85%] mr-auto">
                <div className="p-4 rounded-2xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-indigo-600 animate-bounce"></div>
                    <div className="w-3 h-3 rounded-full bg-indigo-600 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-3 h-3 rounded-full bg-indigo-600 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-700 p-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:bg-gray-700 dark:text-white text-base"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6"
            >
              <Send size={20} />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;