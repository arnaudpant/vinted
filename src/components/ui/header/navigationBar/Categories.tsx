import { headerCategories } from '@/data/categoriesHeader';
import Category from './Category';
import { useCategories } from '@/hooks/useCategories';
import { SubCategories } from './SubCategories';
import { useEffect, useRef } from 'react';
import { AboutCategories } from './AboutCategories';

export const Categories: () => JSX.Element = () => {
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

  const getLeftOffsetCurrentCategorySelected = (): void => {
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
  };

  const isNavBarClicked = (): void => {
    document.addEventListener('click', (event) => {
      const elementClicked = event.target;
      if (!divCategorieRef?.current?.contains(elementClicked)) {
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
    <div className="max-h-16" ref={divCategorieRef}>
      <nav
        ref={navCategoriesRef}
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
