import FilActu from '@/components/home/FilActu';
import ProductCard from '@/components/home/ProductCard';

import { useEffect, useState } from 'react';

const Home = () => {
  const [productsCreateur, setProductsCreateur] = useState<Product[]>([]);
  const [productsPopulaires, setProductsPopulaires] = useState<Product[]>([]);

  const [productsFildActu, setProductsFildActu] = useState<Product[]>([]);
  const [usersFilActu, setUsersFilActu] = useState<User[]>([]);

  useEffect(() => {
    async function fetchProducts(): Promise<Product[]> {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json() as Product[];
        return data;
      } catch (error) {
        console.error('Error fetching products:', error);
        return [];
      }
    }

    async function fetchUsers(): Promise<User[]> {
      try {
        const response = await fetch('https://fakestoreapi.com/users');
        const usersData = await response.json() as User[];
        return usersData;
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        return [];
      }
    }

    fetchUsers().then((users: User[]) => {
      setUsersFilActu(users.slice(0, 10));
    }).catch((error) => {
      console.error('Error fetching users:', error);
    });
    
    fetchProducts().then((products: Product[]) => {
      setProductsCreateur(products.slice(0, 5));
      setProductsPopulaires(products.slice(5, 10));
      setProductsFildActu(products.slice(10, 20));
    }).catch((error) => {
      console.error('Error fetching products:', error);
    });
  }, []);

  const marques: string[] = [
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
    <div className="m-auto w-10/12 ">
      <div className="mt-20">
        <ProductCard
          title="Explorer les articles de créateur"
          products={productsCreateur}
        />
      </div>

      <div className="mt-20">
        <ProductCard
          title="Articles populaires"
          products={productsPopulaires}
        />
      </div>

      <div className="mt-20">
        <FilActu
          title="Fil d'actualité"
          products={productsFildActu}
          users={usersFilActu}
        />
      </div>

      <div className="my-20">
        <h1 className="h1">Rechercher par marque</h1>
        <div className="flex flex-wrap gap-x-3">
          {marques.map((marque) => (
            <div key={marque} className="mt-3 border p-2">
              {marque}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
