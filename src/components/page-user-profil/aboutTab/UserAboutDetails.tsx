import { CheckCircle2, Clock, MapPin, Rss } from 'lucide-react';
import UserInfoLine from '../models/UserInfoLine';
import getRandomIndex from '@/utils/Utils';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';

type Props = {
  google?: boolean;
};

const UserAboutDetails = ({ google}: Props) => {
  const {authUser} = useFirebaseAuth()

  return (
    <div>
      {google && (
        <UserInfoLine ComponentPicture={<CheckCircle2 />}>
          <p>Google, Email</p>
        </UserInfoLine>
      )}
      <UserInfoLine ComponentPicture={<MapPin />}>
        <p>{authUser?.userDocument?.city}</p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Clock />}>
        Connecté il y a {getRandomIndex(2, 40)} minutes
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Rss />}>
        {authUser?.userDocument?.abonnes} abonnés, {authUser?.userDocument?.abonnements} abonnements
      </UserInfoLine>
    </div>
  );
};

export default UserAboutDetails;
