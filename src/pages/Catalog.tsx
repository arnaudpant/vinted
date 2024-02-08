import ArticlesAvailablesSearch from '@/components/ArticlesAvailables/ArticlesAvailablesSearch';
import ArticlesSimilarsByRandomSellers from '@/components/ArticlesAvailables/ArticlesSimilarsByRandomSellers';
import { useParams } from 'react-router-dom';

const Catalog = () => {
  const { categoryId } = useParams();

  return categoryId ? (
    <ArticlesAvailablesSearch categoryId={Number(categoryId)} />
  ) : (
    <ArticlesSimilarsByRandomSellers />
  );
};

export default Catalog;
