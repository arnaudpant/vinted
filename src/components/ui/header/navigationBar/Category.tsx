import { TypeCategory } from '@/data/categoriesHeader';
import React from 'react';

export const Category: React.FC<{
  category: TypeCategory;
  selectedIdCategory: number;
  selectCategory: Function;
}> = ({ category, selectedIdCategory, selectCategory }) => {
  return (
    <div className="" id={`category-${category.id}`}>
      <button
        key={category.id}
        className={`p-1 inline hover:bg-vintedBackgrounf ${
          selectedIdCategory === category.id
            ? 'border-vintedGreen border-solid border-b-4'
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
