import React from 'react';
import {
  headerCategories,
  typeCategory,
  typeSubCategory,
} from '@/data/categoriesHeader';

import { SubSubCategories } from './SubSubCategories';

import { SubCategories } from './SubCategories';
import { Category } from './Category';

export const NavigationBarCategories: () => JSX.Element = () => {
  const NONE_CATEGORY: number = 0;
  const [selectedIdCategory, setSelectedIdCategory] =
    React.useState(NONE_CATEGORY);

  const selectCategory: (id: number) => void = (id) => {
    setSelectedIdCategory(id);
  };

  return (
    <div className="relative z-30 ">
      <nav className=" flex flex-nowrap space-x-4 ml-4 mt-4 mb-2 text-vintedTextGrisFonce">
        {/* Liste des catégories : Femmes Hommes Enfants etc... */}

        {headerCategories.map((category) => {
          return (
            <NavigationCategory
              category={category}
              key={category.id}
              selectedIdCategory={selectedIdCategory}
              selectCategory={selectCategory}
            />
          );
        })}
      </nav>
    </div>
  );
};

const NavigationCategory: React.FC<{
  category: typeCategory;
  selectedIdCategory: number;
  selectCategory: (id: number) => void;
}> = ({ category, selectedIdCategory, selectCategory }) => {
  const defaultSubCategory: string =
    category.subCategories?.map((element) => element.title)[0] ?? '';

  const [selectedSubCategory, setSelectedSubCategory] =
    React.useState(defaultSubCategory);

  const selectSubCategory: (title: string) => void = (title: string) => {
    setSelectedSubCategory(title);
  };

  return (
    // Affichage d'une catégorie
    <div className="">
      <Category
        category={category}
        selectedIdCategory={selectedIdCategory}
        selectCategory={selectCategory}
      />
      {/* Affichage des sous catégories si catégorie est sélectionné*/}
      {category.subCategories && category.id === selectedIdCategory ? (
        <NavigationSubCategories
          subCategories={category.subCategories}
          selectedSubCategory={selectedSubCategory}
          selectSubCategory={selectSubCategory}
        />
      ) : null}
    </div>
  );
};

const NavigationSubCategories: React.FC<{
  subCategories: typeSubCategory[];
  selectedSubCategory: string;
  selectSubCategory: Function;
}> = ({ subCategories, selectedSubCategory, selectSubCategory }) => {
  return (
    <div className="flex flex-row shadow-xl rounded-sm bg-vintedBackgrounf space-x-4  pr-4  h-fit  ">
      <SubCategories
        subCategories={subCategories}
        selectSubCategory={selectSubCategory}
      />

      {/* Liste des sous-sous catégories */}
      <SubSubCategories
        subCategories={subCategories}
        handleSelectCategory={selectedSubCategory}
      />
    </div>
  );
};
