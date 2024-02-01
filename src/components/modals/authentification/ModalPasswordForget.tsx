/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
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

      <div className="flex w-full flex-col items-center px-4 pb-6">
        <h1 className="text-center text-2xl">Mot de passe oublié ?</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            type="email"
            id="email"
            required
            placeholder="Entre ton adresse email"
            {...register('email', {
              required: { value: true, message: 'Ce champ est requis' },
            })}
            className="my-8 w-full border-b pb-1 focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
          />

          <button className="mb-6 h-11 w-full rounded bg-vintedGreen text-vintedBackground">
            Continuer
          </button>
        </form>
      </div>
  );
};

export default ModalPasswordForget;
