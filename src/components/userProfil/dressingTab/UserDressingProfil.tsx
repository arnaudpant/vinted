import ArticlesAvailablesBySeller from '@/components/ArticlesAvailables/ArticlesAvailablesBySeller';
import React from 'react';
import ButtonsContact from './ButtonsContact';
import UserDressingInfos from './UserDressingInfos';
import UserReview from './UserReview';

const UserDressingProfil: React.FC = () => {
  return (
    <div className=" mt-2 flex flex-col">
      <div className="sm:hidden">
        <UserReview />
        <hr className="my-4" />
        <UserDressingInfos />
        <hr className="my-4" />
        <ButtonsContact />
        <hr className="my-4" />
      </div>
      <ArticlesAvailablesBySeller />
    </div>
  );
};

export default UserDressingProfil;
