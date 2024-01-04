import { SuggestSearchList } from '@/types/types';

type Props = {
  product: SuggestSearchList;
};

const CardSuggestionSearch = ({ product }: Props) => {
  return (
    <div className="pr-3 shrink-0 cursor-pointer h-[75px]">
      <div className="flex flex-col items-center justify-center p-2 border-[0.5px] border-vintedTextGrisClair rounded h-[75px]">
        <div className="text-base">{product.marque}</div>
        {product.vues > 10 ? (
          <div
            className="text-sm font-light text-vintedTextGrisFonce"
            role="contentinfo"
          >
            {product.vues}K vues
          </div>
        ) : (
          <div className="text-sm font-light text-vintedTextGrisFonce">
            {product.vues}M vues)
          </div>
        )}
      </div>
    </div>
  );
};

export default CardSuggestionSearch;
