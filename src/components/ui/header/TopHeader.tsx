import { MouseEventHandler, useRef, useState } from 'react';
import logo from '@/assets/logoVinted.svg';
import menu from '@/assets/menu.svg';
import closeButton from '@/assets/cross-close-button.png';
import { useWindowWidth } from '@/hooks/useWindowSize';
import { SCREENS_BREAKPOINT } from '@/utils/Utils';
import { NavigationBarCategories } from './NavigationBarHeader';
import { HeaderBarSearch } from './HeaderBarSearch';

import { useMenuBurger } from '@/hooks/useBurgerMenu';
import { ActionsTopBar } from './ActionsTopBar';

export const TopHeader: () => JSX.Element = () => {
  const width = useWindowWidth();

  return width < SCREENS_BREAKPOINT.Medium ? (
    <div className="flex h-8 items-center justify-between p-4 ">
      <VintedLogo />
      <BurgerMenuLogo />
    </div>
  ) : (
    <div className="flex flex-row flex-nowrap justify-around items-center mr-4">
      <VintedLogo />
      <HeaderBarSearch />
      <ActionsTopBar />
    </div>
  );
};

const VintedLogo: () => JSX.Element = () => {
  return <img src={logo} alt="logo Vinted" className="ml-4" />;
};

const BurgerMenuLogo: () => JSX.Element = () => {
  const { isMenuBurgerActive, toggleMenuBurger } = useMenuBurger();
  return (
    <button onClick={toggleMenuBurger}>
      <img
        src={isMenuBurgerActive ? menu : closeButton}
        alt="menu"
        className="w-7 mr-4 cursor-pointer md:hidden"
      />
    </button>
  );
};

export default TopHeader;
