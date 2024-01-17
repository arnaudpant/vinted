import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import React from 'react';

const Header = () => {
  return (
    <div className="fixed w-full h-[98px] bg-vintedBackground z-10">
      <div className="border-b">
        <div className="container mx-auto max-w-[1280px] px-5">
          <TopHeader />
        </div>
      </div>
      <div className="container mx-auto max-w-[1280px] px-5">
        <BottomHeader />
      </div>
    </div>
  );
};

export default Header;
