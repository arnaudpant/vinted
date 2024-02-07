import LoadingCircularProgress from '@/components/ui/LoadingCircularProgress';
import UserProfil from '@/components/userProfil/UserProfil';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';

const User = () => {
  const { authUser: user, authUserIsLoading } = useFirebaseAuth();

  const { userId } = useParams();

  const isUserIdFromConnectedUser = userId === user?.uid;

  if (!user && authUserIsLoading) return <LoadingCircularProgress />;

  if (!user && !authUserIsLoading && !isUserIdFromConnectedUser)
    return (
      <p className="mb-4 text-center text-red-500">
        Veuillez vous authentifier
      </p>
    );

  if (user && !authUserIsLoading && !isUserIdFromConnectedUser) {
    return (
      <p className="mb-4 text-center text-red-500">
        Vous n&apos;avez pas accès à ce compte
      </p>
    );
  }

  if (user && !authUserIsLoading && isUserIdFromConnectedUser)
    return (
      <UserContext.Provider value={user}>
        <UserProfil />;
      </UserContext.Provider>
    );
};

export default User;
