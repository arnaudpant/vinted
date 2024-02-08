import { CheckCircle2 } from 'lucide-react';
import UserInfoLine from '../models/UserInfoLine';

const UserAboutInfos = () => {
  return (
    <div>
      <UserInfoLine ComponentPicture={<CheckCircle2 />}>
        <span>Google</span>
      </UserInfoLine>
      <UserInfoLine ComponentPicture={<CheckCircle2 />}>
        <span>Email</span>
      </UserInfoLine>
    </div>
  );
};

export default UserAboutInfos;
