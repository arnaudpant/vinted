import Footer from '@/components/Footer';
import BoxInfosVendeur from '@/components/box-infos-vendeur/BoxInfosVendeur';
import SuggestionSearch from '@/components/suggestion/SuggestionSearch';

const Home = () => {
  return (
    <div className="bg-vintedBackground">
      <SuggestionSearch />
      <BoxInfosVendeur />
      <Footer />
    </div>
  );
};

export default Home;
