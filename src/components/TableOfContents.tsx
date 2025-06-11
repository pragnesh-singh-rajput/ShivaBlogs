
import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2];
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      
      items.push({ id, title, level });
    }

    setTocItems(items);
  }, [content]);

  if (tocItems.length === 0) return null;

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="cyber-card p-4 max-w-xs">
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-3"
        >
          <List className="h-4 w-4" />
          <span className="text-sm font-medium">Contents</span>
        </button>
        
        {isVisible && (
          <nav className="space-y-2 max-h-96 overflow-y-auto">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-sm transition-colors ${
                  item.level === 1 ? 'font-medium' : 
                  item.level === 2 ? 'ml-3' : 'ml-6'
                } ${
                  activeId === item.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default TableOfContents;
