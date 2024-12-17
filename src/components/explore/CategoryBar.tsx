import React from 'react';
import { categories } from '../../data/categories';

interface CategoryBarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full whitespace-nowrap ${
          selectedCategory === null
            ? 'bg-orange-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        All Categories
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === category
              ? 'bg-orange-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};