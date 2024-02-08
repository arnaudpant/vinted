import { X } from 'lucide-react';
import ModalAuthInitView from './ModalAuthInitView';
import ModalAuthConnexionView from './ModalAuthConnexionView';
import ModalAuthInscription from './ModalAuthInscription';
import ModalPasswordForget from './ModalPasswordForget';
import { useState } from 'react';
import { Action } from '@/types/types';

type Props = {
  handleClick: () => void;
  setModalConnexion: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalAuthView = ({ handleClick, setModalConnexion }: Props) => {
  const [contenuModal, setContenuModal] = useState<Action>('init');
  return (
    <>
      {/* Fond gris */}
      <div className="fixed inset-0 h-screen bg-slate-600 opacity-40"></div>

      {/* Modal */}
      <div
        className="absolute top-12 z-50 flex w-full flex-col items-center justify-start  rounded bg-vintedBackground sm:left-1/2 sm:top-1/2 sm:w-[375px] sm:-translate-x-1/2 sm:-translate-y-1/2"
        aria-modal="true"
      >
        {/* Partie Sup BTN X */}
        <div className="mb-4 flex h-[52px] w-full items-center justify-end border-b p-1 sm:border-none">
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
          <ModalAuthConnexionView
            setContenuModal={setContenuModal}
            setModalConnexion={setModalConnexion}
          />
        )}
        {contenuModal === 'inscription' && (
          <ModalAuthInscription
            setContenuModal={setContenuModal}
            setModalConnexion={setModalConnexion}
          />
        )}
        {contenuModal === 'password-forget' && (
          <ModalPasswordForget setContenuModal={setContenuModal} />
        )}
      </div>
    </>
  );
};

export default ModalAuthView;
