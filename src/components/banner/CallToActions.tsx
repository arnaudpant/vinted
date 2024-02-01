import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <>
      <h1 className="mb-8 hidden text-4xl text-vintedTextBlack md:block">
        Prêt à faire du tri
        <br /> dans vos
        <br /> placards ?
      </h1>
      <h2 className="mb-4 text-center text-2xl md:mb-2 md:hidden">
        Prêt à faire du tri dans vos placards ?
      </h2>

      <Link to="/new-article">
        <p className="rounded-sm bg-vintedGreen py-2 text-center text-white">
          Vends maintenant
        </p>
      </Link>
      <p className="cursor-pointer pt-3 text-center text-[14px] text-vintedGreen underline md:text-left">
        Découvrir comment ça marche
      </p>
    </>
  );
};

export default CallToAction;
