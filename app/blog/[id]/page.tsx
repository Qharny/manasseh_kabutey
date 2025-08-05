"use client";
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
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
    title: "Launching My New Portfolio Website",
    excerpt: "Excited to share my new portfolio website built with Next.js and Tailwind CSS. This project represents my journey in web development and showcases my skills in modern frontend technologies.",
    content: `
      <p>I'm thrilled to announce the launch of my new portfolio website! This has been a project I've been working on for the past few months, and I'm excited to finally share it with the world.</p>
      
      <h2>What's New?</h2>
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
      
      <h2>What's Next?</h2>
      <p>This is just the beginning! I plan to continuously improve the portfolio by:</p>
      <ul>
        <li>Adding more interactive elements</li>
        <li>Including a blog section for regular updates</li>
        <li>Integrating analytics to track visitor engagement</li>
        <li>Adding more projects as I complete them</li>
      </ul>
      
      <p>I'm excited to see how this portfolio evolves and helps me connect with potential clients and collaborators. Feel free to explore the site and let me know what you think!</p>
    `,
    date: "December 15, 2024",
    category: "Project Launch",
    readTime: "3 min read",
    author: "Manasseh Kabutey"
  },
  {
    id: 2,
    title: "The Power of Consistency in Software Development",
    excerpt: "Today's motivational thought: Success in software development isn't about being perfect every day, but about showing up consistently. Small improvements compound over time into remarkable results.",
    content: `
      <p>Today I want to share a thought that has been on my mind lately - the incredible power of consistency in software development.</p>
      
      <h2>Why Consistency Matters</h2>
      <p>In the world of software development, it's easy to get caught up in the pursuit of perfection. We see amazing projects on GitHub, read about successful developers, and sometimes feel like we need to be perfect from day one.</p>
      
      <p>But here's the truth: <strong>Success in software development isn't about being perfect every day, but about showing up consistently.</strong></p>
      
      <h2>The Compound Effect</h2>
      <p>Small improvements, when applied consistently over time, compound into remarkable results. Here's what I mean:</p>
      <ul>
        <li>Writing code for 30 minutes every day</li>
        <li>Learning one new concept each week</li>
        <li>Building small projects regularly</li>
        <li>Reading technical articles consistently</li>
      </ul>
      
      <p>These small actions, when done consistently, create a powerful momentum that leads to significant growth over time.</p>
      
      <h2>My Personal Experience</h2>
      <p>I've found that the days when I feel most productive aren't necessarily the days when I code for 8 hours straight. Instead, they're the days when I maintain my daily routine:</p>
      <ul>
        <li>Morning: Review yesterday's code and plan today's tasks</li>
        <li>Afternoon: Focus on coding and problem-solving</li>
        <li>Evening: Learn something new or work on side projects</li>
      </ul>
      
      <h2>Practical Tips for Consistency</h2>
      <p>Here are some strategies that have worked for me:</p>
      <ol>
        <li><strong>Start Small</strong> - Begin with just 15-30 minutes of coding daily</li>
        <li><strong>Track Your Progress</strong> - Use tools like GitHub's contribution graph to visualize your consistency</li>
        <li><strong>Set Realistic Goals</strong> - Don't try to learn everything at once</li>
        <li><strong>Create a Routine</strong> - Find a time that works for you and stick to it</li>
        <li><strong>Celebrate Small Wins</strong> - Acknowledge your progress, no matter how small</li>
      </ol>
      
      <h2>Remember</h2>
      <p>Every expert was once a beginner. The difference between those who succeed and those who don't is often not talent or intelligence, but consistency and persistence.</p>
      
      <p>So today, focus on showing up. Tomorrow, show up again. And the day after that. Before you know it, you'll look back and be amazed at how far you've come.</p>
      
      <p><em>"The only way to do great work is to love what you do." - Steve Jobs</em></p>
    `,
    date: "December 10, 2024",
    category: "Motivation",
    readTime: "2 min read",
    author: "Manasseh Kabutey"
  },
  {
    id: 3,
    title: "Why I Choose Flutter for Mobile Development",
    excerpt: "Exploring the reasons behind my preference for Flutter over other mobile development frameworks. From cross-platform efficiency to the Dart language, here's what makes Flutter my go-to choice.",
    content: `
      <p>When it comes to mobile app development, I've explored various frameworks and technologies. After working with React Native, Xamarin, and native development, I've found myself consistently choosing Flutter for my mobile projects. Let me share why.</p>
      
      <h2>What is Flutter?</h2>
      <p>Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and provides a rich set of pre-built widgets.</p>
      
      <h2>Why Flutter Stands Out</h2>
      
      <h3>1. True Cross-Platform Development</h3>
      <p>Unlike other frameworks that use bridges or web views, Flutter compiles to native code. This means:</p>
      <ul>
        <li>Better performance compared to hybrid solutions</li>
        <li>Native-like user experience on both iOS and Android</li>
        <li>Consistent behavior across platforms</li>
      </ul>
      
      <h3>2. Hot Reload</h3>
      <p>One of Flutter's most beloved features is hot reload. This allows developers to:</p>
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
      <p>Dart is a modern, object-oriented language that's:</p>
      <ul>
        <li>Easy to learn for developers familiar with Java, C#, or JavaScript</li>
        <li>Strongly typed, reducing runtime errors</li>
        <li>Optimized for client-side development</li>
      </ul>
      
      <h2>Performance Benefits</h2>
      <p>Flutter's performance is impressive because:</p>
      <ul>
        <li>It compiles to native ARM code</li>
        <li>Uses Skia graphics engine for smooth animations</li>
        <li>Minimal runtime overhead</li>
        <li>Efficient memory management</li>
      </ul>
      
      <h2>Development Experience</h2>
      <p>From a developer's perspective, Flutter offers:</p>
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
      
      <p>If you're considering mobile development, I highly recommend giving Flutter a try. The learning curve is manageable, and the rewards are substantial.</p>
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
              The blog post you're looking for doesn't exist.
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