import { UserInterface } from '@/types/types';
import { createContext } from 'react';

const UserContext = createContext<UserInterface>({
  uid: '',
  email: '',
  displayName: '',
  emailVerified: true,
  photoURL: '',
});

export default UserContext;
