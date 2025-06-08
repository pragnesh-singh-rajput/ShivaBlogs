
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  resultsCount?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  resultsCount 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className={`relative cyber-card p-1 transition-all duration-300 ${
        isFocused ? 'ring-2 ring-primary/50' : ''
      }`}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="pl-10 pr-10 bg-background border-none focus:ring-0 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={handleClear}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      {searchTerm && (
        <div className="mt-2 text-center">
          <p className="text-sm text-muted-foreground animate-fade-in">
            {resultsCount === 0 
              ? 'No blogs found' 
              : `Found ${resultsCount} blog${resultsCount === 1 ? '' : 's'}`
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
