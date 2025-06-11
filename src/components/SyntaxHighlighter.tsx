
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ code, language = 'text' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative group">
      {/* Header with copy button and language */}
      <div className="flex items-center justify-between bg-card/80 border border-primary/30 border-b-0 rounded-t-lg px-4 py-2">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
        <span className="text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
          {language}
        </span>
      </div>
      
      {/* Code block */}
      <pre className="bg-card/50 border border-primary/30 rounded-b-lg p-4 overflow-x-auto m-0">
        <code className="text-primary text-sm leading-relaxed">{code}</code>
      </pre>
    </div>
  );
};

export default SyntaxHighlighter;
