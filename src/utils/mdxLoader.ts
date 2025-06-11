
import { BlogPost } from '../hooks/useBlogPosts';
import { processMDXFile, getAllMDXFiles } from './mdxProcessor';

export const loadBlogPost = async (id: string): Promise<{ post: BlogPost; content: string } | null> => {
  console.log('Loading blog post:', id);
  const data = processMDXFile(id);
  if (!data) {
    console.log('Blog post not found:', id);
    return null;
  }
  
  console.log('Blog post loaded successfully:', data.post.title);
  return data;
};

export const loadAllBlogPosts = async (): Promise<BlogPost[]> => {
  console.log('Loading all blog posts');
  const allData = getAllMDXFiles();
  const posts = allData.map(data => data.post);
  console.log('Loaded posts:', posts.length);
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
