import React, { useState } from 'react';

import TopHeader from './TopHeader';
import { BottomHeader } from './BottomHeader';

export const Header = () => {
  const [isMenuBurgerActive, setIsMenuBurgerActive] = useState(true);

  function toggleMenuBurger() {
    setIsMenuBurgerActive(!isMenuBurgerActive);
  }
  return (
    <header className=" h-fit ">
      <TopHeader />
      <hr className="mt-2" />
      <BottomHeader></BottomHeader>
    </header>
  );
};
