import { FakeShopContext } from '@/context/FakeShopContext';
import { FakeProductWithUserId } from '@/types/types';
import { getRandomUserIdApi } from '@/utils/Utils';
import { useContext } from 'react';
import CardProductByUser from './models/CardProductByUser';
import TitleArticlesAvailables from './models/TitleArticlesAvailables';
import withListArticlesAvailables from './withListArticlesAvailables';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';

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
