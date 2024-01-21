const BuyerProtectionInfo = () => {
  return (
    <div className="my-4">
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          viewBox="0 0 48 48"
        >
          <path
            fill="#CAF1EF"
            fillRule="evenodd"
            d="M48 24c0 13.254-10.745 24-24 24C10.746 48 0 37.254 0 24 0 10.745 10.746 0 24 0c13.255 0 24 10.745 24 24"
            clipRule="evenodd"
          />
          <path
            fill="#007782"
            fillRule="evenodd"
            d="M24 36s-10-3.6-10-12v-8.4L24 12l10 3.6V24c0 8.4-10 12-10 12"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M23.202 27.791 18.5 23.152l1.613-1.59 3.089 3.048L28.887 19l1.613 1.59-7.298 7.201Z"
            clipRule="evenodd"
          />
        </svg>
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
