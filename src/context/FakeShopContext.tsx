import useDataFakeShop from '@/hooks/useDataFakeShop';
import { createContext, useContext } from 'react';
import { FakeCategory, FakeProduct, FakeUser } from '../types/types';

const init = {
  fakeShopUsers: [] as FakeUser[],
  fakeShopProduct: [] as FakeProduct[],
  fakeShopCategories: [] as FakeCategory[],
};

export const FakeShopContext = createContext({
  fakeShopUsers: init.fakeShopUsers,
  fakeShopProduct: init.fakeShopProduct,
  fakeShopCategories: init.fakeShopCategories,
});

type Props = {
  children: React.ReactNode;
};

export function FakeShopProvider({ children }: Props) {
  const fakeShopData = useDataFakeShop();

  return (
    <FakeShopContext.Provider
      value={{
        fakeShopUsers: fakeShopData.fakeShopUsers,
        fakeShopProduct: fakeShopData.fakeShopProducts,
        fakeShopCategories: fakeShopData.fakeShopCategories,
      }}
    >
      {children}
    </FakeShopContext.Provider>
  );
}

export const useFakeShop = () => useContext(FakeShopContext);
