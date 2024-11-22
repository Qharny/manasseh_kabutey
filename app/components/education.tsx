import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

// Define the Education type
interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[]; // Optional property
  relevantCourses: string[];
}

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "University of Mines and Technology",
    location: "Tarkwa, Ghana",
    period: "2023 - 2026 | pursing",
    description: "Focused on software engineering, algorithms, and data structures. Participated in various coding competitions and hackathons.",
    // achievements: [
    //   "Dean's List for Academic Excellence",
    //   "First Class Honours",
    //   "Best Student in Mobile App Development",
    // ],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management",
      "Web Development",
      "Mobile App Development",
      "Artificial Intelligence",
    ],
  },
  {
    degree: "Certification in Software Development",
    institution: "Ghana Indian - Kofi Annan Centre of Excellence",
    location: "Ministries, Ghana",
    period: "January 2022 - April 2026",
    description: "Focused on software engineering, web development and database.",
    achievements: [
      "Certificate",
    ],
    relevantCourses: [
      "Software Engineering",
      "Database Management",
      "Web Development",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Sogakope Senior High",
    location: "Sogakope, Volta Ghana",
    period: "2018 - 2021",
    description: "Completed secondary education with distinction in Science and Mathematics.",
    achievements: [
      "Valedictorian",
      "Member of Coding Club",
    //   "National Science & Math Competition Finalist",
    ],
    relevantCourses: [
      "Elective Mathematics",
      "Elective Information and Communicaation Technology",
      "Physics",
      "Chemistry",
    ],
  },
];

const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
  <Card className="mb-8 transition-shadow duration-300 hover:shadow-lg">
    <CardContent className="p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-primary">
            {education.degree}
          </h3>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <GraduationCap className="w-4 h-4" />
            <span>{education.institution}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{education.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{education.period}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-400">
        {education.description}
      </p>

      <div className="mt-6">
        <h4 className="mb-2 font-semibold">Achievements</h4>
        <ul className="space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
          {education.achievements?.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 font-semibold">Relevant Courses</h4>
        <div className="flex flex-wrap gap-2">
          {education.relevantCourses.map((course, index) => (
            <Badge key={index} variant="secondary">
              {course}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Education = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Education</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My academic journey and achievements that have shaped my professional career.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <div key={index} className="relative">
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-6 w-0.5 h-full bg-gray-200 dark:bg-gray-700" />
              )}
              <EducationCard education={education} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;