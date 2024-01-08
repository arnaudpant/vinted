import React from 'react';

export const useMenuBurger: () => {
  isMenuBurgerActive: Boolean;
  toggleMenuBurger: () => void;
} = () => {
  const [isMenuBurgerActive, setIsMenuBurgerActive] = React.useState(true);

  const toggleMenuBurger = () => {
    setIsMenuBurgerActive(!isMenuBurgerActive);
  };
  return { isMenuBurgerActive, toggleMenuBurger };
};
