import Footer from '@/components/Footer';
import BoxInfosVendeur from '@/components/box-infos-vendeur/BoxInfosVendeur';
import Banner from '@/components/banner/Banner';

const Home = () => {
  return (
    <div className="bg-vintedBackground">
      <BoxInfosVendeur />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
