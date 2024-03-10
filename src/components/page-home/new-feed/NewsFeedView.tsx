import { ArticleForSale } from '@/types/types';
import { Link } from 'react-router-dom';
import CardInfosBottom from '../ProductCard/CardInfosBottom';
import Skeleton from '@/components/ui/skeleton';

type Props = {
  listArticlesShuffle: ArticleForSale[];
  title: string;
};

const NewsFeedView = ({ listArticlesShuffle, title }: Props) => {
  return (
    <div className="container mx-auto max-w-[1240px] py-12 text-vintedTextGrisClair">
      <div className="pb-4">
        <h1 className="text-2xl text-vintedTextBlack">{title}</h1>
      </div>

      {listArticlesShuffle && listArticlesShuffle.length > 0 ? (
        <div className="flex w-full flex-wrap justify-center gap-4 md:justify-start">
          {listArticlesShuffle.map((product: ArticleForSale) => (
            <Link
              to={`/items/${product.uid}`}
              key={product.uid}
              state={product}
            >
              <div className="flex h-[340px] w-[213px] cursor-pointer flex-col items-center justify-between">
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
                      src="/avatar.png"
                      alt="photo de profil générique"
                    />
                  )}

                  <p className="text-sm text-vintedTextGrisClair">
                    {product.userInfos.login}
                  </p>
                </div>
                <CardInfosBottom
                  imageURL={product.photos[0]}
                  titleProduct={product.titleArticle}
                  priceProduct={product.price}
                  brandProduct={product.brandArticle ?? ''}
                  priceWithTaxe={product.price}
                  likes={product.like}
                />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Skeleton className="h-[340px] w-[213px]" />
      )}
    </div>
  );
};

export default NewsFeedView;
