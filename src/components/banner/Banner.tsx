import { CallToAction } from '../header/navigationBar/CallToActions';

const Banner = () => {

  return (
    <>
      <section
        id="banner"
        className="flex items-center pt-28 bg-hero-pattern w-full h-[390px] bg-cover bg-center md:h-[800px]"
      >
        <div className="hidden md:block container mx-auto px-5 w-full">
          <div className="w-96 p-8 bg-white">
            <CallToAction />
          </div>
        </div>
      </section>
      <div className="md:hidden p-4 w-full">
        <div className="w-full p-4 bg-white">
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default Banner;
