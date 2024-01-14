import React, { useState } from 'react';
import NoPictureUser from './NoPictureUser';

const PictureUser: React.FC<{
  avatarUser: string;
}> = ({ avatarUser }) => {
  const [isLoaded, setIdLoaded] = useState(true);
  const avatarDisplay = isLoaded ? avatarUser : '';
  return isLoaded ? (
    <img
      src={avatarDisplay}
      alt="profil utilisateur"
      className="h-6 w-6 rounded-full"
      onError={() => setIdLoaded(false)}
    />
  ) : (
    <NoPictureUser name />
  );
};

export default PictureUser;
