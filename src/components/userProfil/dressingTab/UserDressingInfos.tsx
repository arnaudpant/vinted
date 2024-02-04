import { CheckCircle2, MapPin, Rss } from 'lucide-react';
import UserInfoLine from '../models/UserInfoLine';
import { UserInterface } from '@/types/types';
import { useContext } from 'react';
import UserContext from '@/context/UserContext';

const UserDressingInfos = () => {
  const user: UserInterface = useContext(UserContext);
  return (
    <div>
      <UserInfoLine ComponentPicture={<CheckCircle2 />}>
        <p>Google, Email</p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<MapPin />}>
        <p>{user.userDocument?.country ?? 'Somewhere'}</p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Rss />}>
        <p>
          <span className="text-vintedGreen underline">122</span>abonnés ,{' '}
          <span className="text-vintedGreen underline">101</span> abonnements
        </p>
      </UserInfoLine>
    </div>
  );
};

export default UserDressingInfos;
