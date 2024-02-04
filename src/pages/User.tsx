import ModalAuth from '@/components/modals/authentification/ModalAuth';
import UserProfil from '@/components/userProfil/UserProfil';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { UserInterface } from '@/types/types';
import UserContext from '../context/UserContext';

const User = () => {
  const { authUser: user }: { authUser: UserInterface | null } =
    useFirebaseAuth();

  if (!user) return <ModalAuth setModalConnexion={() => {}} />;

  return (
    <UserContext.Provider value={user}>
      <UserProfil />;
    </UserContext.Provider>
  );
};

export default User;
