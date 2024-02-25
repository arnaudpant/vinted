import { FakeProduct } from '@/types/types';

import { checkURLImageProductFromApi } from '@/utils/checkURLImageProductFromApi';
import DetailProduct from './DetailProduct';
import ImageProduct from './ImageProduct';
import UserBanner from './UserBanner';

const CardProductByUser: React.FC<{
  fakeProduct: FakeProduct;
}> = ({ fakeProduct }) => {
  const URL_UMAGE_PATH = checkURLImageProductFromApi(
    fakeProduct.category.image,
  );

  if (!fakeProduct) return;
  return (
    <div className="flex flex-col bg-vintedBackground  py-2 text-sm  ">
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

export default CardProductByUser;
