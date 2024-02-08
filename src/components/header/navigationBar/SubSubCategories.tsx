import { MenubarItem, MenubarSubContent } from '@/components/ui/menubar';
import { TypeSubCategory } from '@/types/types';
import { Link } from 'react-router-dom';

const SubSubCategories: React.FC<{ subCategory: TypeSubCategory }> = ({
  subCategory,
}) => {
  return (
    <MenubarSubContent>
      <div className="grid grid-cols-2 gap-8">
        {subCategory.subSubCategories?.map((subSubCategory) => (
          <MenubarItem className="text-lg" key={subSubCategory.title}>
            <Link reloadDocument to={`/catalog/${subCategory.categoryId}`}>
              {subSubCategory.title}
            </Link>
          </MenubarItem>
        ))}
      </div>
    </MenubarSubContent>
  );
};

export default SubSubCategories;
