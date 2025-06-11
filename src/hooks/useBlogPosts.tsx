
import { useState, useEffect } from 'react';
import { loadAllBlogPosts } from '../utils/mdxLoader';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  content?: string;
}

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('Starting to load blog posts...');
        setLoading(true);
        const posts = await loadAllBlogPosts();
        console.log('Loaded blog posts:', posts);
        console.log('Number of posts loaded:', posts.length);
        setBlogPosts(posts);
        setFilteredPosts(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    console.log('Filtering posts with searchTerm:', searchTerm);
    console.log('Available posts:', blogPosts.length);
    
    if (!searchTerm.trim()) {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('Filtered posts:', filtered.length);
      setFilteredPosts(filtered);
    }
  }, [searchTerm, blogPosts]);

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  console.log('Hook state:', {
    totalPosts: blogPosts.length,
    filteredPosts: filteredPosts.length,
    featuredPost: featuredPost?.title || 'None',
    regularPosts: regularPosts.length,
    loading
  });

  return {
    blogPosts: filteredPosts,
    searchTerm,
    setSearchTerm,
    featuredPost,
    regularPosts,
    loading
  };
};
