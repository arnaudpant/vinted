import logoHelp from '@/assets/icon-help.png';

import { useState } from 'react';
import ModalAuth from '../modals/authentification/ModalAuth';
import ButtonTopHeader from './navigationBar/ButtonTopHeader';

export const ActionsTopBar: () => JSX.Element = () => {
  const [modalConnexion, setModalConnexion] = useState<boolean>(false);

  const handleConnexion = () => {
    setModalConnexion((v) => !v);
  };

  return (
    <>
      <div className="space-x-3 ">
        <ButtonTopHeader
          handleFunction={handleConnexion}
          mainColor=""
          textColor="text-vintedGreen"
        >
          S&apos;inscrire &#124; Se connecter
        </ButtonTopHeader>
        <ButtonTopHeader
          handleFunction={handleConnexion}
          mainColor="bg-vintedGreen"
          textColor="text-vintedBackground"
        >
          Vends tes articles
        </ButtonTopHeader>

        <img
          src={logoHelp}
          alt="Aide"
          className="inline-block h-6 w-6 object-contain hover:cursor-pointer"
        />
        <select
          name="language"
          id="langage"
          className=" relative w-12 origin-top-left  hover:cursor-pointer"
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
