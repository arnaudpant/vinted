import { typeCategory, headerCategories } from '@/data/categoriesHeader';
import React from 'react';
import logoProduct from '@/virus.png';
import { buildIconPath } from '@/utils/Utils';

const MobileHomePageBurgerActive = () => {
  const ID_OUR_PLATEFORME = 8;
  const ID_ABOUT = 7;
  return (
    <div className="flex flex-col mt-2 ">
      <section id="actions" className="flex flex-col items-center  space-y-2">
        <button className="bg-vintedGreen w-10/12 py-2 text-white text-center rounded-md  ">
          Vends tes articles
        </button>
        <button className="bg-white text-vintedGreen w-10/12 py-2 text-white text-center rounded-md border-vintedGreen border-2">
          S'inscrire | Se connecter
        </button>
        <a href="" className="block text-vintedGreen">
          Ton guide Vinted
        </a>
      </section>
      <hr className="my-16" />
      <section id="categories" className="space-y-3 ml-4">
        <h1 className="text-vintedTextGrisFonce ">Parcourir</h1>
        {[...headerCategories]
          .filter(
            (category) =>
              category.id !== ID_OUR_PLATEFORME && category.id !== ID_ABOUT,
          )
          .map((category: typeCategory) => {
            return (
              <div key={category.id} className="flex flex-col">
                <div className="flex flex-row  items-center space-x-3">
                  <img
                    src={buildIconPath('boy')}
                    alt="logo catégorie produit"
                    className="h-8"
                  />
                  <button>{category.title}</button>
                </div>
                <hr className="my-4" />
              </div>
            );
          })}
      </section>
      <section id="navigation">
        {[...headerCategories]
          .filter((category) => category.id === ID_ABOUT)
          .map((category: typeCategory) => category.navigation)
          .flat()
          .map((navigation) => {
            return (
              <NavigationPageModel
                title={navigation?.title}
                navigationTitles={navigation?.navigationTitles}
              />
            );
          })}
      </section>
    </div>
  );
};

const NavigationPageModel: React.FC<{
  title: string | undefined;
  navigationTitles: { description: string; path?: string }[] | undefined;
}> = ({ title, navigationTitles }) => {
  return (
    <div key={title} className="flex flex-col ml-4 mt-6">
      <h1 className="text-vintedTextGrisFonce text-sm mb-2">{title}</h1>
      {navigationTitles?.map((navigationTitle) => {
        return (
          <div className="space-y-4 mb-2" key={navigationTitle.description}>
            <a
              className="block text-vintedTextBlack"
              key={navigationTitle.description}
            >
              {navigationTitle.description}
            </a>
            <hr className="" />
          </div>
        );
      })}
    </div>
  );
};

export default MobileHomePageBurgerActive;
