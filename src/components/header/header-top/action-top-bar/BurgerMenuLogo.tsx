import { useState } from 'react';
import { Menu } from 'lucide-react';
import MenuUserConnected from './MenuUserConnected';

const BurgerMenuLogo: () => JSX.Element = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuBurger = () => {
    setIsMenuOpen((v) => !v);
  };
  return (
    <div className="relative">
      <button onClick={toggleMenuBurger}>
        <Menu className="h-7 w-7 font-extralight text-vintedTextGrisClair" />
      </button>
      {isMenuOpen && <MenuUserConnected setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
};

export default BurgerMenuLogo;
