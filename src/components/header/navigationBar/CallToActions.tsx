import { Link } from 'react-router-dom';

export const CallToAction = () => {
  return (
    <>
      <h1 className="hidden md:block text-4xl text-vintedTextBlack mb-8">
        Prêt à faire du tri
        <br /> dans vos
        <br /> placards ?
      </h1>
      <h2 className='md:hidden text-2xl mb-4 md:mb-2 text-center'>Prêt à faire du tri dans vos placards ?</h2>

      <Link to="/">
        <p className="bg-vintedGreen py-2 text-white rounded-sm text-center">
          Vends maintenant
        </p>
      </Link>
      <p className="pt-3 text-[14px] text-vintedGreen underline text-center md:text-left cursor-pointer">
        Découvrir comment ça marche
      </p>
    </>
  );
};
