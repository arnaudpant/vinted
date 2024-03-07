import { FallbackProps } from 'react-error-boundary';

const ErrorBoundaryComponent: React.ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold text-white">
          Oups une erreur est survenue !
        </h1>
        <p className="text-sm text-white">
          Désolé, nous n&apos;avons pas trouvé cette page.
        </p>
        <div>
          <button
            className="px-4 py-2"
            onClick={resetErrorBoundary}
          >
            Accueil VendLe
          </button>
        </div>
      </div>
      <div className="absolute bottom-8">
        <p className="">Code d&apos;erreur : ${error}</p>
      </div>
    </div>
  );
};

export default ErrorBoundaryComponent;
