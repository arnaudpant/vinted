import UserProfil from '@/components/userProfil/UserProfil';
import checkUserId from '@/utils/checkUserId';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  checkUserId(userId);
  return <UserProfil userId={Number(userId)} />;
};

export default User;
