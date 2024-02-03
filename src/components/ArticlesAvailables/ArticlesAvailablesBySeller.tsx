import { FakeShopContext } from '@/context/FakeShopContext';
import { FakeProduct, FakeProductWithUserId } from '@/types/types';
import getStockArticlesTitle from '@/utils/getStockArticlesTitle';
import { useContext } from 'react';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';
import withListArticlesAvailables from './withListArticlesAvailables';

const ArticlesAvailablesBySeller: React.FC = ({}) => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  const fakeShopProductsWithUserId: FakeProductWithUserId[] =
    fakeShopProduct.map((product: FakeProduct) => ({ ...product, userId: 1 }));

  const title = getStockArticlesTitle(fakeShopProductsWithUserId);

  return (
    <ArticlesAvailablesModel
      title={title}
      productsList={fakeShopProductsWithUserId}
    />
  );
};

export default withListArticlesAvailables(ArticlesAvailablesBySeller);
