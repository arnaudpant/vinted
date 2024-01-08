import { ListSuggestSearchFromVinted } from '../../api/api';
import React, { useEffect, useState } from 'react';
import CardSuggestionSearch from './CardSuggestionSearch';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SuggestionSearch: React.FC = () => {
  const [scrollCards, setScrollCards] = useState<'left' | 'right' | 'both'>(
    'right',
  );
  const [scrollValue, setScrollValue] = useState<number>(0);
  const divToScroll = document.getElementById('showScroll');
  const divSup = document.getElementById('divSup');
  const widthDivScroll = 1280

  const [products, setProducts] = useState<
    typeof ListSuggestSearchFromVinted | []
  >([]);

  useEffect(() => {
    setProducts(ListSuggestSearchFromVinted);
  }, []);

  divToScroll?.addEventListener('scroll', () => {
    setScrollValue(divToScroll?.scrollLeft);
  });

  useEffect(() => {
    // Calcul de la taille max du scroll en fonction de la taille de l'ecran
    const clientWidth = divSup?.clientWidth;
    let tailleScroll: number = widthDivScroll; ;
    if (clientWidth) {
      tailleScroll = widthDivScroll - clientWidth;
    }

    if (scrollValue === 0) {
      setScrollCards('left');
    } else if (scrollValue === tailleScroll) {
      setScrollCards('right');
    } else {
      setScrollCards('both');
    }
  }, [scrollValue]);

  // LOGIQUE AU CLIC SU BTN
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
      <div className="relative h-[75px] overflow-hidden" id="divSup">
        <div
          className="flex h-[90px] overflow-x-auto overflow-y-hidden"
          id="showScroll"
        >
          <div className="flex shrink-0 flex-nowrap">
            {products.map((product) => (
              <CardSuggestionSearch key={product.brand} product={product} />
            ))}
          </div>

          {scrollCards === 'left' && (
            <div
              className="absolute top-5 right-2 flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 opacity-40 cursor-pointer"
              onClick={handleClicRight}
            >
              <ChevronRight className="text-vintedBackground" />
            </div>
          )}

          {scrollCards === 'right' && (
            <div
              className="absolute top-5 left-2 flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 opacity-40 cursor-pointer"
              onClick={handleClicLeft}
            >
              <ChevronLeft className="text-vintedBackground" />
            </div>
          )}

          {scrollCards === 'both' && (
            <>
              <div
                className="absolute top-5 right-2 flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 opacity-40 cursor-pointer"
                onClick={handleClicRight}
              >
                <ChevronRight className="text-vintedBackground" />
              </div>
              <div
                className="absolute top-5 left-2 flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 opacity-40 cursor-pointer"
                onClick={handleClicLeft}
              >
                <ChevronLeft className="text-vintedBackground" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionSearch;
