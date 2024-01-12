import React from 'react';

export const DetailProduct: React.FC<{ isLiked: boolean }> = ({
  isLiked = false,
}) => {
  const articleDescription = 32;
  const articleCategory = 'Adidas';
  const numberLike = 18;

  return (
    <div className="grid grid-cols-2 grid-rows-4  mx-2 ">
      <p className="col-start-1 row-start-1 font-bold text-base text-black ">
        21.90 €
      </p>
      <a
        href="http://"
        className="col-start-1 row-start-2 text-vintedGreen text-base text-nowrap cursor-pointer hover:underline "
      >
        23.70€ incl.
      </a>
      <p className="col-start-1 row-start-3">{articleDescription ?? ''}</p>
      <p className="col-start-1 row-start-4">{articleCategory ?? ''}</p>

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
