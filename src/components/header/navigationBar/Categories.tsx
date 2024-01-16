import categoriesHeader from '@/data/categoriesHeader';

import Category from './Category';
import useCategories from '@/hooks/useCategories';

const Categories: () => JSX.Element = () => {
  const { selectedIdCategory, selectCategory } = useCategories();
  return (
    <div className="flex items-center">
      <nav className=" flex flex-row items-center space-x-6 text-vintedTextGrisFonce ">
        {/* Liste des catégories : Femmes Hommes Enfants etc... */}

        {categoriesHeader.map((category) => {
          return (
            <Category
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

export default Categories;
