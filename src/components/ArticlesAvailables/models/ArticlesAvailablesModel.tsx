import React from 'react';
import TitleArticlesAvailables from './TitleArticlesAvailables';
import CardProductByUser from './CardProductByUser';
import { FakeProductWithUserId } from '@/types/types';

const ArticlesAvailablesModel: React.FC<{
  title: string;
  productsList: FakeProductWithUserId[];
}> = ({ title, productsList }) => {
  if (!productsList) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <div className=" rounded-full h-12 w-12 border-t-blue-500 border-t-4 animate-spin"></div>
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
