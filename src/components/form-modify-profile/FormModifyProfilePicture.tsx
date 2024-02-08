type FormModifyProfilePictureProps = {
  photoURL?: string;
  login?: string;
};

const FormModifyProfilePicture = ({
  photoURL,
  login,
}: FormModifyProfilePictureProps) => {
  return (
    <div className="flex p-6">
      <div className="w-full md:w-1/2">
        <span>Ta photo de profil</span>
      </div>
      <div className="flex w-full justify-end gap-6 md:w-1/2">
        {photoURL === '' ? (
          <img
            src="../../avatar.png"
            alt="avatar"
            className="h-16 w-16 rounded-full"
          />
        ) : (
          <img src={photoURL} alt={login} className="h-16 w-16 rounded-full" />
        )}
        <button
          className="flex h-[42px] cursor-not-allowed items-center rounded border border-vintedGreen px-[14px] text-vintedGreen"
          disabled
        >
          Choisir une photo
        </button>
      </div>
    </div>
  );
};

export default FormModifyProfilePicture;
