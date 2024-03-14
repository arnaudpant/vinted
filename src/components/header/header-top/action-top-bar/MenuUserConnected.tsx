/* eslint-disable @typescript-eslint/no-misused-promises */
import { firebaseSignOutUser } from '@/api/authentification';
import { useAuth } from '@/context/AuthUserContext';
import { Link, Navigate } from 'react-router-dom';

type Props = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuUserConnected = ({ setIsMenuOpen }: Props) => {
  const { authUser } = useAuth();

  const handleDisconnect = async () => {
    const { error } = await firebaseSignOutUser();
    if (error) {
      console.error(error.message);
      return;
    }
    return <Navigate to="/" replace={true} />;
  };

  return (
    <div
      className="absolute right-0 top-11 z-50 flex w-48 flex-col gap-4 rounded bg-vintedBackground px-2 py-4 text-sm text-vintedTextBlack shadow-lg"
      onClick={() => setIsMenuOpen(false)}
    >
      {authUser ? (
        <>
          <Link to={`/member`} state={[authUser.uid, {}]}>Mon profil</Link>
          <Link to="/">
            Mon porte-monnaie{' '}
            <span className="text-xs text-vintedTextGrisClair">{Number(authUser.userDocument?.argent).toFixed(2)}€</span>
          </Link>
          <p onClick={handleDisconnect} className="cursor-pointer text-red-600">
            Se déconnecter
          </p>
        </>
      ) : (
        <Link to="/authentification">
          <p className="cursor-pointer text-red-600">
            Se connecter ou s&apos;inscrire
          </p>
        </Link>
      )}
    </div>
  );
};

export default MenuUserConnected;
