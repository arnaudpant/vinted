import React, { Fragment } from 'react';
import { HeaderBarSearch } from './HeaderBarSearch';
import { useWindowWidth } from '@/hooks/useWindowSize';
import { SCREENS_BREAKPOINT } from '@/utils/Utils';
import { Categories } from './navigationBar/Categories';

export const BottomHeader = () => {
  const width = useWindowWidth();
  return width <= SCREENS_BREAKPOINT.Medium ? (
    <HeaderBarSearch />
  ) : (
    <Categories></Categories>
  );
};
