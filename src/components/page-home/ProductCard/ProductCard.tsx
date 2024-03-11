import { ArticleForSale, ScrollAction } from '@/types/types';
import { useEffect, useState } from 'react';
import ChevronPosition from '../../ui/ChevronPosition';
import Skeleton from '../../ui/skeleton';
import { Link } from 'react-router-dom';
import CardInfosBottom from './CardInfosBottom';
import useFirestoreData from '@/hooks/useFirestoreData';

type Props = {
  title: string;
  start: number;
  end: number;
  idDivParentProductCard: string;
  idDivToScrollProductCard: string;
  typeSort: 'recent' | 'populaire'
};

const ProductCard = ({
  title,
  start,
  end,
  idDivParentProductCard,
  idDivToScrollProductCard,
  typeSort,
}: Props) => {
  // CONTEXTE
  const { listArticles } = useFirestoreData();
  const [scrollCards, setScrollCards] = useState<ScrollAction>('right');
  const [divToScrollValue, setDivToScrollValue] = useState<number>(0);
  const [listArticlesSort, setListArticlesSort] = useState<ArticleForSale[]>();

  // const idDivParentProductCard = 'divParentProductCardExplore';
  // const idDivToScrollProductCard = 'divToScrollProductCard';

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

  useEffect(() => {
    if (listArticles) {
      typeSort === 'recent' &&
        setListArticlesSort(listArticles.fullListArticlesForSale.reverse());
        typeSort === 'populaire' &&
          setListArticlesSort(listArticles.fullListArticlesForSale.sort((a, b) => (a.like < b.like ? 1 : -1)));
    }

  }, [listArticles, typeSort]);

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
        <Link
          to={`catalog/${typeSort}`}
          className="cursor-pointer text-vintedGreen"
          state={['home', typeSort]}
        >
          Tout voir
        </Link>
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
          {listArticlesSort && listArticlesSort.length > 0 ? (
            <div className="flex shrink-0 flex-nowrap gap-4">
              {listArticlesSort
                .map((product: ArticleForSale) => (
                  <Link
                    to={`/items/${product.uid}`}
                    key={product.uid}
                    state={product}
                  >
                    <div
                      key={product.uid}
                      className="flex h-[300px] w-[213px] cursor-pointer flex-col items-center justify-between"
                    >
                      <CardInfosBottom
                        imageURL={product.photos[0]}
                        titleProduct={product.titleArticle}
                        priceProduct={product.price}
                        brandProduct={product.brandArticle ?? ''}
                        priceWithTaxe={product.price}
                        likes={product.like}
                      />
                    </div>
                  </Link>
                ))
                .slice(start, end)}
              <div className="flex h-[300px] w-[213px] flex-col justify-center bg-gray-100">
                <Link
                  to={`catalog/${typeSort}`}
                  state={['home', typeSort]}
                  className="cursor-pointer text-center text-vintedTextGrisFonce"
                >
                  Voir tous les articles
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex shrink-0 flex-nowrap gap-4">
              {Array(5)
                .fill('')
                .map((_, index) => (
                  <Skeleton key={index} className="h-[300px] w-[213px]" />
                ))}
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
