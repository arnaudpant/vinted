import categoriesHeader from '@/data/categoriesHeader';

import useCategories from '@/hooks/useCategories';
import SubCategories from './SubCategories';
import { useCallback, useEffect, useRef } from 'react';
import AboutCategories from './AboutCategories';
import Category from './Category';

const Categories: () => JSX.Element = () => {
  const {
    selectedIdCategory,
    selectCategory,
    displayOnScreenPopCategories,
    setDisplayOnScreenPopCategories,
    offsetSelectedCategory,
    setOffsetSelectedCategory,
    activeCategory,
  } = useCategories();
  const divCategorieRef = useRef<HTMLDivElement | null>(null);

  /* refCategories est une reférence de l'élément nav, qui contient plusieurs catégories
   * Cette ref permet à la fonction
   * getLeftOffsetCurrentCategorySelected de faire un querySelector
   * de la catégorie qui doit être pop. La fonction détermine la position horizontale de cette catégorie
   * Ce décalage est appelée currentCategorySelectedLeftPosition  dans la fonction*/

  const navCategoriesRef = useRef<HTMLElement | null>(null);

  const getLeftOffsetCurrentCategorySelected = useCallback((): void => {
    const currentCategorySelected: HTMLDivElement | null | undefined =
      navCategoriesRef?.current?.querySelector(
        `#category-${selectedIdCategory}`,
      );
    if (currentCategorySelected) {
      const currentCategorySelectedPosition =
        currentCategorySelected.getBoundingClientRect();

      const currentCategorySelectedLeftPosition = Math.floor(
        currentCategorySelectedPosition.left,
      );
      setOffsetSelectedCategory(currentCategorySelectedLeftPosition);
    }
  }, [selectedIdCategory, setOffsetSelectedCategory]);

  const isNavBarClicked = useCallback((): void => {
    document.addEventListener('click', (event) => {
      const elementClicked = (event.target as Node) || null;
      if (!elementClicked) {
        return;
      }
      if (!divCategorieRef?.current?.contains(elementClicked)) {
        setDisplayOnScreenPopCategories(false);
      } else {
        setDisplayOnScreenPopCategories(true);
      }
    });
  }, [setDisplayOnScreenPopCategories]);

  //Permet de connaitre la poisitin left de la div dans Category. Concerne la catégorie sélectionné par l'utilisateur
  useEffect(
    () => getLeftOffsetCurrentCategorySelected(),

    [selectedIdCategory, getLeftOffsetCurrentCategorySelected],
  );

  // Permet de fermer les sous-catégories losque l'utilisateur clique hors de la navBar
  useEffect(() => isNavBarClicked(), [isNavBarClicked]);

  return (
    <div className='flex items-center' ref={divCategorieRef}>
      <nav
        ref={navCategoriesRef}
        className=" flex flex-row items-center space-x-4 text-vintedTextGrisFonce "
      >
        {/* Liste des catégories : Femmes Hommes Enfants etc... */}

        {categoriesHeader.map((category) => {
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

export default Categories;
