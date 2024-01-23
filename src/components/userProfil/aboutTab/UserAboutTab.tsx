import React from 'react';
import UserAboutDescription from './UserAboutDescription';
import UserAboutStatistics from './UserAboutStatistics';
import { User } from 'lucide-react';
import UserAboutInfos from './UserAboutInfos';

const UserAboutTab: React.FC<{ fakeUser: object }> = ({ fakeUser }) => {
  return (
    <div className="mx-4">
      <UserAboutDescription fakeUser={fakeUser} />
      <hr className="my-4" />
      <UserAboutStatistics />
      <hr className="my-4" />
      <UserAboutInfos />
    </div>
  );
};

export default UserAboutTab;
