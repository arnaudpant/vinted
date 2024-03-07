import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="m-10 flex min-h-[calc(100vh-564px)] flex-col items-center gap-4 text-center">
      <h2 className="py-4 text-2xl text-vintedGreen">
        Oups, une erreur est survenue
      </h2>
      <p>Cette page pas n&apos;est pas disponible</p>
      <Link
        to="/"
      >
        <button
          className="h-[42px] w-24 rounded bg-vintedGreen px-[14px] text-center text-vintedBackground"
          data-testid="ajouter"
        >
          Accueil
        </button>
      </Link>
    </div>
  );
};

export default Error404;
