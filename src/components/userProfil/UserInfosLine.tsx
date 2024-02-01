import { CheckCircle, Clock, MapPin } from 'lucide-react';
import UserInfoLine from './models/UserInfoLine';

const UserInfos = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-x-32 gap-y-4 text-nowrap  text-vintedTextBlackVar">
      <div className="col-start-1 space-y-2">
        <h2 className="text-sm">A propos</h2>
        <UserInfoLine ComponentPicture={<MapPin />}>
          Bordeaux , France
        </UserInfoLine>
        <UserInfoLine ComponentPicture={<Clock />}>
          Connecté il y&apos;a 10minutes
        </UserInfoLine>
        <UserInfoLine ComponentPicture={<MapPin />}>
          6 abonnés , 3 abonnements
        </UserInfoLine>
      </div>
      <div className="col-start-2">
        <h2 className="text-sm">Informations vérifiées</h2>
        <UserInfoLine ComponentPicture={<CheckCircle />}>Email</UserInfoLine>
      </div>
    </div>
  );
};

export default UserInfos;
