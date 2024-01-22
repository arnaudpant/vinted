import ArticlesAvailablesBySeller from '@/components/ArticlesAvailables/ArticlesAvailablesBySeller';
import { useParams } from 'react-router-dom';

const Article = () => {
  const userId = useParams();
  const LAST_USER_ID = 71;
  if (isNaN(Number(userId.id))) {
    throw new Error(" le user id n'est pas un nombre");
  }
  if (Number(userId.id) > LAST_USER_ID || Number(userId.id) < 1) {
    throw new Error("Cet utilisateur n'existe pas");
  }

  return (
    <div>
      <ArticlesAvailablesBySeller userId={Number(userId.id)} />
    </div>
  );
};

export default Article;
