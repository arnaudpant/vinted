import { createPortal } from 'react-dom';
import { useState } from 'react';
import { X } from 'lucide-react';

const ModalAuth = () => {
  const [contenuModal, setContenuModal] = useState<
    'init' | 'connexion' | 'inscription'
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
        <div className="flex flex-col items-center w-full px-4 pb-6">

          <h1 className="text-2xl text-center">
            {
              contenuModal === 'init' ? 'Bienvenue !' : 
              contenuModal === 'connexion' ? 'Se connecter' : 'Rejoins le mouvement de la seconde main et vends sans frais !'
            }
            </h1>
          <button
            type="button"
            className="h-11 w-full border border-solid border-vintedTextGrisClair rounded mt-6"
            disabled
          >
            <span></span>
            <span className="text-vintedTextGrisClair">
              Continuer avec Facebook
            </span>
          </button>
          <button
            type="button"
            className="h-11 w-full border border-solid border-vintedTextGrisClair rounded mt-2"
            disabled
          >
            <span></span>
            <span className="text-vintedTextGrisClair">
              Continuer avec Google
            </span>
          </button>
          <button
            type="button"
            className="h-11 w-full border border-solid border-vintedTextGrisClair rounded mt-2 mb-6"
            disabled
          >
            <span></span>
            <span className="text-vintedTextGrisClair">
              Continuer avec Apple
            </span>
          </button>
          <p className="text-vintedTextBlack pb-2">
            Ou connecte toi avec{' '}
            <span className="text-vintedGreen cursor-pointer" onClick={()=>setContenuModal('connexion')}>e-mail</span>
          </p>
          <p className="text-vintedTextBlack">
            Tu n'as pas de compte Vinted ?{' '}
            <span className="text-vintedGreen cursor-pointer" onClick={()=>setContenuModal('inscription')}>S'inscrire</span>
          </p>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default ModalAuth;
