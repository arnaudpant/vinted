import { TypeCategory } from '@/types/types';
import React from 'react';

const Category: React.FC<{
  displayOnScreenPopCategories: boolean;
  category: TypeCategory;
  selectedIdCategory: number;
  selectCategory: (id: number) => void;
}> = ({
  category,
  selectedIdCategory,
  selectCategory,
  displayOnScreenPopCategories,
}) => {
  return (
    <div className="text-[14px]" id={`category-${category.id}`}>
      <button
        key={category.id}
        className={` whitespace-nowrap hover:bg-vintedBackground ${
          selectedIdCategory === category.id && displayOnScreenPopCategories
            ? 'border-vintedGreen border-solid border-b-4 '
            : ''
        }`}
        onClick={() => {
          selectCategory(category.id);
        }}
      >
        {category.title}
      </button>
    </div>
  );
};

export default Category;
