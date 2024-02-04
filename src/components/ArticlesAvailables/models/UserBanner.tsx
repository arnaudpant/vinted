import useFirebaseAuth from '@/hooks/useFirebaseAuth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PictureUser from '../../PictureUser';
import NoPictureUser from './NoPictureUser';

const UserBanner: React.FC = () => {
  const { authUser } = useFirebaseAuth();

  const [isAvatarUserLoaded, setIsAvatarUserLoaded] = useState(true);

  const handleLoadingAvatarUser = () => {
    setIsAvatarUserLoaded(false);
  };

  if (!authUser) {
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
            <PictureUser
              avatarUser={authUser.userDocument?.photoURL ?? ''}
              pictureSize={24}
            />
          ) : (
            <NoPictureUser userName={authUser.displayName ?? 'Vinted'} />
          )}
        </span>
        <span>{authUser.displayName ?? 'Vinted'}</span>
      </Link>
    </div>
  );
};

export default UserBanner;
