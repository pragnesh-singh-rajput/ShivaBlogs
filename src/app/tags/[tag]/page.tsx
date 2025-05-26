import AppLayout from '@/components/layout/AppLayout';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { getPostsByTag, getAllPosts, getAllTags } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TagIcon } from 'lucide-react';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const allExistingPosts = getAllPosts(); // Fetch all posts once
  const tags = getAllTags(allExistingPosts); // Derive tags from these posts
  return tags.map(tag => ({ tag: encodeURIComponent(tag.toLowerCase()) }));
}

export default function TagPage({ params }: TagPageProps) {
  const decodedTag = decodeURIComponent(params.tag);
  const posts = getPostsByTag(decodedTag);

  // Check if the tag is valid by seeing if it exists in the list of all tags
  const allExistingPosts = getAllPosts();
  const validTags = getAllTags(allExistingPosts).map(t => t.toLowerCase());
  if (!validTags.includes(decodedTag.toLowerCase())) {
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
      <div className="space-y-10">
        <header className="pb-4 mb-6 border-b-2 border-primary/30">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary flex items-center">
            <TagIcon className="h-8 w-8 mr-3 text-accent" />
            Posts tagged with: <span className="ml-2 text-accent capitalize">{decodedTag}</span>
          </h1>
        </header>

        {posts.length > 0 ? (
          <div className="grid gap-8 md:gap-10">
            {posts.map(post => <BlogPostCard key={post.id} post={post} />)}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-muted-foreground">No Posts Found</h2>
            <p className="mt-2 text-foreground/70">
              There are currently no blog posts tagged with "{decodedTag}".
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
