type Props = {
  photoUrl: string | undefined;
}

const PictureUser = ({ photoUrl = "" }: Props) => {

  return (
    photoUrl === '' ? (
      <img
        src="/avatar.png"
        alt="profil"
        className="rounded-full"
      />
    ) : (
      <img
        src={photoUrl}
        alt="profil utilisateur"
        className={`rounded-full object-cover`}
      />
    )
  )
};

export default PictureUser;
