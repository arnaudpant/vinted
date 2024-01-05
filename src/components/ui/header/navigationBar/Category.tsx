import { typeCategory } from '@/data/categoriesHeader';
import React from 'react';

export const Category: React.FC<{
  category: typeCategory;
  selectedIdCategory: number;
  selectCategory: Function;
}> = ({ category, selectedIdCategory, selectCategory }) => {
  return (
    <button
      key={category.id}
      className={`p-1  hover:bg-vintedBackgrounf ${
        selectedIdCategory === category.id
          ? 'border-vintedGreen border-solid border-b-4'
          : ''
      }`}
      onClick={(event) => {
        event.preventDefault();
        selectCategory(category.id);
      }}
    >
      {category.title}
    </button>
  );
};
