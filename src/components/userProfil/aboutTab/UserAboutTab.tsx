import { FakeUserWithStatistic } from '@/types/types';
import React from 'react';
import ButtonsContact from '../dressingTab/ButtonsContact';
import UserAboutDescription from './UserAboutDescription';
import UserAboutDetails from './UserAboutDetails';
import UserAboutInfos from './UserAboutInfos';
import UserAboutStatistics from './UserAboutStatistics';

const UserAboutTab: React.FC<{ userWithStatistics: FakeUserWithStatistic }> = ({
  userWithStatistics,
}) => {
  return (
    <div className="mx-4">
      <UserAboutDescription userWithStatistics={userWithStatistics} />
      <hr className="my-4" />
      <UserAboutStatistics userWithStatistics={userWithStatistics} />
      <hr className="my-4" />
      <UserAboutInfos />
      <hr className="my-4" />
      <UserAboutDetails />
      <hr className="my-4" />
      <ButtonsContact />
      <hr className="my-4" />
    </div>
  );
};

export default UserAboutTab;
