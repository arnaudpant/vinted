import MobileHomePageBurgerActive from '@/components/MobileHomePageBurgerActive';
import Banner from '@/components/ui/banner/Banner';
import { Header } from '@/components/ui/header/Header';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* <Header />
      <Banner /> */}

      <MobileHomePageBurgerActive />
    </div>
  );
};

export default Home;
