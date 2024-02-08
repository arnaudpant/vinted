const ArticleShippingFeeInfo = ({ price }: { price: number }) => {
  const shippingFee = Math.round(price * 0.09 * 100) / 100;
  return (
    <div className="my-4 flex flex-row justify-between text-[14px]">
      <p>Envoi</p>
      <p className="text-vintedTextGrisFonce">
        à partir de {shippingFee}&nbsp;€
      </p>
    </div>
  );
};

export default ArticleShippingFeeInfo;
