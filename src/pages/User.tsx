import ModalAuth from '@/components/modals/authentification/ModalAuth';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import UserProfil from '@/components/userProfil/UserProfil';
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
