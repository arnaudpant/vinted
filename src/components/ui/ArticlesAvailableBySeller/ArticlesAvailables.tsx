import { useContext } from 'react';
import ArticleAvailable from './ArticleAvailable';
import { FakeShopContext } from '@/context/FakeShopContext';

const ArticlesAvailables = () => {
  const { fakeShopProduct } = useContext(FakeShopContext);

  return (
    <div className="bg-vintedTextGrisClair">
      <section
        className="grid grid-cols-2 mx-4 gap-3 sm:grid-cols-3 lg:grid-cols-4 text-sm text-vintedTextGrisFonce"
        id="articles"
      >
        <div className="w-full col-span-full bg-vintedBackground py-3 pl-4 flex items-end">
          ({fakeShopProduct.length}) articles disponibles
        </div>

        {fakeShopProduct.map((fakeProduct) => (
          <ArticleAvailable key={fakeProduct.id} fakeProduct={fakeProduct} />
        ))}
      </section>
    </div>
  );
};

export default ArticlesAvailables;
