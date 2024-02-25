import React from 'react';
import ButtonsContact from '../models/ButtonsContact';
import UserAboutDescription from './UserAboutDescription';
import UserAboutDetails from './UserAboutDetails';
import UserAboutInfos from './UserAboutInfos';
import UserAboutStatistics from './UserAboutStatistics';

const UserAboutTab: React.FC = () => {
  return (
    <div className="mx-4">
      <UserAboutDescription />
      <hr className="my-4" />
      <UserAboutStatistics />
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
