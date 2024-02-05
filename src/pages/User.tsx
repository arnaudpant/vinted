import ArticlesAvailablesBySeller from '@/components/ArticlesAvailables/ArticlesAvailablesBySeller';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import checkUserId from '@/utils/checkUserId';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  checkUserId(userId);

  const { authUser } = useFirebaseAuth();

  console.log(authUser);

  return (
    <div>
      <ArticlesAvailablesBySeller userId={Number(userId)} />
    </div>
  );
};

export default User;
