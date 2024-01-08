import { NavigationVintedPages } from '@/data/categoriesHeader';
import React from 'react';
import { AboutCategory } from './AboutCategory';

export const AboutCategories: React.FC<{
  navigation: NavigationVintedPages[];
  offsetSelectedCategory: number;
}> = ({ navigation, offsetSelectedCategory }) => {
  return (
    <div
      className="grid grid-flow-col grid-rows-2 grid-cols-3 space-y-4 bg-vintedBackgrounf w-fit px-4 py-6 rounded-md"
      style={{ position: 'relative', left: offsetSelectedCategory }}
    >
      {navigation.map((navigationVintedPages) => {
        return (
          <AboutCategory
            key={navigationVintedPages.title}
            navigationVintedPages={navigationVintedPages}
          />
        );
      })}
    </div>
  );
};
