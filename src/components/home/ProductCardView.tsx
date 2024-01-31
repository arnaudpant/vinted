import useDataFakeShop from '@/hooks/useDataFakeShop';
import { FakeProduct } from '@/types/types';

const ProductCardView = () => {
  const { fakeShopProducts } = useDataFakeShop();
  return (
    <div className="flex shrink-0 flex-nowrap gap-4 items-start">
      {fakeShopProducts.map((product: FakeProduct) => (
        <div
          key={product.id}
          className="flex w-[200px] cursor-pointer flex-col items-center"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-[320px] w-[213px]"
          />
          <p>{product.price} €</p>
          <h2 className="text-center">{product.title}</h2>
        </div>
      )).slice(0, 5)}
    </div>
  );
};

export default ProductCardView;
