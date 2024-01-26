import categoriesHeader from '@/data/categoriesHeader';
import { TypeCategory } from '@/types/types';
import buildIconPath from '@/utils/buildIconPath';

// Composant non utilisé pour le moment.

const MobileHomePageBurgerActive = () => {
  const ID_OUR_PLATEFORME = 8;
  const ID_ABOUT = 7;
  return (
    <div className="mt-2 flex flex-col ">
      <section id="actions" className="flex flex-col items-center  space-y-2">
        <button className="w-10/12 rounded-md bg-vintedGreen py-2 text-center text-white  ">
          Vends tes articles
        </button>
        <button className="w-10/12 rounded-md border-2 border-vintedGreen bg-white py-2 text-center text-vintedGreen">
          S&apos;inscrire | Se connecter
        </button>
        <a href="/" className="block text-vintedGreen">
          Ton guide Vinted
        </a>
      </section>
      <hr className="my-16" />
      <section id="categories" className="ml-4 space-y-3">
        <h1 className="text-vintedTextGrisFonce ">Parcourir</h1>
        {[...categoriesHeader]
          .filter(
            (category) =>
              category.id !== ID_OUR_PLATEFORME && category.id !== ID_ABOUT,
          )
          .map((category: TypeCategory) => {
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
        {[...categoriesHeader]
          .filter((category) => category.id === ID_ABOUT)
          .map((category: TypeCategory) => category.navigation)
          .flat()
          .map((navigation) => {
            return (
              <NavigationPageModel
                key={navigation?.title}
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
    <div key={title} className="ml-4 mt-6 flex flex-col">
      <h1 className="mb-2 text-sm text-vintedTextGrisFonce">{title}</h1>
      {navigationTitles?.map((navigationTitle) => {
        return (
          <div className="mb-2 space-y-4" key={navigationTitle.description}>
            <a
              href=""
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
