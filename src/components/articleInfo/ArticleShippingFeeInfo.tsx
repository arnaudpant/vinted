const ArticleShippingFeeInfo = ({ price }: { price: number }) => {
  const shippingFee = price * 0.09;
  return (
    <div className="my-4 flex flex-row justify-between">
      <span>Envoi</span>
      <span className="text-vintedTextGrisFonce">
        à partir de {shippingFee}&nbsp;€
      </span>
    </div>
  );
};

export default ArticleShippingFeeInfo;
