import SuggestionSearch from '@/components/suggestion/SuggestionSearch';
import Banner from '@/components/banner/Banner';
import NewsFeed from '@/components/home/NewsFeed';
import ProductCard from '@/components/home/ProductCard';
import BrandSearch from '@/components/BrandSearch';

const Home = () => {

  return (
    <>
      <Banner />
      <ProductCard
        title="Explorer les articles de créateur"
        start={0}
        end={5}
      />
      <ProductCard title="Articles populaires" start={10} end={15} />
      <BrandSearch />
      <SuggestionSearch />
      <NewsFeed title="Fil d'actu" start={2} end={12} />
    </>
  );
};
export default Home;
