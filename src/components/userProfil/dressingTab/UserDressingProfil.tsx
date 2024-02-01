import ArticlesAvailablesBySeller from '@/components/ArticlesAvailables/ArticlesAvailablesBySeller';
import { FakeUserWithStatistic } from '@/types/types';
import React from 'react';
import ButtonsContact from './ButtonsContact';
import UserDressingInfos from './UserDressingInfos';
import UserReview from './UserReview';

const UserDressingProfil: React.FC<{
  userWithStatistics: FakeUserWithStatistic;
}> = ({ userWithStatistics }) => {
  return (
    <div className=" mt-2 flex flex-col">
      <div className="sm:hidden">
        <UserReview userWithStatistics={userWithStatistics} />
        <hr className="my-4" />
        <UserDressingInfos />
        <hr className="my-4" />
        <ButtonsContact />
        <hr className="my-4" />
      </div>
      <ArticlesAvailablesBySeller userId={userWithStatistics.id} />
    </div>
  );
};

export default UserDressingProfil;
