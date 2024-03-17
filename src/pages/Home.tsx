import SuggestionSearch from '@/components/page-home/suggestion/SuggestionSearch';
import Banner from '@/components/page-home/banner/Banner';
import NewsFeed from '@/components/page-home/new-feed/NewsFeed';
import ProductCard from '@/components/page-home/ProductCard/ProductCard';
import BrandSearch from '@/components/page-home/brand-search/BrandSearch';
import { useEffect } from 'react';
import useFirestoreData from '@/hooks/useFirestoreData';
import Skeleton from '@/components/ui/skeleton';

const Home = () => {
    const { listArticles } = useFirestoreData();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Banner />
      {listArticles ? (
        <>
          <ProductCard
            listArticles={listArticles.fullListArticlesForSale}
            title="Explorer les derniers articles"
            start={0}
            end={6}
            idDivParentProductCard={'divParentProductCardExplore'}
            idDivToScrollProductCard={'divToScrollProductCardExplore'}
            typeSort={'recent'}
          />
          <ProductCard
            listArticles={listArticles.fullListArticlesForSale}
            title="Articles populaires"
            start={0}
            end={6}
            idDivParentProductCard={'divParentProductCardPopulaire'}
            idDivToScrollProductCard={'divToScrollProductCardPopulaire'}
            typeSort={'populaire'}
          />
        </>
      ) : (
        <div className="flex shrink-0 flex-nowrap gap-4">
          {Array(5)
            .fill('')
            .map((_, index) => (
              <Skeleton key={index} className="h-[300px] w-[213px]" />
            ))}
          <div className="flex h-[300px] w-[213px] cursor-pointer flex-col justify-center bg-gray-100">
            <p className="text-center text-vintedTextGrisFonce">
              Voir tous les articles
            </p>
          </div>
        </div>
      )}
      <BrandSearch />
      <SuggestionSearch />
      <NewsFeed />
    </>
  );
};
export default Home;
