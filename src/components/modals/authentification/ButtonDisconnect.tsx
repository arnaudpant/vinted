import { firebaseSignOutUser } from '@/api/authentification';
import { Navigate } from 'react-router-dom';

const ButtonDisconnect = () => {
  const handleDisconnect = async () => {
    const { error } = await firebaseSignOutUser();
    if (error) {
      console.error(error.message);
      return;
    }
    return <Navigate to="/" replace={true} />;
  };

  return (
    <div>
      <button
        className="mb-6 h-11 w-full rounded bg-vintedGreen px-3 text-vintedBackground"
        onClick={handleDisconnect}
      >
        Déconnexion
      </button>
    </div>
  );
};

export default ButtonDisconnect;
