import { FakeShopContext } from '@/context/FakeShopContext';
import { useContext } from 'react';
import ArticlesAvailablesTemplate from './ArticlesAvailablesTemplate';
import useDataFakeShop from '@/hooks/useDataFakeShop';

const ArticlesAvailablesBySeller = () => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  const { fakeShopUsers } = useDataFakeShop();
  const user = fakeShopUsers[0];

  const stockProductsAvailablesTitle = () => {
    switch (fakeShopProduct.length) {
      case 0:
        return 'Aucun article disponible';
      case 1:
        return 'Un article dispible';
      default:
        return `${fakeShopProduct.length} produits disponibles`;
    }
  };

  return (
    <ArticlesAvailablesTemplate
      title={stockProductsAvailablesTitle()}
      productsList={fakeShopProduct}
      users={user}
    />
  );
};

export default ArticlesAvailablesBySeller;
