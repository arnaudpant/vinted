import ProductCard from '@/components/home/ProductCard';

import { useEffect, useState } from 'react';

const Home = () => {
  const [productsCreateur, setProductsCreateur] = useState<Product[]>([]);
  const [productsPopulaires, setProductsPopulaires] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProductsCreateur(): Promise<void> {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=5',
        );
        const productsData: Product[] = await response.json();
        setProductsCreateur(productsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    }

    async function fetchProductsPopulaires(): Promise<void> {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products',
        )
        .then((res)=>{
          return res.json()
        })
        .then((data:Product[])=>{
          return data.slice(-5)
        });
        
        setProductsPopulaires(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    }

    fetchProductsPopulaires();
    fetchProductsCreateur();
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
    <div className="w-7/12 m-auto">

      <div className='mt-20'>
        <ProductCard title="Explorer les articles de créateur" products={productsCreateur} />
      </div>

      <div className='mt-20'>
        <ProductCard title="Articles populaires" products={productsPopulaires} />
      </div>

      <div className='mt-20 mb-20'>
        <h1 className="h1">Rechercher par marque</h1>
        <div className="flex flex-wrap gap-x-3">
          {marques.map((marque) => (
            <div key={marque} className="border p-2 mt-3">
              {marque}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
