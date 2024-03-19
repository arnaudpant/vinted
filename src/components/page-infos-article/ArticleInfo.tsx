import ArticleDetails from './articleInfo/ArticleDetails';
import ArticleInfoButtons from './articleInfo/ArticleInfoButtons';
import ArticlePrices from './articleInfo/ArticlePrices';
import ArticleShippingFeeInfo from './articleInfo/ArticleShippingFeeInfo';
import BoxInfosVendeur from './box-infos-vendeur/BoxInfosVendeur';
import BuyerProtectionInfo from './articleInfo/BuyerProtectionInfo';
import { ArticleForSale } from '@/types/types';

type Props = {
  article: ArticleForSale;
};

const ArticleInfo = ({ article }: Props) => {
  return (
    <div className="w-full md:w-1/3">
      <div className="bg-vintedBackground p-5">
        <div className="">
          <ArticlePrices price={article.price} />
          <hr />
          <ArticleDetails article={article} />
        </div>
        <div className="border-b border-vintedTextGrisFonce py-1"></div>
        <h2 className="py-3 font-medium">{article.titleArticle}</h2>
        <span className="py-2 text-vintedTextGrisFonce">
          {article.descriptionArticle}
        </span>
        <div className="border-b border-vintedTextGrisFonce py-1"></div>
        <ArticleShippingFeeInfo price={article.price} />
        <ArticleInfoButtons />
        <BuyerProtectionInfo />
      </div>
      <BoxInfosVendeur vendeur={article.userInfos} />
    </div>
  );
};

export default ArticleInfo;
