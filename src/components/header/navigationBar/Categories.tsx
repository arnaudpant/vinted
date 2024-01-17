import categoriesHeader from '@/data/categoriesHeader';

import { Menubar } from '@/components/ui/menubar';
import { MenubarMenu } from '@radix-ui/react-menubar';
import AboutCategory from './AboutCategory';
import Category from './Category';
import PlatformCategory from './PlatformCategory';
import { TypeCategory } from '@/types/types';

const Categories: () => JSX.Element = () => {
  return (
    <div className="flex items-center">
      <Menubar className="space-x-8 border-none text-lg ">
        {categoriesHeader.map((category: TypeCategory) => {
          if (category.navigation) {
            return <AboutCategory key={category.id} category={category} />;
          }

          if (category.link) {
            return <PlatformCategory category={category} key={category.id} />;
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
