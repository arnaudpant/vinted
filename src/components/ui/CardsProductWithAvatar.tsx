import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { ArticleForSale } from '@/types/types';
import { Link } from 'react-router-dom';
import CardInfosBottom from '../page-home/ProductCard/CardInfosBottom';
import Skeleton from './skeleton';
import { getTaxeIncl } from '@/utils/Utils';

const CardsProductWithAvatar = () => {
  const { authUser } = useFirebaseAuth();


  return (
    <div className="container mx-auto max-w-[1240px] py-12">
      <p>
        {authUser?.userDocument?.listArticlesForSale.length} articles
        disponibles
      </p>
      {authUser?.userDocument &&
      authUser.userDocument.listArticlesForSale.length > 0 ? (
        <div className="flex w-full flex-wrap justify-center gap-4 sm:justify-start">
          {authUser?.userDocument?.listArticlesForSale.map(
            (product: ArticleForSale) => (
              <Link
                to={`/items/${product.uid}`}
                key={product.uid}
                state={product}
              >
                <div className="flex h-[340px] w-[213px] cursor-pointer flex-col items-center justify-between">
                  <div className="flex h-10 w-full justify-start gap-2 p-2">
                    {authUser.userDocument?.photoURL ? (
                      <img
                        className="h-6 w-6 rounded-full"
                        src={authUser.userDocument?.photoURL}
                        alt="photo de profil"
                      />
                    ) : (
                      <img
                        className="h-8 w-8 rounded-full"
                        src="./avatar.png"
                        alt="photo de profil générique"
                      />
                    )}
                    {authUser.userDocument && (
                      <p className="text-sm text-vintedTextGrisClair">
                        {authUser.userDocument.login}
                      </p>
                    )}
                  </div>
                  <CardInfosBottom
                    imageURL={product.photos && product.photos[0]}
                    titleProduct={product.titleArticle}
                    priceProduct={product.price}
                    brandProduct={product.brandArticle ?? ''}
                    priceWithTaxe={getTaxeIncl(product.price)}
                    likes={product.like}
                  />
                </div>
              </Link>
            ),
          )}
        </div>
      ) : (
        <Skeleton className="h-[340px] w-[213px]" />
      )}
    </div>
  );
};

export default CardsProductWithAvatar;
