import React from 'react';
import { DetailProduct } from './DetailProduct';
import UserBanner from './UserBanner';

const ArticleAvailable = () => {
  const TEMPORARY_ARTICLE_URL =
    'https://images1.vinted.net/t/03_014e8_TL9PwcvqsQ8JJY5Jnnw1GiuK/f800/1704794930.jpeg?s=00b9d555ffe8a1ce94ca113751cfd134375bfaa2';

  return (
    <div className="flex flex-col py-2  bg-vintedBackground text-sm  ">
      <UserBanner />
      <img
        src={TEMPORARY_ARTICLE_URL}
        alt="article"
        className="cursor-pointer"
      />
      <DetailProduct isLiked={true} />
    </div>
  );
};

export default ArticleAvailable;
