import { HeaderBarSearch } from './HeaderBarSearch';
import useWindowWidth from '@/hooks/useWindowWidth';
import { SCREENS_BREAKPOINT } from '@/utils/constants';
import { Categories } from './navigationBar/Categories';

const BottomHeader = () => {
  const width = useWindowWidth();
  return width <= SCREENS_BREAKPOINT.Medium ? (
    <HeaderBarSearch />
  ) : (
    <Categories />
  );
};

export default BottomHeader;
