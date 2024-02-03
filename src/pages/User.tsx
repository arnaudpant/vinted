import LoadingCircularProgress from '@/components/ui/LoadingCircularProgress';
import UserProfil from '@/components/userProfil/UserProfil';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { UserInterface } from '@/types/types';
import { createContext } from 'react';

export const UserContext = createContext({});

const User = () => {
  const { authUser: user }: { authUser: UserInterface | null } =
    useFirebaseAuth();

  if (!user) return <LoadingCircularProgress />;

  return (
    <UserContext.Provider value={user}>
      <UserProfil />;
    </UserContext.Provider>
  );
};

export default User;
