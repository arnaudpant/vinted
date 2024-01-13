import React from 'react';

import { TypeSubCategory } from '@/types/types';
import SubSubCategories from './SubSubCategories';
import SubCategory from './SubCategory';

const SubCategories: React.FC<{
  subCategories: TypeSubCategory[];
  offsetSelectedCategory: number;
}> = ({ subCategories, offsetSelectedCategory }) => {
  const DEFAULT_SUB_CATEGORY_ID = 1;
  const [selectedSubCategoryId, setSelectedSubCategoryId] = React.useState(
    DEFAULT_SUB_CATEGORY_ID,
  );

  const activeSubCategory = subCategories.find(
    (subCategory) => subCategory.id === selectedSubCategoryId,
  );

  return (
    <div className="relative z-10 w-fit ">
      <div
        className=" flex flex-row bg-vintedBackground w-fit max-w-[350] relative rounded-md"
        style={{ left: `${offsetSelectedCategory}px` }}
      >
        <div className=" flex flex-col border-r-2 w-fit  truncate">
          {subCategories?.map((subCategory) => {
            return (
              <div key={subCategory.id} className="flex flex-col">
                <SubCategory
                  subCategory={subCategory}
                  setSelectedSubCategoryId={setSelectedSubCategoryId}
                />
              </div>
            );
          })}
        </div>

        {activeSubCategory?.subSubCategories ? (
          <SubSubCategories
            subSubCategories={activeSubCategory.subSubCategories}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SubCategories;
