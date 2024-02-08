import {
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from '@/components/ui/menubar';
import { TypeCategory } from '@/types/types';

import AboutSubCategory from './AboutSubCategory';

const AboutCategory: React.FC<{
  category: TypeCategory;
}> = ({ category }) => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="text-base text-vintedTextBlackVar hover:border-b-4 hover:border-vintedGreen  hover:bg-vintedBackgroundCard">
        {category.title}
      </MenubarTrigger>
      <MenubarContent
        className="mt-2 grid h-[600px]  grid-cols-2  gap-2 overflow-y-auto bg-vintedBackground px-4 py-2 text-xl"
        side="bottom"
        onEscapeKeyDown={(event: KeyboardEvent) => event.preventDefault()}
        avoidCollisions={true}
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
