import { createPortal } from 'react-dom';
import { useState } from 'react';
import { X } from 'lucide-react';
import ModalAuthInitView from './ModalAuthInitView';
import ModalAuthConnexionView from './ModalAuthConnexionView';

const ModalAuth = () => {
  const [contenuModal, setContenuModal] = useState<
    'init' | 'connexion' | 'inscription' | 'password-forget'
  >('init');

  return createPortal(
    <>
      {/* Fond gris */}
      <div className="absolute h-screen top-0 left-0 bottom-0 right-0 bg-vintedTextGrisClair opacity-30"></div>

      {/* Modal */}
      <div
        className="w-[375px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-vintedBackground flex flex-col items-center justify-start rounded"
        aria-modal="true"
        role="dialog"
      >
        {/* Partie Sup BTN X */}
        <div className="h-[52px] w-full p-1 flex justify-end items-center">
          <button
            type="button"
            className="ml-auto h-[46px] w-[44px] px-[10px]"
            aria-label="Fermer la fenêtre"
          >
            <X />
          </button>
        </div>
        {/* Partie Inf */}
        {
          contenuModal === 'init' ? (<ModalAuthInitView setContenuModal={setContenuModal} />) : 
          contenuModal === 'connexion' ? (<ModalAuthConnexionView setContenuModal={setContenuModal} />) : ''
        }

      </div>
    </>,
    document.body,
  );
};

export default ModalAuth;
