
import AppLayout from '@/components/layout/AppLayout';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { getAllPosts } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Inbox } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <AppLayout>
      <div className="space-y-16"> {/* Increased spacing */}
        <header className="py-12 md:py-16 border-b-2 border-primary text-center md:text-left"> {/* Increased padding, solid primary border */}
           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary">
            Pragnesh Singh
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0">
            Cyber Security Professional & Tech Enthusiast. Dive into my latest articles, insights, and explorations. Discover more about my professional journey and projects on my portfolio.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
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
          <Card className="border-border/50 shadow-lg">
            <CardContent className="text-center py-12 md:py-16">
              <Inbox className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3">No Blog Posts Yet</h2>
              <p className="mt-2 text-foreground/80 max-w-md mx-auto">
                Stay tuned for insightful articles, tech deep dives, and cybersecurity updates! New content is coming soon.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}
