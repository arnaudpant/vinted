import { CheckCircle, Clock, MapPin, Rss } from 'lucide-react';
import UserInfoLine from './models/UserInfoLine';
import { useContext } from 'react';
import UserContext from '@/context/UserContext';
import { UserInterface } from '@/types/types';

const UserInfos = () => {
  const user: UserInterface = useContext(UserContext);
  return (
    <div className="grid w-full grid-cols-2 gap-x-32 gap-y-4 text-nowrap  text-vintedTextBlackVar">
      <div className="col-start-1 space-y-2">
        <h2 className="mt-6 text-sm">A propos</h2>
        <UserInfoLine ComponentPicture={<MapPin />}>
          {user.userDocument?.city ?? 'Somewhere'} ,{' '}
          {user.userDocument?.country}
        </UserInfoLine>
        <UserInfoLine ComponentPicture={<Clock />}>
          Connecté il y a 10 minutes
        </UserInfoLine>
        <UserInfoLine ComponentPicture={<Rss />}>
          6 abonnés, 3 abonnements
        </UserInfoLine>
      </div>
      <div className="col-start-2">
        <h2 className="mt-6 text-sm">Informations vérifiées</h2>
        <UserInfoLine ComponentPicture={<CheckCircle />}>Email</UserInfoLine>
      </div>
    </div>
  );
};

export default UserInfos;
