/**
 * Modal avec formulaire pour reinitialiser son compte
 */

import { sendEmailToResetPassword } from '@/api/authentification';
import { Action } from '@/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';

type LoginFormTypeForget = {
  email: 'string';
};

type Props = {
  setContenuModal: React.Dispatch<React.SetStateAction<Action>>;
};

const ModalPasswordForget = ({ setContenuModal }: Props) => {
  const { handleSubmit, register, reset } = useForm<LoginFormTypeForget>();

  const onSubmit: SubmitHandler<LoginFormTypeForget> = async (data) => {
    handleResetPassword(data);
  };

  const handleResetPassword = async ({ email }: LoginFormTypeForget) => {
    const { error } = await sendEmailToResetPassword(email);

    if (error) {
      console.error(error.message);
      return;
    }
    reset();
    setContenuModal('init');
  };

  return (
      <div className="flex flex-col items-center w-full px-4 pb-6">
        <h1 className="text-2xl text-center">Mot de passe oublié ?</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            type="email"
            id="email"
            required
            placeholder="Entre ton adresse email"
            {...register('email', {
              required: { value: true, message: 'Ce champ est requis' },
            })}
            className="w-full border-b pb-1 my-8 focus-visible:outline-none focus-visible:border-b focus-visible:border-vintedGreen"
          />

          <button className="w-full h-11 bg-vintedGreen text-vintedBackground rounded mb-6">
            Continuer
          </button>
        </form>
      </div>
  );
};

export default ModalPasswordForget;
