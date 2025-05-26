
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { BlogData } from '@/lib/blog-data';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogData;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out bg-card border-border hover:border-primary/50 animate-fadeIn">
      {post.imageUrl && (
        <Link href={`/posts/${post.slug}`} aria-label={`Read more about ${post.title}`}>
          <div className="relative w-full h-56 md:h-64 group overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={`Featured image for ${post.title}`}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
              data-ai-hint="blog abstract"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </Link>
      )}
      <CardHeader className="p-6">
        <Link href={`/posts/${post.slug}`}>
          <CardTitle className="text-2xl lg:text-3xl font-bold text-primary hover:underline leading-tight">
            {post.title}
          </CardTitle>
        </Link>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
          <div className="flex items-center gap-1.5">
            <UserCircle className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-foreground/80 mb-4 line-clamp-3">{post.excerpt}</p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map(tag => ( // Show limited tags on card
              <Link key={tag} href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}>
                <Badge variant="outline" className="cursor-pointer rounded-full text-xs hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors">
                  {tag}
                </Badge>
              </Link>
            ))}
            {post.tags.length > 3 && (
                 <Badge variant="outline" className="rounded-full text-xs">+{post.tags.length - 3} more</Badge>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/posts/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
