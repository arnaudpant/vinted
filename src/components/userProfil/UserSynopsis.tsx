import { FakeUserWithStatistic } from '@/types/types';
import React from 'react';
import UserNoteStars from '../UserNoteStars';
import UserInfos from './UserInfosLine';
import ButtonsContact from './dressingTab/ButtonsContact';

const UserSynopsis: React.FC<{
  userWithStatistics: FakeUserWithStatistic;
}> = ({ userWithStatistics }) => {
  if (!userWithStatistics) return;
  return (
    <div className="mb-16 hidden justify-center space-x-8 sm:flex md:flex md:justify-around">
      <img
        src={userWithStatistics.avatar}
        alt="avatar"
        className="h-48 w-48 rounded-full object-cover"
      />
      <div>
        <h1 className="font-semibold">{userWithStatistics.name}</h1>
        <div className="flex space-x-2">
          <UserNoteStars note={userWithStatistics.starsRating} />
          <span>{userWithStatistics.numberOfReviews} évaluations</span>
        </div>
        <UserInfos />
        <div className=" hidden md:block lg:hidden ">
          <ButtonsContact />
        </div>
      </div>
      <div className=" hidden lg:block">
        <ButtonsContact />
      </div>
    </div>
  );
};

export default UserSynopsis;
