import { UserDocument } from '@/types/types';
import { useForm } from 'react-hook-form';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import languages from '@/data/languages';
import FormDescription from './FormDescription';
import FormSelect from './FormSelect';
import FormDisplayCityInProfile from './FormDisplayCityInProfile';
import FormProfileInput from './FormProfileInput';
import FormModifyProfilePicture from './FormModifyProfilePicture';

const FormModifyProfile = () => {
  const { authUser } = useFirebaseAuth();
  const userDocument = authUser?.userDocument;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserDocument>();

  const onSubmit = (data: UserDocument) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
    //TODO: to implement to update profile
  };

  return (
    <div className="container mx-auto flex max-w-[960px] flex-col items-center px-2">
      <div className="w-full py-4">
        <h1 className="text-left text-2xl">Détails du profil</h1>
      </div>
      {/* FORMULAIRE */}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 bg-vintedBackground">
          <FormModifyProfilePicture
            photoURL={userDocument?.photoURL}
            login={userDocument?.login}
          />
          <hr />
          <FormDescription
            register={register}
            description={userDocument?.description}
          />
        </div>

        <div className="mt-6 bg-vintedBackground">
          <FormProfileInput
            register={register}
            errors={errors}
            errorMsg="Entrez un pays"
            id="country"
            label="Pays"
            value={userDocument?.country}
          />
          <hr />
          <FormProfileInput
            register={register}
            errors={errors}
            errorMsg="Entrez une ville"
            id="city"
            label="Ville"
            value={userDocument?.city}
          />
          <hr />
          <FormDisplayCityInProfile
            register={register}
            displayCityInProfile={userDocument?.displayCityInProfile}
          />
        </div>

        <div className="mt-6 bg-vintedBackground">
          <FormSelect
            register={register}
            value={userDocument?.language}
            choices={languages}
            id="language"
            label="Langue"
            hasPlaceHolder={false}
          />
        </div>
        <div className="mb-8 mt-11 flex justify-end">
          <button
            type="submit"
            className="h-[42px] rounded bg-vintedGreen px-[14px] text-center text-vintedBackground"
          >
            Mettre à jour
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormModifyProfile;
