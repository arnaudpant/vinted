import React from 'react';
import { DetailProduct } from './DetailProduct';
import UserBanner from './UserBanner';
import { FakeProduct } from '@/types/types';

const ArticleAvailable: React.FC<{ fakeProduct: FakeProduct }> = ({
  fakeProduct,
}) => {
  const TEMPORARY_ARTICLE_URL =
    'https://images1.vinted.net/t/03_014e8_TL9PwcvqsQ8JJY5Jnnw1GiuK/f800/1704794930.jpeg?s=00b9d555ffe8a1ce94ca113751cfd134375bfaa2';

  const URL_UMAGE_PATH: string = fakeProduct.images[0];
  // console.log('URL_IMAGE_PATH_ORIGIN', URL_UMAGE_PATH);
  // console.log(URL_UMAGE_PATH);

  const cleanURLPath: (urlPath: any) => string = (
    urlPath: string | string[],
  ) => {
    if (typeof urlPath === 'string') {
      console.log('image');
      return urlPath;
    } else {
      console.log('pas une image');
      return 'erreur image path';
    }
  };
  cleanURLPath(URL_UMAGE_PATH);

  return (
    <div className="flex flex-col py-2  bg-vintedBackground text-sm  ">
      <UserBanner />
      <img
        src={cleanURLPath(URL_UMAGE_PATH) ?? TEMPORARY_ARTICLE_URL}
        alt="article"
        className="cursor-pointer"
      />
      <DetailProduct
        isLiked={true}
        description={fakeProduct.description}
        categoryName={fakeProduct.category.name}
        price={fakeProduct.price}
      />
    </div>
  );
};

export default ArticleAvailable;
