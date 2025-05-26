import Link from 'next/link';
import type { BlogData} from '@/lib/blog-data';
import { getAllTags } from '@/lib/blog-data';
import { Badge } from '@/components/ui/badge';
import { TagIcon } from 'lucide-react';

export default function SiteSidebar({ posts }: { posts: BlogData[] }) {
  const tags = getAllTags(posts);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
          <TagIcon className="h-5 w-5 mr-2" />
          Tags
        </h3>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
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
        ) : (
          <p className="text-muted-foreground text-sm">No tags available.</p>
        )}
      </div>
      {/* You can add other sidebar sections like "Recent Posts" or "Categories" here */}
    </div>
  );
}
