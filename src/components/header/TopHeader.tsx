import HeaderBarSearch from './HeaderBarSearch';
import { ActionsTopBar } from './ActionsTopBar';
import { useState } from 'react';
import VintedLogo from './VintedLogo';
import BurgerMenuLogo from './BurgerMenuLogo';

const TopHeader: () => JSX.Element = () => {
  const [isMenuBurgerActive, setIsMenuBurgerActive] = useState(true);

  return (
    <div className="flex h-[52px] py-2 items-center justify-between p-4 ">
      <VintedLogo />
      <div className="hidden lg:flex lg:grow">
        <HeaderBarSearch />
      </div>
      <div className="hidden lg:flex">{/* <ActionsTopBar /> */}</div>
      <div className="lg:hidden pt-2">
        <BurgerMenuLogo
          setIsMenuBurgerActive={setIsMenuBurgerActive}
          isMenuBurgerActive={isMenuBurgerActive}
        />
      </div>
    </div>
  );
};

export default TopHeader;
