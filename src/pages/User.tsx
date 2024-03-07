import ModalAuth from '@/components/modals/authentification/ModalAuth';
import UserSynopsis from '@/components/page-user-profil/UserSynopsis';
import UserTabs from '@/components/page-user-profil/UserTabs';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';

const User = () => {
  const { authUser} = useFirebaseAuth();

  if (!authUser) return <ModalAuth setModalConnexion={() => {}} />;

  return (
    <div className="container mx-auto max-w-[1240px] py-12">
      <UserSynopsis />
      <UserTabs />
    </div>
  );
};

export default User;
