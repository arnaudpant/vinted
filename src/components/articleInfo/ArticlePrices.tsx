import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import ModalArticlePriceDetails from '../modals/articlePriceDetails/ModalArticlePriceDetails';
import { getBuyerProtectionFee } from '@/utils/getTimeDifferenceString';

type ArticlePricesProps = {
  price: number;
};

const ArticlePrices = ({ price }: ArticlePricesProps) => {
  const [modalPriceDetails, setModalPriceDetails] = useState<boolean>(false);

  return (
    <>
      <div className="mb-2">
        <h1 className="text-2xl">{price}&nbsp;€</h1>
        <button
          className="cursor-pointer text-vintedGreen hover:underline flex flex-row"
          onClick={() => setModalPriceDetails(true)}
        >
          <span>
            {price + getBuyerProtectionFee(price)}&nbsp;€ Protection acheteurs
            incluse
          </span>
          <ShieldCheck />
        </button>
      </div>
      {modalPriceDetails && (
        <ModalArticlePriceDetails
          setModalPriceDetails={setModalPriceDetails}
          price={price}
        />
      )}
    </>
  );
};

export default ArticlePrices;
