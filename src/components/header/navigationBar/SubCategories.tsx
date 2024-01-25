import categoriesHeader from '@/data/categoriesHeader';

import { TypeCategory } from '@/types/types';
import SubCategory from './SubCategory';

const SubCategories: React.FC<{ selectedIdCategory: number }> = ({
  selectedIdCategory,
}) => {
  const activeCategory: TypeCategory | undefined = categoriesHeader.find(
    (category) => category.id === selectedIdCategory,
  );
  if (!activeCategory?.subCategories) {
    return null;
  }
  return (
    <>
      {activeCategory?.subCategories?.map((subCategory) => (
        <SubCategory
          key={subCategory.id}
          subCategory={subCategory}
        ></SubCategory>
      ))}
    </>
  );
};

export default SubCategories;
