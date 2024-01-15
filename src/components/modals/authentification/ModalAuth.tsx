/**
 * MODAL inscription / connexion
 * LOGIQUE D'AFFICHAGE ENTRE CONNEXION - INSCRIPTION - MOT DE PASSE OUBLIE
 */

import { createPortal } from 'react-dom';
import { useState } from 'react';
import { X } from 'lucide-react';
import ModalAuthInitView from './ModalAuthInitView';
import ModalAuthConnexionView from './ModalAuthConnexionView';
import ModalAuthInscription from './ModalAuthInscription';
import ModalPasswordForget from './ModalPasswordForget';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import ButtonDisconnect from './ButtonDisconnect';
import { Action } from '@/types/types';

type Props = {
  setModalConnexion: React.Dispatch<React.SetStateAction<boolean>>
};

const ModalAuth = ({ setModalConnexion }: Props) => {
  const [contenuModal, setContenuModal] = useState<Action>('init');

  const { authUser } = useFirebaseAuth();

  const handleClick = () => {
    setContenuModal('init');
    setModalConnexion(false)
  }

  return createPortal(
    <>
      {/* Fond gris */}
      <div className="fixed h-screen top-0 left-0 bottom-0 right-0 bg-slate-600 opacity-40 "></div>

      {/* Modal */}
      <div
        className="absolute w-full top-12 sm:w-[375px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2  bg-vintedBackground flex flex-col items-center justify-start rounded"
        aria-modal="true"
      >
        {/* Partie Sup BTN X */}
        <div className="h-[52px] w-full p-1 mb-4 flex justify-end items-center border-b sm:border-none">
          <button
            type="button"
            className="ml-auto h-[46px] w-[44px] px-[10px] "
            aria-label="Fermer la fenêtre"
            onClick={handleClick}
          >
            <X />
          </button>
        </div>
        {/* Partie Inf */}
        {contenuModal === 'init' && (
          <ModalAuthInitView setContenuModal={setContenuModal} />
        )}
        {contenuModal === 'connexion' && (
          <ModalAuthConnexionView setContenuModal={setContenuModal} />
        )}
        {contenuModal === 'inscription' && (
          <ModalAuthInscription setContenuModal={setContenuModal} />
        )}
        {contenuModal === 'password-forget' && (
          <ModalPasswordForget setContenuModal={setContenuModal} />
        )}
        {authUser && <ButtonDisconnect />}
      </div>
    </>,
    document.body,
  );
};

export default ModalAuth;
