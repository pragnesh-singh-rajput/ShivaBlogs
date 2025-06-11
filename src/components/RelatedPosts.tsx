
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../hooks/useBlogPosts';

interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  maxPosts?: number;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ 
  currentPost, 
  allPosts, 
  maxPosts = 3 
}) => {
  // Find related posts based on category and exclude current post
  // Add null checks to prevent runtime errors
  const relatedPosts = allPosts
    .filter(post => 
      post?.id !== currentPost?.id && 
      post?.category && currentPost?.category &&
      (post.category === currentPost.category || 
       post.title?.toLowerCase().includes(currentPost.category.toLowerCase()))
    )
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="cyber-card p-6">
      <h3 className="text-xl font-bold mb-4 text-primary glow-text">Related Articles</h3>
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block group"
          >
            <div className="p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:bg-primary/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(post.date)}
                </div>
              </div>
              <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {post.title}
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
