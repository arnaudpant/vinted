import React, { useEffect, useRef } from 'react';
import { SubCategory } from './SubCategory';
import { TypeCategory, TypeSubCategory } from '@/data/categoriesHeader';

export const SubCategories: React.FC<{
  subCategories: TypeSubCategory[];
  offsetSelectedCategory: number;
}> = ({ subCategories, offsetSelectedCategory }) => {
  const DEFAULT_SUB_CATEGORY_SELECTED = subCategories[0].title;
  const [selectSubCategoryTitle, setSelectSubCategoryTitle] = React.useState(
    DEFAULT_SUB_CATEGORY_SELECTED,
  );

  document.addEventListener('click', (event: MouseEvent) =>
    console.log('event', event.target),
  );
  return (
    <div
      className=" flex flex-col bg-vintedBackgrounf mt-2  w-fit relative"
      style={{ left: `${offsetSelectedCategory}px` }}
    >
      {subCategories?.map((subCategory) => {
        return (
          <SubCategory
            key={subCategory.title}
            subCategory={subCategory}
            selectSubCategoryTitle={selectSubCategoryTitle}
            setSelectSubCategoryTitle={setSelectSubCategoryTitle}
          />
        );
      })}
    </div>
  );
};
