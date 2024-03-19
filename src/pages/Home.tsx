import SuggestionSearch from '../components/page-home/suggestion/SuggestionSearch';
import Banner from '../components/page-home/banner/Banner';
import NewsFeed from '../components/page-home/new-feed/NewsFeed';
import ProductCard from '../components/page-home/ProductCard/ProductCard';
import BrandSearch from '../components/page-home/brand-search/BrandSearch';
import { useEffect } from 'react';
import ProductCardSkeleton from '@/components/page-home/ProductCard/ProductCardSkeleton';
import useQueryFirestore from '@/hooks/useQueryFirestore';

const Home = () => {
  const { listArticlesQuery } = useQueryFirestore();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  

  return (
    <>
      <Banner />
      {listArticlesQuery ? (
        <>
          <ProductCard
            title="Explorer les derniers articles"
            start={0}
            end={6}
            idDivParentProductCard={'divParentProductCardExplore'}
            idDivToScrollProductCard={'divToScrollProductCardExplore'}
            typeSort="recent"
          />
          <ProductCard
            title="Articles populaires"
            start={0}
            end={6}
            idDivParentProductCard={'divParentProductCardPopulaire'}
            idDivToScrollProductCard={'divToScrollProductCardPopulaire'}
            typeSort="populaire"
          />
        </>
      ) : (
        <>
          <ProductCardSkeleton
            title="Explorer les derniers articles"
            nbrCards={5}
          />
          <ProductCardSkeleton title="Articles populaires" nbrCards={5} />
        </>
      )}
      <BrandSearch />
      <SuggestionSearch />
      <NewsFeed />
    </>
  );
};
export default Home;
