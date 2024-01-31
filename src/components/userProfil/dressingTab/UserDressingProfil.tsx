import React from 'react';
import ButtonContact from './ButtonContact';
import UserDressingInfos from './UserDressingInfos';
import UserReview from './UserReview';
import { FakeUserWithStatistic } from '@/types/types';
import ArticlesAvailablesBySeller from '@/components/ArticlesAvailables/ArticlesAvailablesBySeller';

const UserDressingProfil: React.FC<{
  userWithStatistics: FakeUserWithStatistic;
}> = ({ userWithStatistics }) => {
  return (
    <div className=" mt-2 flex flex-col">
      <UserReview userWithStatistics={userWithStatistics} />
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
      <ArticlesAvailablesBySeller userId={userWithStatistics.id} />
    </div>
  );
};

export default UserDressingProfil;
