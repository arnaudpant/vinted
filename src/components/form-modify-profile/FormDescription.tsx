import { UserDocument } from '@/types/types';
import { UseFormRegister } from 'react-hook-form';

type FormDescriptionProps = {
  register: UseFormRegister<UserDocument>;
  description: string | null | undefined;
};

const FormDescription = ({ register, description }: FormDescriptionProps) => {
  return (
    <div className="flex flex-wrap p-6">
      <div className="w-full md:w-1/2">
        <label htmlFor="description">À propos de toi</label>
      </div>
      <div className="w-full md:w-1/2">
        <textarea
          {...register('description', { required: false })}
          className="h-28 w-full border-b focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
          placeholder="ex: ingénieur, joueur de foot"
          id="description"
          value={description ?? ''}
        />
      </div>
    </div>
  );
};

export default FormDescription;
