import ArticleInfo from '@/components/ArticleInfo';
import testProduct from '@/data/testProduct';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  // URL param id format is idNumber-item-name
  const idFirstPart = id?.split('-')[0];
  if (!idFirstPart || isNaN(parseInt(idFirstPart))) {
    throw Error('The URL param needs to be like idNumber-item-name');
  }
  // TODO: replace testProduct with fakeShopProducts with id=parseInt(idFirstPart)
  return <ArticleInfo article={testProduct} />;
};

export default Article;
