/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/**
 * Modal avec formulaire de connexion quand user deja inscrit
 */

import { firebaseSignInUser } from '@/api/authentification';
import { Action } from '@/types/types';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
  setContenuModal: React.Dispatch<React.SetStateAction<Action>>;
};

type LoginFormTypeConnexion = {
  email: 'string';
  password: 'string';
};

const ModalAuthConnexionView = ({ setContenuModal }: Props) => {
  const { handleSubmit, register, reset } =
    useForm<LoginFormTypeConnexion>();
    const [isLoading, setIsLoading] = useState<boolean>(false)

  /**
   * 2.
   */
  const handleSignInUser = async ({
    email,
    password,
  }: LoginFormTypeConnexion) => {
    const { error } = await firebaseSignInUser(email, password);
    if (error) {
      console.log('Error handleSignInUser');
      return;
    }
    reset();
    setContenuModal('init');
  };

  /**
   * 1. Envoi des data
   */
  const onSubmit: SubmitHandler<LoginFormTypeConnexion> = (data) => {
    setIsLoading(true)
    handleSignInUser(data);
    setIsLoading(false)
  };

  return (
    <div className="flex w-full flex-col items-center px-4 pb-6">
      <h1 className="text-center text-2xl">Se connecter</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          id="email"
          required
          placeholder="E-mail ou nom d'utilisateur"
          {...register('email', {
            required: { value: true, message: 'Ce champ est requis' },
          })}
          className="my-8 w-full border-b pb-1 focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
        />

        <input
          type="password"
          id="password"
          required
          placeholder="Mot de passe"
          {...register('password', {
            required: { value: true, message: 'Ce champ est requis' },
          })}
          className="mb-8 w-full border-b pb-1 focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
        />
        {isLoading ? (
          <button
            className="mb-6 h-11 w-full rounded bg-vintedGreen text-vintedBackground"
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

      <p
        className="cursor-pointer pb-2 text-vintedGreen underline"
        onClick={() => setContenuModal('password-forget')}
        role="button"
      >
        Mot de passe oublié ?
      </p>
      <p className="cursor-pointer pb-2 text-vintedGreen underline">
        Un problème ?
      </p>
    </div>
  );
};

export default ModalAuthConnexionView;
