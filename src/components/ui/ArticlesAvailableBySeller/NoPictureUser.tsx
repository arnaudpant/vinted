import React from 'react';

const NoPictureUser: React.FC<{ userName: string }> = ({
  userName = 'defaultName',
}) => {
  return (
    <span className=" bg-vintedGreen h-6 w-6 rounded-full flex justify-center items-center p-1 text-white ">
      {userName.charAt(0).toUpperCase()}
    </span>
  );
};

export default NoPictureUser;
