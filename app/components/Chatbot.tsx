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

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Manasseh's virtual assistant. How can I help you?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const GOOGLE_API_KEY = "AIzaSyAjcBOB-QqqsUkCIeJjDpMzEcr9e2alCm0";

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
      // This is a simulated response since we can't directly use the API key in the frontend
      // In a real application, this should be handled through a backend service
      const response = await simulateAIResponse(inputValue);
      
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

  // Simulate AI response (in production, this would call the actual Google API through a backend)
  const simulateAIResponse = async (query: string): Promise<string> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple response logic
    if (query.toLowerCase().includes("experience") || query.toLowerCase().includes("work")) {
      return "Manasseh has experience as a Mobile Developer Intern at Cross Switch LTD and EvoSoft Tech, as well as Web Development experience. You can check the Experience page for more details!";
    } else if (query.toLowerCase().includes("skill") || query.toLowerCase().includes("technology")) {
      return "Manasseh is skilled in Dart, JavaScript, PHP, Python, Kotlin, Flutter, Next.js, Node.js, Tailwind CSS, and more. Check out the Skills page!";
    } else if (query.toLowerCase().includes("project")) {
      return "Manasseh has worked on several projects including Smart Exam Attendance System, EduAtlas, TrackerMate, and more. Visit the Projects page for details!";
    } else if (query.toLowerCase().includes("contact") || query.toLowerCase().includes("email") || query.toLowerCase().includes("reach")) {
      return "You can contact Manasseh via email at kabuteymanasseh5@gmail.com or check the Contact page for more options.";
    } else if (query.toLowerCase().includes("education") || query.toLowerCase().includes("study")) {
      return "Manasseh has a Bachelor of Science in Computer Science and Engineering from University of Mines and Technology (UMaT) and a Certificate in Software Development from GI-KACE.";
    } else if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hi")) {
      return "Hello! How can I help you learn more about Manasseh today?";
    } else {
      return "Thanks for your message! If you'd like to know more about Manasseh's skills, projects, experience, or contact information, feel free to ask specific questions.";
    }
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