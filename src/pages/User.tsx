/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserSynopsis from '@/components/page-user-profil/UserSynopsis';
import UserTabs from '@/components/page-user-profil/UserTabs';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';

const User = () => {
  const { authUser } = useFirebaseAuth();

  return (
    <div className="container mx-auto max-w-[1240px] py-12">
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
