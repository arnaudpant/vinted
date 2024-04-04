import CallToAction from './CallToActions';

const Banner = () => {
  return (
    <section
      id="banner"
      className="flex h-[390px] w-full items-center bg-hero-pattern bg-cover bg-center md:h-[500px] xl:bg-top"
    >
      <div className="w-full p-4 sm:container sm:mx-auto sm:w-full sm:px-5">
        <div className="w-full bg-white p-4 sm:w-96 sm:p-8">
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default Banner;
