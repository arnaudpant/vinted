import React, { useEffect, useRef } from 'react';
import { SubCategory } from './SubCategory';
import { TypeCategory, TypeSubCategory } from '@/data/categoriesHeader';
import { SubSubCategories } from './SubSubCategories';
import { useSubCategories } from '@/hooks/useSubCategories';

export const SubCategories: React.FC<{
  subCategories: TypeSubCategory[];
  offsetSelectedCategory: number;
}> = ({ subCategories, offsetSelectedCategory }) => {
  const { selectedSubCategoryId, setSelectedSubCategoryId } =
    useSubCategories();

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
                  key={subCategory.id}
                  subCategory={subCategory}
                  setSelectedSubCategoryId={setSelectedSubCategoryId}
                />
              </div>
            );
          })}
        </div>

        {activeSubCategory ? (
          <SubSubCategories
            subSubCategories={activeSubCategory.subsubCategories}
          />
        ) : null}
      </div>
    </div>
  );
};
