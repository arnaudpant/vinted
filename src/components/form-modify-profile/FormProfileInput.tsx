import { UserDocument } from '@/types/types';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type FormProfileInputProps = {
  register: UseFormRegister<UserDocument>;
  errors: FieldErrors<UserDocument>;
  errorMsg: string;
  id: 'country' | 'city';
  label: 'Pays' | 'Ville';
  value?: string;
};

const FormProfileInput = ({
  register,
  errors,
  errorMsg,
  id,
  label,
  value,
}: FormProfileInputProps) => {
  return (
    <div className="flex flex-wrap border-b p-6">
      <div className="w-full md:w-1/2">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="w-full md:w-1/2">
        <input
          type="text"
          {...register(id, { required: true })}
          className="w-full border-b pb-1 focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
          placeholder="ex: Chemise sésame verte"
          id={id}
          value={value}
        />
        {errors[id] && (
          <span className="text-sm text-vintedGreen">{errorMsg}</span>
        )}
      </div>
    </div>
  );
};

export default FormProfileInput;
