/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ArticleInfo from '@/components/page-infos-article/ArticleInfo';
import ArticlesGallery from '@/components/page-infos-article/ArticlesGallery';
import { useLocation, useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state }  = location;
  // URL param id format is idNumber-item-name
  const idFirstPart = id?.split('-')[0];
  if (!idFirstPart || isNaN(parseInt(idFirstPart))) {
    throw Error('The URL param needs to be like idNumber-item-name');
  }

  return (
    <div className="bg-vintedBackgroundCard">
      <div className="container mx-auto flex flex-col gap-4 p-5 md:flex-row">
        <ArticlesGallery article={state} />
        <ArticleInfo article={state} />
      </div>
    </div>
  );
};

export default Article;
