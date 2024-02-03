import TopHeader from './header-top/TopHeader';
import BottomHeader from './header-bottom/BottomHeader';

const Header = () => {
  return (
    <div className="fixed z-10 h-[98px] w-full bg-vintedBackground">
      <div className="border-b">
        <div className="container mx-auto max-w-[1240px] px-5">
          <TopHeader />
        </div>
      </div>
      <div className="container mx-auto max-w-[1240px] px-5">
        <BottomHeader />
      </div>
    </div>
  );
};

export default Header;
