import { MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { TypeCategory } from '@/types/types';
import { Link } from 'react-router-dom';

const PlatformCategory: React.FC<{ category: TypeCategory }> = ({
  category,
}) => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="text-base text-vintedTextBlackVar hover:border-b-4 hover:border-vintedGreen  hover:bg-vintedBackgroundCard">
        <Link to={category.link ?? '/'}>{category.title}</Link>
      </MenubarTrigger>
    </MenubarMenu>
  );
};

export default PlatformCategory;
