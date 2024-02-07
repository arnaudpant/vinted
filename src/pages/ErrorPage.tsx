const ErrorPage = () => {
  return (
    <div className="flex h-screen  flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold text-red-500">
        Une erreur est survenue
      </h1>
      <a href="/" className="mt-8 underline  ">
        Retour à l&apos;accueil
      </a>
    </div>
  );
};

export default ErrorPage;
