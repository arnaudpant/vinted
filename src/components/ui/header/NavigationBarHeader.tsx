import React from 'react';
import {
  headerCategories,
  Category,
  SubCategory,
} from '@/data/categoriesHeader';
import logoProduct from '@/assets/virus_sanitizer_personal_care_products_icon.png';

export const NavigationBarCategories: () => JSX.Element = () => {
  const NONE_CATEGORY: number = 0;
  const [selectedIdCategory, setSelectedIdCategory] =
    React.useState(NONE_CATEGORY);

  const selectCategory: (id: number) => void = (id) => {
    setSelectedIdCategory(id);
  };

  return (
    <div className="relative z-30">
      <nav className=" flex flex-nowrap space-x-4 ml-4 mt-4 mb-2 text-vintedTextGrisFonce">
        {/* Liste des catégories : Femmes Hommes Enfants etc... */}

        {headerCategories.map((category, idCategory) => {
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
  category: Category;
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
      <button
        key={category.id}
        className={`p-2  hover:bg-vintedBackgrounf ${
          selectedIdCategory === category.id
            ? 'border-vintedGreen border-solid border-b-4'
            : ''
        }`}
        onClick={(event) => {
          event.preventDefault();
          selectCategory(category.id);
        }}
      >
        {category.title}
      </button>
      {/* Affichage des sous catégories */}
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
  subCategories: SubCategory[];
  selectedSubCategory: string;
  selectSubCategory: Function;
}> = ({ subCategories, selectedSubCategory, selectSubCategory }) => {
  return (
    <div className="flex flex-row  bg-vintedBackgrounf space-x-4  py-4 px-8 h-fit shadow-xl ">
      {/* Liste des sous-catégories */}
      <div className="border-r-2 ">
        {subCategories.map((subCategory) => {
          return (
            <div
              className="flex items-center  hover:cursor-pointer pr-10 pb-2 my-2 space-x-4 hover:bg-vintedBackgroundCard mr-2"
              key={subCategory.title}
            >
              <img
                src={logoProduct}
                alt="Icone"
                className="object-contain h-8"
              />
              <button
                onClick={(event) => {
                  event.preventDefault();
                  selectSubCategory(subCategory.title);
                }}
                className=" block  whitespace-nowrap "
              >
                {subCategory.title}
              </button>
            </div>
          );
        })}
      </div>

      {/* Liste des sous-sous catégories */}
      <div className="grid grid-cols-2 gap-y-2 max-w-96 ">
        {[...subCategories]
          .filter((subCategory) => subCategory.title === selectedSubCategory)[0]
          .subsubCategories.map((subsubCategory) => (
            <button
              key={subsubCategory.title}
              className="whitespace-nowrap truncate px-4 py-2 hover:bg-vintedBackgroundCard hover:cursor-pointer"
            >
              {subsubCategory.title}
            </button>
          ))}
      </div>
    </div>
  );
};
