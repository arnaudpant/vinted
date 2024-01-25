import React from 'react';

const UserSynopsis: React.FC<{
  fakeUser: object;
  fakeUserStatistic: object;
}> = ({ fakeUser, fakeUserStatistic }) => {
  if (!fakeUser) return;
  return (
    <div className="hidden  sm:grid sm:grid-cols-2 ">
      <img
        src={fakeUser.avatar}
        alt="avatar"
        className="h-64 w-auto rounded-full"
      />
      <></>
    </div>
  );
};

export default UserSynopsis;
