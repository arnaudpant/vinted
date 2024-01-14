import PictureUser from './PictureUser';
import NoPictureUser from './NoPictureUser';

import { FakeUser } from '@/types/types';
import useDataFakeShop from '@/hooks/useDataFakeShop';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserBanner: React.FC<{ userId: number }> = ({ userId }) => {
  const { fakeShopUsers } = useDataFakeShop();
  const user: FakeUser = fakeShopUsers[userId];

  const [isAvatarUserLoaded, setIsAvatarUserLoaded] = useState(true);

  const handleLoadingAvatarUser = () => {
    setIsAvatarUserLoaded(false);
  };

  if (!user) {
    return;
  }
  return (
    <div className="flex flex-row  justify-start  py-1 ml-2 cursor-pointer">
      <Link
        to="/"
        className="flex flex-row flex-nowrap"
        onError={handleLoadingAvatarUser}
      >
        <span className="mr-2">
          {isAvatarUserLoaded ? (
            <img
              src={user.avatar}
              alt="profil utilisateur"
              className="h-6 w-6 rounded-full"
            />
          ) : (
            <NoPictureUser userName={user.name} />
          )}
        </span>
        <span>{user.name}</span>
      </Link>
    </div>
  );
};

export default UserBanner;
