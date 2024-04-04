import { ArticleForSale } from '@/types/types';
import { useEffect, useState } from 'react';
import { shuffle } from '@/utils/Utils';
import NewsFeedView from './NewsFeedView';
import useFirestoreData from '@/hooks/useFirestoreData';


const NewsFeed = () => {
  const { listArticles } = useFirestoreData();
  const [listArticlesShuffle, setListArticlesShuffle] = useState<ArticleForSale[] | []>([])

  useEffect(() => {
    if (listArticles) {
      const arrayTemp = listArticles.fullListArticlesForSale;
      setListArticlesShuffle(shuffle(arrayTemp.slice(0, 12)));
    }
  }, [listArticles]);

  return (
    <NewsFeedView
      listArticlesShuffle={listArticlesShuffle}
      title="Fil d'actu"
    />
  );
};

export default NewsFeed;
