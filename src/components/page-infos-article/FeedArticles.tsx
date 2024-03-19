/* eslint-disable react-hooks/exhaustive-deps */
import { ArticleForSale } from '@/types/types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardInfosBottom from '../page-home/ProductCard/CardInfosBottom';
import Skeleton from '../ui/skeleton';
import { getTaxeIncl } from '@/utils/Utils';
import useQueryFirestore from '@/hooks/useQueryFirestore';

type Props = {
  category: string;
  subCategory: string;
  userID: string
};

const FeedArticles = ({ category, subCategory, userID }: Props) => {
   const { listArticlesQuery } = useQueryFirestore();
  const [listArticlesByCategory, setListArticlesByCategory] =
    useState<ArticleForSale[]>();

  useEffect(() => {
    const arrayListFilter = listArticlesQuery.filter(
      (elt) =>
        elt.category === category &&
        elt.subCategory === subCategory &&
        elt.userInfos.userId !== userID,
    );
    if (arrayListFilter && arrayListFilter.length > 0) {
      setListArticlesByCategory(arrayListFilter);
    }
  }, [category, listArticlesQuery]);

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="py-12">
      {listArticlesByCategory && listArticlesByCategory.length > 0 ? (
        <div className="flex w-full flex-wrap gap-2">
          {listArticlesByCategory
            .map((product: ArticleForSale) => (
              <Link
                to={`/items/${product.uid}`}
                key={product.uid}
                state={product}
              >
                <div className="flex h-[380px] w-[235px] cursor-pointer flex-col items-center justify-between bg-vintedBackground">
                  <div className="flex h-10 w-full justify-start gap-2 p-2">
                    {product.userInfos.photoURL !== '' ? (
                      <img
                        className="h-6 w-6 rounded-full"
                        src={product.userInfos.photoURL}
                        alt="photo de profil"
                      />
                    ) : (
                      <img
                        className="h-8 w-8 rounded-full"
                        src="./avatar.png"
                        alt="photo de profil générique"
                      />
                    )}
                    {product.userInfos.login && (
                      <p className="text-sm text-vintedTextGrisClair">
                        {product.userInfos.login}
                      </p>
                    )}
                  </div>
                  <CardInfosBottom
                    imageURL={product.photos[0]}
                    titleProduct={product.titleArticle}
                    priceProduct={product.price}
                    priceWithTaxe={getTaxeIncl(product.price)}
                    brandProduct={product.brandArticle ?? ''}
                    likes={product.like}
                  />
                </div>
              </Link>
            ))
            .slice(0, 12)}
        </div>
      ) : (
        <Skeleton className="h-[340px] w-full" />
      )}
    </div>
  );
};

export default FeedArticles;
