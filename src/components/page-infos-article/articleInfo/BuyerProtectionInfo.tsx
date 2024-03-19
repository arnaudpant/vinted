import buyerProtectionShield from '@/assets/buyer-protection-shield.svg';
import { Link } from 'react-router-dom';

const BuyerProtectionInfo = () => {
  return (
    <div className="my-4">
      <div className="flex flex-row gap-2">
        <div className='w-40'>
          <img src={buyerProtectionShield} alt="buyer protection shield" />
        </div>
        <div>
          <h2 className="self-center text-[18px] font-medium">
            Frais de Protection acheteurs
          </h2>
          <p className="text-[14px]">
            Pour tout achat effectué par le biais du bouton &quot;Acheter&quot;,
            nous appliquons des frais couvrant notre{' '}
            <Link to="/" className="cursor-pointer text-vintedGreen underline">
              protection acheteurs
            </Link>
            . Cette protection acheteurs comprend notre{' '}
            <Link to="/" className="cursor-pointer text-vintedGreen underline">
              Politique de remboursement.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerProtectionInfo;
