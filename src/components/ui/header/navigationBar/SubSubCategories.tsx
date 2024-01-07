import { TypeSubCategory, TypeSubSubCategory } from '@/data/categoriesHeader';
import { SubsubCategory } from './SubSubCategory';

export const SubSubCategories: React.FC<{
  subSubCategories: TypeSubSubCategory[];
}> = ({ subSubCategories }) => {
  return (
    <div className="grid grid-cols-2  gap-y-2 gap-x-4   ">
      {subSubCategories.map((subsubCategory) => {
        return (
          <SubsubCategory
            key={subsubCategory.title}
            subsubCategory={subsubCategory}
          />
        );
      })}
    </div>
  );
};
