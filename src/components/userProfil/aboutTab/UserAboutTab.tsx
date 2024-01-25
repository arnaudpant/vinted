import React from 'react';
import UserAboutDescription from './UserAboutDescription';
import UserAboutStatistics from './UserAboutStatistics';
import UserAboutInfos from './UserAboutInfos';
import UserAboutDetails from './UserAboutDetails';
import UserAboutContactButtons from './UserAboutContactButtons';

const UserAboutTab: React.FC<{ fakeUser: object }> = ({ fakeUser }) => {
  return (
    <div className="mx-4">
      <UserAboutDescription fakeUser={fakeUser} />
      <hr className="my-4" />
      <UserAboutStatistics />
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
