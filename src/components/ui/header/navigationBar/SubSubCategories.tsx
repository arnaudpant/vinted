import { TypeSubCategory, TypeSubSubCategory } from '@/data/categoriesHeader';
import { SubsubCategory } from './SubSubCategory';

export const SubSubCategories: React.FC<{
  subSubCategories: TypeSubSubCategory[];
}> = ({ subSubCategories }) => {
  return (
    <div className=" gap-y-2 max-w-96  ">
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
