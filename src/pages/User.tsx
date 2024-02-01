import ArticlesAvailablesBySeller from '@/components/ArticlesAvailables/ArticlesAvailablesBySeller';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  return (
    <div>
      <ArticlesAvailablesBySeller userId={Number(userId)} />
    </div>
  );
};

export default User;
