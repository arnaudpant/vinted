import categoriesHeader from '@/data/categoriesHeader';
import React from 'react';

import { TypeCategory } from '@/types/types';
import SubCategory from './SubCategory';

const SubCategories: React.FC<{ selectedIdCategory: number }> = ({
  selectedIdCategory,
}) => {
  const activeCategory: TypeCategory | undefined = categoriesHeader.find(
    (category) => category.id === selectedIdCategory,
  );
  if (!activeCategory?.subCategories) {
    return null;
  }
  return (
    <div className="block absolute top-10 p-2 bg-vintedBackground min-w-64">
      {activeCategory?.subCategories?.map((subCategory) => (
        <SubCategory
          key={subCategory.id}
          subCategory={subCategory}
        ></SubCategory>
      ))}
    </div>
  );
};

export default SubCategories;
