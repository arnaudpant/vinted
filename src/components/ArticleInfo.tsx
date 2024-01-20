import { FakeProduct } from '@/types/types';
import ArticleDetails from './articleInfo/ArticleDetails';
import ArticleInfoButtons from './articleInfo/ArticleInfoButtons';
import ArticlePrices from './articleInfo/ArticlePrices';
import ArticleShippingFeeInfo from './articleInfo/ArticleShippingFeeInfo';
import BuyerProtectionInfo from './articleInfo/BuyerProtectionInfo';

type ArticleInfoProps = {
  article: FakeProduct;
};

const ArticleInfo = ({ article }: ArticleInfoProps) => {
  const { price, title, description } = article;
  return (
    <>
      <div className="pt-5 pl-5 pr-5">
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
