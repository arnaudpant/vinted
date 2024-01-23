import HeaderBarSearch from './HeaderBarSearch';
import Categories from './navigationBar/Categories';

const BottomHeader = () => {

  return (
    <>
      <div className="lg:hidden h-[46px]">
        <HeaderBarSearch />
      </div>
      <div className="hidden lg:flex h-[46px]">
        <Categories />
      </div>
    </>
  );
};

export default BottomHeader;
