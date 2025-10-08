/* eslint-disable @next/next/no-img-element */
import { Badge } from '../components/UI/badge';
import { Card } from '../components/UI/card';

const About = () => (
  <section className="py-20 bg-white dark:bg-gray-800">
    <div className="container px-4 mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Building digital experiences that make a difference
        </p>
      </div>

      <div className="grid items-start gap-12 md:grid-cols-2 mb-12">
        {/* Left Column - Profile Image & Quick Stats */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl transform rotate-3 opacity-50"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700">
              <img
                src="/person.svg"
                alt="Profile"
                className="w-64 h-64 rounded-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 text-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">3+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Years Exp</div>
            </Card>
            <Card className="p-4 text-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">20+</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
            </Card>
            <Card className="p-4 text-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">100%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Dedicated</div>
            </Card>
          </div>
        </div>

        {/* Right Column - About Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
              Hi, I&apos;m Manasseh

            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                As a <span className="font-semibold text-gray-900 dark:text-gray-100">Software Engineer</span> with a passion for both mobile and web technologies, I specialize in creating elegant, scalable applications and websites that solve real-world problems.
              </p>
              <p>
                My expertise lies in leveraging modern technologies to build seamless user experiences. From responsive web applications to cross-platform mobile solutions, I bring ideas to life with clean, maintainable code.
              </p>
              <p className="flex items-start gap-2">
                <span>
                  Beyond coding, I&apos;m a lifelong learner who constantly explores new technologies and best practices. When I&apos;m not behind a screen, you&apos;ll find me expressing my creative side through music - I enjoy playing the saxophone
                </span>
                <svg className="w-5 h-5 flex-shrink-0 mt-1 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.5 2c-.83 0-1.5.67-1.5 1.5v.1c-.13.02-.26.04-.39.07l-7.11 1.5C2.61 5.38 2 6.23 2 7.17v10.66c0 .94.61 1.79 1.5 2.01l7.11 1.49c.13.03.26.05.39.07v.1c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5zm-8 6c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm0 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm0 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm0 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm13-9.5c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5z" />
                </svg>
              </p>
            </div>
          </div>

          {/* Core Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Next.js', 'React', 'Dart', 'TypeScript', 'Firebase', 'Node.js', 'Tailwind CSS'].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 text-sm transition-all duration-200 hover:scale-105 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* What I Do */}
          <div className="grid gap-3">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              What I Do
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-200 hover:shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 mb-3">
                  <svg className="w-7 h-7 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">Mobile Development</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cross-platform apps with Flutter</div>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-200 hover:shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 mb-3">
                  <svg className="w-7 h-7 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">Web Development</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Modern web apps with Next.js & React</div>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-200 hover:shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 mb-3">
                  <svg className="w-7 h-7 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">UI/UX Design</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Beautiful, intuitive interfaces</div>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-200 hover:shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 mb-3">
                  <svg className="w-7 h-7 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">Performance</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Fast, optimized applications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;