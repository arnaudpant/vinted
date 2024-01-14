import React from 'react';
import ArticlesAvailablesTemplate from './ArticlesAvailablesTemplate';

const ArticlesSimilars = () => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  const { fakeShopUsers } = useDataFakeShop();
  const user = fakeShopUsers[0];
  return (
    <ArticlesAvailablesTemplate
      title="Articles similaires"
      productsList={fakeShopProduct}
    />
  );
};

export default ArticlesSimilars;
