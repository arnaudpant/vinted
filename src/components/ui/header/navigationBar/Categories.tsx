import {
  headerCategories,
  TypeCategory,
  TypeSubCategory,
  NavigationVintedPages,
} from '@/data/categoriesHeader';
import { Category } from './Category';
import { useCategories } from '@/hooks/useCategories';
import { SubCategories } from './SubCategories';
import React, { useEffect, useRef } from 'react';
import { act } from 'react-dom/test-utils';
import { AboutCategories } from './AboutCategories';

export const Categories: () => JSX.Element = () => {
  const {
    selectedIdCategory,
    selectCategory,
    NONE_CATEGORY,
    displayOnScreenPopCategories,
    setDisplayOnScreenPopCategories,
    offsetSelectedCategory,
    setOffsetSelectedCategory,
    activeCategory,
  } = useCategories();
  const navBarRef = useRef();

  const refCategories = useRef();

  const getLeftOffsetCurrentCategorySelected = (): void => {
    const categoryElementDIV: HTMLDivElement | null =
      refCategories?.current?.querySelector(`#category-${selectedIdCategory}`);
    if (categoryElementDIV) {
      const divPosition = categoryElementDIV.getBoundingClientRect();

      const leftOffset = divPosition.left;
      setOffsetSelectedCategory(Math.floor(leftOffset));
    }
  };

  const isNavBarClicked = (): void => {
    document.addEventListener('click', (event) => {
      const elementClicked = event.target;
      if (!navBarRef?.current?.contains(elementClicked)) {
        setDisplayOnScreenPopCategories(false);
      } else {
        setDisplayOnScreenPopCategories(true);
      }
    });
  };

  //Permet de connaitre la poisitin left de la div dans Category. Concerne la catégorie sélectionné par l'utilisateur
  useEffect(
    () => getLeftOffsetCurrentCategorySelected(),

    [selectedIdCategory],
  );

  // Permet de fermer les sous-catégories losque l'utilisateur clique hors de la navBar
  useEffect(() => isNavBarClicked(), []);

  return (
    <div className="max-h-16" ref={navBarRef}>
      <nav
        ref={refCategories}
        className=" flex flex-row items-center space-x-4  ml-32  py-4 text-vintedTextGrisFonce "
      >
        {/* Liste des catégories : Femmes Hommes Enfants etc... */}

        {headerCategories.map((category) => {
          return (
            <Category
              displayOnScreenPopCategories={displayOnScreenPopCategories}
              category={category}
              key={category.id}
              selectedIdCategory={selectedIdCategory}
              selectCategory={selectCategory}
            />
          );
        })}
      </nav>

      {/* Affichage des sous-catégories uniquement lorsque la catégorie est cliquée */}

      {displayOnScreenPopCategories && activeCategory?.subCategories ? (
        <SubCategories
          offsetSelectedCategory={offsetSelectedCategory}
          subCategories={activeCategory.subCategories}
          key={activeCategory.id}
        />
      ) : null}

      {displayOnScreenPopCategories && activeCategory?.navigation ? (
        <AboutCategories
          navigation={activeCategory.navigation}
          offsetSelectedCategory={offsetSelectedCategory}
        />
      ) : null}
    </div>
  );
};
