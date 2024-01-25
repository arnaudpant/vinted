import React from 'react';
import ButtonContact from '../dressingTab/ButtonContact';

const UserAboutContactButtons = () => {
  return (
    <div className="flex justify-around">
      <ButtonContact backgroundColor="" textColor="">
        Contacter
      </ButtonContact>
      <ButtonContact backgroundColor="bg-vintedGreen" textColor="text-white">
        Suivre
      </ButtonContact>
    </div>
  );
};

export default UserAboutContactButtons;
