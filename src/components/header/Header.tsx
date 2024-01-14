import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

const Header = () => {
  return (
    <div className="fixed w-full bg-vintedBackground">
      <TopHeader />
      <hr className="mt-2" />
      <BottomHeader />
    </div>
  );
};

export default Header;
