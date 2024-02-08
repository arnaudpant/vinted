/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ArticleInfo from '@/components/page-infos-article/ArticleInfo';
import ArticlesGallery from '@/components/page-infos-article/ArticlesGallery';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Article = () => {
  const location = useLocation();
  const { state }  = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [state]);

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
