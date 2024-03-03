/* eslint-disable react-hooks/exhaustive-deps */
import { ArticleForSale } from '@/types/types';
import Skeleton from '../ui/skeleton';
import FeedArticles from './FeedArticles';
import { Link } from 'react-router-dom';

const ArticlesGallery = ({ article }: { article: ArticleForSale }) => {
  return (
    <div className="w-full md:w-2/3">
      <div className="min-h-40 rounded">
        {article ? (
          <img src={article.photos[0]} alt={article.descriptionArticle} />
        ) : (
          <Skeleton className="h-[340px] w-full" />
        )}
      </div>
      <div className="flex h-10 items-center justify-start gap-3 text-[14px] text-vintedTextGrisFonce">
        <Link to="/" className="underline">
          Accueil
        </Link>
        <p>/</p>
        <p className="cursor-not-allowed underline">{article.category}</p>
        <p>/</p>
        <p className="cursor-not-allowed underline">{article.subCategory}</p>
      </div>
      <div className="hidden md:block">
        <FeedArticles category={article.category} subCategory={article.subCategory} userID={article.userInfos.userId} />
      </div>
    </div>
  );
};

export default ArticlesGallery;
