import { UserDocument } from '@/types/types';
import { UseFormRegister } from 'react-hook-form';

import Switch from '../ui/switch';

type FormDisplayCityInProfileProps = {
  register: UseFormRegister<UserDocument>;
  displayCityInProfile: boolean | undefined;
};

const FormDisplayCityInProfile = ({
  register,
  displayCityInProfile,
}: FormDisplayCityInProfileProps) => {
  return (
    <div className="flex flex-wrap justify-between p-6">
      <div className="w-full md:w-1/2">
        <label htmlFor="displayCityInProfile">
          Afficher la ville dans le profil
        </label>
      </div>
      <div className="w-full md:w-1/2">
        <Switch
          {...register('displayCityInProfile', { required: true })}
          id="displayCityInProfile"
          checked={displayCityInProfile}
          className="bg-vintedGreen"
        />
      </div>
    </div>
  );
};

export default FormDisplayCityInProfile;
