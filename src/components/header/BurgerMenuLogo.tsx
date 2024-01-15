import { useState } from "react";
import { Menu } from 'lucide-react';

type Props = {
  setIsMenuBurgerActive: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuBurgerActive: boolean
};

const BurgerMenuLogo: ({
  setIsMenuBurgerActive,
  isMenuBurgerActive,
}: Props) => JSX.Element = () => {
  const [isMenuBurgerActive, setIsMenuBurgerActive] = useState(true);

  const toggleMenuBurger = () => {
    setIsMenuBurgerActive(!isMenuBurgerActive);
  };
  return (
    <button onClick={toggleMenuBurger}>
      <Menu className="text-vintedTextGrisClair font-extralight h-7 w-7" />
    </button>
  );
};

export default BurgerMenuLogo;