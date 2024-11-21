import { Badge } from '../components/UI/badge';

const About = () => (
  <section className="py-20 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
          As a Software Engineer with a passion for both mobile and web technologies, I specialize in creating applications and websites. My expertise lies in using Angular for web development and Flutter for mobile app development. I'm constantly striving to enhance my coding skills and develop innovative solutions. In addition to my technical pursuits, I have a creative side as well - I enjoy playing the saxophone. 🎷
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'].map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div className="relative h-64 bg-gray-200 dark:bg-gray-700 rounded-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-500">Profile Image</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;