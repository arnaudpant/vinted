import { ListSuggestSearchFromVinted } from '../../api/api';
import React, { useEffect, useState } from 'react';
import CardSuggestionSearch from './CardSuggestionSearch';
import ChevronPosition from '../ui/ChevronPosition';

const SuggestionSearch: React.FC = () => {
  const [scrollCards, setScrollCards] = useState<'left' | 'right' | 'both'>(
    'right',
  );
  
  const [divToScrollValue, setDivToScrollValue] = useState<number>(0);


  const divParent = document.getElementById('divParent');
  const divToScroll = document.getElementById('divToScroll');
  let scrollValue: number = 0

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
    // Calcul de la taille max du scroll en fonction de la taille de l'ecran
    let divParentWidth = divParent?.scrollWidth
    let divToScrollWidth = divToScroll?.scrollWidth

    if (divToScrollWidth && divParentWidth)
      scrollValue = divToScrollWidth - divParentWidth;

    if (divToScrollValue === 0) {
      setScrollCards('left');
    } else if (scrollValue === divToScrollValue) {
      setScrollCards('right');
    } else {
      setScrollCards('both');
    }
  }, [divToScrollValue]);

  // LOGIQUE AU CLIC DU BTN
  const handleClicRight = () => {
    divToScroll?.scrollTo({
      left: 1400,
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
    <div className="container mx-auto py-12 max-w-[1240px]">
      <h2 className="text-2xl pb-4">Suggestions de recherche</h2>
      <div
        className="relative h-[75px] overflow-hidden"
        id="divParent"
        
      >
        <div
          className="flex h-[90px] overflow-x-auto overflow-y-hidden"
          id="divToScroll" data-testid="scroll-element"
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