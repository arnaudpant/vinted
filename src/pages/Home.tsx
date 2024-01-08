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
      <p className="w-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ullam
        ipsa deleniti aliquid non labore eos dolorem rerum commodi! Temporibus
        laboriosam iusto explicabo at distinctio molestias porro. Tempora,
        mollitia cumque!
      </p>
    </div>
  );
};

export default Home;
