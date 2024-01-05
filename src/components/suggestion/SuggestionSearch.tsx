import { ListSuggestSearchFromVinted } from '@/api/api';
import { useEffect, useState } from 'react';
import CardSuggestionSearch from './CardSuggestionSearch';

const SuggestionSearch = () => {
  const [products, setProducts] = useState<
    typeof ListSuggestSearchFromVinted | []
  >([]);

  useEffect(() => {
    setProducts(ListSuggestSearchFromVinted);
  }, []);



  return (
    //TODO: Supprimer container a l'integration
    <div className="container mx-auto py-12">
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
        </div>
      </div>
    </div>
  );
};

export default SuggestionSearch;
