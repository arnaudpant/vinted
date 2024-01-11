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
    <div className="">
      <div className="flex justify-between w-full">
        <h1 className="h1">{title}</h1>
        <p className="toutVoir">Tout voir</p>
      </div>
      <div
        className="flex flex-col gap-y-10 gap-x-10 mt-16 items-center justify-center sm:flex-row flex-wrap "
        ref={productListRef}
      >
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
        <div className="flex-col flex w-[200px] h-[300px] bg-gray-100 justify-center">
          <p className="text-vintedTextGrisFonce text-center">
            Voir tous les articles
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
