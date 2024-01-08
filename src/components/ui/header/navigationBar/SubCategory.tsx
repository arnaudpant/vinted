import React from 'react';
import { buildIconPath } from '@/utils/Utils';
import { TypeSubCategory } from '@/data/categoriesHeader';

export const SubCategory: React.FC<{
  subCategory: TypeSubCategory;

  setSelectedSubCategoryId: Function;
}> = ({ subCategory, setSelectedSubCategoryId }) => {
  const SEE_ALL_CATEGORY = 0;
  const OTHER_CATEGORIES = 99;
  const handleSelectCategory = () => {
    if (
      subCategory.id === SEE_ALL_CATEGORY ||
      subCategory.id === OTHER_CATEGORIES
    ) {
      setSelectedSubCategoryId(1);
    } else {
      setSelectedSubCategoryId(subCategory.id);
    }
  };
  return (
    <button
      key={subCategory.id}
      className="flex flex-row  items-center pl-6 pr-16 py-2 space-x-4  hover:cursor-pointer  hover:bg-vintedBackgroundCard "
      onClick={handleSelectCategory}
    >
      <img
        src={buildIconPath(subCategory.iconName)}
        alt={'title'}
        className="object-contain h-6"
      />
      <span className=" block whitespace-nowrap ">{subCategory.title}</span>
    </button>
  );
};
