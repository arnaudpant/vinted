import { FakeShopContext } from '@/context/FakeShopContext';
import { useContext } from 'react';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';
import withListArticlesAvailables from './withListArticlesAvailables';

const ArticlesSimilarsByRandomSellers: React.FC = withListArticlesAvailables(
  () => {
    const title = 'Articles similaires';

    const { fakeShopProduct } = useContext(FakeShopContext);

    return (
      <ArticlesAvailablesModel title={title} productsList={fakeShopProduct} />
    );
  },
);

export default ArticlesSimilarsByRandomSellers;

