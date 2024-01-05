import React from 'react';
import { SubCategory } from './SubCategory';
import { typeSubCategory } from '@/data/categoriesHeader';

export const SubCategories: React.FC<{
  subCategories: typeSubCategory[];
  selectSubCategory: Function;
}> = ({ subCategories, selectSubCategory }) => {
  return (
    <div className="border-r-2  mt-2  ">
      {subCategories.map((subCategory) => {
        return (
          <SubCategory
            key={subCategory.title}
            subCategory={subCategory}
            selectSubCategory={selectSubCategory}
          />
        );
      })}
    </div>
  );
};
