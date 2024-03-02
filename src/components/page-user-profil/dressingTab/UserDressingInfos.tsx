import { CheckCircle2, MapPin, Rss } from 'lucide-react';
import UserInfoLine from '../models/UserInfoLine';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import getRandomIndex from '@/utils/Utils';

const UserDressingInfos = () => {
  const {authUser} = useFirebaseAuth()
  return (
    <div>
      <UserInfoLine ComponentPicture={<CheckCircle2 />}>
        <p>Google, Email</p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<MapPin />}>
        <p>
          {authUser?.userDocument?.country !== ''
            ? authUser?.userDocument?.country
            : 'France'}
        </p>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<Rss />}>
        {getRandomIndex(1, 30)} abonnés, {getRandomIndex(2, 30)} abonnements
      </UserInfoLine>
    </div>
  );
};

export default UserDressingInfos;
