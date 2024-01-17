import { MenubarItem, MenubarSubContent } from '@/components/ui/menubar';
import { TypeSubCategory } from '@/types/types';
import React from 'react';

const SubSubCategories: React.FC<{ subCategory: TypeSubCategory }> = ({
  subCategory,
}) => {
  return (
    <MenubarSubContent>
      <div className="grid grid-cols-2 gap-8">
        {subCategory.subSubCategories?.map((subSubCategory) => (
          <MenubarItem className="text-lg">{subSubCategory.title} </MenubarItem>
        ))}
      </div>
    </MenubarSubContent>
  );
};

export default SubSubCategories;
