import { SuggestSearchList } from '@/types/types';

type Props = {
  product: SuggestSearchList;
};

const CardSuggestionSearch = ({ product }: Props) => {
  return (
    <div className="h-[75px] shrink-0 cursor-pointer pr-3">
      <div className="flex h-[75px] flex-col items-center justify-center rounded border-[0.5px] border-vintedTextGrisClair p-2">
        <div className="text-base" data-testid="cardSuggestion">
          {product.brand}
        </div>
        {product.views > 10 ? (
          <div className="text-sm font-light text-vintedTextGrisFonce">
            {product.views}K vues
          </div>
        ) : (
          <div className="text-sm font-light text-vintedTextGrisFonce">
            {product.views}M vues
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSuggestionSearch;
