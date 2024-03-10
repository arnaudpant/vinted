/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserSynopsis from '@/components/page-user-profil/UserSynopsis';
import VendeurTabs from '@/components/page-vendeur/VendeurTabs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Vendeur = () => {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [state]);
  return (
    <div className="container mx-auto max-w-[1240px] py-4 md:py-12">
      <UserSynopsis
        vendeur={true}
        photoUrl={state[0].photoURL ?? ''}
        login={state[0].login ?? ''}
        evaluations={state[0].evaluations ?? 0}
        stars={state[0].stars ?? 0}
      />
      <VendeurTabs vendeur={state[0]} />
    </div>
  );
};

export default Vendeur;
