import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubLink: string
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  imageUrl,
  githubLink 
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map(tech => (
            <span 
              key={tech} 
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Link 
          href={githubLink} 
          target="_blank"
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <Github className="mr-2" size={20} />
          View on GitHub
        </Link>
      </div>
    </motion.div>
  )
}