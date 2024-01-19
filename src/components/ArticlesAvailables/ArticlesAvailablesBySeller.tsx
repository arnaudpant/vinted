import { getRandomUserIdApi, getStockArticlesTitle } from '@/utils/Utils';
import CardProductByUser from './models/CardProductByUser';
import TitleArticlesAvailables from './models/TitleArticlesAvailables';
import { useContext } from 'react';
import { FakeShopContext } from '@/context/FakeShopContext';
import withListArticlesAvailables from './withListArticlesAvailables';
import { FakeProductWithUserId } from '@/types/types';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';

const ArticlesAvailablesBySeller: React.FC = () => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  const randomUserId: number = getRandomUserIdApi();

  const fakeShopProductsWithUserId: FakeProductWithUserId[] =
    fakeShopProduct.map((product) => ({ ...product, userId: randomUserId }));

  const title = getStockArticlesTitle(fakeShopProductsWithUserId);

  return (
    <ArticlesAvailablesModel
      title={title}
      productsList={fakeShopProductsWithUserId}
    />
  );
};

export default withListArticlesAvailables(ArticlesAvailablesBySeller);
