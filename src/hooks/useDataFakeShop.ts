/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FakeCategory, FakeProduct, FakeUser } from '@/types/types';
import { useEffect, useState } from 'react';

const useDataFakeShop = () => {
  const [fakeShopUsers, setFakeShopUsers] = useState<FakeUser[] | []>([]);
  const [fakeShopUser, setFakeShopUser] = useState<FakeUser | null>(null);
  const [fakeShopProducts, setFakeShopProducts] = useState<FakeProduct[] | []>(
    [],
  );
  const [fakeShopCategories, setFakeShopCategories] = useState<
    FakeCategory[] | []
  >([]);

  // Créer une fonction générique pour récupérer les données de l'API
  async function fetchDataList<T>(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        return data as T[];
      } else {
        // Custom message for failed HTTP codes
        if (response.status === 404) throw new Error(`404, ${url} Not found`);
        if (response.status === 500)
          throw new Error('500, internal server error');
        // For any other server error
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      console.error('Fetch', error);
      // Output e.g.: "Fetch Error: 404, Not found"
    }
  }

  async function fetchDataItem<T>(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        return data as T;
      } else {
        // Custom message for failed HTTP codes
        if (response.status === 404) throw new Error(`404, ${url} Not found`);
        if (response.status === 500)
          throw new Error('500, internal server error');
        // For any other server error
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      console.error('Fetch', error);
      // Output e.g.: "Fetch Error: 404, Not found"
    }
  }

  function getCategoriesFakeShop() {
    fetchDataList<FakeCategory>(
      'https://api.escuelajs.co/api/v1/categories',
    ).then((data) => {
      data && setFakeShopCategories(data);
    });
  }

  /** 3 */
  function getProductsFakeShop() {
    fetchDataList<FakeProduct>('https://api.escuelajs.co/api/v1/products').then(
      (data) => {
        data && setFakeShopProducts(data);
      },
    );
  }

  /** 2 */
  function getListUsersFakeShop() {
    fetchDataList<FakeUser>('https://api.escuelajs.co/api/v1/users').then(
      (data) => {
        data && setFakeShopUsers(data);
      },
    );
  }

  function getUserFakeShop(userId: number) {
    fetchDataItem<FakeUser>(
      `https://api.escuelajs.co/api/v1/users/${userId}`,
    ).then((data) => data && setFakeShopUser(data));
  }

  /** 1 */
  useEffect(() => {
    getListUsersFakeShop();
    getProductsFakeShop();
    getCategoriesFakeShop();
  }, []);

  return {
    fakeShopUsers,
    fakeShopProducts,
    fakeShopCategories,
    getUserFakeShop,
    fakeShopUser,
  };
};

export default useDataFakeShop;
