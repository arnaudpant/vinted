import { FakeProduct } from '@/types/types';
import ArticleDetails from './articleInfo/ArticleDetails';
import ArticleInfoButtons from './articleInfo/ArticleInfoButtons';
import ArticlePrices from './articleInfo/ArticlePrices';
import ArticleShippingFeeInfo from './articleInfo/ArticleShippingFeeInfo';
import BuyerProtectionInfo from './articleInfo/BuyerProtectionInfo';

const ArticleInfo = ({ article }: { article: FakeProduct }) => {
  const { price, title, description } = article;
  return (
    <>
      <div className="px-5 pt-5">
        <ArticlePrices price={price} />
        <hr />
        <ArticleDetails article={article} />
      </div>
      <hr />
      <div className="p-5">
        <h2 className="mb-2 font-medium">{title}</h2>
        <span>{description}</span>
        <hr />
        <ArticleShippingFeeInfo price={price} />
        <ArticleInfoButtons />
        <BuyerProtectionInfo />
      </div>
    </>
  );
};

export default ArticleInfo;
