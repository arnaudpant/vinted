import { TypeCategory } from '@/data/categoriesHeader';
import React from 'react';

export const Category: React.FC<{
  displayOnScreenPopCategories: boolean;
  category: TypeCategory;
  selectedIdCategory: number;
  selectCategory: Function;
}> = ({
  category,
  selectedIdCategory,
  selectCategory,
  displayOnScreenPopCategories,
}) => {
  return (
    <div className="" id={`category-${category.id}`}>
      <button
        key={category.id}
        className={` whitespace-nowrap hover:bg-vintedBackgrounf ${
          selectedIdCategory === category.id && displayOnScreenPopCategories
            ? 'border-vintedGreen border-solid border-b-4 '
            : ''
        }`}
        onClick={(event) => {
          selectCategory(category.id);
        }}
      >
        {category.title}
      </button>
    </div>
  );
};
