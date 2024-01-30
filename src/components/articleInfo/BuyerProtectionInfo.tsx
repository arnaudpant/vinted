import buyerProtectionShield from '@/assets/buyer-protection-shield.svg';

const BuyerProtectionInfo = () => {
  return (
    <div className="my-4">
      <div className="flex flex-row">
        <img src={buyerProtectionShield} alt="buyer protection shield" />
        <h2 className="self-center font-medium">
          Frais de Protection acheteurs
        </h2>
      </div>
      <p>
        Pour tout achat effectué par le biais du bouton &quot;Acheter&quot;,
        nous appliquons des frais couvrant notre{' '}
        <a href="/" className="cursor-pointer text-vintedGreen underline">
          protection acheteurs
        </a>
        . Cette protection acheteurs comprend notre{' '}
        <a href="/" className="cursor-pointer text-vintedGreen underline">
          Politique de remboursement.
        </a>
      </p>
    </div>
  );
};

export default BuyerProtectionInfo;
