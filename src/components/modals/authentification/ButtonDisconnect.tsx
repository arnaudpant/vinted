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
        className="w-full h-11 px-3 bg-vintedGreen text-vintedBackground rounded mb-6"
        onClick={handleDisconnect}
      >
        Déconnexion
      </button>
    </div>
  );
};

export default ButtonDisconnect;
