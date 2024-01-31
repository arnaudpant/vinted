import React from 'react';

const PictureUser: React.FC<{
  avatarUser: string;
}> = ({ avatarUser }) => {
  return (
    <img
      src={avatarUser}
      alt="profil utilisateur"
      className="h-6 w-6 rounded-full"
    />
  );
};

export default PictureUser;
