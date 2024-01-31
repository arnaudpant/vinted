import React from 'react';
import UserAboutDescription from './UserAboutDescription';
import UserAboutStatistics from './UserAboutStatistics';
import UserAboutInfos from './UserAboutInfos';
import UserAboutDetails from './UserAboutDetails';
import UserAboutContactButtons from './UserAboutContactButtons';
import { FakeUserWithStatistic } from '@/types/types';

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
      <UserAboutContactButtons />
      <hr className="my-4" />
    </div>
  );
};

export default UserAboutTab;
