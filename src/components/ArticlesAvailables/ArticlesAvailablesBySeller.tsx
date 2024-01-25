import { FakeShopContext } from '@/context/FakeShopContext';
import { FakeProductWithUserId } from '@/types/types';
import getStockArticlesTitle from '@/utils/getStockArticlesTitle';
import { useContext } from 'react';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';
import withListArticlesAvailables from './withListArticlesAvailables';
import { useParams } from 'react-router-dom';
import checkUserId from '@/utils/checkUserId';

const ArticlesAvailablesBySeller: React.FC<{ userId: number }> = ({
  userId,
}) => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  const fakeShopProductsWithUserId: FakeProductWithUserId[] =
    fakeShopProduct.map((product) => ({ ...product, userId }));

  const title = getStockArticlesTitle(fakeShopProductsWithUserId);

  return (
    <ArticlesAvailablesModel
      title={title}
      productsList={fakeShopProductsWithUserId}
    />
  );
};

export default withListArticlesAvailables(ArticlesAvailablesBySeller);
