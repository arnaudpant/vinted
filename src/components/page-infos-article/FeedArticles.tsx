/* eslint-disable react-hooks/exhaustive-deps */
import useDataFakeShop from "@/hooks/useDataFakeShop";
import { FakeProduct } from "@/types/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardInfosBottom from "../home/CardInfosBottom";
import Skeleton from "../ui/skeleton";


const FeedArticles = ({category}: { category: number; }) => {
  const { fakeShopProducts, fakeShopUsers } = useDataFakeShop();
  const [listArticlesByCategory, setListArticlesByCategory] = useState<FakeProduct[]>([])

  useEffect(() => {
    const arrayListFilter = fakeShopProducts.filter(
      (elt) => elt.category.id === category,
    );
    setListArticlesByCategory(arrayListFilter);
  }, [category, fakeShopProducts]);


  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="py-12">
      {listArticlesByCategory.length > 0 || fakeShopUsers.length > 0 ? (
        <div className="flex w-full flex-wrap justify-between gap-2">
          {listArticlesByCategory
            .map((product: FakeProduct) => (
              <Link
                to={`/items/${product.id}`}
                key={product.id}
                state={product}
              >
                <div className="flex h-[380px] w-[235px] cursor-pointer flex-col items-center justify-between bg-vintedBackground">
                  <div className="flex h-10 w-full justify-start gap-2 p-2">
                    {fakeShopUsers[1] ? (
                      <img
                        className="h-6 w-6 rounded-full"
                        src={fakeShopUsers[1].avatar}
                        alt="photo de profil"
                      />
                    ) : (
                      <img
                        className="h-8 w-8 rounded-full"
                        src="./avatar.png"
                        alt="photo de profil générique"
                      />
                    )}
                    {fakeShopUsers[1] && (
                      <p className="text-sm text-vintedTextGrisClair">
                        {fakeShopUsers[1].name}
                      </p>
                    )}
                  </div>
                  <CardInfosBottom
                    imageURL={product.images[0]}
                    titleProduct={product.title}
                    priceProduct={product.price}
                  />
                </div>
              </Link>
            ))
            .slice(0, 12)}
        </div>
      ) : (
        <Skeleton className="h-[340px] w-full" />
      )}
    </div>
  );
};

export default FeedArticles;
