import SuggestionSearch from '@/components/page-home/suggestion/SuggestionSearch';
import Banner from '@/components/page-home/banner/Banner';
import NewsFeed from '@/components/page-home/new-feed/NewsFeed';
import ProductCard from '@/components/page-home/ProductCard/ProductCard';
import BrandSearch from '@/components/page-home/brand-search/BrandSearch';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Banner />
      <ProductCard
        title="Explorer les derniers articles"
        start={0}
        end={6}
        idDivParentProductCard={'divParentProductCardExplore'}
        idDivToScrollProductCard={'divToScrollProductCardExplore'}
        typeSort={'recent'}
      />
      <ProductCard
        title="Articles populaires"
        start={0}
        end={6}
        idDivParentProductCard={'divParentProductCardPopulaire'}
        idDivToScrollProductCard={'divToScrollProductCardPopulaire'}
        typeSort={'populaire'}
      />
      <BrandSearch />
      <SuggestionSearch />
      <NewsFeed />
    </>
  );
};
export default Home;
