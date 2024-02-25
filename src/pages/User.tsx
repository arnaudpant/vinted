import ModalAuth from '@/components/modals/authentification/ModalAuth';
import UserProfil from '@/components/page-user-profil/UserProfil';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import UserContext from '../context/UserContext';

const User = () => {
  const { authUser: user } = useFirebaseAuth();

  if (!user) return <ModalAuth setModalConnexion={() => {}} />;

  return (
    <UserContext.Provider value={user}>
      <UserProfil />;
    </UserContext.Provider>
  );
};

export default User;
