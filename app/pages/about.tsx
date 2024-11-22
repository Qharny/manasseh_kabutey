/* eslint-disable @next/next/no-img-element */
import { Badge } from '../components/UI/badge';

const About = () => (
  <section className="py-20 bg-white dark:bg-gray-800">
    <div className="container px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">About Me</h2>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
          As a Software Engineer with a passion for both mobile and web technologies, I specialize in creating applications and websites. My expertise lies in using Angular for web development and Flutter for mobile app development. I am constantly striving to enhance my coding skills and develop innovative solutions. In addition to my technical pursuits, I have a creative side as well - I enjoy playing the saxophone. 🎷
          </p>
          <div className="flex flex-wrap gap-2">
            {['Flutter', 'Next Js', 'Dart', 'Firebase' ].map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div className="relative h-64 bg-gray-200 rounded-lg dark:bg-gray-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/public/profile1.png" alt="Profile" className="w-32 h-32 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;