import { FakeShopContext } from '@/context/FakeShopContext';
import { useContext } from 'react';
import ArticlesAvailablesTemplate from './templates/ArticlesAvailablesTemplate';
import { FakeProductWithUserId } from '@/types/types';
import { getRandomUserIdApi } from '@/utils/Utils';

const ArticlesAvailablesBySeller = () => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  const randomUserId: number = getRandomUserIdApi();

  const fakeShopProductWithUserId: FakeProductWithUserId[] =
    fakeShopProduct.map((product) => ({ ...product, userId: randomUserId }));

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
      productsList={fakeShopProductWithUserId}
    />
  );
};

export default ArticlesAvailablesBySeller;
