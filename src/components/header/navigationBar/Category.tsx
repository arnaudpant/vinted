import { MenubarMenu } from '@/components/ui/menubar';
import { TypeCategory } from '@/types/types';
import { MenubarContent, MenubarTrigger } from '@radix-ui/react-menubar';
import React from 'react';
import SubCategories from './SubCategories';
import categoriesHeader from '@/data/categoriesHeader';

const Category: React.FC<{
  selectedIdCategory: number;
}> = ({ selectedIdCategory }) => {
  const currentCategory = categoriesHeader.find(
    (category) => category.id === selectedIdCategory,
  );

  return (
    <MenubarMenu>
      <MenubarTrigger className="text-vintedTextBlackVar hover:bg-vintedBackgroundCard hover:border-b-4 hover:border-vintedGreen  text-lg">
        {currentCategory?.title}
      </MenubarTrigger>

      <MenubarContent
        className="bg-vintedBackground my-2 px-4 py-4"
        side="bottom"
        align="center"
      >
        <SubCategories selectedIdCategory={selectedIdCategory} />
      </MenubarContent>
    </MenubarMenu>
  );
};
export default Category;
