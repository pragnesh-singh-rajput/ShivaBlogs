
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUp, Clock, BookOpen } from 'lucide-react';

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
      className="cyber-card p-6 h-full animate-fade-in-up group hover:scale-105 transition-all duration-300 relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient overlay for featured posts */}
      {post.featured && (
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl" />
      )}
      
      {/* Featured badge */}
      {post.featured && (
        <div className="absolute top-2 right-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/40 pulse">
          Featured
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30 pulse">
          {post.category}
        </span>
        <div className="flex items-center text-muted-foreground text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          {formatDate(post.date)}
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 glow-text leading-tight">
        {post.title}
      </h2>

      <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center text-sm text-muted-foreground gap-3">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </div>
          <div className="flex items-center">
            <BookOpen className="h-3 w-3 mr-1" />
            Read
          </div>
        </div>
        <Link 
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-all duration-300 group-hover:translate-x-1 font-medium"
        >
          Read More
          <ArrowUp className="h-4 w-4 ml-1 rotate-45 transition-transform group-hover:rotate-90" />
        </Link>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none" />
    </article>
  );
};

export default BlogCard;
