import React, { useContext } from 'react';
import ArticlesAvailablesTemplate from './templates/ArticlesAvailablesTemplate';
import useDataFakeShop from '@/hooks/useDataFakeShop';
import { FakeShopContext } from '@/context/FakeShopContext';
import { getRandomUserIdApi } from '@/utils/Utils';
import { FakeProductWithUserId } from '@/types/types';

const ArticlesSimilars = () => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  const fakeShopProductsWithUserId: FakeProductWithUserId[] =
    fakeShopProduct.map((product) => ({
      ...product,
      userId: getRandomUserIdApi(),
    }));

  return (
    <ArticlesAvailablesTemplate
      title="Articles similaires"
      productsList={fakeShopProductsWithUserId}
    />
  );
};

export default ArticlesSimilars;
