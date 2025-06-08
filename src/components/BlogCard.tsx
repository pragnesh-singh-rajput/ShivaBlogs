
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUp } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  // Format date for better display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <article 
      className="cyber-card p-6 h-full animate-fade-in-up group hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30 pulse">
          {post.category}
        </span>
        <div className="flex items-center text-muted-foreground text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          {formatDate(post.date)}
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 glow-text">
        {post.title}
      </h2>

      <p className="text-muted-foreground mb-4 line-clamp-3">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-muted-foreground">{post.readTime}</span>
        <Link 
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-all duration-300 group-hover:translate-x-1"
        >
          Read More
          <ArrowUp className="h-4 w-4 ml-1 rotate-45 transition-transform group-hover:rotate-90" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
