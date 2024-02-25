import {
  MenubarSub,
  MenubarSubTrigger,
} from '@/components/ui/menubar';
import { TypeSubCategory } from '@/types/types';
import { Link } from 'react-router-dom';

const SubCategory: React.FC<{ subCategory: TypeSubCategory }> = ({
  subCategory,
}) => {

  return (
    <MenubarSub defaultOpen={true}>
      <MenubarSubTrigger className="cursor-pointer py-3">
        <div className=" flex min-w-48 text-lg">
          <img src={subCategory.iconName} className="mr-4 h-6 " alt={subCategory.title} />
          {subCategory.title}
        </div>
      </MenubarSubTrigger>
      <Link to="/" />
    </MenubarSub>
  );
};

export default SubCategory;
