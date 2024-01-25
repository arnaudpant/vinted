import { MenubarTrigger } from '@/components/ui/menubar';
import { TypeCategory } from '@/types/types';
import { MenubarContent, MenubarMenu } from '@radix-ui/react-menubar';
import AboutSubCategory from './AboutSubCategory';

const AboutCategory: React.FC<{
  category: TypeCategory;
}> = ({ category }) => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="text-nowrap border-b-vintedGreen hover:border-b-4 ">
        {category.title}
      </MenubarTrigger>
      <MenubarContent
        className="mt-2 grid grid-cols-2 gap-2 bg-vintedBackground p-2 text-xl"
        side="bottom"
        align="center"
      >
        {category.navigation?.map((navigationVintedPages) => {
          return (
            <AboutSubCategory
              key={navigationVintedPages.title}
              navigationVintedPages={navigationVintedPages}
            />
          );
        })}
      </MenubarContent>
    </MenubarMenu>
  );
};

export default AboutCategory;
