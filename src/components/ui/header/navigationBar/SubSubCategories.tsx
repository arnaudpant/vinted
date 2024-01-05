import { typeSubCategory } from '@/data/categoriesHeader';
import { SubsubCategory } from './SubSubCategory';

export const SubSubCategories: React.FC<{
  subCategories: typeSubCategory[];
  handleSelectCategory: any;
}> = ({ subCategories, handleSelectCategory }) => {
  return (
    <div className="grid grid-cols-2 gap-y-2 max-w-96  ">
      {[...subCategories]
        // Par défaut affiche la première sous-catégorie
        .filter((subCategory) => subCategory.title === handleSelectCategory)[0]
        .subsubCategories.map((subsubCategory) => (
          <SubsubCategory
            key={subsubCategory.title}
            subsubCategory={subsubCategory}
          />
        ))}
    </div>
  );
};
