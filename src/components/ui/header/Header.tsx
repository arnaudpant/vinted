import React, { useState } from 'react';

import TopHeader from './TopHeader';
import { BottomHeader } from './BottomHeader';

export const Header = () => {
  return (
    <div className="fixed w-full bg-vintedBackground">
      <TopHeader />
      <hr className="mt-2" />
      <BottomHeader></BottomHeader>
    </div>
  );
};
