import React from 'react';

const NoPictureUser: React.FC<{ userName: string }> = ({
  userName = 'defaultName',
}) => {
  return (
    <span className=" flex h-6 w-6 items-center justify-center rounded-full bg-vintedGreen p-1 text-white ">
      {userName.charAt(0).toUpperCase()}
    </span>
  );
};

export default NoPictureUser;
