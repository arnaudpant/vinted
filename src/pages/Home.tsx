import { useEffect, useState } from 'react';
import SuggestionSearch from '@/components/suggestion/SuggestionSearch';
import Banner from '@/components/banner/Banner';
import NewsFeed from '@/components/home/NewsFeed';
import ProductCard from '@/components/home/ProductCard';
import BrandSearch from '@/components/BrandSearch';
import { ProductFakeApi, User } from '@/types/types';

const Home = () => {
  const [productsCreator, setProductsCreator] = useState<ProductFakeApi[]>([]);
  const [productsPopular, setProductsPopular] = useState<ProductFakeApi[]>([]);

  const [productsNewsFeed, setProductsNewsFeed] = useState<ProductFakeApi[]>(
    [],
  );
  const [usersNewsFeed, setUsersNewsFeed] = useState<User[]>([]);

  useEffect(() => {
    const urlProduct = import.meta.env.VITE_urlProducts as string;
    const urlUsers = import.meta.env.VITE_urlUsers as string;

    async function fetchProducts(): Promise<ProductFakeApi[]> {
      try {
        const response = await fetch(urlProduct);
        const data = (await response.json()) as Promise<ProductFakeApi[]>;
        return data;
      } catch (error) {
        console.error('Error fetching products:', error);
        return [];
      }
    }

    async function fetchUsers(): Promise<User[]> {
      try {
        const response = await fetch(urlUsers);
        const usersData = (await response.json()) as Promise<User[]>;
        return usersData;
      } catch (error) {
        console.error('Errors fetching users', error);
        return [];
      }
    }

    fetchUsers()
      .then((users: User[]) => {
        setUsersNewsFeed(users.slice(0, 10));
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });

    fetchProducts()
      .then((products: ProductFakeApi[]) => {
        setProductsCreator(products.slice(0, 5));
        setProductsPopular(products.slice(5, 10));
        setProductsNewsFeed(products.slice(10, 20));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
      <Banner />
      <ProductCard
        title="Explorer les articles de créateur"
        products={productsCreator}
      />

      <ProductCard title="Articles populaires" products={productsPopular} />

      <NewsFeed
        title="Fil d'actualité"
        products={productsNewsFeed}
        users={usersNewsFeed}
      />

      <BrandSearch />
      <SuggestionSearch />
    </>
  );
};
export default Home;
