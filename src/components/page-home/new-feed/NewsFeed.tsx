import { ArticleForSale } from '@/types/types';
import { useEffect, useState } from 'react';
import { shuffle } from '@/utils/Utils';
import NewsFeedView from './NewsFeedView';
import useQueryFirestore from '@/hooks/useQueryFirestore';


const NewsFeed = () => {
  const { listArticlesQuery } = useQueryFirestore();
  const [listArticlesShuffle, setListArticlesShuffle] = useState<ArticleForSale[] | []>([])

  useEffect(() => {
    if (listArticlesQuery) {
      const arrayTemp = listArticlesQuery;
      setListArticlesShuffle(shuffle(arrayTemp.slice(0, 12)));
    }
  }, [listArticlesQuery]);

  return (
    <NewsFeedView
      listArticlesShuffle={listArticlesShuffle}
      title="Fil d'actu"
    />
  );
};

export default NewsFeed;
