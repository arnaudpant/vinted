/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { ArticleForSale } from '@/types/types';
import { useEffect, useState } from 'react';
import NewsFeedView from '../page-home/new-feed/NewsFeedView';
import useFirestoreData from '@/hooks/useFirestoreData';

type Props = {
  vendeur: string;
};

const VendeurDressing = ({ vendeur }: Props) => {
  const [articlesVendeur, setArticlesVendeur] = useState<ArticleForSale[]>();
  const { listArticles } = useFirestoreData();

  useEffect(() => {
    if (listArticles) {
      const listArticlesFilter = listArticles.fullListArticlesForSale.filter(
        (article) => article.userInfos.userId === vendeur,
      );
      setArticlesVendeur(listArticlesFilter);
    }
  }, [listArticles]);

  return (
    <div className="py-4">
      <p>{articlesVendeur?.length} articles disponibles</p>
      {articlesVendeur && (
        <NewsFeedView
          listArticlesShuffle={articlesVendeur}
          title="Articles en vente"
        />
      )}
    </div>
  );
};

export default VendeurDressing;
