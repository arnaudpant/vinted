import PictureUser from './PictureUser';
import NoPictureUser from './NoPictureUser';

import { FakeUser } from '@/types/types';

const UserBanner: React.FC<{ user: FakeUser }> = ({ user }) => {
  return (
    <div className="flex flex-row  justify-start  py-1 ml-2 cursor-pointer">
      <a className="flex flex-row flex-nowrap">
        <span className="mr-2">
          {user.avatar ? (
            <PictureUser avatarUser={user.avatar} />
          ) : (
            <NoPictureUser userName={user.name} />
          )}
        </span>
        <span>{user.name}</span>
      </a>
    </div>
  );
};

export default UserBanner;
