import getRandomIndex, { getTaxeIncl } from '@/utils/Utils';
import React from 'react';

export const DetailProduct: React.FC<{
  isLiked: boolean;
  description: string;
  categoryName: string;
  price: number;
}> = ({ isLiked = false, description, categoryName, price }) => {
  

  return (
    <div className="mx-2 grid grid-cols-2  grid-rows-4 ">
      <p className="col-start-1 row-start-1 text-base font-bold text-black ">
        {price}€
      </p>
      <p className="col-start-1 row-start-2 cursor-pointer text-nowrap text-base text-vintedGreen hover:underline ">
        {getTaxeIncl(price).toFixed(2)}€ incl.
      </p>
      <p className="col-start-1 row-start-3 truncate text-nowrap">
        {description ?? ''}
      </p>
      <p className="col-start-1 row-start-4 truncate text-nowrap">
        {categoryName ?? ''}
      </p>

      <p className="col-start-2 row-start-1  mt-0.5 flex items-center justify-end text-nowrap ">
        <img
          src={
            isLiked
              ? '/src/assets/favorite_liked.png'
              : '/src/assets/favorite_like.png'
          }
          alt="favorite"
          className="h-4"
        />
        {getRandomIndex(3, 50)}
      </p>
    </div>
  );
};

export default DetailProduct;
