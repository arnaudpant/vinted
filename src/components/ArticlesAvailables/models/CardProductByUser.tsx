import { FakeProductWithUserId } from '@/types/types';

import { checkURLImageProductFromApi } from '@/utils/checkURLImageProductFromApi';
import DetailProduct from './DetailProduct';
import ImageProduct from './ImageProduct';
import UserBanner from './UserBanner';

const CardProductByUser: React.FC<{
  fakeProduct: FakeProductWithUserId;
}> = ({ fakeProduct }) => {
  const URL_UMAGE_PATH = checkURLImageProductFromApi(fakeProduct.images[0]);

  return (
    <div className="flex flex-col py-2  bg-vintedBackground text-sm  ">
      <UserBanner userId={fakeProduct.userId} />
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

export default CardProductByUser;
