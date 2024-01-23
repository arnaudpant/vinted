import SuggestionSearch from '@/components/suggestion/SuggestionSearch';
import Banner from '@/components/banner/Banner';
import FilActu from '@/components/home/NewsFeed';
import ProductCard from '@/components/home/ProductCard';
import { Product, User } from '@/types/types';

import { useEffect, useState } from 'react';

const Home = () => {
  const [productsCreator, setProductsCreator] = useState<Product[]>([]);
  const [productsPopular, setProductsPopular] = useState<Product[]>([]);

  const [productsNewsFeed, setProductsNewsFeed] = useState<Product[]>([]);
  const [usersNewsFeed, setUsersNewsFeed] = useState<User[]>([]);

  useEffect(() => {
    const urlProduct = import.meta.env.VITE_urlProducts as string;
    const urlUsers = import.meta.env.VITE_urlUsers as string;

    async function fetchProducts(): Promise<Product[]> {
      try {
        const response = await fetch(urlProduct);
        const data = (await response.json()) as Promise<Product[]>;
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
      .then((products: Product[]) => {
        setProductsCreator(products.slice(0, 5));
        setProductsPopular(products.slice(5, 10));
        setProductsNewsFeed(products.slice(10, 20));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const brands: string[] = [
    'Tommy Hilfiger',
    'Zara',
    'Monoprix',
    'Jordan',
    'Morgan',
    'Nike',
    'Adidas',
    'Puma',
    "Levi's",
    'H&M',
    'Lacoste',
    'Mango',
    'Gucci',
    'Chanel',
    'Louis Vuitton',
    'Dior',
    'Prada',
    'Hermès',
    'Balenciaga',
    'Fendi',
    'Versace',
    'Burberry',
    'Valentino',
  ];

  return (
    <>
      <Banner />
      <div className="m-auto w-10/12 ">
        <div className="mt-20">
          <ProductCard
            title="Explorer les articles de créateur"
            products={productsCreator}
          />
        </div>

        <div className="mt-20">
          <ProductCard title="Articles populaires" products={productsPopular} />
        </div>

        <div className="mt-20">
          <FilActu
            title="Fil d'actualité"
            products={productsNewsFeed}
            users={usersNewsFeed}
          />
        </div>

        <div className="my-20">
          <h1 className="h1">Rechercher par marque</h1>
          <div className="flex flex-wrap gap-x-3">
            {brands.map((brand) => (
              <div key={brand} className="mt-3 border p-2">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
      <SuggestionSearch />
    </>
  );
};
export default Home;
