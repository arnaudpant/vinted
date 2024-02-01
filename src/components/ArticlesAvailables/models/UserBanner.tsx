import useDataFakeShop from '@/hooks/useDataFakeShop';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NoPictureUser from './NoPictureUser';
import PictureUser from './PictureUser';

const UserBanner: React.FC<{ userId: number }> = ({ userId }) => {
  const { getUserFakeShop, fakeShopUser } = useDataFakeShop();

  useEffect(() => {
    getUserFakeShop(Number(userId));
  }, [userId]);

  const [isAvatarUserLoaded, setIsAvatarUserLoaded] = useState(true);

  const handleLoadingAvatarUser = () => {
    setIsAvatarUserLoaded(false);
  };

  if (!fakeShopUser) {
    return;
  }
  return (
    <div className="ml-2 flex  cursor-pointer  flex-row justify-start py-1">
      <Link
        to="/"
        className="flex flex-row flex-nowrap"
        onError={handleLoadingAvatarUser}
      >
        <span className="mr-2">
          {isAvatarUserLoaded ? (
            <PictureUser avatarUser={fakeShopUser.avatar} />
          ) : (
            <NoPictureUser userName={fakeShopUser.name} />
          )}
        </span>
        <span>{fakeShopUser.name}</span>
      </Link>
    </div>
  );
};

export default UserBanner;
