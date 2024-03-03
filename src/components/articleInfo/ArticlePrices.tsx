import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import ModalArticlePriceDetails from '../modals/articlePriceDetails/ModalArticlePriceDetails';
import { getTaxeIncl } from '@/utils/Utils';

const ArticlePrices = ({ price }: { price: number }) => {
  const [modalPriceDetails, setModalPriceDetails] = useState<boolean>(false);

  return (
    <>
      <div className="mb-2">
        <h2 className="text-2xl">{Number(price).toFixed(2)}&nbsp;€</h2>
        <button
          className="flex cursor-pointer flex-row text-left text-xs text-vintedGreen hover:underline"
          onClick={() => setModalPriceDetails(true)}
        >
          <span>{getTaxeIncl(price)}&nbsp;€ Protection acheteurs incluse</span>
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
