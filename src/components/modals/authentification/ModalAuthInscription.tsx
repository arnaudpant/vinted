/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/**
 * Modal avec formulaire d'inscription
 */
import { useForm } from 'react-hook-form';

import Checkbox from '@/components/ui/checkbox';

import { firebaseCreateUser } from '@/api/authentification';
import FirestoreCreateDocument from '@/api/firestore';
import { Action } from '@/types/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type LoginFormTypeInscription = {
  login: 'string';
  email: 'string';
  password: 'string';
};

type Props = {
  setContenuModal: React.Dispatch<React.SetStateAction<Action>>;
  setModalConnexion: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalAuthInscription = ({
  setContenuModal,
  setModalConnexion,
}: Props) => {
  const { handleSubmit, register, setError, reset } =
    useForm<LoginFormTypeInscription>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

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
      setIsLoading(false);
      setContenuModal('init');
      return;
    }
    reset();
    setModalConnexion(false)
    navigate('/');
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
    setIsLoading(true);
    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      console.log('Error ModalAuthInscription');
      return;
    }
    const userDocumentData = {
      login: login,
      uid: data.uid,
      inscription: new Date(),
      photoURL: '',
      listArticlesForSale: [],
      description: '',
      country: '',
      city: '',
      displayCityInProfile: true,
      language: '',
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
    <div className="flex w-full flex-col items-center px-4 pb-6">
      <h1 className="text-center text-2xl">Inscris-toi avec ton email</h1>

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
          className="mt-8 w-full border-b pb-1 focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
        />
        <p className="mb-8 text-xs text-vintedTextGrisFonce">
          Crée ton nom d&apos;utilisateur en n&apos;utilisant que des lettres et
          des chiffres. Choisis-en un qui te plaît, tu ne pourras plus le
          changer.
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
          className="mb-8 w-full border-b pb-1 focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
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
          className="w-full border-b pb-1 focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
        />
        <p className="mb-8 text-xs text-vintedTextGrisFonce">
          Il doit contenir ${testPassword} lettres minimum, dont au moins un
          chiffre.
        </p>

        <div className="mb-4 flex items-start justify-center gap-1">
          <Checkbox id="offres" />
          <label
            htmlFor="offres"
            className=" cursor-pointer font-light text-vintedTextBlackVar"
          >
            Je souhaite recevoir par e-mail des offres personnalisées et les
            dernières mises à jour de Vinted.
          </label>
        </div>

        <div className="mb-4 flex items-start justify-center gap-1">
          <Checkbox id="MyCheckbox" />
          <label
            htmlFor="MyCheckbox"
            className=" cursor-pointer font-light text-vintedTextBlackVar"
          >
            En t&apos;inscrivant, tu confirmes que tu acceptes les{' '}
            <span className="cursor-pointer text-vintedGreen underline">
              Termes & Conditions de Vinted
            </span>
            , avoir lu la{' '}
            <span className="cursor-pointer text-vintedGreen underline">
              Politique de confidentialité
            </span>{' '}
            et avoir au moins 18 ans.
          </label>
        </div>

        {isLoading ? (
          <button
            className="mb-6 flex  h-11 w-full items-center justify-center rounded bg-vintedGreen text-vintedBackground"
            disabled
          >
            <svg
              className="animate-spin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                opacity=".25"
                fill="text-fond"
              />
              <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"></path>
            </svg>
          </button>
        ) : (
          <button className="mb-6 h-11 w-full rounded bg-vintedGreen text-vintedBackground">
            Continuer
          </button>
        )}
      </form>
    </div>
  );
};

export default ModalAuthInscription;
