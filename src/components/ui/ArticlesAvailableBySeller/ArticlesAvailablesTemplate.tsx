import React from 'react';
import TitleArticlesAvailables from './TitleArticlesAvailables';

import { FakeProduct, FakeUser } from '@/types/types';
import CardProductByUser from './CardProductByUser';

const ArticlesAvailablesTemplate: React.FC<{
  title: string;
  productsList: FakeProduct[];
}> = ({ title, productsList }) => {
  return (
    <div className="bg-vintedTextGrisClair">
      <section
        className="grid grid-cols-2 mx-4 gap-3 sm:grid-cols-3 lg:grid-cols-4 text-sm text-vintedTextGrisFonce"
        id="articles"
      >
        <TitleArticlesAvailables title={title} />

        {productsList.map((fakeProduct) => (
          <CardProductByUser
            key={fakeProduct.id}
            fakeProduct={fakeProduct}
            user={fakeProduct.userId}
          />
        ))}
      </section>
    </div>
  );
};

export default ArticlesAvailablesTemplate;
