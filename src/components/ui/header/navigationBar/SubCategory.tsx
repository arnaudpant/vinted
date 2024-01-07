import React from 'react';
import { buildIconPath } from '@/utils/Utils';
import { TypeSubCategory } from '@/data/categoriesHeader';

export const SubCategory: React.FC<{
  subCategory: TypeSubCategory;

  setSelectedSubCategoryId: Function;
}> = ({ subCategory, setSelectedSubCategoryId }) => {
  const handleSelectCategory = () => {
    setSelectedSubCategoryId(subCategory.id);
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
