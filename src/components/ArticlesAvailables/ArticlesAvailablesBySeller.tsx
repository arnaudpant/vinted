import { FakeShopContext } from '@/context/FakeShopContext';
import getStockArticlesTitle from '@/utils/getStockArticlesTitle';
import { useContext } from 'react';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';
import withListArticlesAvailables from './withListArticlesAvailables';

const ArticlesAvailablesBySeller: React.FC = withListArticlesAvailables(() => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  return (
    <ArticlesAvailablesModel
      title={`${getStockArticlesTitle(fakeShopProduct)} articles disponibles`}
      productsList={fakeShopProduct}
    />
  );
});

export default ArticlesAvailablesBySeller;
