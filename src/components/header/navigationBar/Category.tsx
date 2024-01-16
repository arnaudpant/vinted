import { TypeCategory } from '@/types/types';
import React, { useState } from 'react';
import SubCategories from './SubCategories';

const Category: React.FC<{
  category: TypeCategory;
  selectedIdCategory: number;
  selectCategory: Function;
}> = ({ category, selectedIdCategory, selectCategory }) => {
  const handleSelectedCategory = () => {
    selectCategory(category.id);
  };

  const isCategorySelected = selectedIdCategory === category.id;

  return (
    <div className="relative">
      <button
        onClick={handleSelectedCategory}
        className={`${
          isCategorySelected
            ? 'border-solid border-b-4 border-vintedGreen border-spacing-6 '
            : ''
        }`}
      >
        {category.title}
        {isCategorySelected && (
          <SubCategories selectedIdCategory={selectedIdCategory} />
        )}
      </button>
    </div>
  );
};
export default Category;
