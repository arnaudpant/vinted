import ArticlesAvailablesBySeller from '@/components/ArticlesAvailables/ArticlesAvailablesBySeller';
import checkUserId from '@/utils/checkUserId';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  checkUserId(userId);
  return (
    <div>
      <ArticlesAvailablesBySeller userId={Number(userId)} />
    </div>
  );
};

export default User;
