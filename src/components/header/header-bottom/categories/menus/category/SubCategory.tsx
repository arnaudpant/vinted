import { MenubarSub, MenubarSubTrigger } from '@/components/ui/menubar';
import { TypeSubCategory } from '@/types/types';
import { Link } from 'react-router-dom';

type Props = {
  subCategory: TypeSubCategory;
};

const SubCategory = ({ subCategory }: Props) => {

  return (
    <MenubarSub>
      <MenubarSubTrigger className="cursor-pointer py-3">
        <Link to={`catalog/${subCategory.link}`} state={[subCategory.linkId, subCategory.link]}>
          <div className=" flex min-w-48 text-lg">
            <img
              src={subCategory.iconName}
              className="mr-4 h-6 "
              alt={subCategory.title}
            />
            {subCategory.title}
          </div>
        </Link>
      </MenubarSubTrigger>
    </MenubarSub>
  );
};

export default SubCategory;
