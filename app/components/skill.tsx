import React from 'react';
// import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 40 },
      { name: "Next.js", level: 45 },
      { name: "TypeScript", level: 30 },
      { name: "React", level: 10 },
      { name: "Tailwind CSS", level: 60 },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", level: 60 },
      { name: "Android", level: 30 },
      { name: "iOS", level: 40 },
      { name: "Kotlin", level: 20 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 40 },
      { name: "Express", level: 40 },
      { name: "MongoDB", level: 45 },
      { name: "PHP", level: 50 },
      { name: "REST APIs", level: 30 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 40 },
      { name: "Github", level: 70 },
      { name: "Firebase", level: 85 },
    ],
  },
];

const SkillCard: React.FC<{ title: string; skills: { name: string; level: number }[] }> = ({ title, skills }) => (
  <Card className="h-full">
    <CardContent className="p-6">
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{skill.name}</span>
              {/* <Badge variant="secondary">{skill.level}%</Badge> */}
            </div>
            {/* <Progress value={skill.level} className="h-2" /> */}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Technical Skills</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A comprehensive overview of my technical skills and proficiency levels
            across different areas of software development.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
