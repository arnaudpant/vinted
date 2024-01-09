import Footer from '@/components/Footer';
import BoxInfosVendeur from '@/components/box-infos-vendeur/BoxInfosVendeur';

const Home = () => {
  return (
    <div className="bg-vintedBackground">
      <BoxInfosVendeur />
      <Footer />
    </div>
  );
};

export default Home;
