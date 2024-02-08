import useDataFakeShop from '@/hooks/useDataFakeShop';
import getStockArticlesTitle from '@/utils/getStockArticlesTitle';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';
import withListArticlesAvailables from './withListArticlesAvailables';

const ArticlesAvailablesSearch = withListArticlesAvailables(
  ({ categoryId }: { categoryId: number }) => {
    const { fakeShopProducts, getProductsByCategoryId } = useDataFakeShop();
    getProductsByCategoryId(categoryId);
    return (
      <ArticlesAvailablesModel
        title={`${getStockArticlesTitle(fakeShopProducts)}`}
        productsList={fakeShopProducts}
      />
    );
  },
);

export default ArticlesAvailablesSearch;
