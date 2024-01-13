import { FakeProduct } from '@/types/types';

import UserBanner from './UserBanner';
import DetailProduct from './DetailProduct';
import ImageProduct from './ImageProduct';
import { checkURLImageProductFromApi } from '@/utils/Utils';

const ArticleAvailable: React.FC<{ fakeProduct: FakeProduct }> = ({
  fakeProduct,
}) => {
  const URL_UMAGE_PATH = checkURLImageProductFromApi(fakeProduct.images[0]);

  return (
    <div className="flex flex-col py-2  bg-vintedBackground text-sm  ">
      <UserBanner />
      <ImageProduct urlImage={URL_UMAGE_PATH} />
      <DetailProduct
        isLiked={true}
        description={fakeProduct.description}
        categoryName={fakeProduct.category.name}
        price={fakeProduct.price}
      />
    </div>
  );
};

export default ArticleAvailable;
