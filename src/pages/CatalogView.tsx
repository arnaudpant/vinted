import CardInfosBottom from '@/components/page-home/ProductCard/CardInfosBottom';
import { ArticleForSale } from '@/types/types';
import { getTaxeIncl } from '@/utils/Utils';
import { Link } from 'react-router-dom';

type Props = {
  listArticlesByCategory: ArticleForSale[];
};

const CatalogView = ({ listArticlesByCategory }: Props) => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4 sm:justify-start">
      {listArticlesByCategory.map((article) => (
        <Link to={`/items/${article.uid}`} key={article.uid} state={article}>
          <div className="flex h-[340px] w-[213px] cursor-pointer flex-col items-center justify-between">
            <div className="flex h-10 w-full justify-start gap-2 p-2">
              {article.userInfos.photoURL ? (
                <img
                  className="h-6 w-6 rounded-full"
                  src={article.userInfos.photoURL}
                  alt="photo de profil"
                />
              ) : (
                <img
                  className="h-8 w-8 rounded-full"
                  src="./avatar.png"
                  alt="photo de profil générique"
                />
              )}
              {article.userInfos.login && (
                <p className="text-sm text-vintedTextGrisClair">
                  {article.userInfos.login}
                </p>
              )}
            </div>
            <CardInfosBottom
              imageURL={article.photos && article.photos[0]}
              titleProduct={article.titleArticle}
              priceProduct={article.price}
              brandProduct={article.brandArticle ?? ''}
              priceWithTaxe={getTaxeIncl(article.price)}
              likes={article.like}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatalogView;
