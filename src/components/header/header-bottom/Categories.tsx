import categoriesHeader from '@/data/categoriesHeader';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { TypeCategory } from '@/types/types';
import Category from './categories/category/Category';

const Categories = () => {
  return (
    <div className="flex items-center">
      <Menubar className="space-x-8 border-none bg-vintedBackground text-lg">
        {categoriesHeader.map((category: TypeCategory) => (
          <MenubarMenu key={category.title}>
            <MenubarTrigger className="text-lg text-vintedTextBlackVar hover:border-b-4 hover:border-vintedGreen">
              {category.title}
            </MenubarTrigger>
            <Category subCategory={category.subCategories} />
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
};

export default Categories;
