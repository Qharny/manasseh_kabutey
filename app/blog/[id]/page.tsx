"use client";
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '../../components/UI/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/UI/card';
import { Badge } from '../../components/UI/badge';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "50 Essential Tips for Every Developer",
    excerpt: "A comprehensive guide covering 50 essential tips that every developer should know, from coding best practices to career development and productivity hacks.",
    content: `
      <p>After years of experience in software development, I&apos;ve compiled 50 essential tips that every developer should know. These tips cover everything from coding best practices to career development and productivity hacks.</p>
      
      <div class="flex justify-center my-8">
        <img src="/portfolio.png" alt="Developer Tips" class="rounded-lg shadow-lg max-w-md" />
      </div>
      
      <h2>🏗️ Foundation & Best Practices</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">1. Write Clean, Readable Code</h3>
          <p>Your code should be self-documenting. Use meaningful variable names and write comments for complex logic.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">2. Follow the DRY Principle</h3>
          <p>Don&apos;t Repeat Yourself. Extract common functionality into reusable functions or classes.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">3. Use Version Control</h3>
          <p>Git is essential. Learn it well and make meaningful commit messages.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">4. Write Tests</h3>
          <p>Test-driven development (TDD) helps catch bugs early and improves code quality.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">5. Keep Functions Small</h3>
          <p>A function should do one thing well. If it&apos;s doing multiple things, break it down.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">6. Use Meaningful Names</h3>
          <p>Variables, functions, and classes should have descriptive names that explain their purpose.</p>
        </div>
      </div>
      
      <div class="flex justify-center my-8">
        <img src="/home.png" alt="Coding Best Practices" class="rounded-lg shadow-lg max-w-md" />
      </div>
      
      <h2>🚀 Performance & Optimization</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">7. Optimize Database Queries</h3>
          <p>Use indexes, avoid N+1 queries, and understand your database&apos;s query planner.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">8. Implement Caching</h3>
          <p>Cache frequently accessed data to improve performance and reduce server load.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">9. Minimize HTTP Requests</h3>
          <p>Combine CSS/JS files, use sprites for images, and leverage CDNs.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">10. Use Async/Await</h3>
          <p>Handle asynchronous operations properly to avoid blocking the main thread.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">11. Implement Lazy Loading</h3>
          <p>Load resources only when needed to improve initial page load times.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">12. Use Compression</h3>
          <p>Enable GZIP compression to reduce file sizes and improve load times.</p>
        </div>
      </div>
      
      <h2>🔒 Security Best Practices</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">13. Validate Input Data</h3>
          <p>Always validate and sanitize user input to prevent injection attacks.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">14. Use HTTPS</h3>
          <p>Encrypt data in transit to protect sensitive information.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">15. Implement Authentication</h3>
          <p>Use secure authentication methods and never store passwords in plain text.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">16. Keep Dependencies Updated</h3>
          <p>Regularly update libraries and frameworks to patch security vulnerabilities.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">17. Use Environment Variables</h3>
          <p>Store sensitive configuration in environment variables, not in code.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">18. Implement Rate Limiting</h3>
          <p>Protect your APIs from abuse by implementing rate limiting.</p>
        </div>
      </div>
      
      <div class="flex justify-center my-8">
        <img src="/sparknest.png" alt="Security Practices" class="rounded-lg shadow-lg max-w-md" />
      </div>
      
      <h2>🛠️ Development Workflow</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">19. Use a Linter</h3>
          <p>Configure ESLint, Prettier, or similar tools to maintain code consistency.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">20. Set Up CI/CD</h3>
          <p>Automate testing and deployment to catch issues early and deploy safely.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">21. Use Feature Branches</h3>
          <p>Work on features in separate branches to keep the main branch stable.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">22. Code Review Everything</h3>
          <p>Have another developer review your code before merging to main.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">23. Use TypeScript</h3>
          <p>Add type safety to JavaScript to catch errors at compile time.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">24. Document Your Code</h3>
          <p>Write clear documentation for APIs, functions, and complex algorithms.</p>
        </div>
      </div>
      
      <h2>📚 Learning & Growth</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">25. Read Other People&apos;s Code</h3>
          <p>Study open-source projects to learn new patterns and techniques.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">26. Contribute to Open Source</h3>
          <p>Give back to the community and learn from experienced developers.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">27. Learn Multiple Languages</h3>
          <p>Understanding different paradigms makes you a better programmer.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">28. Practice Problem Solving</h3>
          <p>Use platforms like LeetCode or HackerRank to improve your algorithms skills.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">29. Build Side Projects</h3>
          <p>Apply what you learn by building real applications.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">30. Stay Updated</h3>
          <p>Follow tech blogs, podcasts, and conferences to stay current.</p>
        </div>
      </div>
      
      <div class="flex justify-center my-8">
        <img src="/tsk.png" alt="Learning and Growth" class="rounded-lg shadow-lg max-w-md" />
      </div>
      
      <h2>💼 Career Development</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">31. Build a Portfolio</h3>
          <p>Showcase your best work to potential employers or clients.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">32. Network Actively</h3>
          <p>Attend meetups, conferences, and connect with other developers.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">33. Learn Soft Skills</h3>
          <p>Communication, teamwork, and problem-solving are as important as technical skills.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">34. Mentor Others</h3>
          <p>Teaching others helps solidify your own knowledge.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">35. Negotiate Your Salary</h3>
          <p>Research market rates and don&apos;t be afraid to negotiate.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">36. Specialize Strategically</h3>
          <p>Develop deep expertise in specific areas while maintaining broad knowledge.</p>
        </div>
      </div>
      
      <h2>⚡ Productivity Tips</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">37. Use Keyboard Shortcuts</h3>
          <p>Learn your IDE&apos;s shortcuts to navigate and code faster.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">38. Automate Repetitive Tasks</h3>
          <p>Write scripts to automate boring, repetitive work.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">39. Use Multiple Monitors</h3>
          <p>Increase productivity with additional screen real estate.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">40. Take Regular Breaks</h3>
          <p>Use the Pomodoro Technique to maintain focus and avoid burnout.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">41. Keep a Development Journal</h3>
          <p>Document what you learn and problems you solve for future reference.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">42. Use Version Control Hooks</h3>
          <p>Automate testing and linting with pre-commit hooks.</p>
        </div>
      </div>
      
      <div class="flex justify-center my-8">
        <img src="/tracker1.jpg" alt="Productivity Tips" class="rounded-lg shadow-lg max-w-md" />
      </div>
      
      <h2>🎯 Advanced Concepts</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">43. Understand Design Patterns</h3>
          <p>Learn common patterns like Singleton, Factory, Observer, etc.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">44. Master Data Structures</h3>
          <p>Know when to use arrays, linked lists, trees, graphs, etc.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">45. Learn System Design</h3>
          <p>Understand how to design scalable, distributed systems.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">46. Study Algorithms</h3>
          <p>Know common algorithms and their time/space complexity.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">47. Understand Memory Management</h3>
          <p>Know how garbage collection works and how to avoid memory leaks.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">48. Learn About Concurrency</h3>
          <p>Understand threads, processes, and asynchronous programming.</p>
        </div>
      </div>
      
      <h2>🌟 Final Tips</h2>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">49. Stay Humble</h3>
          <p>There&apos;s always more to learn. Stay curious and open to new ideas.</p>
        </div>
        
        <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 class="font-bold text-lg mb-3">50. Enjoy the Journey</h3>
          <p>Programming is a creative and rewarding profession. Have fun with it!</p>
        </div>
      </div>
      
      <div class="flex justify-center my-8">
        <img src="/tracker2.jpg" alt="Final Tips" class="rounded-lg shadow-lg max-w-md" />
      </div>
      
      <h2>Conclusion</h2>
      <p>These 50 tips represent the collective wisdom of the developer community. Remember that becoming a great developer is a journey, not a destination. Focus on continuous improvement and don&apos;t try to implement everything at once.</p>
      
      <p>Start with the basics and gradually incorporate more advanced practices into your workflow. The most important thing is to keep learning and growing.</p>
      
      <p><em>"The best way to predict the future is to implement it." - Alan Kay</em></p>
    `,
    date: "December 20, 2024",
    category: "Development Tips",
    readTime: "8 min read",
    author: "Manasseh Kabutey"
  },
  {
    id: 2,
    title: "Launching My New Portfolio Website",
    excerpt: "Excited to share my new portfolio website built with Next.js and Tailwind CSS. This project represents my journey in web development and showcases my skills in modern frontend technologies.",
    content: `
      <p>I&apos;m thrilled to announce the launch of my new portfolio website! This has been a project I&apos;ve been working on for the past few months, and I&apos;m excited to finally share it with the world.</p>
      
      <h2>What&apos;s New?</h2>
      <p>This portfolio represents a significant upgrade from my previous version. Built with Next.js 14 and Tailwind CSS, it features:</p>
      <ul>
        <li>Modern, responsive design that works on all devices</li>
        <li>Dark/light mode toggle for better user experience</li>
        <li>Interactive components and smooth animations</li>
        <li>Optimized performance and SEO</li>
        <li>Contact form with email integration</li>
      </ul>
      
      <h2>Technical Stack</h2>
      <p>The website is built using cutting-edge technologies:</p>
      <ul>
        <li><strong>Next.js 14</strong> - For server-side rendering and optimal performance</li>
        <li><strong>TypeScript</strong> - For type safety and better development experience</li>
        <li><strong>Tailwind CSS</strong> - For rapid UI development and consistent styling</li>
        <li><strong>Lucide React</strong> - For beautiful, consistent icons</li>
      </ul>
      
      <h2>Key Features</h2>
      <p>Some of the standout features include:</p>
      <ul>
        <li>Interactive project showcase with detailed descriptions</li>
        <li>Skills section with progress indicators</li>
        <li>Education timeline</li>
        <li>Contact form with real-time validation</li>
        <li>Blog section for sharing thoughts and updates</li>
      </ul>
      
      <h2>What&apos;s Next?</h2>
      <p>This is just the beginning! I plan to continuously improve the portfolio by:</p>
      <ul>
        <li>Adding more interactive elements</li>
        <li>Including a blog section for regular updates</li>
        <li>Integrating analytics to track visitor engagement</li>
        <li>Adding more projects as I complete them</li>
      </ul>
      
      <p>I&apos;m excited to see how this portfolio evolves and helps me connect with potential clients and collaborators. Feel free to explore the site and let me know what you think!</p>
    `,
    date: "December 15, 2024",
    category: "Project Launch",
    readTime: "3 min read",
    author: "Manasseh Kabutey"
  },
  {
    id: 3,
    title: "The Power of Consistency in Software Development",
    excerpt: "Today&apos;s motivational thought: Success in software development isn&apos;t about being perfect every day, but about showing up consistently. Small improvements compound over time into remarkable results.",
    content: `
      <p>Today I want to share a thought that has been on my mind lately - the incredible power of consistency in software development.</p>
      
      <h2>Why Consistency Matters</h2>
      <p>In the world of software development, it&apos;s easy to get caught up in the pursuit of perfection. We see amazing projects on GitHub, read about successful developers, and sometimes feel like we need to be perfect from day one.</p>
      
      <p>But here&apos;s the truth: <strong>Success in software development isn&apos;t about being perfect every day, but about showing up consistently.</strong></p>
      
      <h2>The Compound Effect</h2>
      <p>Small improvements, when applied consistently over time, compound into remarkable results. Here&apos;s what I mean:</p>
      <ul>
        <li>Writing code for 30 minutes every day</li>
        <li>Learning one new concept each week</li>
        <li>Building small projects regularly</li>
        <li>Reading technical articles consistently</li>
      </ul>
      
      <p>These small actions, when done consistently, create a powerful momentum that leads to significant growth over time.</p>
      
      <h2>My Personal Experience</h2>
      <p>I&apos;ve found that the days when I feel most productive aren&apos;t necessarily the days when I code for 8 hours straight. Instead, they&apos;re the days when I maintain my daily routine:</p>
      <ul>
        <li>Morning: Review yesterday&apos;s code and plan today&apos;s tasks</li>
        <li>Afternoon: Focus on coding and problem-solving</li>
        <li>Evening: Learn something new or work on side projects</li>
      </ul>
      
      <h2>Practical Tips for Consistency</h2>
      <p>Here are some strategies that have worked for me:</p>
      <ol>
        <li><strong>Start Small</strong> - Begin with just 15-30 minutes of coding daily</li>
        <li><strong>Track Your Progress</strong> - Use tools like GitHub&apos;s contribution graph to visualize your consistency</li>
        <li><strong>Set Realistic Goals</strong> - Don&apos;t try to learn everything at once</li>
        <li><strong>Create a Routine</strong> - Find a time that works for you and stick to it</li>
        <li><strong>Celebrate Small Wins</strong> - Acknowledge your progress, no matter how small</li>
      </ol>
      
      <h2>Remember</h2>
      <p>Every expert was once a beginner. The difference between those who succeed and those who don&apos;t is often not talent or intelligence, but consistency and persistence.</p>
      
      <p>So today, focus on showing up. Tomorrow, show up again. And the day after that. Before you know it, you&apos;ll look back and be amazed at how far you&apos;ve come.</p>
      
      <p><em>"The only way to do great work is to love what you do." - Steve Jobs</em></p>
    `,
    date: "December 10, 2024",
    category: "Motivation",
    readTime: "2 min read",
    author: "Manasseh Kabutey"
  },
  {
    id: 4,
    title: "Why I Choose Flutter for Mobile Development",
    excerpt: "Exploring the reasons behind my preference for Flutter over other mobile development frameworks. From cross-platform efficiency to the Dart language, here&apos;s what makes Flutter my go-to choice.",
    content: `
      <p>When it comes to mobile app development, I&apos;ve explored various frameworks and technologies. After working with React Native, Xamarin, and native development, I&apos;ve found myself consistently choosing Flutter for my mobile projects. Let me share why.</p>
      
      <h2>What is Flutter?</h2>
      <p>Flutter is Google&apos;s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and provides a rich set of pre-built widgets.</p>
      
      <h2>Why Flutter Stands Out</h2>
      
      <h3>1. True Cross-Platform Development</h3>
      <p>Unlike other frameworks that use bridges or web views, Flutter compiles to native code. This means:</p>
      <ul>
        <li>Better performance compared to hybrid solutions</li>
        <li>Native-like user experience on both iOS and Android</li>
        <li>Consistent behavior across platforms</li>
      </ul>
      
      <h3>2. Hot Reload</h3>
      <p>One of Flutter&apos;s most beloved features is hot reload. This allows developers to:</p>
      <ul>
        <li>See changes instantly without losing app state</li>
        <li>Experiment with UI changes rapidly</li>
        <li>Debug more efficiently</li>
      </ul>
      
      <h3>3. Rich Widget Library</h3>
      <p>Flutter comes with an extensive collection of Material Design and Cupertino widgets:</p>
      <ul>
        <li>Pre-built components that follow platform guidelines</li>
        <li>Customizable widgets for unique designs</li>
        <li>Consistent theming and styling</li>
      </ul>
      
      <h3>4. Dart Language</h3>
      <p>Dart is a modern, object-oriented language that&apos;s:</p>
      <ul>
        <li>Easy to learn for developers familiar with Java, C#, or JavaScript</li>
        <li>Strongly typed, reducing runtime errors</li>
        <li>Optimized for client-side development</li>
      </ul>
      
      <h2>Performance Benefits</h2>
      <p>Flutter&apos;s performance is impressive because:</p>
      <ul>
        <li>It compiles to native ARM code</li>
        <li>Uses Skia graphics engine for smooth animations</li>
        <li>Minimal runtime overhead</li>
        <li>Efficient memory management</li>
      </ul>
      
      <h2>Development Experience</h2>
      <p>From a developer&apos;s perspective, Flutter offers:</p>
      <ul>
        <li>Excellent IDE support with VS Code and Android Studio</li>
        <li>Comprehensive documentation and community support</li>
        <li>Rich ecosystem of packages on pub.dev</li>
        <li>Strong testing framework</li>
      </ul>
      
      <h2>Real-World Results</h2>
      <p>In my experience, Flutter has delivered:</p>
      <ul>
        <li>Faster development cycles</li>
        <li>Reduced maintenance overhead</li>
        <li>Consistent user experience across platforms</li>
        <li>Easier team collaboration</li>
      </ul>
      
      <h2>When to Choose Flutter</h2>
      <p>Flutter is ideal when you need:</p>
      <ul>
        <li>Cross-platform mobile apps</li>
        <li>Rapid prototyping</li>
        <li>Custom UI designs</li>
        <li>Performance-critical applications</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While every project has unique requirements, Flutter has become my go-to choice for mobile development. Its combination of performance, developer experience, and cross-platform capabilities makes it an excellent choice for modern app development.</p>
      
      <p>If you&apos;re considering mobile development, I highly recommend giving Flutter a try. The learning curve is manageable, and the rewards are substantial.</p>
    `,
    date: "December 5, 2024",
    category: "Tech Insights",
    readTime: "4 min read",
    author: "Manasseh Kabutey"
  }
];

const BlogPostPage = () => {
  const params = useParams();
  const router = useRouter();
  const postId = parseInt(params.id as string);
  
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white pt-20">
        <div className="container px-4 mx-auto py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button onClick={() => router.push('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white pt-20">
      <div className="container px-4 mx-auto py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => router.push('/')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        {/* Article */}
        <article className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="secondary">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl leading-tight">
                {post.title}
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                By {post.author}
              </p>
            </CardHeader>
          </Card>
          
                     <Card>
             <CardContent>
               <div 
                 className="mt-6 blog-content"
                 dangerouslySetInnerHTML={{ __html: post.content }}
               />
             </CardContent>
           </Card>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage; 