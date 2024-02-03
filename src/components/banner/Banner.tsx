import CallToAction from './CallToActions';

const Banner = () => {
  return (
    <>
      <section
        id="banner"
        className="flex h-[390px] w-full items-center bg-hero-pattern bg-cover bg-center md:h-[800px]"
      >
        <div className="container mx-auto hidden w-full px-5 md:block">
          <div className="w-96 bg-white p-8">
            <CallToAction />
          </div>
        </div>
      </section>
      <div className="w-full p-4 md:hidden">
        <div className="w-full bg-white p-4">
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default Banner;
