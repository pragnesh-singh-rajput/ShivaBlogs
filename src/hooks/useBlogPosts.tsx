
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
        setLoading(true);
        const posts = await loadAllBlogPosts();
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
    if (!searchTerm.trim()) {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, blogPosts]);

  return {
    blogPosts: filteredPosts,
    searchTerm,
    setSearchTerm,
    featuredPost: filteredPosts.find(post => post.featured),
    regularPosts: filteredPosts.filter(post => !post.featured),
    loading
  };
};
