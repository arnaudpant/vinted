import { FakeProduct, FakeUser } from '@/types/types';

import UserBanner from './UserBanner';
import DetailProduct from './DetailProduct';
import ImageProduct from './ImageProduct';
import { checkURLImageProductFromApi } from '@/utils/Utils';
import useDataFakeShop from '@/hooks/useDataFakeShop';

const CardProductByUser: React.FC<{
  fakeProduct: FakeProduct;
  user: FakeUser;
}> = ({ fakeProduct, user }) => {
  const URL_UMAGE_PATH = checkURLImageProductFromApi(fakeProduct.images[0]);
  const { fakeShopUsers } = useDataFakeShop();
  return (
    <div className="flex flex-col py-2  bg-vintedBackground text-sm  ">
      <UserBanner user={fakeShopUsers[0]} />
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
