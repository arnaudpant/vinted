import useDataFakeShop from '@/hooks/useDataFakeShop';
import { FakeProduct } from '@/types/types';
import Skeleton from '../ui/skeleton';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  start: number;
  end: number;
};

const NewsFeed = ({ title, start, end }: Props) => {
  const { fakeShopUsers, fakeShopProducts } = useDataFakeShop();

  return (
    <div className="container mx-auto max-w-[1240px] py-12 text-vintedTextGrisClair">
      <div className="pb-4">
        <h1 className="text-2xl text-vintedTextBlack">{title}</h1>
      </div>

      {fakeShopProducts.length > 0 || fakeShopUsers.length > 0 ? (
        <div className="flex w-full flex-wrap justify-center gap-4">
          {fakeShopProducts
            .map((product: FakeProduct) => (
              <Link
                to={`/items/${product.id}`}
                key={product.id}
                state={product}
              >
                <div className="flex h-[340px] w-[213px] cursor-pointer flex-col items-center justify-between">
                  <div className="flex h-10 w-full justify-start gap-2 p-2">
                    {fakeShopUsers[1] ? (
                      <img
                        className="h-6 w-6 rounded-full"
                        src={fakeShopUsers[1].avatar}
                      />
                    ) : (
                      <img className="h-8 w-8 rounded-full" src="./avatar.png" />
                    )}
                    {fakeShopUsers[1] && (
                      <p className="text-sm text-vintedTextGrisClair">
                        {fakeShopUsers[1].name}
                      </p>
                    )}
                  </div>
                  <img src={product.images[0]} alt={product.title} />
                  <div className="h-[90px] w-full p-2">
                    <p className="text-sm">{product.price},00€</p>
                    <p className="text-xs text-vintedGreen">
                      {product.price},00€ incl
                    </p>
                    <p className="text-xs text-vintedTextGrisClair">Taille</p>
                    <h2 className="text-xs text-vintedTextGrisClair">Marque</h2>
                  </div>
                </div>
              </Link>
            ))
            .slice(start, end)}
        </div>
      ) : (
        <Skeleton className="h-[340px] w-[213px]" />
      )}
    </div>
  );
};

export default NewsFeed;
