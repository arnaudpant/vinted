
type Props = {
  setContenuModal: React.Dispatch<React.SetStateAction<"init" | "connexion" | "inscription" | 'password-forget'>>
};

const ModalAuthInitView = ({ setContenuModal}: Props ) => {
  return (
    <>
      <div className="flex flex-col items-center w-full px-4 pb-6">
        <h1 className="text-2xl text-center">Bienvenue !</h1>

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
          <span className="text-vintedTextGrisClair">Continuer avec Apple</span>
        </button>
        <p className="text-vintedTextBlack pb-2">
          Ou connecte toi avec{' '}
          <span
            className="text-vintedGreen cursor-pointer"
            onClick={() => setContenuModal('connexion')}
          >
            e-mail
          </span>
        </p>
        <p className="text-vintedTextBlack">
          Tu n'as pas de compte Vinted ?{' '}
          <span
            className="text-vintedGreen cursor-pointer"
            onClick={() => setContenuModal('inscription')}
          >
            S'inscrire
          </span>
        </p>
      </div>
    </>
  );
};

export default ModalAuthInitView;
