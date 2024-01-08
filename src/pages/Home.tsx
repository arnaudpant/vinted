import Banner from '@/components/ui/banner/Banner';
import { Header } from '@/components/ui/header/Header';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <Banner />
      {/* <p className="w-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sit iste
        illum deleniti maiores corporis dicta quisquam officiis alias totam
        omnis dolores, quasi rerum pariatur, labore consectetur ipsum nesciunt
        ratione?
      </p> */}
    </div>
  );
};

export default Home;
