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
  const { handleSubmit, register, reset } =
    useForm<LoginFormTypeConnexion>();

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
    <div className="flex flex-col items-center w-full px-4 pb-6">
      <h1 className="text-2xl text-center">Se connecter</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          id="email"
          required
          placeholder="E-mail ou nom d'utilisateur"
          {...register('email', {
            required: { value: true, message: 'Ce champ est requis' },
          })}
          className="w-full border-b pb-1 my-8 focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
        />

        <input
          type="password"
          id="password"
          required
          placeholder="Mot de passe"
          {...register('password', {
            required: { value: true, message: 'Ce champ est requis' },
          })}
          className="w-full border-b pb-1 mb-8 focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
        />
        <button className="w-full h-11 bg-vintedGreen text-vintedBackground rounded mb-6">
          Continuer
        </button>
      </form>

      <p
        className="text-vintedGreen pb-2 cursor-pointer underline"
        onClick={() => setContenuModal('password-forget')}
        role="button"
      >
        Mot de passe oublié ?
      </p>
      <p className="text-vintedGreen pb-2 cursor-pointer underline">
        Un problème ?
      </p>
    </div>
  );
};

export default ModalAuthConnexionView;
