import { UserDocument } from '@/types/types';
import { UseFormRegister } from 'react-hook-form';

type FormSelectProps = {
  register: UseFormRegister<UserDocument>;
  value: string | undefined;
  choices: string[];
  id: 'country' | 'city' | 'language';
  label: 'Pays' | 'Ville' | 'Langue';
  hasPlaceHolder: boolean;
  placeHolder?: string;
};

const FormSelect = ({
  register,
  value,
  choices,
  id,
  label,
  hasPlaceHolder,
  placeHolder,
}: FormSelectProps) => {
  return (
    <div className="flex flex-wrap p-6">
      <div className="w-full md:w-1/2">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="w-full md:w-1/2">
        <select
          {...register(id, { required: true })}
          className="w-full border-b text-vintedTextGrisFonce focus-visible:border-b focus-visible:border-vintedGreen focus-visible:outline-none"
          id={id}
          value={value}
        >
          {hasPlaceHolder && (
            <option hidden defaultValue="">
              {placeHolder}
            </option>
          )}
          {choices.map((choice) => {
            return (
              <option key={choice} value={choice}>
                {choice}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FormSelect;
