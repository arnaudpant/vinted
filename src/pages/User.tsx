import ModalAuth from '@/components/modals/authentification/ModalAuth';
import UserSynopsis from '@/components/page-user-profil/UserSynopsis';
import UserTabs from '@/components/page-user-profil/UserTabs';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';

const User = () => {
  const { authUser} = useFirebaseAuth();

  if (!authUser) return <ModalAuth setModalConnexion={() => {}} />;

  return (
    <div className="mx-4 sm:mx-8">
      <UserSynopsis photoUrl={authUser.userDocument?.photoURL} login={authUser.userDocument?.login} />
      <UserTabs />
    </div>
  );
};

export default User;
