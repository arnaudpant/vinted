import { NavigationVintedPages } from '@/data/categoriesHeader';

export const AboutCategory: React.FC<{
  navigationVintedPages: NavigationVintedPages;
}> = ({ navigationVintedPages }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-vintedTextGrisFonce">
        {navigationVintedPages.title}
      </h1>
      {navigationVintedPages.navigationTitles.map((navigation) => {
        return (
          <a
            key={navigation.description}
            href=""
            className=" hover:bg-vintedBackgroundCard "
          >
            {navigation.description}
          </a>
        );
      })}
    </div>
  );
};
