import { ListSuggestSearchFromVinted } from '../../api/api';
import React, { useEffect, useState } from 'react';
import CardSuggestionSearch from './CardSuggestionSearch';
import ChevronPosition from '../ui/ChevronPosition';
import { ScrollAction } from '@/types/types';

const SuggestionSearch: React.FC = () => {
  const [scrollCards, setScrollCards] = useState<ScrollAction>('right');

  const [divToScrollValue, setDivToScrollValue] = useState<number>(0);
  const idDivParent = 'divParent';
  const idDivToScroll = 'divToScroll';
  const divParent = document.getElementById(idDivParent);
  const divToScroll = document.getElementById(idDivToScroll);

  divToScroll?.addEventListener('scroll', () => {
    setDivToScrollValue(divToScroll?.scrollLeft);
  });

  const [products, setProducts] = useState<
    typeof ListSuggestSearchFromVinted | []
  >([]);

  useEffect(() => {
    setProducts(ListSuggestSearchFromVinted);
  }, []);

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
      left: 2000,
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
      <h2 className="pb-4 text-2xl">Suggestions de recherche</h2>
      <div className="relative h-[75px] overflow-hidden" id={idDivParent}>
        <div
          className="flex h-[90px] overflow-x-auto overflow-y-hidden"
          id={idDivToScroll}
          data-testid="scroll-element"
        >
          <div className="flex shrink-0 flex-nowrap">
            {products.map((product) => (
              <CardSuggestionSearch key={product.brand} product={product} />
            ))}
          </div>

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

export default SuggestionSearch;
