import { TypeSubSubCategory } from '@/types/types';
import SubSubCategory from './SubSubCategory';

const SubSubCategories: React.FC<{
  subSubCategories: TypeSubSubCategory[];
}> = ({ subSubCategories }) => {
  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4    ">
      {subSubCategories.map((subsubCategory) => {
        return (
          <SubSubCategory
            key={subsubCategory.title}
            subsubCategory={subsubCategory}
          />
        );
      })}
    </div>
  );
};

export default SubSubCategories;
