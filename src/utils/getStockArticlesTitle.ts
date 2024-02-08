import { FakeProduct } from '@/types/types';

const getStockArticlesTitle: (products: FakeProduct[]) => string = (
  products,
) => {
  switch (products.length) {
    case 0:
      return 'Aucun article disponible';
    case 1:
      return 'Un article disponible';
    default:
      return `${products.length} articles disponibles`;
  }
};

export default getStockArticlesTitle;
