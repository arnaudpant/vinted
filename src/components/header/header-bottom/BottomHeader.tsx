import HeaderBarSearch from '../header-top/input-search/HeaderBarSearch';
import Categories from './Categories';

const BottomHeader = () => {
  return (
    <>
      <div className="h-[46px] lg:hidden">
        <HeaderBarSearch />
      </div>
      <div className="hidden h-[46px] lg:flex">
        <Categories />
      </div>
    </>
  );
};

export default BottomHeader;
