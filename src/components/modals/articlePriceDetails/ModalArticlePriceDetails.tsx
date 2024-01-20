import { getBuyerProtectionFee } from '@/utils/getTimeDifferenceString';
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
      <div className="fixed h-screen top-0 left-0 bottom-0 right-0 bg-slate-600 opacity-40 "></div>
      <div
        className="absolute w-full top-12 sm:w-[375px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2  bg-vintedBackground flex flex-col items-center justify-start rounded"
        aria-modal="true"
      >
        <div className="h-[52px] w-full p-1 flex justify-center items-center border-b sm:border-none">
          <span className="self-center">Détails du prix</span>
          <button
            className="h-[46px] px-[10px] "
            aria-label="Fermer la fenêtre"
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
          className={`text-vintedTextGrisClair text-sm text-left ${modalInfoCommonCss}`}
        >
          Les frais de port sont calculés lors de la commande.
        </span>
        <div className={modalInfoCommonCss}>
          <button
            className={
              'bg-vintedGreen text-white rounded py-2 border border-vintedGreen w-full'
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
