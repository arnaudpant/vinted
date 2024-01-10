import logo from '@/assets/logoVinted.svg';
import menu from '@/assets/menu.svg';
import closeButton from '@/assets/cross-close-button.png';
import useWindowWidth from '@/hooks/useWindowWidth';
import { SCREENS_BREAKPOINT } from '@/utils/constants';
import { HeaderBarSearch } from './HeaderBarSearch';
import { ActionsTopBar } from './ActionsTopBar';
import { useState } from 'react';

export const TopHeader: () => JSX.Element = () => {
  const width = useWindowWidth();

  return width < SCREENS_BREAKPOINT.Medium ? (
    <div className="flex h-8 items-center justify-between p-4 ">
      <VintedLogo />
      <BurgerMenuLogo />
    </div>
  ) : (
    <div className="flex flex-row flex-nowrap justify-around w-full items-center mr-4 ">
      <VintedLogo />
      <HeaderBarSearch />

      <ActionsTopBar />
    </div>
  );
};

const VintedLogo: () => JSX.Element = () => {
  return <img src={logo} alt="logo Vinted" className="ml-4 cursor-pointer" />;
};

const BurgerMenuLogo: () => JSX.Element = () => {
  const [isMenuBurgerActive, setIsMenuBurgerActive] = useState(true);

  const toggleMenuBurger = () => {
    setIsMenuBurgerActive(!isMenuBurgerActive);
  };
  return (
    <button onClick={toggleMenuBurger}>
      <img
        src={isMenuBurgerActive ? menu : closeButton}
        alt="menu"
        className="w-7 mr-4 cursor-pointer  md:hidden"
      />
    </button>
  );
};
