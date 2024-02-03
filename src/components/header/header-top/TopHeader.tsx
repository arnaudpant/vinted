import HeaderBarSearch from './search/HeaderBarSearch';
import ActionsTopBar from './buttons-action/ActionsTopBar';
import VintedLogo from './VintedLogo';
import { Link } from 'react-router-dom';

const TopHeader: () => JSX.Element = () => {

  return (
    <div className="flex h-[52px] items-center justify-between p-4 py-2">
      <Link to="/">
        <VintedLogo />
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
