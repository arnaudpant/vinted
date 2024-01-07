import React from 'react';
import { buildIconPath } from '@/utils/Utils';
import { TypeSubCategory } from '@/data/categoriesHeader';
import { SubSubCategories } from './SubSubCategories';

export const SubCategory: React.FC<{
  subCategory: TypeSubCategory;
  selectSubCategoryTitle: string;
  setSelectSubCategoryTitle: Function;
}> = ({ subCategory, selectSubCategoryTitle, setSelectSubCategoryTitle }) => {
  return (
    <div className=" ">
      <div
        key={subCategory.title}
        className="flex  flex-row items-center pl-6 pr-16 py-2 space-x-4  hover:cursor-pointer    hover:bg-vintedBackgroundCard "
      >
        <img
          src={buildIconPath(subCategory.iconName)}
          alt={'title'}
          className="object-contain h-6"
        />
        <button
          onClick={() => {
            setSelectSubCategoryTitle(subCategory.title);
          }}
          className=" block whitespace-nowrap "
        >
          {subCategory.title}
        </button>
        <div>
          {subCategory.title === selectSubCategoryTitle ? (
            <SubSubCategories subSubCategories={subCategory.subsubCategories} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
