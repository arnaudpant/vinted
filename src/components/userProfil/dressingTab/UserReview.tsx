import PictureUser from '@/components/PictureUser';
import UserNoteStars from '@/components/UserNoteStars';
import UserContext from '@/context/UserContext';
import { UserInterface } from '@/types/types';
import { useContext } from 'react';

const UserReview: React.FC = () => {
  const user: UserInterface = useContext(UserContext);
  return (
    <div className="flex items-center space-x-3">
      <PictureUser
        avatarUser={user.userDocument?.photoURL ?? ''}
        pictureSize={24}
      />

      <div className="w-fit leading-tight">
        <h1>{user.displayName}</h1>
        <div className="flex">
          <UserNoteStars note={3} />

          <span className="ml-2">200 avis</span>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
