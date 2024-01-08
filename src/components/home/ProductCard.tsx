import { useEffect, useRef, useState } from 'react';

const ProductCard = ({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) => {
  const productListRef = useRef<HTMLDivElement>(null);
  const [productListHeight, setProductListHeight] = useState(0);

  useEffect(() => {
    const updateProductListHeight = () => {
      if (productListRef.current) {
        setProductListHeight(productListRef.current.clientHeight);
        console.log(productListRef.current.clientHeight);
      }
    };

    updateProductListHeight();
    window.addEventListener('resize', updateProductListHeight);

    return () => {
      window.removeEventListener('resize', updateProductListHeight);
    };
  }, [products]);

  return (
    <>
      <div className="flex justify-between w-full">
        <h1 className="h1">{title}</h1>
        <p className="toutVoir">Tout voir</p>
      </div>
      <div className="flex gap-x-5 mt-16" ref={productListRef}>
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
            className="text-vintedTextGrisFonce text-center"
            style={{ marginTop: `${productListHeight / 2 - 10}px` }}
          >
            Voir tous les articles
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
