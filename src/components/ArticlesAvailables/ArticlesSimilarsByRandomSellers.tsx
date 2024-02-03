import { FakeShopContext } from '@/context/FakeShopContext';
import { FakeProduct, FakeProductWithUserId } from '@/types/types';
import { getRandomUserIdApi } from '@/utils/checkURLImageProductFromApi';
import { useContext } from 'react';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';
import withListArticlesAvailables from './withListArticlesAvailables';

const ArticlesSimilarsByRandomSellers: React.FC = () => {
  const title = 'Articles similaires';

  const { fakeShopProduct } = useContext(FakeShopContext);

  const fakeShopProductsWithUserId: FakeProductWithUserId[] =
    fakeShopProduct.map((product: FakeProduct) => {
      return {
        ...product,
        userId: getRandomUserIdApi(),
      };
    });

  return (
    <ArticlesAvailablesModel
      title={title}
      productsList={fakeShopProductsWithUserId}
    />
  );
};

export default withListArticlesAvailables(ArticlesSimilarsByRandomSellers);
