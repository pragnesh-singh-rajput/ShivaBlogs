
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AppLayout from '@/components/layout/AppLayout';
import { getPostBySlug, getAllPosts } from '@/lib/blog-data';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <AppLayout>
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
      <article className="bg-card p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-border">
        <header className="mb-8">
          <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <UserCircle className="h-5 w-5" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
          </div>
        </header>

        {post.imageUrl && (
          <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src={post.imageUrl}
              alt={`Cover image for ${post.title}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority // Prioritize loading of hero image
              data-ai-hint="article theme"
            />
          </div>
        )}
        
        <div
          className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none text-foreground/90 
                     [&_h2]:text-primary [&_h2]:font-mono 
                     [&_h3]:text-primary/90 [&_h3]:font-mono
                     [&_a]:text-accent [&_a:hover]:underline 
                     [&_pre]:bg-muted/70 [&_pre]:border [&_pre]:border-primary/40 [&_pre]:shadow-lg [&_pre]:rounded-md [&_pre]:font-mono
                     [&_pre_code]:text-foreground 
                     [&_code]:bg-muted/50 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono
                     [&_strong]:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags.length > 0 && (
          <footer className="mt-12 pt-8 border-t border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-primary font-mono">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                 <Link key={tag} href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}>
                  <Badge 
                    variant="secondary" 
                    className="cursor-pointer rounded-full px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </footer>
        )}
      </article>
    </AppLayout>
  );
}
