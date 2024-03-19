import { useState } from 'react';
import BoxInfosVendeurView from './BoxInfosVendeurView';

type Props = {
  vendeur: {
    userId: string;
    photoURL: string;
    login: string;
    city: string;
    stars: number;
    evaluations: number;
  };
};


const BoxInfosVendeur = ({vendeur}: Props) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const handleSeeMore = () => {
    setSeeMore(true);
  };

  return (
    <div className="py-4">
      <BoxInfosVendeurView
        seeMore={seeMore}
        handleSeeMore={handleSeeMore}
        vendeur={vendeur}
      />
    </div>
  );
};

export default BoxInfosVendeur;
