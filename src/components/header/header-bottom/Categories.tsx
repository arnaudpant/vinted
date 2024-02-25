import categoriesHeader from '@/data/categoriesHeader';
import { Menubar } from '@/components/ui/menubar';
import { TypeCategory } from '@/types/types';
import AboutCategory from './categories/menus/category/AboutCategory';
import Category from './categories/category/Category';
import PlatformCategory from './categories/menus/PlatformCategory';

const Categories: () => JSX.Element = () => {
  return (
    <div className="flex items-center">
      <Menubar className="space-x-8 border-none text-lg ">
        {categoriesHeader.map((category: TypeCategory) => {
          if (category.navigation) {
            return <AboutCategory key={category.id} category={category} />;
          }

          if (category.link) {
            return <PlatformCategory key={category.id} category={category} />;
          }
          if (category.subCategories) {
            return (
              <Category key={category.id} selectedIdCategory={category.id} />
            );
          }

          return null;
        })}
      </Menubar>
    </div>
  );
};

export default Categories;
