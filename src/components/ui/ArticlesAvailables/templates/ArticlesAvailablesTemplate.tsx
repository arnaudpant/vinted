import React from 'react';
import TitleArticlesAvailables from './TitleArticlesAvailables';

import { FakeProductWithUserId } from '@/types/types';
import CardProductByUser from './CardProductByUser';

const ArticlesAvailablesTemplate: React.FC<{
  title: string;
  productsList: FakeProductWithUserId[];
}> = ({ title, productsList }) => {
  return (
    <div className="bg-vintedTextGrisClair">
      <section
        className="grid grid-cols-2 mx-4 gap-3 sm:grid-cols-3 lg:grid-cols-4 text-sm text-vintedTextGrisFonce"
        id="articles"
      >
        <TitleArticlesAvailables title={title} />

        {productsList.map((fakeProduct) => (
          <CardProductByUser key={fakeProduct.id} fakeProduct={fakeProduct} />
        ))}
      </section>
    </div>
  );
};

export default ArticlesAvailablesTemplate;
