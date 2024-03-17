import Skeleton from '@/components/ui/skeleton';

type Props = {
  title: string;
  nbrCards: number;
};

const ProductCardSkeleton = ({ title, nbrCards }: Props) => {
  return (
    <div className="container mx-auto max-w-[1240px] py-12">
      <div className="flex w-full justify-between pb-4">
        <h1 className="text-2xl">{title}</h1>
      </div>

      <div className="relative h-[300px] overflow-hidden">
        <div className="flex h-[320px] overflow-x-auto overflow-y-hidden">
          <div className="flex shrink-0 flex-nowrap gap-4">
            {Array(nbrCards)
              .fill('')
              .map((_, index) => (
                <Skeleton key={index} className="h-[300px] w-[213px]" />
              ))}
            <div className="flex h-[300px] w-[213px] cursor-pointer flex-col justify-center bg-gray-100">
              <p className="text-center text-vintedTextGrisFonce">
                Chargement en cours ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
