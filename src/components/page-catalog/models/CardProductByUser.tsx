import { ArticleForSale } from '@/types/types';
import DetailProduct from './DetailProduct';
import UserBanner from './UserBanner';

type Props = { product: ArticleForSale };

const CardProductByUser = ({ product }: Props) => {
  if (!product) return;
  return (
    <div className="flex w-72 flex-col gap-4 bg-vintedTextGrisFonce py-2 text-sm">
      <UserBanner />
      {product.photos ? (
        <img
          src={product.photos[0]}
          alt={product.titleArticle}
          className="h-[400] w-full cursor-pointer object-cover"
        />
      ) : (
        <img
          src=""
          alt="article"
          className="h-[400] w-full cursor-pointer object-cover"
        />
      )}
      <DetailProduct
        isLiked={true}
        description={product.descriptionArticle}
        categoryName={product.category}
        price={product.price}
      />
    </div>
  );
};

export default CardProductByUser;
