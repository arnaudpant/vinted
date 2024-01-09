/**
 * Modal avec formulaire d'inscription
 */
import { useForm } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { firebaseCreateUser } from '@/api/authentification';
import { FirestoreCreateDocument } from '@/api/firestore';
import { Action } from '@/types/types';

type LoginFormTypeInscription = {
  login: 'string';
  email: 'string';
  password: 'string';
};

type Props = {
  setContenuModal: React.Dispatch<React.SetStateAction<Action>>;
};

const ModalAuthInscription = ({ setContenuModal }: Props) => {
  const { handleSubmit, register, setError, reset } =
    useForm<LoginFormTypeInscription>();

  const testPassword = 7;

  /**
   * 3. Creation d'une collection dans la db Firestore
   * await le retour du Firebase avec les infos users
   * Copie des infos users utilent dans un objet
   * Envoi de l'objet dans la db Firestore
   */
  const handleCreateUserAuthentification = async (
    collectionName: string,
    documentId: string,
    document: object,
  ) => {
    const { error } = await FirestoreCreateDocument(
      collectionName,
      documentId,
      document,
    );
    if (error) {
      console.log('Error handleCreateUserAuthentification');
      return;
    }
    reset();
    setContenuModal('init');
  };

  /**
   * 2. Envoi des data a Firebase
   * await le retour du Firebase avec les infos users
   * Copie des infos users utilent dans un objet
   * Envoi de l'objet dans la db Firestore
   */

  const handleCreateUserAuth = async ({
    email,
    password,
    login,
  }: LoginFormTypeInscription) => {
    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      console.log('Error ModalAuthInscription');
      return;
    }
    const userDocumentData = {
      login: login,
      uid: data.uid,
      inscription: new Date(),
      photoURL: '',
    };
    handleCreateUserAuthentification('users', data.uid, userDocumentData);
  };

  /**
   * 1. Submit du Form
   * Test si password > ${testPassword} caracteres
   * Appel function Firebase
   */
  const onSubmit = async (data: LoginFormTypeInscription) => {
    const { password } = data;

    if (password.length < testPassword) {
      setError('password', {
        type: 'manuel',
        message: 'Le mot de passe doit comporter 7 caractères minimum',
      });
      return;
    }
    handleCreateUserAuth(data);
  };

  return (
    <div className="flex flex-col items-center w-full px-4 pb-6">
      <h1 className="text-2xl text-center">Inscris-toi avec ton email</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="login"
          required
          placeholder="Nom d'utilisateur"
          {...register('login', {
            required: {
              value: true,
              message: "Nom d'utilisateur ne peut pas être vide",
            },
          })}
          className="w-full border-b pb-1 mt-8 focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
        />
        <p className="text-xs text-vintedTextGrisFonce mb-8">
          Crée ton nom d'utilisateur en n'utilisant que des lettres et des
          chiffres. Choisis-en un qui te plaît, tu ne pourras plus le changer.
        </p>

        <input
          type="email"
          id="email"
          required
          placeholder="Email"
          {...register('email', {
            required: {
              value: true,
              message: 'E-mail ne peut pas être vide',
            },
          })}
          className="w-full border-b pb-1 mb-8 focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
        />

        <input
          type="password"
          id="password"
          required
          placeholder="Mot de passe"
          {...register('password', {
            required: {
              value: true,
              message: 'Mot de passe ne peut pas être vide',
            },
          })}
          className="w-full border-b pb-1 focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
        />
        <p className="text-xs text-vintedTextGrisFonce mb-8">
          Il doit contenir ${testPassword} lettres minimum, dont au moins un
          chiffre.
        </p>

        <div className="flex justify-center items-start gap-1 mb-4">
          <Checkbox id="offres" />
          <label
            htmlFor="offres"
            className=" text-vintedTextBlackVar font-light cursor-pointer"
          >
            Je souhaite recevoir par e-mail des offres personnalisées et les
            dernières mises à jour de Vinted.
          </label>
        </div>

        <div className="flex justify-center items-start gap-1 mb-4">
          <Checkbox id="MyCheckbox" />
          <label
            htmlFor="MyCheckbox"
            className=" text-vintedTextBlackVar font-light cursor-pointer"
          >
            En t'inscrivant, tu confirmes que tu acceptes les{' '}
            <span className="text-vintedGreen underline cursor-pointer">
              Termes & Conditions de Vinted
            </span>
            , avoir lu la{' '}
            <span className="text-vintedGreen underline cursor-pointer">
              Politique de confidentialité
            </span>{' '}
            et avoir au moins 18 ans.
          </label>
        </div>

        <button
          type="submit"
          className="w-full h-11 bg-vintedGreen text-vintedBackground rounded mb-6"
        >
          Continuer
        </button>
      </form>
    </div>
  );
};

export default ModalAuthInscription;
