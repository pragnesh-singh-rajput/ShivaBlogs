
import React from 'react';
import SyntaxHighlighter from './SyntaxHighlighter';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const renderMarkdown = (text: string) => {
    // Clean the text first
    const cleanText = text.trim();
    
    // First, we need to handle code blocks before other processing
    const parts = cleanText.split(/(```[\s\S]*?```)/g);
    
    return parts.map((part, index) => {
      // Check if this part is a code block
      const codeBlockMatch = part.match(/```(\w+)?\n?([\s\S]*?)```/);
      if (codeBlockMatch) {
        const [, language, code] = codeBlockMatch;
        return (
          <div key={index} className="my-6">
            <SyntaxHighlighter 
              code={code.trim()} 
              language={language || 'text'} 
            />
          </div>
        );
      }
      
      // Process other markdown for non-code parts
      return (
        <div key={index} dangerouslySetInnerHTML={{
          __html: part
            // Headers - order matters, process larger headers first
            .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mb-4 mt-8 text-primary">$1</h3>')
            .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mb-6 mt-10 text-primary glow-text">$1</h2>')
            .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-6 mt-8 text-primary glow-text">$1</h1>')
            
            // Inline code
            .replace(/`([^`\n]+)`/g, '<code class="bg-primary/10 text-primary px-2 py-1 rounded text-sm">$1</code>')
            
            // Bold text
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>')
            
            // Italic text
            .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
            
            // Links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-primary/80 underline transition-colors" target="_blank" rel="noopener noreferrer">$1</a>')
            
            // Lists - handle both unordered and ordered
            .replace(/^- (.*$)/gim, '<li class="mb-2 ml-4 list-disc list-inside">$1</li>')
            .replace(/^\d+\. (.*$)/gim, '<li class="mb-2 ml-4 list-decimal list-inside">$1</li>')
            
            // Images
            .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
              return `<figure class="my-8">
                <div class="relative overflow-hidden rounded-lg border border-primary/20">
                  <img src="${src}" alt="${alt}" class="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                </div>
                ${alt ? `<figcaption class="text-sm text-muted-foreground text-center mt-3 italic">${alt}</figcaption>` : ''}
              </figure>`;
            })
            
            // Paragraphs - handle double line breaks
            .replace(/\n\s*\n/g, '</p><p class="mb-4 leading-relaxed">')
            
            // Single line breaks
            .replace(/\n/g, '<br/>')
        }} />
      );
    });
  };

  const processedContent = renderMarkdown(content);

  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <div className="text-muted-foreground leading-relaxed">
        <p className="mb-4 leading-relaxed">
          {processedContent}
        </p>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
