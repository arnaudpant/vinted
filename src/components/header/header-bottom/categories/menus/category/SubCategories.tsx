import { TypeSubCategory } from '@/types/types';
import SubCategory from './SubCategory';

type Props = {
  subCategorySelected: TypeSubCategory[];
};

const SubCategories = ({ subCategorySelected }: Props) => {
 
  return (
    <>
      {subCategorySelected.map((subCategory) => (
        <SubCategory
          key={subCategory.id}
          subCategory={subCategory}
        ></SubCategory>
      ))}
    </>
  );
};

export default SubCategories;
