import { FakeProduct } from '@/types/types';
import ArticleDetails from '../articleInfo/ArticleDetails';
import ArticleInfoButtons from '../articleInfo/ArticleInfoButtons';
import ArticlePrices from '../articleInfo/ArticlePrices';
import ArticleShippingFeeInfo from '../articleInfo/ArticleShippingFeeInfo';
import BoxInfosVendeur from '../box-infos-vendeur/BoxInfosVendeur';
import BuyerProtectionInfo from '../articleInfo/BuyerProtectionInfo';

const ArticleInfo = ({ article }: { article: FakeProduct }) => {
  const { price, title, description } = article;
  return (
    <div className="w-full md:w-1/3">
      <div className="bg-vintedBackground p-5">
        <div className="">
          <ArticlePrices price={price} />
          <hr />
          <ArticleDetails article={article} />
        </div>
        <div className="border-b border-vintedTextGrisFonce py-1"></div>
        <h2 className="py-3 font-medium">{title}</h2>
        <span className="py-2 text-vintedTextGrisFonce">{description}</span>
        <div className="border-b border-vintedTextGrisFonce py-1"></div>
        <ArticleShippingFeeInfo price={price} />
        <ArticleInfoButtons />
        <BuyerProtectionInfo />
      </div>
      <BoxInfosVendeur />
    </div>
  );
};

export default ArticleInfo;
