import React from 'react';
import ButtonContact from './ButtonContact';
import UserDressingInfos from './UserDressingInfos';
import UserReview from './UserReview';

const UserDressingProfil: React.FC<{
  fakeUser: object;
  fakeUserStatistic: object;
}> = ({ fakeUser, fakeUserStatistic }) => {
  return (
    <div className=" mt-2 flex flex-col">
      <UserReview fakeUser={fakeUser} fakeUserStatistic={fakeUserStatistic} />
      <hr className="my-4" />
      <UserDressingInfos />
      <hr className="my-4" />
      <div className="flex flex-row justify-around  ">
        <ButtonContact backgroundColor="bg-white" textColor="text-vintedGreen">
          Contacter
        </ButtonContact>
        <ButtonContact backgroundColor="bg-vintedGreen" textColor="text-white">
          Suivre
        </ButtonContact>
        <hr className="my-4" />
      </div>
      <p>Liste des articles à acheter etc...</p>
    </div>
  );
};

export default UserDressingProfil;
