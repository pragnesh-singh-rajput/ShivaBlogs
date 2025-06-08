
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import MarkdownRenderer from '../components/MarkdownRenderer';
import SEO from '../components/SEO';
import { Calendar, ArrowUp, Book } from 'lucide-react';
import { loadBlogPost } from '../utils/mdxLoader';
import { BlogPost as BlogPostType } from '../hooks/useBlogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const result = await loadBlogPost(id);
        if (result) {
          setPost(result.post);
          setContent(result.content);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-primary/10 rounded mb-4"></div>
              <div className="h-12 bg-primary/10 rounded mb-6"></div>
              <div className="space-y-4">
                <div className="h-4 bg-primary/10 rounded"></div>
                <div className="h-4 bg-primary/10 rounded"></div>
                <div className="h-4 bg-primary/10 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <SEO 
          title="Post Not Found - ShivaBlogs"
          description="The blog post you're looking for doesn't exist."
        />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/" className="cyber-button">
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={`${post.title} - ShivaBlogs`}
        description={post.excerpt}
        keywords={`${post.category}, cybersecurity, tech blog, ${post.title}, Pragnesh Singh Rajput`}
        type="article"
        publishedTime={post.date}
        category={post.category}
      />
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
            >
              <ArrowUp className="h-4 w-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {/* Post Header */}
            <header className="mb-12 animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30">
                  {post.category}
                </span>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                  <span className="mx-2">•</span>
                  <Book className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 glow-text">
                {post.title}
              </h1>
            </header>

            {/* Post Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="cyber-card p-8">
                <MarkdownRenderer content={content} />
              </div>
            </div>

            {/* Post Footer */}
            <footer className="mt-12 pt-8 border-t border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">
                  <p>Written with ⚡ by a cybersecurity professional</p>
                </div>
                <Link to="/" className="cyber-button">
                  More Articles
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
