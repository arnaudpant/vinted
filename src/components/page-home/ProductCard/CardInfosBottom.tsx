type Props = {
  imageURL: string;
  titleProduct: string;
  priceProduct: number;
};

const CardInfosBottom = ({ imageURL, titleProduct, priceProduct }: Props) => {
  return (
    <>
      <img src={imageURL} alt={titleProduct} />
      <div className="h-[90px] w-full p-2">
        <p className="text-sm">{priceProduct},00€</p>
        <p className="text-xs text-vintedGreen">{priceProduct},00€ incl</p>
        <p className="text-xs text-vintedTextGrisClair">Taille</p>
        <h2 className="text-xs text-vintedTextGrisClair">Marque</h2>
      </div>
    </>
  );
};

export default CardInfosBottom;
