import React from 'react';
import ButtonContact from './ButtonContact';
import UserDressingInfos from './UserDressingInfos';
import UserReview from './UserReview';

const UserDressingProfil: React.FC<{
  fakeUser: object;
  fakeUserStatistic: object;
}> = ({ fakeUser, fakeUserStatistic }) => {
  return (
    <div className="mx-4 flex flex-col mt-2">
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
    </div>
  );
};

export default UserDressingProfil;