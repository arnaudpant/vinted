import { TypeSubCategory } from '@/types/types';
import { buildIconPath } from '@/utils/Utils';
import React from 'react';

const SubCategory: React.FC<{ subCategory: TypeSubCategory }> = ({
  subCategory,
}) => {
  const imagePath = buildIconPath(subCategory.iconName);
  return (
    <div className=" w-full space-x-4 space-y-5 ">
      <img src={imagePath} alt={subCategory.title} className="inline h-8" />
      <span className="">{subCategory.title}</span>
    </div>
  );
};

export default SubCategory;
