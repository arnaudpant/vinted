import React from 'react';
import TitleArticlesAvailables from './TitleArticlesAvailables';
import CardProductByUser from './CardProductByUser';
import { FakeProduct } from '@/types/types';

const ArticlesAvailablesModel: React.FC<{
  title: string;
  productsList: FakeProduct[];
}> = ({ title, productsList }) => {
  if (!productsList) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className=" h-12 w-12 animate-spin rounded-full border-t-4 border-t-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <TitleArticlesAvailables title={title} />
      {productsList.map((fakeProduct) => (
        <CardProductByUser key={fakeProduct.id} fakeProduct={fakeProduct} />
      ))}
    </>
  );
};

export default ArticlesAvailablesModel;
