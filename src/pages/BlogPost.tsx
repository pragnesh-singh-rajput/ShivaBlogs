import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import MarkdownRenderer from '../components/MarkdownRenderer';
import SocialShare from '../components/SocialShare';
import RelatedPosts from '../components/RelatedPosts';
import TableOfContents from '../components/TableOfContents';
import ReadingProgress from '../components/ReadingProgress';
import { loadBlogPost, loadAllBlogPosts } from '../utils/mdxLoader';
import { BlogPost as BlogPostType } from '../hooks/useBlogPosts';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const loadData = async () => {
      if (!id) {
        setError('Post ID not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Load both the current post and all posts for related posts
        const [postData, postsData] = await Promise.all([
          loadBlogPost(id),
          loadAllBlogPosts()
        ]);
        
        if (postData) {
          // Properly merge the content into the post object
          setPost({
            ...postData.post,
            content: postData.content
          });
        } else {
          setError('Post not found');
        }
        
        setAllPosts(postsData);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-primary/10 rounded mb-4 w-3/4"></div>
              <div className="h-6 bg-primary/10 rounded mb-8 w-1/2"></div>
              <div className="space-y-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-4 bg-primary/10 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">{error || 'The requested blog post could not be found.'}</p>
            <Link to="/" className="cyber-button">
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const currentUrl = window.location.href;

  return (
    <Layout>
      <SEO 
        title={post.title}
        description={post.excerpt}
        type="article"
      />
      <ReadingProgress />
      
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30">
                {post.category}
              </span>
              <div className="flex items-center text-muted-foreground text-sm gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <SocialShare 
              title={post.title}
              url={currentUrl}
              excerpt={post.excerpt}
            />
          </header>

          {/* Article Content - Centered with border */}
          <div className="cyber-card p-8 mb-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <MarkdownRenderer content={post.content || ''} />
            </div>
          </div>

          {/* Table of Contents - Fixed position */}
          <TableOfContents content={post.content || ''} />

          {/* Related Posts */}
          <RelatedPosts 
            currentPost={post} 
            allPosts={allPosts}
            maxPosts={3}
          />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
