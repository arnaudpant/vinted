import React from 'react';

export const DetailProduct: React.FC<{
  isLiked: boolean;
  description: string;
  categoryName: string;
  price: number;
}> = ({ isLiked = false, description, categoryName, price }) => {
  const numberLike = 18;

  return (
    <div className="mx-2 grid grid-cols-2  grid-rows-4 ">
      <p className="col-start-1 row-start-1 text-base font-bold text-black ">
        {price.toFixed(2)}€
      </p>
      <a
        href="http://"
        className="col-start-1 row-start-2 cursor-pointer text-nowrap text-base text-vintedGreen hover:underline "
      >
        {Number(price + 1).toFixed(2)}€ incl.
      </a>
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
        {numberLike}
      </p>
    </div>
  );
};

export default DetailProduct;
