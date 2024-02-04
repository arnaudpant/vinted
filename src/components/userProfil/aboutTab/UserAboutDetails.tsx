import { Clock, MapPin, Rss } from 'lucide-react';
import UserInfoLine from '../models/UserInfoLine';
import { UserInterface } from '@/types/types';
import { useContext } from 'react';
import UserContext from '@/context/UserContext';

const UserAboutDetails = () => {
  const user: UserInterface = useContext(UserContext);
  return (
    <div>
      <UserInfoLine ComponentPicture={<MapPin />}>
        <p>{user.userDocument?.country ?? 'Somewhere'}</p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Clock />}>
        <p>Connecté il y&apos;a 23 minutes </p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Rss />}>
        <p>
          <span className="text-vintedGreen underline">79</span> abonnés
        </p>
      </UserInfoLine>
    </div>
  );
};

export default UserAboutDetails;
