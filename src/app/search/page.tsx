
'use client';

import { useSearchParams } from 'next/navigation';
import AppLayout from '@/components/layout/AppLayout';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { searchPosts, type BlogData } from '@/lib/blog-data';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search as SearchIcon, Frown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton'; // For loading state

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<BlogData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (query) {
      const foundPosts = searchPosts(query);
      setResults(foundPosts);
    } else {
      setResults([]);
    }
    // Simulate a small delay for loading state if needed, or remove for instant results
    const timer = setTimeout(() => setIsLoading(false), 300); 
    return () => clearTimeout(timer);
  }, [query]);

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

      <header className="pb-6 mb-8 border-b-2 border-primary/30">
        <h1 className="font-mono text-3xl md:text-4xl font-extrabold tracking-tight text-primary flex items-center">
          <SearchIcon className="h-8 w-8 mr-3 text-accent" />
          {query ? <>Search Results for: <span className="text-accent ml-2">&quot;{query}&quot;</span></> : 'Search Articles'}
        </h1>
      </header>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="overflow-hidden shadow-lg bg-card border-border">
              <Skeleton className="w-full h-56 md:h-64" />
              <CardContent className="p-6">
                <Skeleton className="h-8 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6 mb-4" />
                <Skeleton className="h-8 w-28" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {results.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <Card className="border-border/50 shadow-lg bg-card">
          <CardContent className="text-center py-12 md:py-16">
            <Frown className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3 font-mono">No Results Found</h2>
            <p className="mt-2 text-foreground/80 max-w-md mx-auto">
              {query ? `Sorry, we couldn't find any articles matching "${query}". Try a different search term.` : 'Please enter a search term to find articles.'}
            </p>
          </CardContent>
        </Card>
      )}
    </AppLayout>
  );
}

// Wrap with Suspense for useSearchParams
export default function SearchResultsPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <SearchResultsContent />
    </Suspense>
  );
}

function LoadingState() {
  // You can customize this further if needed
  return (
    <AppLayout>
       <div className="mb-8">
        <Button variant="outline" size="sm" asChild disabled>
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
      <header className="pb-6 mb-8 border-b-2 border-primary/30">
        <h1 className="font-mono text-3xl md:text-4xl font-extrabold tracking-tight text-primary flex items-center">
          <SearchIcon className="h-8 w-8 mr-3 text-accent" />
          Loading Search Results...
        </h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {[...Array(4)].map((_, index) => (
          <Card key={index} className="overflow-hidden shadow-lg bg-card border-border">
            <Skeleton className="w-full h-56 md:h-64" />
            <CardContent className="p-6">
              <Skeleton className="h-8 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6 mb-4" />
              <Skeleton className="h-8 w-28" />
            </CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  )
}
