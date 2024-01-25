import {
  MenubarItem,
  MenubarSub,
  MenubarSubTrigger,
} from '@/components/ui/menubar';
import { TypeSubCategory } from '@/types/types';
import { buildIconPath } from '@/utils/Utils';
import SubSubCategories from './SubSubCategories';
import { Link } from 'react-router-dom';

const SubCategory: React.FC<{ subCategory: TypeSubCategory }> = ({
  subCategory,
}) => {
  const imagePath = buildIconPath(subCategory.iconName);
  if (subCategory.link) {
    return (
      <MenubarItem>
        <Link to="/" className="flex min-w-48 text-lg">
          <img src={imagePath} className="mr-4 h-6 " alt={subCategory.title} />
          {subCategory.title}
        </Link>
      </MenubarItem>
    );
  }
  return (
    <MenubarSub defaultOpen={true}>
      <MenubarSubTrigger className="py-3">
        <div className=" flex min-w-48 text-lg">
          <img src={imagePath} className="mr-4 h-6 " alt={subCategory.title} />
          {subCategory.title}
        </div>
      </MenubarSubTrigger>
      {subCategory.link ? (
        <Link to={subCategory.link ?? '/'} />
      ) : (
        <SubSubCategories subCategory={subCategory} />
      )}
      {}
    </MenubarSub>
  );
};

export default SubCategory;
