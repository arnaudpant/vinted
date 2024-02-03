import { CircleUserRound } from 'lucide-react';
import React from 'react';

const PictureUser: React.FC<{
  avatarUser: string;
  pictureSize: number;
}> = ({ avatarUser, pictureSize }) => {
  if (!avatarUser) return <CircleUserRound size={pictureSize} color="green" />;
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
