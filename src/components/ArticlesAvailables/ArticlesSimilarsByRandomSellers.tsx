import { FakeShopContext } from '@/context/FakeShopContext';
import { FakeProductWithUserId } from '@/types/types';
import { getRandomUserIdApi } from '@/utils/Utils';
import { useContext } from 'react';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';
import withListArticlesAvailables from './withListArticlesAvailables';

const ArticlesSimilarsByRandomSellers: React.FC = () => {
  const title = 'Articles similaires';

  const { fakeShopProduct } = useContext(FakeShopContext);

  const fakeShopProductsWithUserId: FakeProductWithUserId[] =
    fakeShopProduct.map((product) => ({
      ...product,
      userId: getRandomUserIdApi(),
    }));

  return (
    <ArticlesAvailablesModel
      title={title}
      productsList={fakeShopProductsWithUserId}
    />
  );
};

export default withListArticlesAvailables(ArticlesSimilarsByRandomSellers);
