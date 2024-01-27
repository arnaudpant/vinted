import logoHelp from '@/assets/icon-help.png';

import { useState } from 'react';
import ModalAuth from '../modals/authentification/ModalAuth';
import ButtonTopHeader from './navigationBar/ButtonTopHeader';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { Link } from 'react-router-dom';

const ActionsTopBar: () => JSX.Element = () => {
  const [modalConnexion, setModalConnexion] = useState<boolean>(false);
  const { authUser } = useFirebaseAuth();

  const handleConnexion = () => {
    setModalConnexion((v) => !v);
  };

  return (
    <>
      <div className="space-x-3 ">
        {!authUser ? (
          <>
            <ButtonTopHeader
              handleFunction={handleConnexion}
              mainColor=""
              textColor="text-vintedGreen"
            >
              S&apos;inscrire &#124; Se connecter
            </ButtonTopHeader>
            <Link to="/new-article">
              <ButtonTopHeader
                handleFunction={() => {}}
                mainColor="bg-vintedGreen"
                textColor="text-vintedBackground"
              >
                Vends tes articles
              </ButtonTopHeader>
            </Link>
          </>
        ) : null}

        <img
          src={logoHelp}
          alt="Aide"
          className="inline-block h-6 w-6 cursor-pointer object-contain"
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
      {modalConnexion && <ModalAuth setModalConnexion={setModalConnexion} />}
    </>
  );
};

export default ActionsTopBar;
