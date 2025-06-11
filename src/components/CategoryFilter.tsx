
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={selectedCategory === null ? "default" : "outline"}
        className={`cursor-pointer transition-all ${
          selectedCategory === null 
            ? 'bg-primary text-primary-foreground' 
            : 'hover:bg-primary/10'
        }`}
        onClick={() => onCategorySelect(null)}
      >
        All Posts
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={`cursor-pointer transition-all ${
            selectedCategory === category 
              ? 'bg-primary text-primary-foreground' 
              : 'hover:bg-primary/10'
          }`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryFilter;
