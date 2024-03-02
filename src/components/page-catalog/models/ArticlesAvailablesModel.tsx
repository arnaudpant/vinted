import React from 'react';
import CardProductByUser from './CardProductByUser';
import { ArticleForSale } from '@/types/types';

const ArticlesAvailablesModel: React.FC<{
  title: string;
  productsList: ArticleForSale[];
}> = ({ title, productsList }) => {

  return (
    <div className="flex flex-col">
      <div className="col-span-full flex w-full items-end py-3 pl-4">{title}</div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {productsList.map((article: ArticleForSale) => (
          <CardProductByUser key={article.uid} product={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesAvailablesModel;
