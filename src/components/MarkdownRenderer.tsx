
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Simple markdown to HTML conversion
  const renderMarkdown = (text: string) => {
    return text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mb-4 mt-8 text-primary">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mb-6 mt-10 text-primary glow-text">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-6 mt-8 text-primary glow-text">$1</h1>')
      
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-card/50 border border-primary/30 rounded-lg p-4 my-6 overflow-x-auto"><code class="text-primary">$2</code></pre>')
      
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-primary/10 text-primary px-2 py-1 rounded text-sm">$1</code>')
      
      // Bold text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>')
      
      // Italic text
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Lists
      .replace(/^- (.*$)/gim, '<li class="mb-2 ml-4">• $1</li>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-primary/80 underline" target="_blank" rel="noopener noreferrer">$1</a>')
      
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="mb-4">')
      
      // Line breaks
      .replace(/\n/g, '<br/>');
  };

  const processedContent = renderMarkdown(content);

  return (
    <div 
      className="prose prose-invert prose-lg max-w-none"
      dangerouslySetInnerHTML={{ 
        __html: `<p class="mb-4">${processedContent}</p>` 
      }} 
    />
  );
};

export default MarkdownRenderer;
