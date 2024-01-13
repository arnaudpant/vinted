import { useContext } from 'react';
import ArticleAvailable from './ArticleAvailable';
import { FakeShopContext } from '@/context/FakeShopContext';
import CounterArticlesAvailable from './CounterArticlesAvailable';

const ArticlesAvailables = () => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  return (
    <div className="bg-vintedTextGrisClair">
      <section
        className="grid grid-cols-2 mx-4 gap-3 sm:grid-cols-3 lg:grid-cols-4 text-sm text-vintedTextGrisFonce"
        id="articles"
      >
        <CounterArticlesAvailable
          counterProductsAvailable={fakeShopProduct.length}
        />

        {fakeShopProduct.map((fakeProduct) => (
          <ArticleAvailable key={fakeProduct.id} fakeProduct={fakeProduct} />
        ))}
      </section>
    </div>
  );
};

export default ArticlesAvailables;
