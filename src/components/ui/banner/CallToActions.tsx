export const CallToAction = () => {
  return (
    <div className="flex flex-col w-11/12 bg-white items-center justify-evenly my-2 mx-2 h-32  sm:bg-white  sm:items-start sm:h-64 sm:w-80 sm:absolute sm:inset-0 sm:ml-24 sm:mt-16">
      <h1 className="text-2xl text-vintedTextBlack sm:flex sm:justify-start sm:w-2/3 sm:pl-3">
        Prêt à faire <br className="hidden sm:block" /> du tri dans vos{' '}
        <br className="hidden sm:block" /> placards ?
      </h1>
      <button className="bg-vintedGreen py-2 text-white rounded-sm text-center w-full sm:w-11/12 self-center ">
        Vends maintenant
      </button>

      <a
        href="https://google.fr"
        className="block text-vintedGreen text-base sm:underline sm:text-sm sm:ml-4 sm:relative top-[-12px]"
      >
        Découvrir comment ça marche
      </a>
    </div>
  );
};
