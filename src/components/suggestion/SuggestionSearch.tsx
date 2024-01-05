import { ListSuggestSearchFromVinted } from '../../api/api';
import { useEffect, useState } from 'react';
import CardSuggestionSearch from './CardSuggestionSearch';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SuggestionSearch = () => {
  const [scrollCards, setScrollCard] = useState<'left' | 'right'>('right');
  const divToScroll = document.getElementById('showScroll');


  const [products, setProducts] = useState<
    typeof ListSuggestSearchFromVinted | []
  >([]);

  useEffect(() => {
    setProducts(ListSuggestSearchFromVinted);
  }, []);


  const handleClicRight = () => {
    divToScroll?.scrollTo({
      left: 1400,
      behavior: 'smooth',
    });
    setScrollCard('left');
  };
  const handleClicLeft = () => {
    divToScroll?.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
    setScrollCard('right');
  };

  return (
    //TODO: Supprimer container a l'integration
    <div className="container mx-auto py-12 max-w-[1240px]">
      <h2 className="text-2xl pb-4">Suggestions de recherche</h2>
      <div className="relative h-[75px] overflow-hidden">
        <div
          className="flex h-[90px] overflow-x-auto overflow-y-hidden"
          id="showScroll"
        >
          <div className="flex shrink-0 flex-nowrap">
            {products.map((product) => (
              <CardSuggestionSearch key={product.marque} product={product} />
            ))}
          </div>
          {scrollCards === 'right' && (
            <div
              className="absolute top-5 right-2 flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 opacity-40 cursor-pointer"
              onClick={handleClicRight}
            >
              <ChevronRight className="text-vintedBackgrounf" />
            </div>
          )}
          {scrollCards === 'left' && (
            <div
              className="absolute top-5 left-2 flex items-center justify-center h-8 w-8 rounded-full bg-gray-600 opacity-40 cursor-pointer"
              onClick={handleClicLeft}
            >
              <ChevronLeft className="text-vintedBackgrounf" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestionSearch;
