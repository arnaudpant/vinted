import React from 'react';

const PictureUser: React.FC = () => {
  const TEMPORARTY_URL_USER_PROFIL =
    'https://images1.vinted.net/t/02_00514_8QLyUXiteDVeeR65N9Uk84cV/f800/1605210680.jpeg?s=8f38896562c9157376cf4ae4b2f4bac1c871a939';
  return (
    <img
      src={TEMPORARTY_URL_USER_PROFIL}
      alt="profil utilisateur"
      className="h-6 w-6 rounded-full"
    />
  );
};

export default PictureUser;
