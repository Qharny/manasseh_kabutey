"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/UI/card';
import { Badge } from '../components/UI/badge';
import { useRouter } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "50 Essential Tips for Every Developer",
    excerpt: "Whether you are starting to program or you are twenty years into your career, there is something here for you. Enjoy!",
    date: "March 22, 2025",
    category: "Development Tips",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Launching My New Portfolio Website",
    excerpt: "Excited to share my new portfolio website built with Next.js and Tailwind CSS. This project represents my journey in web development and showcases my skills in modern frontend technologies.",
    date: "December 15, 2024",
    category: "Project Launch",
    readTime: "3 min read"
  },
  {
    id: 3,
    title: "The Power of Consistency in Software Development",
    excerpt: "Today&apos;s motivational thought: Success in software development isn&apos;t about being perfect every day, but about showing up consistently. Small improvements compound over time into remarkable results.",
    date: "December 10, 2024",
    category: "Motivation",
    readTime: "2 min read"
  },
  {
    id: 4,
    title: "Why I Choose Flutter for Mobile Development",
    excerpt: "Exploring the reasons behind my preference for Flutter over other mobile development frameworks. From cross-platform efficiency to the Dart language, here&apos;s what makes Flutter my go-to choice.",
    date: "December 5, 2024",
    category: "Tech Insights",
    readTime: "4 min read"
  }
];

const Blog = () => {
  const router = useRouter();

  const handleReadMore = (postId: number) => {
    router.push(`/blog/${postId}`);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing my thoughts on technology, project launches, and motivational insights from my journey as a software engineer.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <button 
                  onClick={() => handleReadMore(post.id)}
                  className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline cursor-pointer"
                >
                  Read more →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            More posts coming soon...
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Subscribe to stay updated with new posts about projects, tech insights, and motivation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog; 