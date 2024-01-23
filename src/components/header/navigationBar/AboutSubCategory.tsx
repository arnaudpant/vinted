import { MenubarItem } from '@/components/ui/menubar';
import { NavigationVintedPages } from '@/types/types';
import { Link } from 'react-router-dom';

export const AboutSubCategory: React.FC<{
  navigationVintedPages: NavigationVintedPages;
}> = ({ navigationVintedPages }) => {
  return (
    <div className="my-4 flex flex-col text-lg">
      <h2 className="font-bold text-vintedTextBlackVar">
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
