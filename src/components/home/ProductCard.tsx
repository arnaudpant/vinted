// import { useEffect, useRef, useState } from 'react';

// type Product = {
//   category: string;
//   description: string;
//   id: number;
//   image: string;
//   price: number;
//   rating: {
//     rate: number;
//     count: number;
//   };
//   title: string;
// };

// const [products, setProducts] = useState<Product[]>([]);

// useEffect(() => {
//   async function fetchProducts(): Promise<void> {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products?limit=5');
//       const productsData: Product[] = await response.json();
//       setProducts(productsData);
//     } catch (error) {
//       console.error('Erreur lors de la récupération des données :', error);
//     }
//   }

//   fetchProducts();
// }, []);

// const [productListHeight, setProductListHeight] = useState(0);
// const productListRef = useRef<HTMLDivElement>(null);

// useEffect(() => {
//   const updateProductListHeight = () => {
//     if (productListRef.current) {
//       setProductListHeight(productListRef.current.clientHeight);
//     }
//   };

//   updateProductListHeight();
//   window.addEventListener('resize', updateProductListHeight);

//   return () => {
//     window.removeEventListener('resize', updateProductListHeight);
//   };
// }, []);

// const productCard: React.FC<{ titre: string }> = ({titre}) => {
//   return (
//     <>
//       <div className="flex justify-between w-full">
//         <h1 className="h1">{titre}</h1>
//         <p className="">Tout voir</p>
//       </div>
//       <div className="flex space-x-10 mt-16" ref={productListRef}>
//         {products.map((product: Product) => (
//           <div
//             key={product.id}
//             className="flex flex-col items-center w-[200px]"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-[200px] h-[200px]"
//             />
//             <p>{product.price} €</p>
//             <h2 className="text-center">{product.title}</h2>
//           </div>
//         ))}
//         <div className="flex-col flex  items-center w-[200px] bg-gray-100">
//           <p
//             className="text-vintedTextGrisFonce"
//             style={{ marginTop: `${productListHeight / 2 - 10}px` }}
//           >
//             Voir tous les articles
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default productCard;
