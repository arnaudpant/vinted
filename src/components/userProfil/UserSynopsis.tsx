import UserContext from '@/context/UserContext';
import { UserInterface } from '@/types/types';
import React, { useContext } from 'react';
import UserNoteStars from '../UserNoteStars';
import UserInfos from './UserInfos';
import PictureUser from '../PictureUser';
import ButtonModifyProfile from './ButtonModifyProfile';

const UserSynopsis: React.FC = () => {
  const user: UserInterface = useContext(UserContext);

  return (
    <div className="mb-16 hidden justify-center space-x-8 sm:flex md:flex md:justify-around">
      <PictureUser avatarUser={user.userDocument?.photoURL} pictureSize={200} />
      <div>
        <h1 className="font-semibold">{user.displayName ?? 'Vinted'}</h1>
        <div className="flex space-x-2">
          <UserNoteStars note={3} />
          <span>500 évaluations</span>
        </div>
        <UserInfos />
        <div className=" hidden md:block lg:hidden ">
          <ButtonModifyProfile />
        </div>
      </div>
      <div className=" hidden lg:block">
        <ButtonModifyProfile />
      </div>
    </div>
  );
};

export default UserSynopsis;
