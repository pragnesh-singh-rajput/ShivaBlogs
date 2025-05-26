
// Removed: import fs from 'fs';
// Removed: import path from 'path';

export interface BlogData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // For lists, this will be contentFilePath; for single post, actual HTML
  author: string;
  date: string; 
  tags: string[];
  imageUrl: string;
}

// Renamed from postsData and exported
export const blogPostsMetadata: (Omit<BlogData, 'content'> & { contentFilePath: string })[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14',
    excerpt: 'A comprehensive guide to setting up your first Next.js 14 application with App Router, exploring its core concepts and features.',
    contentFilePath: 'getting-started-with-nextjs.html',
    author: 'Shiva Dev',
    date: '2024-07-28T10:00:00Z',
    tags: ['Next.js', 'JavaScript', 'Web Development', 'React', 'Development', 'IT', 'Future Tech', 'Cloud', 'VAPT', 'Blockchain', 'AI/ML', 'Cyber Security', 'SOC', 'DFIR', 'Tech News', 'App Router', 'Server Components'],
    imageUrl: '/images/getting-started-with-nextjs-14.png', 
  },
  {
    id: '2',
    slug: 'tailwind-css-deep-dive',
    title: 'Tailwind CSS: A Deep Dive into Utility-First Styling',
    excerpt: 'Explore the power of Tailwind CSS and how it can revolutionize your web development workflow.',
    contentFilePath: 'tailwind-css-deep-dive.html',
    author: 'Shiva Dev',
    date: '2024-07-25T14:30:00Z',
    tags: ['TailwindCSS', 'CSS', 'Frontend', 'Web Design', 'Development', 'IT', 'Tech News', 'Cyber Security', 'VAPT', 'SOC', 'DFIR', 'Cloud', 'Blockchain', 'AI/ML', 'Future Tech', 'JavaScript', 'React', 'Next.js'],
    imageUrl: '/images/Tailwind-CSS-A-Deep-Dive-into-Utility-First-Styling.png',
  },
  {
    id: '3',
    slug: 'mastering-typescript-for-react',
    title: 'Mastering TypeScript for React Development',
    excerpt: 'Enhance your React projects with TypeScript for better type safety and developer experience.',
    contentFilePath: 'mastering-typescript-for-react.html',
    author: 'Shiva Dev',
    date: '2024-07-22T09:00:00Z',
    tags: ['TypeScript', 'React', 'JavaScript', 'Frontend', 'Development', 'IT', 'Cyber Security', 'SOC', 'DFIR', 'AI/ML', 'Future Tech', 'Cloud', 'Blockchain', 'Tech News', 'Next.js', 'Web Development', 'VAPT'],
    imageUrl: '/images/Mastering-TypeScript-for-React-Development.png',
  },
];

// This function returns metadata with contentFilePath, suitable for listing pages
export const getAllPostsMeta = (): (Omit<BlogData, 'content'> & { contentFilePath: string })[] => {
  return [...blogPostsMetadata].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};


// Adjusted to use getAllPostsMeta for initial data and keep excerpt/metadata for lists
export const getAllPosts = (): BlogData[] => {
  return getAllPostsMeta().map(postMeta => ({
      ...postMeta,
      content: postMeta.contentFilePath 
  }));
};

// REMOVED getPostBySlug from this file as it uses 'fs'

export const getAllTags = (allPosts: (Omit<BlogData, 'content'> & { contentFilePath?: string })[]): string[] => {
  const allTagsSet = new Set<string>();
  allPosts.forEach(post => {
    post.tags.forEach(tag => allTagsSet.add(tag));
  });
  return Array.from(allTagsSet).sort((a, b) => a.localeCompare(b));
};

export const getPostsByTag = (tag: string): BlogData[] => {
  const lowerCaseTag = tag.toLowerCase();
  return getAllPostsMeta()
    .filter(post => 
      post.tags.some(t => t.toLowerCase() === lowerCaseTag)
    )
    .map(postMeta => ({ 
        ...postMeta,
        content: postMeta.contentFilePath 
    })); 
};

export const searchPosts = (query: string): BlogData[] => {
  if (!query.trim()) {
    return [];
  }
  const lowerCaseQuery = query.toLowerCase();
  
  return getAllPostsMeta()
    .filter(post =>
      post.title.toLowerCase().includes(lowerCaseQuery) ||
      post.excerpt.toLowerCase().includes(lowerCaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
    )
    .map(postMeta => ({ 
        ...postMeta,
        content: postMeta.contentFilePath
    }));
};
