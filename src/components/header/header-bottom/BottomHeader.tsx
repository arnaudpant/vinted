import HeaderBarSearch from '../header-top/search/HeaderBarSearch';
import Categories from '../navigationBar/Categories';

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
