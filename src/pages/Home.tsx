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
        title="Explorer les articles de créateur"
        start={0}
        end={5}
        idDivParentProductCard={'divParentProductCardExplore'}
        idDivToScrollProductCard={'divToScrollProductCardExplore'}
      />
      <ProductCard
        title="Articles populaires"
        start={10}
        end={15}
        idDivParentProductCard={'divParentProductCardPopulaire'}
        idDivToScrollProductCard={'divToScrollProductCardPopulaire'}
      />
      <BrandSearch />
      <SuggestionSearch />
      <NewsFeed title="Fil d'actu" start={2} end={12} />
    </>
  );
};
export default Home;
