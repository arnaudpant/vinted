import { Heart } from 'lucide-react';

type Props = {
  imageURL: string | undefined;
  titleProduct: string;
  priceProduct: number;
  priceWithTaxe: number;
  brandProduct: string;
  likes: number;
};

const CardInfosBottom = ({
  imageURL,
  titleProduct,
  priceProduct,
  brandProduct,
  priceWithTaxe,
  likes,
}: Props) => {
  return (
    <>
      {imageURL ? (
        <img src={imageURL} alt={titleProduct} />
      ) : (
        <img src="/coming-soon.jpeg" alt="Photo non disponible" />
      )}
      <div className="h-[90px] w-full p-2">
        <div className="flex justify-between">
          <p className="text-sm">{priceProduct},00€</p>
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4 text-vintedTextGrisFonce" />
            <p className="text-sm text-vintedTextGrisFonce">{likes}</p>
          </div>
        </div>
        <p className="text-xs text-vintedGreen">{priceWithTaxe}€ incl</p>
        <h2 className="text-xs text-vintedTextGrisClair">{brandProduct}</h2>
      </div>
    </>
  );
};

export default CardInfosBottom;
