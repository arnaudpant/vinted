import CallToAction from './CallToActions';

const Banner = () => {
  return (
      <section
        id="banner"
        className="flex h-[390px] w-full items-center bg-hero-pattern bg-cover bg-center md:h-[500px]"
      >
        <div className="container mx-auto hidden w-full px-5 sm:block">
          <div className="w-96 bg-white p-8">
            <CallToAction />
          </div>
        </div>
        <div className="w-full p-4 sm:hidden">
          <div className="w-full bg-white p-4">
            <CallToAction />
          </div>
        </div>
      </section>
  );
};

export default Banner;
