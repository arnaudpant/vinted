import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import ModalArticlePriceDetails from '../modals/articlePriceDetails/ModalArticlePriceDetails';
import getBuyerProtectionFee from '@/utils/getBuyerProtectionFee';

const ArticlePrices = ({ price }: { price: number }) => {
  const [modalPriceDetails, setModalPriceDetails] = useState<boolean>(false);

  return (
    <>
      <div className="mb-2">
        <h1 className="text-2xl">{price}&nbsp;€</h1>
        <button
          className="flex cursor-pointer flex-row text-vintedGreen hover:underline"
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
