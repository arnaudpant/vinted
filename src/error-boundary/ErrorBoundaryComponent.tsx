import { FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';

const ErrorBoundaryComponent: React.ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className=" relative flex h-[100vh] flex-col items-center justify-center bg-cover bg-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold ">Oups une erreur est survenue !</h1>
        <p className="text-sm text-white">
          Désolé, nous n&apos;avons pas trouvé cette page.
        </p>
        <div>
          <Link to="/" onClick={resetErrorBoundary}>
            Retourner à l&apos;accueil
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8">
        <p className="">Code d&apos;erreur : {error.message}</p>
      </div>
    </div>
  );
};

export default ErrorBoundaryComponent;
