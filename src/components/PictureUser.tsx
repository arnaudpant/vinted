import React from 'react';

const PictureUser: React.FC<{
  avatarUser?: string;
  pictureSize: number;
}> = ({ avatarUser, pictureSize }) => {
  if (!avatarUser)
    return (
      <img
        src="./avatar.png"
        alt="profil"
        className="rounded-full"
        style={{ height: pictureSize, width: pictureSize }}
      />
    );
  return (
    <img
      src={avatarUser}
      alt="profil utilisateur"
      className={`rounded-full object-cover`}
      style={{ height: pictureSize, width: pictureSize }}
    />
  );
};

export default PictureUser;
