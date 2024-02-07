import categoriesHeader from '@/data/categoriesHeader';

import { Menubar, MenubarMenu } from '@/components/ui/menubar';
import { TypeCategory } from '@/types/types';
import AboutCategory from './AboutCategory';
import Category from './Category';
import PlatformCategory from './PlatformCategory';

const Categories: () => JSX.Element = () => {
  return (
    <div className="flex items-center">
      <Menubar className="space-x-4 border-none  ">
        {categoriesHeader.map((category: TypeCategory) => {
          if (category.subCategories) {
            return (
              <Category key={category.id} selectedIdCategory={category.id} />
            );
          }
          if (category.link) {
            return <PlatformCategory key={category.id} category={category} />;
          }
          if (category.navigation) {
            return <AboutCategory key={category.id} category={category} />;
          }

          return null;
        })}
      </Menubar>
    </div>
  );
};

export default Categories;
