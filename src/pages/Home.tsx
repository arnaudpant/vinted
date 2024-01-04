import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts(): Promise<void> {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products?limit=5',
        );
        const productsData: Product[] = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    }

    fetchProducts();
  }, []);

  const [productListHeight, setProductListHeight] = useState(0);
  const productListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProductListHeight = () => {
      if (productListRef.current) {
        setProductListHeight(productListRef.current.clientHeight);
      }
    };

    updateProductListHeight();
    window.addEventListener('resize', updateProductListHeight);

    return () => {
      window.removeEventListener('resize', updateProductListHeight);
    };
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
    'Givenchy',
    'Yves Saint Laurent',
    'Chloé',
    'Kenzo',
    'Sandro',
    'Diesel',
    'Guess',
    'The Kooples',
    'Ralph Lauren',
    'Calvin Klein',
    'Armani',
    'Sonia Rykiel',
    'Sergio Rossi',
    'Sandro',
    'Sézan',
  ];

  return (
    <div className="w-7/12 m-auto">
      <div className="flex justify-between w-full">
        <h1 className="h1">Explorer les articles de créateur</h1>
        <p className="toutVoir">Tout voir</p>
      </div>
      <div className="flex space-x-10 mt-16" ref={productListRef}>
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="flex flex-col items-center w-[200px]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-[200px] h-[200px]"
            />
            <p>{product.price} €</p>
            <h2 className="text-center">{product.title}</h2>
          </div>
        ))}
        <div className="flex-col flex  items-center w-[200px] bg-gray-100">
          <p
            className="text-vintedTextGrisFonce"
            style={{ marginTop: `${productListHeight / 2 - 10}px` }}
          >
            Voir tous les articles
          </p>
        </div>
      </div>
      {/* {Le meme composant dès que l'api fonctionne de nouveau} */}

      <div>
        <h1 className="h1">Rechercher par marque</h1>
        <div className="flex flex-wrap gap-x-3">
          {marques.map((marque, index) => (
            <div key={index} className='border p-2 mt-3'>{marque}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
