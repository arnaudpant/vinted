/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ArticleForSale } from '@/types/types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CatalogView from './CatalogView';
import Skeleton from '@/components/ui/skeleton';
import useQueryFirestore from '@/hooks/useQueryFirestore';

const Catalog = () => {
  const { listArticlesQuery } = useQueryFirestore();
  const location = useLocation();
  const { state } = location;

  const [listArticlesByCategory, setListArticlesByCategory] =
    useState<ArticleForSale[]>();

  useEffect(() => {
    if (listArticlesQuery !== undefined) {
      if (state[0] === '') {
        const articlesFilter = listArticlesQuery.filter(
          (article) => article.category === state[1],
        );
        setListArticlesByCategory(articlesFilter);
      } else if (state[0] === 'home') {
        if (state[1] === 'recent') {
          const articlesFilter = listArticlesQuery.reverse();
          setListArticlesByCategory(articlesFilter);
        }
        if (state[1] === 'populaire') {
          const articlesFilter = listArticlesQuery.sort((a, b) =>
            a.like < b.like ? 1 : -1,
          );
          setListArticlesByCategory(articlesFilter);
        }
      } else {
        const articlesFilter = listArticlesQuery.filter(
          (article) =>
            article.subCategory === state[0] && article.category === state[1],
        );
        setListArticlesByCategory(articlesFilter);
      }
    }
  }, [listArticlesQuery, state, location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="container mx-auto max-w-[1240px] py-12">
      <h2>{listArticlesByCategory?.length} articles disponibles</h2>
      {listArticlesByCategory ? (
        <CatalogView listArticlesByCategory={listArticlesByCategory} />
      ) : (
        <Skeleton className="h-[340px] w-[213px]" />
      )}
    </div>
  );
};

export default Catalog;
