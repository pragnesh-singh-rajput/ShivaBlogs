import AppLayout from '@/components/layout/AppLayout';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { getAllPosts } from '@/lib/blog-data';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <AppLayout>
      <div className="space-y-12">
        <header className="pb-4 mb-6 border-b-2 border-primary/30">
           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            The ShivaBlogs Sphere
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Exploring the frontiers of technology, development, and digital creativity.
          </p>
        </header>
        
        {posts.length > 0 ? (
          <div className="grid gap-8 md:gap-10">
            {posts.map(post => <BlogPostCard key={post.id} post={post} />)}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-muted-foreground">No Blog Posts Yet</h2>
            <p className="mt-2 text-foreground/70">Stay tuned for insightful articles and updates!</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
