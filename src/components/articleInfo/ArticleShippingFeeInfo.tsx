type ArticleShippingFeeInfoProps = {
  price: number;
};

const ArticleShippingFeeInfo = ({ price }: ArticleShippingFeeInfoProps) => {
  const shippingFee = price * 0.09;
  return (
    <div className="flex flex-row justify-between my-4">
      <span>Envoi</span>
      <span className="text-vintedTextGrisFonce">
        à partir de {shippingFee}&nbsp;€
      </span>
    </div>
  );
};

export default ArticleShippingFeeInfo;
