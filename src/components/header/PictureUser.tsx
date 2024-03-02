type Props = {
  photoUrl: string | undefined;
  pictureSize: number;
}

const PictureUser = ({ photoUrl = "", pictureSize }: Props) => {

  return (
    photoUrl === '' ? (
      <img
        src="./avatar.png"
        alt="profil"
        className="rounded-full"
        style={{ height: pictureSize, width: pictureSize }}
      />
    ) : (
      <img
        src={photoUrl}
        alt="profil utilisateur"
        className={`rounded-full object-cover`}
        style={{ height: pictureSize, width: pictureSize }}
      />
    )
  )
};

export default PictureUser;
