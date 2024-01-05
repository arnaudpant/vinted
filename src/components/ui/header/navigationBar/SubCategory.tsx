import React from 'react';
import { buildIconPath } from '@/utils/Utils';
import { typeSubCategory } from '@/data/categoriesHeader';

export const SubCategory: React.FC<{
  subCategory: typeSubCategory;
  selectSubCategory: Function;
}> = ({ subCategory, selectSubCategory }) => {
  console.log('title');
  return (
    <div
      key={subCategory.title}
      className="flex items-center  pl-6 pr-16 py-2 space-x-4  hover:cursor-pointer    hover:bg-vintedBackgroundCard "
    >
      <img
        src={buildIconPath(subCategory.iconName)}
        alt={'title'}
        className="object-contain h-6"
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          selectSubCategory(subCategory.title);
        }}
        className=" block whitespace-nowrap "
      >
        {subCategory.title}
      </button>
    </div>
  );
};
