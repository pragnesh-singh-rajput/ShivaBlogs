export interface BlogData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; 
  author: string;
  date: string; 
  tags: string[];
  imageUrl: string;
}

const posts: BlogData[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14',
    excerpt: 'A comprehensive guide to setting up your first Next.js 14 application with App Router.',
    content: `
      <p class="mb-4">Next.js 14 introduces a host of new features and improvements. This guide will walk you through the basics of creating a new project, understanding the new App Router, and building your first few pages.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3 text-primary">Project Setup</h2>
      <p class="mb-4">To start, ensure you have Node.js installed. Then, run the following command in your terminal:</p>
      <pre class="bg-muted p-3 rounded-md my-4 text-sm overflow-x-auto"><code class="text-foreground/90">npx create-next-app@latest my-next-app</code></pre>
      <h2 class="text-2xl font-semibold mt-6 mb-3 text-primary">Understanding the App Router</h2>
      <p class="mb-4">The App Router, introduced in Next.js 13 and refined in 14, simplifies routing and layouts. Files and folders within the 'app' directory automatically become routes. This paradigm also heavily leverages React Server Components (RSCs) by default, which can significantly improve performance by reducing the amount of JavaScript sent to the client.</p>
      <p class="mb-4">Key concepts include layouts, pages, loading UI, and error handling, all definable through special file conventions (e.g., <code class="bg-muted px-1 rounded text-foreground/90">layout.tsx</code>, <code class="bg-muted px-1 rounded text-foreground/90">page.tsx</code>, <code class="bg-muted px-1 rounded text-foreground/90">loading.tsx</code>, <code class="bg-muted px-1 rounded text-foreground/90">error.tsx</code>).</p>
      <p class="mb-4">Further reading on the Next.js official documentation is highly recommended to grasp the full power of the App Router and Server Components.</p>
    `,
    author: 'Shiva Dev',
    date: '2024-07-28T10:00:00Z',
    tags: ['Next.js', 'JavaScript', 'Web Development', 'React'],
    imageUrl: 'https://placehold.co/800x450.png',
  },
  {
    id: '2',
    slug: 'tailwind-css-deep-dive',
    title: 'Tailwind CSS: A Deep Dive into Utility-First Styling',
    excerpt: 'Explore the power of Tailwind CSS and how it can revolutionize your web development workflow.',
    content: `
      <p class="mb-4">Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup, without writing much, if any, custom CSS.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3 text-primary">Core Concepts</h2>
      <p class="mb-4">Understand how utilities like <code class="bg-muted px-1 rounded text-foreground/90">flex</code>, <code class="bg-muted px-1 rounded text-foreground/90">pt-4</code> (padding-top), and <code class="bg-muted px-1 rounded text-foreground/90">text-center</code> combine to create complex components. The Just-In-Time (JIT) compiler, now standard, ensures your final CSS bundle includes only the styles you actually use, keeping it remarkably small.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3 text-primary">Configuration and Customization</h2>
      <p class="mb-4">Tailwind is highly customizable via its <code class="bg-muted px-1 rounded text-foreground/90">tailwind.config.js</code> file. You can extend or override the default design system, including colors, spacing, fonts, breakpoints, and much more. This allows you to tailor Tailwind to perfectly match your project's specific aesthetic requirements.</p>
      <p class="mb-4">This approach encourages rapid prototyping and development while maintaining visual consistency and a structured design language.</p>
    `,
    author: 'Shiva Dev',
    date: '2024-07-25T14:30:00Z',
    tags: ['TailwindCSS', 'CSS', 'Frontend', 'Web Design'],
    imageUrl: 'https://placehold.co/800x450.png',
  },
  {
    id: '3',
    slug: 'mastering-typescript-for-react',
    title: 'Mastering TypeScript for React Development',
    excerpt: 'Enhance your React projects with TypeScript for better type safety and developer experience.',
    content: `
      <p class="mb-4">TypeScript adds static typing to JavaScript, enabling developers to catch errors early in the development process and improve overall code maintainability, especially in large and complex React applications.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3 text-primary">Key Benefits</h2>
      <p class="mb-4">The primary advantages of using TypeScript with React include improved autocompletion and IntelliSense, greater confidence during refactoring, and clearer, self-documenting component APIs through explicit props and state typing.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3 text-primary">Typing Hooks and Components</h2>
      <p class="mb-4">Learn how to effectively type React features such as <code class="bg-muted px-1 rounded text-foreground/90">useState</code>, <code class="bg-muted px-1 rounded text-foreground/90">useEffect</code>, custom hooks, and both functional and class components. Understanding common patterns, generic types, and utility types like <code class="bg-muted px-1 rounded text-foreground/90">React.FC</code> can greatly enhance your development workflow.</p>
      <p class="mb-4">Integrating TypeScript into your React projects leads to more robust, scalable, and developer-friendly applications.</p>
    `,
    author: 'Shiva Dev',
    date: '2024-07-22T09:00:00Z',
    tags: ['TypeScript', 'React', 'JavaScript', 'Frontend'],
    imageUrl: 'https://placehold.co/800x450.png',
  },
];

export const getAllPosts = (): BlogData[] => {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogData | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getAllTags = (allPosts: BlogData[]): string[] => {
  const allTagsSet = new Set<string>();
  allPosts.forEach(post => {
    post.tags.forEach(tag => allTagsSet.add(tag));
  });
  return Array.from(allTagsSet).sort();
};

export const getPostsByTag = (tag: string): BlogData[] => {
  const lowerCaseTag = tag.toLowerCase();
  return getAllPosts().filter(post => 
    post.tags.some(t => t.toLowerCase() === lowerCaseTag)
  );
};
