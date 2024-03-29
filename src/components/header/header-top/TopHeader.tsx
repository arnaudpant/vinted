import HeaderBarSearch from './input-search/HeaderBarSearch';
import ActionsTopBar from './action-top-bar/ActionsTopBar';
import logo from '@/assets/logoVendsLe.png';
import { Link } from 'react-router-dom';

const TopHeader: () => JSX.Element = () => {
  return (
    <div className="flex h-[52px] items-center justify-between px-4 py-2">
      <Link to="/">
        <img src={logo} alt="logo Vinted" className="ml-4 h-9 cursor-pointer" />
      </Link>
      <div className="hidden lg:flex lg:grow">
        <HeaderBarSearch />
      </div>
      <div className="flex">
        <ActionsTopBar />
      </div>
    </div>
  );
};

export default TopHeader;
