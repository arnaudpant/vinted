/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserSynopsis from '@/components/page-user-profil/UserSynopsis';
import UserTabs from '@/components/page-user-profil/UserTabs';
import { useAuth } from '@/context/AuthUserContext';
import { useEffect } from 'react';

const User = () => {
  const { authUser } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="container mx-auto max-w-[1240px] py-4 sm:py-8">
      <UserSynopsis
        vendeur={false}
        photoUrl={authUser?.userDocument?.photoURL ?? ''}
        login={authUser?.userDocument?.login ?? ''}
        evaluations={authUser?.userDocument?.evaluations ?? 0}
        stars={authUser?.userDocument?.stars ?? 0}
      />
      <UserTabs />
    </div>
  );
};

export default User;
