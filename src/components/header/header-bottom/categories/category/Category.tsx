import { MenubarMenu } from '@/components/ui/menubar';
import categoriesHeader from '@/data/categoriesHeader';
import { MenubarContent, MenubarTrigger } from '@radix-ui/react-menubar';
import SubCategories from '../menus/category/SubCategories';

const Category: React.FC<{
  selectedIdCategory: number;
}> = ({ selectedIdCategory }) => {
  const currentCategory = categoriesHeader.find(
    (category) => category.id === selectedIdCategory,
  );

  return (
    <MenubarMenu>
      <MenubarTrigger className="text-lg text-vintedTextBlackVar hover:border-b-4 hover:border-vintedGreen  hover:bg-vintedBackgroundCard">
        {currentCategory?.title}
      </MenubarTrigger>

      <MenubarContent
        className="my-2 bg-vintedBackground p-4"
        side="bottom"
        align="center"
      >
        <SubCategories selectedIdCategory={selectedIdCategory} />
      </MenubarContent>
    </MenubarMenu>
  );
};
export default Category;