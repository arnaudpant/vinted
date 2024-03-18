/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { db } from '@/firebase/firebase-config';
import { ArticleForSale } from '@/types/types';
import { useFirestoreDocumentData } from '@react-query-firebase/firestore';
import { doc } from 'firebase/firestore';

const useQueryFirestore = () => {
  const ref = doc(db, 'collection-articles', 'documents-articles');

  const product = useFirestoreDocumentData(
    ['collection-articles', 'documents-articles'],
    ref,
    {
      subscribe: true,
    },
  );

  if (product.isLoading) {
    console.log('isLoading');
  }

  const listArticlesQuery: ArticleForSale[] =
    product.data?.fullListArticlesForSale;

  return {
    listArticlesQuery,
  };
};

export default useQueryFirestore;
