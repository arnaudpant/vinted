
import { MenubarContent, MenubarItem, MenubarShortcut } from '@/components/ui/menubar';
import { TypeSubCategory } from '@/types/types';
import { Link } from 'react-router-dom';


type Props = {
  subCategory: TypeSubCategory[];
};

const Category = ({ subCategory }: Props) => {
  return (
    <MenubarContent>
      {subCategory.map((subCategory) => (
        <Link
          to={`catalog/${subCategory.link}`}
          state={[subCategory.linkId, subCategory.link]}
          key={subCategory.id}
        >
          <MenubarItem>
            {subCategory.title}{' '}
            <MenubarShortcut>
              <img
                src={subCategory.iconName}
                className="ml-4 h-6 "
                alt={subCategory.title}
              />
            </MenubarShortcut>
          </MenubarItem>
        </Link>
      ))}
    </MenubarContent>
  );
};
export default Category;
