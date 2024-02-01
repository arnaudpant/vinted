import { FakeProduct, ScrollAction } from '@/types/types';
import useDataFakeShop from '@/hooks/useDataFakeShop';
import { useEffect, useState } from 'react';
import ChevronPosition from '../ui/ChevronPosition';
import Skeleton from '../ui/skeleton';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  start: number;
  end: number;
};

const ProductCard = ({ title, start, end }: Props) => {
  // CONTEXTE
  const { fakeShopProducts } = useDataFakeShop();

  const [scrollCards, setScrollCards] = useState<ScrollAction>('right');

  const [divToScrollValue, setDivToScrollValue] = useState<number>(0);
  const idDivParentProductCard = 'divParentProductCard';
  const idDivToScrollProductCard = 'divToScrollProductCard';
  const divParent = document.getElementById(idDivParentProductCard);
  const divToScroll = document.getElementById(idDivToScrollProductCard);

  divToScroll?.addEventListener('scroll', () => {
    setDivToScrollValue(divToScroll?.scrollLeft);
  });

  useEffect(() => {
    let scrollValue: number = 0;
    // Calcul de la taille max du scroll en fonction de la taille de l'ecran
    const divParentWidth = divParent?.scrollWidth;
    const divToScrollWidth = divToScroll?.scrollWidth;

    if (divToScrollWidth && divParentWidth)
      scrollValue = divToScrollWidth - divParentWidth;

    if (divToScrollValue === 0) {
      setScrollCards('left');
    } else if (divToScrollValue === scrollValue) {
      setScrollCards('right');
    } else {
      setScrollCards('both');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divToScrollValue]);

  // LOGIQUE AU CLIC DU BTN
  const handleClicRight = () => {
    divToScroll?.scrollTo({
      left: 3000,
      behavior: 'smooth',
    });
  };
  const handleClicLeft = () => {
    divToScroll?.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container mx-auto max-w-[1240px] py-12">
      <div className="flex w-full justify-between pb-4">
        <h1 className="text-2xl">{title}</h1>
        <p className="cursor-pointer text-vintedGreen">Tout voir</p>
      </div>

      <div
        className="relative h-[300px] overflow-hidden"
        id={idDivParentProductCard}
      >
        <div
          className="flex h-[320px] overflow-x-auto overflow-y-hidden"
          id={idDivToScrollProductCard}
          data-testid="scroll-element"
        >
          {fakeShopProducts.length > 0 ? (
            <div className="flex shrink-0 flex-nowrap gap-4">
              {fakeShopProducts
                .map((product: FakeProduct) => (
                  <Link
                    to={`/items/${product.id}`}
                    key={product.id}
                    state={product}
                  >
                    <div
                      key={product.id}
                      className="flex h-[300px] w-[213px] cursor-pointer flex-col items-center justify-between"
                    >
                      <img src={product.images[0]} alt={product.title} />
                      <div className="h-[90px] w-full p-2">
                        <p className="text-sm">{product.price},00€</p>
                        <p className="text-xs text-vintedGreen">
                          {product.price},00€ incl
                        </p>
                        <p className="text-xs text-vintedTextGrisClair">
                          Taille
                        </p>
                        <h2 className="text-xs text-vintedTextGrisClair">
                          Marque
                        </h2>
                      </div>
                    </div>
                  </Link>
                ))
                .slice(start, end)}
              <div className="flex h-[300px] w-[213px] flex-col justify-center bg-gray-100">
                <p className="cursor-pointer text-center text-vintedTextGrisFonce">
                  Voir tous les articles
                </p>
              </div>
            </div>
          ) : (
            <div className="flex shrink-0 flex-nowrap gap-4">
              <Skeleton className="h-[300px] w-[213px]" />
              <Skeleton className="h-[300px] w-[213px]" />
              <Skeleton className="h-[300px] w-[213px]" />
              <Skeleton className="h-[300px] w-[213px]" />
              <Skeleton className="h-[300px] w-[213px]" />
              <div className="flex h-[300px] w-[213px] cursor-pointer flex-col justify-center bg-gray-100">
                <p className="text-center text-vintedTextGrisFonce">
                  Voir tous les articles
                </p>
              </div>
            </div>
          )}

          <ChevronPosition
            scrollCards={scrollCards}
            handleClicRight={handleClicRight}
            handleClicLeft={handleClicLeft}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
