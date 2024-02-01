import getBuyerProtectionFee from '@/utils/getBuyerProtectionFee';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

type ModalArticlePriceDetailsProps = {
  price: number;
  setModalPriceDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalArticlePriceDetails = ({
  price,
  setModalPriceDetails,
}: ModalArticlePriceDetailsProps) => {
  const modalInfoCommonCss = 'w-full px-4 my-2';
  return createPortal(
    <>
      <div className="fixed inset-0 h-screen bg-slate-600 opacity-40"></div>
      <div
        className="absolute top-12 flex w-full flex-col items-center justify-start rounded  bg-vintedBackground sm:left-1/2 sm:top-1/2 sm:w-[375px] sm:-translate-x-1/2 sm:-translate-y-1/2"
        aria-modal="true"
      >
        <div className="flex h-[52px] w-full items-center justify-center border-b p-1 sm:border-none">
          <span className="self-center">Détails du prix</span>
          <button
            className="h-[46px] px-[10px] "
            aria-label="Fermer la fenêtre des détails du prix"
            onClick={() => setModalPriceDetails(false)}
          >
            <X />
          </button>
        </div>
        <hr />
        <div className={`flex flex-row justify-between ${modalInfoCommonCss}`}>
          <span>Article</span>
          <span className="text-vintedTextGrisFonce">{price}&nbsp;€</span>
        </div>
        <div className={`flex flex-row justify-between ${modalInfoCommonCss}`}>
          <span>Frais de Protection acheteurs</span>
          <span className="text-vintedTextGrisFonce">
            {getBuyerProtectionFee(price)}&nbsp;€
          </span>
        </div>
        <span
          className={`text-left text-sm text-vintedTextGrisClair ${modalInfoCommonCss}`}
        >
          Les frais de port sont calculés lors de la commande.
        </span>
        <div className={modalInfoCommonCss}>
          <button
            className={
              'w-full rounded border border-vintedGreen bg-vintedGreen py-2 text-white'
            }
            aria-label="Fermer la fenêtre"
            onClick={() => setModalPriceDetails(false)}
          >
            Fermer
          </button>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default ModalArticlePriceDetails;
