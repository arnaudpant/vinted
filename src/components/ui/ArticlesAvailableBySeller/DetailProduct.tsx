import React from 'react';

export const DetailProduct: React.FC<{
  isLiked: boolean;
  description: string;

  categoryName: string;
  price: number;
}> = ({ isLiked = false, description, categoryName, price }) => {
  const numberLike = 18;

  return (
    <div className="grid grid-cols-2 grid-rows-4  mx-2 ">
      <p className="col-start-1 row-start-1 font-bold text-base text-black ">
        {price.toFixed(2)}€
      </p>
      <a
        href="http://"
        className="col-start-1 row-start-2 text-vintedGreen text-base text-nowrap cursor-pointer hover:underline "
      >
        {Number(price + 1).toFixed(2)}€ incl.
      </a>
      <p className="col-start-1 row-start-3 truncate text-nowrap">
        {description ?? ''}
      </p>
      <p className="col-start-1 row-start-4 truncate text-nowrap">
        {categoryName ?? ''}
      </p>

      <p className="col-start-2 row-start-1  flex justify-end items-center text-nowrap mt-0.5 ">
        <img
          src={
            isLiked
              ? '/src/assets/favorite_liked.png'
              : '/src/assets/favorite_like.png'
          }
          alt="favorite"
          className="h-4"
        />
        {numberLike}
      </p>
    </div>
  );
};

export default DetailProduct;
