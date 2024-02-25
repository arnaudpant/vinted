import logoHelp from '@/assets/icon-help.png';
import { useState } from 'react';
import ModalAuth from '../../../modals/authentification/ModalAuth';
import ButtonTopHeader from './ButtonTopHeader';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { Link } from 'react-router-dom';
import ButtonsUserConnected from './ButtonsUserConnected';
import BurgerMenuLogo from './BurgerMenuLogo';

const ActionsTopBar: () => JSX.Element = () => {
  const [modalConnexion, setModalConnexion] = useState<boolean>(false);
  const { authUser } = useFirebaseAuth();

  const handleConnexion = () => {
    setModalConnexion((v) => !v);
  };

  return (
    <>
      <div className="flex space-x-3 pl-4">
        {!authUser ? (
          <div className="hidden lg:block">
            <ButtonTopHeader
              handleFunction={handleConnexion}
              mainColor=""
              textColor="text-vintedGreen"
            >
              S&apos;inscrire &#124; Se connecter
            </ButtonTopHeader>
          </div>
        ) : (
          <div className="hidden lg:block">
            <ButtonsUserConnected />
          </div>
        )}

        <Link to="/new-article" className="hidden lg:block">
          <ButtonTopHeader
            handleFunction={() => {}}
            mainColor="bg-vintedGreen"
            textColor="text-vintedBackground"
          >
            Vends tes articles
          </ButtonTopHeader>
        </Link>
        <div className="hidden lg:block">
          <img
            src={logoHelp}
            alt="Aide"
            className="mr-1 inline-block h-6 w-6 cursor-pointer object-contain"
          />
          <select
            name="language"
            id="langage"
            className=" relative w-12 origin-top-left cursor-pointer"
            defaultValue={'FR'}
          >
            <option value="fr">FR</option>
            <option value="en">English (English)</option>
            <option value="es">Espagnol (Spanish)</option>
            <option value="ne">Nederlands (Dutch)</option>
          </select>
        </div>
      </div>
      <div className="pt-2 lg:hidden">
        <BurgerMenuLogo />
      </div>
      {modalConnexion && <ModalAuth setModalConnexion={setModalConnexion} />}
    </>
  );
};

export default ActionsTopBar;