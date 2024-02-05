/* eslint-disable react-hooks/exhaustive-deps */
import { FakeProduct } from '@/types/types';
import Skeleton from '../ui/skeleton';
import FeedArticles from './FeedArticles';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ArticlesGallery = ({ article }: { article: FakeProduct }) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);


  return (
    <div className="w-full md:w-2/3">
      <div className="min-h-40 rounded">
        {article ? (
          <img src={article.images[0]} alt={article.description} />
        ) : (
          <Skeleton className="h-[340px] w-full" />
        )}
      </div>
      <div className="flex h-10 items-center justify-start gap-3 text-[14px] text-vintedTextGrisFonce">
        <Link to="/" className="underline">
          Accueil
        </Link>
        <p>/</p>
        <p className="cursor-not-allowed underline">{article.category.name}</p>
        <p>/</p>
        <p className="cursor-not-allowed underline">{article.title}</p>
      </div>
      <div className="hidden md:block">
        <FeedArticles category={article.category.id} />
      </div>
    </div>
  );
};

export default ArticlesGallery;
