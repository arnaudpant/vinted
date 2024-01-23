import { useRef } from 'react';

import { ProductFakeApi } from '@/types/types';

const ProductCard = ({
  title,
  products,
}: {
  title: string;
  products: ProductFakeApi[];
}) => {
  const productListRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="flex w-full justify-between">
        <h1 className="h1">{title}</h1>
        <p className="seeAll">Tout voir</p>
      </div>
      <div
        className="mt-16 flex flex-col flex-wrap items-center justify-center gap-10 sm:flex-row"
        ref={productListRef}
      >
        {products.map((product: ProductFakeApi) => (
          <div
            key={product.id}
            className="flex w-[200px] flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-[200px] w-[200px]"
            />
            <p>{product.price} €</p>
            <h2 className="text-center">{product.title}</h2>
          </div>
        ))}
        <div className="flex h-[300px] w-[200px] flex-col justify-center bg-gray-100">
          <p className="text-center text-vintedTextGrisFonce">
            Voir tous les articles
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
