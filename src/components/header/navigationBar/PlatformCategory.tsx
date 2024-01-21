import { MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { TypeCategory } from '@/types/types';
import { Link } from 'react-router-dom';

const PlatformCategory: React.FC<{ category: TypeCategory }> = ({
  category,
}) => {
  return (
    <MenubarMenu>
      <MenubarTrigger>
        <Link to={category.link ?? '/'}>{category.title}</Link>
      </MenubarTrigger>
    </MenubarMenu>
  );
};

export default PlatformCategory;
