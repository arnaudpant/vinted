import { CheckCircle2, Clock, MapPin, Rss } from 'lucide-react';
import UserInfoLine from '../models/UserInfoLine';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import getRandomIndex from '@/utils/Utils';

type Props = {
  google?: boolean
}

const UserAboutDetails = ({google}: Props) => {
  const {authUser} = useFirebaseAuth()
  
  return (
    <div>
      {google && (
        <UserInfoLine ComponentPicture={<CheckCircle2 />}>
          <p>Google, Email</p>
        </UserInfoLine>
      )}
      <UserInfoLine ComponentPicture={<MapPin />}>
        <p>{authUser?.userDocument?.city ?? 'France'}</p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Clock />}>
        Connecté il y a {getRandomIndex(2, 40)} minutes
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Rss />}>
        {authUser?.userDocument?.abonnements && authUser.userDocument.abonnes
          ? `${authUser.userDocument.abonnes} abonnés, ${authUser.userDocument.abonnements} abonnements`
          : `${getRandomIndex(1, 30)} abonnés, ${getRandomIndex(2, 30)} abonnements`}
      </UserInfoLine>
    </div>
  );
};

export default UserAboutDetails;
