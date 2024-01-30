/**
 * Modal avec formulaire de connexion quand user deja inscrit
 */

import { firebaseSignInUser } from '@/api/authentification';
import { Action } from '@/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
  setContenuModal: React.Dispatch<React.SetStateAction<Action>>;
};

type LoginFormTypeConnexion = {
  email: 'string';
  password: 'string';
};

const ModalAuthConnexionView = ({ setContenuModal }: Props) => {
  const { handleSubmit, register, reset } = useForm<LoginFormTypeConnexion>();

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
  const onSubmit: SubmitHandler<LoginFormTypeConnexion> = async (data) => {
    handleSignInUser(data);
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
        <button className="mb-6 h-11 w-full rounded bg-vintedGreen text-vintedBackground">
          Continuer
        </button>
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
