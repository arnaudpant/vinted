import { MenubarItem } from '@/components/ui/menubar';
import { NavigationVintedPages } from '@/types/types';
import { MenubarArrow } from '@radix-ui/react-menubar';
import { Link } from 'react-router-dom';

export const AboutSubCategory: React.FC<{
  navigationVintedPages: NavigationVintedPages;
}> = ({ navigationVintedPages }) => {
  return (
    <div className="text-lg flex flex-col my-4">
      <h2 className="font-bold text-md text-vintedTextBlackVar">
        {navigationVintedPages.title}
      </h2>
      {navigationVintedPages.navigationTitles.map((navigation) => {
        return (
          <MenubarItem key={navigation.description}>
            <Link
              to={navigation.path ?? '/'}
              key={navigationVintedPages.title}
              className="text-lg"
            >
              {navigation.description}
            </Link>
          </MenubarItem>
        );
      })}
    </div>
  );
};
