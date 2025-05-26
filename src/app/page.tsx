
import AppLayout from '@/components/layout/AppLayout';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { getAllPosts } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <AppLayout>
      <div className="space-y-12">
        <header className="pb-8 mb-8 border-b-2 border-primary/30 text-center md:text-left">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary">
            Pragnesh Singh
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0">
            Cyber Security Professional & Tech Enthusiast. Dive into my latest articles, insights, and explorations at Tech Prastish. Discover more about my professional journey and projects on my portfolio.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="https://pragneshsingh.works/" target="_blank" rel="noopener noreferrer">
              Visit My Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </header>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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
